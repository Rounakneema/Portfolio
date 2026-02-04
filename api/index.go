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
	serveAsset := func(assetPath string) {
		// Normalizing path separator to forward slash for map lookup
		assetPath = strings.TrimPrefix(assetPath, "/")
		if assetPath == "" {
			assetPath = "index.html"
		}
		
		assetPath = strings.ReplaceAll(assetPath, "\\", "/")
		
		content, ok := assets.Assets[assetPath]
		if !ok {
			// Try adding /index.html (standard Clean URL behavior for Next.js trailingSlash: true)
			dirIndex := strings.TrimSuffix(assetPath, "/") + "/index.html"
			// Check if dirIndex starts with slash, remove it if so
			dirIndex = strings.TrimPrefix(dirIndex, "/")
			
			content, ok = assets.Assets[dirIndex]
			if ok {
				assetPath = dirIndex
			}
		}

		if !ok {
			// Fallback to 404.html if it exists
			if _, ok404 := assets.Assets["404.html"]; ok404 {
				assetPath = "404.html"
				content = assets.Assets[assetPath]
				w.WriteHeader(http.StatusNotFound)
			} else {
				w.Header().Set("Content-Type", "text/plain")
				w.WriteHeader(http.StatusNotFound)
				fmt.Fprintf(w, "404 Not Found: %s\n", r.URL.Path)
				return
			}
		}

		// Determine Content-Type
		ext := filepath.Ext(assetPath)
		ctype := mime.TypeByExtension(ext)
		if ctype == "" {
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

	serveAsset(reqPath)
}
