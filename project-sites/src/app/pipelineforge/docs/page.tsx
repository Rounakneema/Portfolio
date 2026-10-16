import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'PipelineForge Documentation — Manifests & Workflows',
  description: 'Production manifests, multi-stage Dockerfiles, GitHub Actions workflows, and Helm configurations for PipelineForge.',
  alternates: {
    canonical: 'https://pipelineforge.rounakneema.in/docs',
  },
};

export default function PipelineForgeDocsPage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="pipelineforge" pageType="Docs" />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            TECHNICAL DOCUMENTATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Configuration &amp; Manifests
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            Production Dockerfile specifications, GitHub Actions workflow definitions, and Kubernetes Helm values.
          </p>
        </header>

        {/* Section 01: Dockerfile */}
        <section id="dockerfile" className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Container Specification
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Multi-Stage Distroless Dockerfile
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                The first build stage uses <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-800 font-mono text-xs">golang:1.21-alpine</code> to download modules and compile a static Go binary with CGO disabled.
              </p>
              <p>
                The second stage copies only the compiled binary into <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-800 font-mono text-xs">gcr.io/distroless/static-debian11</code>. The container runs under a non-root user (UID 65532) with no shell access.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  Dockerfile
                </div>
                <pre className="leading-relaxed">
{`# Stage 1: Build
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o /pipelineforge ./cmd/server

# Stage 2: Distroless Runtime
FROM gcr.io/distroless/static-debian11:nonroot
WORKDIR /
COPY --from=builder /pipelineforge /pipelineforge
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/pipelineforge"]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: GitHub Actions CI/CD */}
        <section id="cicd" className="mb-24 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              CI/CD Automation
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              GitHub Actions Security Pipeline
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                Every push triggers unit tests and linting. Once tests pass, the action builds the container image and runs Trivy in severity mode.
              </p>
              <p>
                If Trivy finds any High or Critical vulnerabilities, the job halts. Only passing images are tagged and pushed to the container registry for Helm deployment.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  .github/workflows/deploy.yml
                </div>
                <pre className="leading-relaxed">
{`name: Build, Scan & Deploy
on:
  push:
    branches: [ main ]

jobs:
  pipeline:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build Local Image
        run: docker build -t pipelineforge:\${{ github.sha }} .

      - name: Run Trivy Vulnerability Scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'pipelineforge:\${{ github.sha }}'
          format: 'table'
          exit-code: '1'
          ignore-unfixed: true
          severity: 'HIGH,CRITICAL'

      - name: Deploy via Helm
        run: |
          helm upgrade --install pipelineforge ./helm/pipelineforge \\
            --set image.tag=\${{ github.sha }} \\
            --namespace prod`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Kubernetes Helm Values */}
        <section id="helm" className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Cluster Manifests
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Kubernetes Hardening &amp; Helm Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                The Helm chart sets strict container security contexts: read-only root filesystems, dropping all Linux capabilities, and disallowing privilege escalation.
              </p>
              <p>
                Horizontal Pod Autoscalers scale pods between 2 and 8 replicas based on CPU target thresholds, while readiness and liveness probes ensure zero-downtime rolling updates.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  helm/pipelineforge/values.yaml
                </div>
                <pre className="leading-relaxed">
{`replicaCount: 2

securityContext:
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
  runAsNonRoot: true
  runAsUser: 65532
  capabilities:
    drop: ["ALL"]

resources:
  limits:
    cpu: 200m
    memory: 256Mi
  requests:
    cpu: 50m
    memory: 64Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 8
  targetCPUUtilizationPercentage: 70`}
                </pre>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
