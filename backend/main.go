package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	//"strings"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := filepath.Join(h.staticPath, r.URL.Path)

	// Check if file exists
	fi, err := os.Stat(path)
	if os.IsNotExist(err) || fi.IsDir() {
		// Serve index.html for SPA rules if file not found (history mode)
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	}

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.ServeFile(w, r, path)
}

func addSecurityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("X-Frame-Options", "DENY")
		w.Header().Set("X-XSS-Protection", "1; mode=block")
		w.Header().Set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' data:; img-src 'self' data: https:; font-src 'self' https: data:;")
		w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
		next.ServeHTTP(w, r)
	})
}

func main() {
	// Define static paths (Assuming running from root/backend)
	portfolioPath := "static/portfolio"
	blogPath := "static/blog"

	// Create Router
	mux := http.NewServeMux()

	// Handler for Portfolio (Root) - SPA
	// We wrap file server to fallback to index.html for SPA routing
	portfolioHandler := spaHandler{staticPath: portfolioPath, indexPath: "index.html"}
	mux.Handle("/", http.StripPrefix("/", portfolioHandler))

	// Handler for Blog (Subpath) - Static Export
	// Next.js static export produces .html files.
	// We serve the directory directly.
	fs := http.FileServer(http.Dir(blogPath))
	mux.Handle("/blog/", http.StripPrefix("/blog/", fs))

	// Middleware
	handler := addSecurityHeaders(mux)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	// Add colon if missing
	if port[0] != ':' {
		port = ":" + port
	}

	log.Printf("Starting secure server on http://localhost%s", port)
	log.Printf("Serving Portfolio from: %s", portfolioPath)
	log.Printf("Serving Blog from: %s", blogPath)

	if err := http.ListenAndServe(port, handler); err != nil {
		log.Fatal(err)
	}
}
