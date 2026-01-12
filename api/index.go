package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
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

	// Helper to serve files from disk (instead of embed)
	// We assume "api/static" or "static" is available relative to the working directory or root
	serveFile := func(fsPath string, fallback string) {
		// Check local relative path first (common in Vercel)
		// Try combinations of paths since Vercel Lambda CWD can vary
		candidates := []string{
			filepath.Join("api", "static", fsPath), // Monorepo structure
			filepath.Join("static", fsPath),        // Configured includeFiles
			fsPath,                                 // Direct relative
		}

		var finalPath string
		found := false
		for _, p := range candidates {
			if info, err := os.Stat(p); err == nil && !info.IsDir() {
				finalPath = p
				found = true
				break
			}
		}

		if !found {
			if fallback != "" {
				// Try finding fallback
				for _, p := range candidates {
					// Replace filename in p with fallback filename
					dir := filepath.Dir(p)
					fbPath := filepath.Join(dir, filepath.Base(fallback))
					if info, err := os.Stat(fbPath); err == nil && !info.IsDir() {
						finalPath = fbPath
						found = true
						break
					}
				}
			}
		}

		if !found {
			// Debug: file not found, list directory to help diagnosis
			w.Header().Set("Content-Type", "text/plain")
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(w, "404 Not Found: %s\n", fsPath)
			fmt.Fprintf(w, "CWD: %s\n", getCwd())
			fmt.Fprintf(w, "Tried: %v\n", candidates)
			return
		}

		http.ServeFile(w, r, finalPath)
	}

	// 1. Serve Blog requests (/blog or /blog/...)
	if reqPath == "/blog" || strings.HasPrefix(reqPath, "/blog/") {
		relPath := strings.TrimPrefix(reqPath, "/blog")
		if relPath == "" || relPath == "/" {
			relPath = "/index.html"
		}
		// Blog is in static/blog
		// Remove leading slash from relPath for filepath.Join to work consistently as relative
		relPath = strings.TrimPrefix(relPath, "/")
		serveFile(filepath.Join("blog", relPath), filepath.Join("blog", "index.html"))
		return
	}

	// 2. Serve Portfolio requests (SPA)
	relPath := strings.TrimPrefix(reqPath, "/")
	if relPath == "" {
		relPath = "index.html"
	}
	// Portfolio is in static/portfolio
	// Use index.html as fallback for SPA routing
	serveFile(filepath.Join("portfolio", relPath), filepath.Join("portfolio", "index.html"))
}

func getCwd() string {
	d, _ := os.Getwd()
	return d
}
