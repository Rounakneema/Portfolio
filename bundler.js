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

var projectSubdomains = map[string]string{
	"revealr":       "revealr",
	"metromind":     "metromind",
	"osa":           "osa",
	"sortmail":      "sortmail",
	"spqr":          "spqr",
	"pipelineforge": "pipelineforge",
	"devcontext":    "devcontext",
	"axiomos":       "axiomos",
	"axiom-os":      "axiomos",
	"dizzy":         "dizzy",
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.WriteHeader(http.StatusNoContent)
		return
	}
\tw.Header().Set("X-Content-Type-Options", "nosniff")
\tw.Header().Set("X-Frame-Options", "DENY")
\tw.Header().Set("X-XSS-Protection", "1; mode=block")
\tw.Header().Set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data:; img-src 'self' data: https:; font-src 'self' https: data:;")
\tw.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

\treqPath := r.URL.Path

\t// --- Subdomain routing ---
\thost := r.Host
\tif idx := strings.LastIndex(host, ":"); idx != -1 {
\t\thost = host[:idx]
\t}
\tparts := strings.SplitN(host, ".", 2)
\tif len(parts) == 2 {
\t\tsubdomain := strings.ToLower(parts[0])
\t\tif slug, ok := projectSubdomains[subdomain]; ok {
\t\t\tif strings.HasSuffix(reqPath, ".txt") || strings.HasSuffix(reqPath, ".xml") {
\t\t\t\t// Serve verification and sitemap files directly
\t\t\t} else {
\t\t\t\thttp.Redirect(w, r, "https://rounakneema.in/projects/"+slug, http.StatusFound)
\t\t\t\treturn
\t\t\t}
\t\t}
\t}

	serveAsset := func(assetPath string) {
		assetPath = strings.TrimPrefix(strings.ReplaceAll(assetPath, "\\", "/"), "/")
		if assetPath == "" {
			assetPath = "index.html"
		}

		cleanPath := strings.TrimSuffix(assetPath, "/")

		// 1. Direct match (e.g. static assets, images, txt files, exact filenames)
		content, ok := assets[cleanPath]
		if ok {
			assetPath = cleanPath
		}

		// 2. Clean URL match with .html extension (e.g. /projects -> projects.html, /projects/revealr -> projects/revealr.html)
		if !ok {
			htmlPath := cleanPath + ".html"
			content, ok = assets[htmlPath]
			if ok {
				assetPath = htmlPath
			}
		}

		// 3. Directory index fallback (e.g. /portfolio/ -> portfolio/index.html)
		if !ok {
			dirIndex := cleanPath + "/index.html"
			content, ok = assets[strings.TrimPrefix(dirIndex, "/")]
			if ok {
				assetPath = dirIndex
			}
		}

		// 4. Sub-app SPA fallback
		if !ok {
			if strings.HasPrefix(reqPath, "/portfolio/") || reqPath == "/portfolio" {
				assetPath = "portfolio/index.html"
				content, ok = assets[assetPath]
			} else if strings.HasPrefix(reqPath, "/blog/") || reqPath == "/blog" {
				assetPath = "blog/index.html"
				content, ok = assets[assetPath]
			}
		}

		// 5. 404 Not Found (genuine HTTP 404 status code)
		if !ok {
			if notFound, exists := assets["404.html"]; exists {
				w.Header().Set("Content-Type", "text/html; charset=utf-8")
				w.WriteHeader(http.StatusNotFound)
				w.Write(notFound)
			} else {
				w.Header().Set("Content-Type", "text/plain; charset=utf-8")
				w.WriteHeader(http.StatusNotFound)
				fmt.Fprintf(w, "404 Not Found: %s\\n", r.URL.Path)
			}
			return
		}

		ext := filepath.Ext(assetPath)
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
		if ext == ".txt" || ext == ".json" {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		}
\t\thttp.ServeContent(w, r, assetPath, time.Now(), bytes.NewReader(content))
\t}

\tserveAsset(reqPath)
}
`;

fs.writeFileSync(outputFile, goContent);
console.log(`Successfully generated ${outputFile} with ${files.length} assets.`);

