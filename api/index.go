package api

import (
	"embed"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed all:static
var staticFiles embed.FS

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

	// 1. Serve Blog requests (/blog/...)
	if strings.HasPrefix(reqPath, "/blog/") {
		// Strip /blog/ prefix and serve from static/blog
		blogFS, err := fs.Sub(staticFiles, "static/blog")
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// Rewrite path for file server: /blog/foo -> /foo
		r.URL.Path = strings.TrimPrefix(reqPath, "/blog")
		if r.URL.Path == "" {
			r.URL.Path = "/"
		}
		http.FileServer(http.FS(blogFS)).ServeHTTP(w, r)
		return
	}

	// 2. Serve Portfolio requests (SPA)
	// Serve from static/portfolio
	portfolioFS, err := fs.Sub(staticFiles, "static/portfolio")
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Check if file exists in portfolio fs
	// If not, serve index.html (SPA Fallback)
	// fs.Sub returns an fs.FS. We use fs.Stat or fs.Open to check existence.
	f, err := portfolioFS.Open(strings.TrimPrefix(reqPath, "/"))
	if err == nil {
		// File exists
		f.Close()
		http.FileServer(http.FS(portfolioFS)).ServeHTTP(w, r)
	} else {
		// File not found, serve index.html
		content, err := fs.ReadFile(portfolioFS, "index.html")
		if err != nil {
			// If index.html is missing, something is wrong with build
			http.Error(w, "Not Found", http.StatusNotFound)
			return
		}
		// Try to deduce content type
		if strings.HasSuffix(reqPath, ".css") {
			w.Header().Set("Content-Type", "text/css")
		} else if strings.HasSuffix(reqPath, ".js") {
			w.Header().Set("Content-Type", "application/javascript")
		} else {
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
		}
		w.Write(content)
	}
}
