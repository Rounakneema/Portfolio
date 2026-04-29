const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'api', 'static');
const outputFile = path.join(__dirname, 'api', 'index.go');

const walkSync = (dir, filelist = []) => {
    for (const file of fs.readdirSync(dir)) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            filelist.push(filepath);
        }
    }
    return filelist;
};

console.log(`Bundling assets from ${inputDir} into ${outputFile}...`);

if (!fs.existsSync(inputDir)) {
    console.error(`Error: ${inputDir} does not exist.`);
    process.exit(1);
}

const files = walkSync(inputDir);

// Build the assets map literal
let assetsMap = '';
for (const file of files) {
    const relativePath = path.relative(inputDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file);
    const bytes = Array.from(content).map(b => '0x' + b.toString(16)).join(',');
    assetsMap += `\t"${relativePath}": {${bytes}},\n`;
    console.log(`Bundled: ${relativePath} (${content.length} bytes)`);
}

// Generate the complete index.go with handler logic + embedded bytes
const goContent = `package handler

import (
\t"bytes"
\t"fmt"
\t"mime"
\t"net/http"
\t"path/filepath"
\t"strings"
\t"time"
)

var assets = map[string][]byte{
${assetsMap}}

func Handler(w http.ResponseWriter, r *http.Request) {
\tw.Header().Set("X-Content-Type-Options", "nosniff")
\tw.Header().Set("X-Frame-Options", "DENY")
\tw.Header().Set("X-XSS-Protection", "1; mode=block")
\tw.Header().Set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data:; img-src 'self' data: https:; font-src 'self' https: data:;")
\tw.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

\treqPath := r.URL.Path

\tserveAsset := func(assetPath string) {
\t\tassetPath = strings.TrimPrefix(strings.ReplaceAll(assetPath, "\\\\", "/"), "/")
\t\tif assetPath == "" {
\t\t\tassetPath = "index.html"
\t\t}

\t\tcontent, ok := assets[assetPath]
\t\tif !ok {
\t\t\tdirIndex := strings.TrimSuffix(assetPath, "/") + "/index.html"
\t\t\tcontent, ok = assets[strings.TrimPrefix(dirIndex, "/")]
\t\t\tif ok {
\t\t\t\tassetPath = dirIndex
\t\t\t}
\t\t}

\t\tif !ok {
\t\t\tif strings.HasPrefix(reqPath, "/portfolio/") {
\t\t\t\tassetPath = "portfolio/index.html"
\t\t\t\tcontent, ok = assets[assetPath]
\t\t\t} else if strings.HasPrefix(reqPath, "/blog/") {
\t\t\t\tassetPath = "blog/index.html"
\t\t\t\tcontent, ok = assets[assetPath]
\t\t\t}
\t\t}

\t\tif !ok {
\t\t\tif notFound, exists := assets["404.html"]; exists {
\t\t\t\tw.WriteHeader(http.StatusNotFound)
\t\t\t\tw.Header().Set("Content-Type", "text/html")
\t\t\t\thttp.ServeContent(w, r, "404.html", time.Now(), bytes.NewReader(notFound))
\t\t\t} else {
\t\t\t\tw.Header().Set("Content-Type", "text/plain")
\t\t\t\tw.WriteHeader(http.StatusNotFound)
\t\t\t\tfmt.Fprintf(w, "404 Not Found: %s\\n", r.URL.Path)
\t\t\t}
\t\t\treturn
\t\t}

\t\text := filepath.Ext(assetPath)
\t\tctype := mime.TypeByExtension(ext)
\t\tif ctype == "" {
\t\t\tswitch ext {
\t\t\tcase ".css":
\t\t\t\tctype = "text/css"
\t\t\tcase ".js":
\t\t\t\tctype = "application/javascript"
\t\t\tcase ".html":
\t\t\t\tctype = "text/html"
\t\t\tcase ".svg":
\t\t\t\tctype = "image/svg+xml"
\t\t\tdefault:
\t\t\t\tctype = "application/octet-stream"
\t\t\t}
\t\t}
\t\tw.Header().Set("Content-Type", ctype)
\t\thttp.ServeContent(w, r, assetPath, time.Now(), bytes.NewReader(content))
\t}

\tserveAsset(reqPath)
}
`;

fs.writeFileSync(outputFile, goContent);
console.log(`Successfully generated ${outputFile} with ${files.length} assets.`);
