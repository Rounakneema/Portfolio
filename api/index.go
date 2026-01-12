package handler

import (
	"bytes"
	"fmt"
	"mime"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"handler/assets"
)

// Handler is the entry point for Vercel Serverless Functions
func Handler(w http.ResponseWriter, r *http.Request) {
	// Add Security Headers
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "DENY")
	w.Header().Set("X-XSS-Protection", "1; mode=block")
	w.Header().Set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data:; img-src 'self' data: https:; font-src 'self' https: data:;")
	w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")

	// Determine request path
	reqPath := r.URL.Path

	// Helper to serve files from In-Memory Assets map
	serveAsset := func(assetPath string, fallback string) {
		// Normalizing path separator to forward slash for map lookup
		assetPath = strings.ReplaceAll(assetPath, "\\", "/")
		
		content, ok := assets.Assets[assetPath]
		if !ok {
			// Try fallback
			if fallback != "" {
				fallback = strings.ReplaceAll(fallback, "\\", "/")
				content, ok = assets.Assets[fallback]
			}
		}

		if !ok {
			w.Header().Set("Content-Type", "text/plain")
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(w, "404 Not Found: %s\n", assetPath)
			// Debug: List available keys if not found (optional, maybe unsafe for prod but good for debugging)
			// fmt.Fprintf(w, "Available: %v\n", reflect.ValueOf(Assets).MapKeys())
			return
		}

		// Determine Content-Type
		ext := filepath.Ext(assetPath)
		ctype := mime.TypeByExtension(ext)
		if ctype == "" {
			// specific overrides if mime package fails (common in slim environments)
			if ext == ".css" {
				ctype = "text/css"
			} else if ext == ".js" {
				ctype = "application/javascript"
			} else if ext == ".html" {
				ctype = "text/html"
			} else if ext == ".svg" {
				ctype = "image/svg+xml"
			} else {
				ctype = "application/octet-stream"
			}
		}
		w.Header().Set("Content-Type", ctype)
		http.ServeContent(w, r, assetPath, time.Now(), bytes.NewReader(content))
	}

	// 1. Serve Blog requests (/blog or /blog/...)
	if reqPath == "/blog" || strings.HasPrefix(reqPath, "/blog/") {
		relPath := strings.TrimPrefix(reqPath, "/blog")
		if relPath == "" || relPath == "/" {
			relPath = "index.html"
		}
		relPath = strings.TrimPrefix(relPath, "/")
		
		// Map to "blog/..."
		serveAsset("blog/"+relPath, "blog/index.html")
		return
	}

	// 2. Serve Portfolio requests (SPA)
	relPath := strings.TrimPrefix(reqPath, "/")
	if relPath == "" {
		relPath = "index.html"
	}
	// Map to "portfolio/..."
	serveAsset("portfolio/"+relPath, "portfolio/index.html")
}
