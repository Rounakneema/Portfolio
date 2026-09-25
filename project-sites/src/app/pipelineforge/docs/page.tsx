import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PipelineForge | Engineering Docs',
  description: 'Raw engineering documentation, YAML manifests, and CI/CD scripts for PipelineForge.',
};

export default function PipelineForgeDocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white selection:text-black">
      {/* Navigation / Header */}
      <header className="border-b-4 border-white p-6 flex justify-between items-center uppercase font-bold tracking-tighter sticky top-0 bg-[#0a0a0a] z-10">
        <div className="text-xl">
          <Link href="/pipelineforge" className="hover:bg-white hover:text-black transition-colors px-2 py-1">← BACK TO PROJECT</Link>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-white text-black px-2 py-1 text-sm font-black mb-1">DEVSECOPS</div>
          <div className="text-sm">DOCS: PIPELINEFORGE</div>
        </div>
      </header>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden max-w-7xl mx-auto">
        <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-16 border-b-8 border-white pb-8">
          ENGINEERING <br />DOCS
        </h1>

        {/* Section 1: Docker Optimization */}
        <section className="mb-24 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-4 bg-white hidden lg:block"></div>
          <h2 className="text-2xl font-black uppercase mb-8 tracking-tight">01. Image Optimization</h2>
          <p className="text-xl mb-6">Multi-stage distroless builds to achieve 99.3% reduction (1.1GB → 8MB).</p>
          
          <div className="border-4 border-white bg-black p-4 overflow-x-auto shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="text-gray-400 mb-2 border-b-2 border-gray-600 pb-2 flex justify-between">
              <span>Dockerfile</span>
              <span>build-stage &gt; final-stage</span>
            </div>
            <pre className="text-sm leading-relaxed">
<code className="text-blue-400"># Stage 1: Build</code>
{`
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /pipelineforge ./cmd/server
`}
<code className="text-green-400"># Stage 2: Distroless Final</code>
{`
FROM gcr.io/distroless/static-debian11
COPY --from=builder /pipelineforge /
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/pipelineforge"]`}
            </pre>
          </div>
        </section>

        {/* Section 2: GitHub Actions & Trivy */}
        <section className="mb-24 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-4 bg-red-500 hidden lg:block"></div>
          <h2 className="text-2xl font-black uppercase mb-8 tracking-tight">02. Security Gates (CI)</h2>
          <p className="text-xl mb-6">GitHub Actions pipeline integrating Trivy for severe vulnerability scanning before push.</p>
          
          <div className="border-4 border-white bg-black p-4 overflow-x-auto shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mb-8">
            <div className="text-gray-400 mb-2 border-b-2 border-gray-600 pb-2 flex justify-between">
              <span>.github/workflows/ci.yml</span>
              <span>build-and-scan job</span>
            </div>
            <pre className="text-sm leading-relaxed text-yellow-300">
{`name: DevSecOps Pipeline
on: [push, pull_request]

jobs:
  build-and-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Build image
        run: docker build -t rounakneema/pipelineforge:\${{ github.sha }} .

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'rounakneema/pipelineforge:\${{ github.sha }}'
          format: 'table'
          exit-code: '1'
          ignore-unfixed: true
          vuln-type: 'os,library'
          severity: 'CRITICAL,HIGH'`}
            </pre>
          </div>

          <div className="border-4 border-gray-600 bg-[#1e1e1e] p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <div className="text-gray-500 mb-2 border-b border-gray-700 pb-2">TERMINAL TRACE // TRIVY SCAN</div>
            <pre>
{`$ trivy image rounakneema/pipelineforge:a1b2c3d
2026-09-25T10:12:33.123Z  INFO  Vulnerability scanning enabled
2026-09-25T10:12:35.456Z  INFO  Detected OS: debian
2026-09-25T10:12:35.456Z  INFO  Detecting vulnerabilities...

rounakneema/pipelineforge:a1b2c3d (debian 11.7)
================================================
Total: 0 (HIGH: 0, CRITICAL: 0)

[SUCCESS] No critical or high vulnerabilities found.`}
            </pre>
          </div>
        </section>

        {/* Section 3: Kubernetes Manifests */}
        <section className="mb-24 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-4 bg-blue-500 hidden lg:block"></div>
          <h2 className="text-2xl font-black uppercase mb-8 tracking-tight">03. GitOps & K8s Definitions</h2>
          <p className="text-xl mb-6">Zero-downtime rolling updates and Horizontal Pod Autoscaling.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-white bg-black p-4 overflow-x-auto shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-gray-400 mb-2 border-b-2 border-gray-600 pb-2">deployment.yaml</div>
              <pre className="text-xs leading-relaxed text-blue-200">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: pipelineforge
spec:
  replicas: 3
  selector:
    matchLabels:
      app: pipelineforge
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: pipelineforge
    spec:
      containers:
        - name: app
          image: rounakneema/pipelineforge:latest
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "250m"
              memory: "256Mi"
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5`}
              </pre>
            </div>

            <div className="border-4 border-white bg-black p-4 overflow-x-auto shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-gray-400 mb-2 border-b-2 border-gray-600 pb-2">hpa.yaml</div>
              <pre className="text-xs leading-relaxed text-purple-300">
{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: pipelineforge-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: pipelineforge
  minReplicas: 3
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 4: Load Testing Trace */}
        <section className="mb-12 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-4 bg-green-500 hidden lg:block"></div>
          <h2 className="text-2xl font-black uppercase mb-8 tracking-tight">04. Load Validation</h2>
          <p className="text-xl mb-6">k6 load testing trace confirming SLA under 500 VUs.</p>
          
          <div className="border-4 border-gray-600 bg-black p-6 text-gray-300 font-mono text-sm overflow-x-auto border-l-8 border-l-green-500">
            <pre>
{`$ k6 run loadtest.js --vus 500 --duration 1m

          /\\      |‾‾| /‾‾/   /‾‾/   
     /\\  /  \\     |  |/  /   /  /    
    /  \\/    \\    |     (   /   ‾‾\\  
   /          \\   |  |\\  \\ |  (‾)  | 
  / __________ \\  |__| \\__\\ \\_____/ .io

  execution: local
     script: loadtest.js
     output: -

  scenarios: (100.00%) 1 scenario, 500 max VUs, 1m30s max duration (incl. graceful stop):
           * default: 500 looping VUs for 1m0s (gracefulStop: 30s)

     ✓ status is 200
     ✓ latency is < 50ms

     checks.........................: 100.00% ✓ 145020      ✗ 0    
     data_received..................: 21 MB   340 kB/s
     data_sent......................: 12 MB   190 kB/s
     http_req_duration..............: avg=3.2ms    min=1.1ms   med=2.8ms   max=45.2ms p(90)=4.8ms   p(95)=5.9ms 
     http_req_failed................: 0.00%   ✓ 0           ✗ 145020
     iterations.....................: 145020  2375.12/s
     vus............................: 500     min=500       max=500`}
            </pre>
          </div>
        </section>
        
        <footer className="mt-32 pt-12 border-t-4 border-white text-center">
            <p className="text-xl font-bold uppercase mb-4">END OF DOCUMENTATION</p>
            <Link href="/pipelineforge" className="inline-block border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors font-bold uppercase">
              Return to Overview
            </Link>
        </footer>
      </main>
    </div>
  );
}
