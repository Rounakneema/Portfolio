package handler

import (
	"bytes"
	"fmt"
	"mime"
	"net/http"
	"path/filepath"
	"strings"
	"time"
)

// assets is populated by bundler.js at build time (regenerates this entire file)
var assets = map[string][]byte{}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "DENY")
	reqPath := r.URL.Path

	serveAsset := func(assetPath string) {
		assetPath = strings.TrimPrefix(strings.ReplaceAll(assetPath, "\\", "/"), "/")
		if assetPath == "" {
			assetPath = "index.html"
		}

		content, ok := assets[assetPath]
		if !ok {
			dirIndex := strings.TrimSuffix(assetPath, "/") + "/index.html"
			content, ok = assets[strings.TrimPrefix(dirIndex, "/")]
		}
		if !ok {
			if strings.HasPrefix(reqPath, "/portfolio/") {
				content, ok = assets["portfolio/index.html"]
			} else if strings.HasPrefix(reqPath, "/blog/") {
				content, ok = assets["blog/index.html"]
			}
		}
		if !ok {
			if notFound, exists := assets["404.html"]; exists {
				w.WriteHeader(http.StatusNotFound)
				w.Header().Set("Content-Type", "text/html")
				http.ServeContent(w, r, "404.html", time.Now(), bytes.NewReader(notFound))
			} else {
				w.Header().Set("Content-Type", "text/plain")
				w.WriteHeader(http.StatusNotFound)
				fmt.Fprintf(w, "404 Not Found: %s\n", r.URL.Path)
			}
			return
		}

		ext := filepath.Ext(assetPath)
		ctype := mime.TypeByExtension(ext)
		if ctype == "" {
			switch ext {
			case ".css":
				ctype = "text/css"
			case ".js":
				ctype = "application/javascript"
			case ".html":
				ctype = "text/html"
			case ".svg":
				ctype = "image/svg+xml"
			default:
				ctype = "application/octet-stream"
			}
		}
		w.Header().Set("Content-Type", ctype)
		http.ServeContent(w, r, assetPath, time.Now(), bytes.NewReader(content))
	}

	serveAsset(reqPath)
}
