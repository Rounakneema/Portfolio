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

// projectSubdomains maps subdomain prefixes to project slugs
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
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "DENY")
	reqPath := r.URL.Path

	// --- Subdomain routing ---
	host := r.Host
	// Strip port if present
	if idx := strings.LastIndex(host, ":"); idx != -1 {
		host = host[:idx]
	}
	// Extract subdomain: e.g. "revealr.rounakneema.in" → "revealr"
	parts := strings.SplitN(host, ".", 2)
	if len(parts) == 2 {
		subdomain := strings.ToLower(parts[0])
		if slug, ok := projectSubdomains[subdomain]; ok {
			// If verification key file or sitemap, serve directly without redirecting
			if strings.HasSuffix(reqPath, ".txt") || strings.HasSuffix(reqPath, ".xml") {
				serveAsset(reqPath)
				return
			}
			// Redirect to the project detail page on the main domain
			http.Redirect(w, r, "https://rounakneema.in/projects/"+slug, http.StatusFound)
			return
		}
	}

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

