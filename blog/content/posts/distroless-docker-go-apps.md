---
title: "Why We Migrated to Distroless Containers for Go Microservices"
date: "2025-02-04"
tags: ["Go", "Docker", "Architecture", "Security"]
excerpt: "Dropping Alpine Linux for distroless scratch images reduced our attack surface and shrank deployment payloads by 99%."
---

When building Docker images for Go applications, developers historically defaulted to Alpine Linux. Alpine is small, fast, and familiar. However, bundling a full Linux distribution—even a lightweight one—inside a container designed to run a statically compiled binary introduces unnecessary risks and bloat.

We migrated the entire MetroMind microservice architecture from Alpine-based images to Google's Distroless (gcr.io/distroless/static) and FROM scratch containers. This single architectural decision shrank our image sizes from ~300MB to under 10MB and eliminated entire classes of vulnerabilities.

## The Alpine Tax

A standard Go Dockerfile usually looks like this:

`dockerfile
FROM golang:1.21 AS builder
WORKDIR /src
COPY . .
RUN go build -o myapp main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /src/myapp .
CMD ["./myapp"]
`

While lpine:latest adds only ~5MB, it ships with a package manager (pk), a shell (/bin/sh), and standard GNU utilities. If an attacker achieves remote code execution (RCE) in your application, they land in an environment equipped with the tools necessary to download payloads, map the network, and pivot. 

Furthermore, security scanners regularly flag Alpine base images for CVEs in standard libraries. Managing these OS-level vulnerabilities wastes engineering time when the application itself does not require an OS userland.

## Moving to Distroless

Go binaries compile statically. They contain their own runtime and do not require external dependencies like libc unless you specifically link C libraries using CGO.

By disabling CGO during the build phase, we generate a standalone binary that runs directly on the Linux kernel without an OS abstraction layer.

`dockerfile
FROM golang:1.21 AS builder
WORKDIR /src
COPY . .
# Disable CGO for a fully static binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o myapp main.go

# Use a distroless base
FROM gcr.io/distroless/static-debian12:latest
COPY --from=builder /src/myapp /
CMD ["/myapp"]
`

The distroless image contains only the absolute minimum required to run the binary: CA certificates for HTTPS requests, time zone data, and a non-root user. It lacks a shell. It lacks a package manager. If an attacker exploits the application, they cannot easily execute secondary commands because /bin/sh does not exist.

## The FROM scratch Alternative

For microservices that do not require outbound HTTPS requests (which require CA certificates) or timezone handling, we build directly FROM scratch.

`dockerfile
FROM scratch
COPY --from=builder /src/myapp /myapp
ENTRYPOINT ["/myapp"]
`

FROM scratch is an empty container. The final image size matches the exact byte size of the Go binary. 

Migrating to these ultra-minimal containers forced us to improve our observability stack. Because we can no longer docker exec -it <container> /bin/sh to debug failing pods, we must rely entirely on structured logging, metric endpoints, and distributed tracing. Removing the crutch of local container debugging ultimately produced more resilient, observable systems.
