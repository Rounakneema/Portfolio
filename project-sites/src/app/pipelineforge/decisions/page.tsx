import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PipelineForge Decisions | Trade-offs & Metrics',
  description: 'Technical page covering engineering trade-offs, security gates, and performance metrics for PipelineForge.',
};

export default function DecisionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white selection:text-black">
      <header className="border-b-4 border-white p-6 flex justify-between items-center uppercase font-bold tracking-tighter">
        <div className="text-xl">
          <Link href="/" className="hover:bg-white hover:text-black transition-colors px-2 py-1">← BACK TO PIPELINEFORGE</Link>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-white text-black px-2 py-1 text-sm font-black mb-1">DECISIONS</div>
        </div>
      </header>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden">
        <h1 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-12 border-b-8 border-white pb-6">
          ENGINEERING TRADE-OFFS
        </h1>

        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">The 99.3% Optimization</h2>
            <p className="text-xl leading-relaxed mb-6">
              The original Docker image using <code className="bg-[#222] px-2 py-1">golang:1.21</code> resulted in a massive 1.1GB artifact. By switching to a multi-stage build using <code className="bg-[#222] px-2 py-1">gcr.io/distroless/static:nonroot</code>, the final image was aggressively stripped down to <strong>8MB</strong>.
            </p>
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold mb-2 uppercase">Why Distroless?</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>No shell (<code className="bg-[#222] px-1">/bin/sh</code>)</li>
                <li>No package managers</li>
                <li>No OS utilities</li>
                <li>Reduced CVE surface area to near-zero</li>
              </ul>
            </div>
          </div>
          
          <div className="border-4 border-white p-6 bg-[#111]">
            <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-white pb-2">Dockerfile Trace</h3>
            <pre className="text-sm text-yellow-400 overflow-x-auto">
{`FROM golang:1.25.7 AS builder
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY app/ ./app/
RUN CGO_ENABLED=0 GOOS=linux go build \\
    -trimpath \\
    -ldflags="-s -w" \\
    -o /pipelineforge ./app/

FROM gcr.io/distroless/static:nonroot
COPY --from=builder /pipelineforge /pipelineforge
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/pipelineforge"]`}
            </pre>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">Security Gates: Trivy Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="text-xl leading-relaxed mb-6">
                Security cannot be an afterthought. Integrating Aquasecurity's Trivy into the CI pipeline enforces a hard gate: if any CRITICAL or HIGH vulnerabilities are detected in the container layers, the build instantly fails and deployment is halted.
              </p>
              <p className="text-xl leading-relaxed">
                By explicitly enforcing this rule at the CI level before the image is pushed to the container registry, we adhere to the <em>Shift Left</em> paradigm, identifying flaws when they are cheapest to fix.
              </p>
            </div>
            <div className="md:col-span-4 border-4 border-red-500 p-6 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] bg-[#111]">
              <h3 className="text-2xl font-black text-red-500 uppercase mb-4">Trivy Gate</h3>
              <pre className="text-sm text-red-400">
{`$ trivy image \\
    --exit-code 1 \\
    --severity HIGH,CRITICAL \\
    pipelineforge:latest

2026-07-20T00:10:16Z
FATAL vulnerability found`}
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">Performance Metrics: k6 Load Test</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl leading-relaxed mb-6">
                To validate the Horizontal Pod Autoscaler (HPA) and readiness probes, a synthetic load was generated using <code className="bg-[#222] px-2 py-1">k6</code>. We slammed the <code className="bg-[#222] px-2 py-1">/work</code> endpoint with 500 concurrent Virtual Users (VUs).
              </p>
              <ul className="text-lg space-y-4 font-bold">
                <li className="flex justify-between border-b border-gray-600 pb-2">
                  <span>ITERATIONS</span>
                  <span>120,531</span>
                </li>
                <li className="flex justify-between border-b border-gray-600 pb-2">
                  <span>AVG HTTP REQ DURATION</span>
                  <span>4.12ms</span>
                </li>
                <li className="flex justify-between border-b border-gray-600 pb-2">
                  <span>SUCCESS RATE (200 OK)</span>
                  <span>100.00%</span>
                </li>
                <li className="flex justify-between border-b border-gray-600 pb-2">
                  <span>HPA SCALING</span>
                  <span>1 Pod → 8 Pods</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111] border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <pre className="text-sm text-green-400 overflow-x-auto">
{`running (1m00.1s), 500/500 VUs, 120531 complete iterations
default ✓ [======================================] 500 VUs  1m0s

     ✓ status was 200

     checks.........................: 100.00% ✓ 120531      ✗ 0
     http_req_duration..............: 4.12ms  avg=4.12ms max=45.12ms
     vus............................: 500     min=500       max=500

[SYSTEM] Horizontal Pod Autoscaler triggered
[SYSTEM] Replicas scaled from 1 -> 8 (CPU > 70%)`}
              </pre>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
