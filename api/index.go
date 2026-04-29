package handler

import (
	"bytes"
	"embed"
	"fmt"
	"io/fs"
	"mime"
	"net/http"
	"path/filepath"
	"strings"
	"time"
)

//go:embed static
var staticFiles embed.FS

// Handler is the entry point for Vercel Serverless Functions
func Handler(w http.ResponseWriter, r *http.Request) {
	// Security Headers
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "DENY")
	w.Header().Set("X-XSS-Protection", "1; mode=block")
	w.Header().Set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data:; img-src 'self' data: https:; font-src 'self' https: data:;")
	w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

	reqPath := r.URL.Path

	serveAsset := func(assetPath string) {
		assetPath = strings.TrimPrefix(assetPath, "/")
		if assetPath == "" {
			assetPath = "index.html"
		}
		assetPath = strings.ReplaceAll(assetPath, "\\", "/")

		// Embed FS paths are prefixed with "static/"
		fsPath := "static/" + assetPath

		content, err := fs.ReadFile(staticFiles, fsPath)
		if err != nil {
			// Try /index.html (clean URL fallback)
			dirIndex := strings.TrimSuffix(fsPath, "/") + "/index.html"
			content, err = fs.ReadFile(staticFiles, dirIndex)
			if err == nil {
				assetPath = strings.TrimPrefix(dirIndex, "static/")
				fsPath = dirIndex
			}
		}

		if err != nil {
			// SPA Fallback Logic for Sub-Apps
			if strings.HasPrefix(reqPath, "/portfolio/") {
				fsPath = "static/portfolio/index.html"
				content, err = fs.ReadFile(staticFiles, fsPath)
			} else if strings.HasPrefix(reqPath, "/blog/") {
				fsPath = "static/blog/index.html"
				content, err = fs.ReadFile(staticFiles, fsPath)
			}

			// Global 404 Fallback
			if err != nil {
				notFoundContent, notFoundErr := fs.ReadFile(staticFiles, "static/404.html")
				if notFoundErr == nil {
					w.WriteHeader(http.StatusNotFound)
					ext := filepath.Ext("404.html")
					ctype := resolveMime(ext)
					w.Header().Set("Content-Type", ctype)
					http.ServeContent(w, r, "404.html", time.Now(), bytes.NewReader(notFoundContent))
				} else {
					w.Header().Set("Content-Type", "text/plain")
					w.WriteHeader(http.StatusNotFound)
					fmt.Fprintf(w, "404 Not Found: %s\n", r.URL.Path)
				}
				return
			}
		}

		ext := filepath.Ext(fsPath)
		ctype := resolveMime(ext)
		w.Header().Set("Content-Type", ctype)
		http.ServeContent(w, r, fsPath, time.Now(), bytes.NewReader(content))
	}

	serveAsset(reqPath)
}

func resolveMime(ext string) string {
	ctype := mime.TypeByExtension(ext)
	if ctype != "" {
		return ctype
	}
	switch ext {
	case ".css":
		return "text/css"
	case ".js":
		return "application/javascript"
	case ".html":
		return "text/html"
	case ".svg":
		return "image/svg+xml"
	default:
		return "application/octet-stream"
	}
}
