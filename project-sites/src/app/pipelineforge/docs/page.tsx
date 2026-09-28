import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
  title: 'PipelineForge // Docs',
  description: 'Raw engineering documentation, YAML manifests, and CI/CD scripts for PipelineForge.',
};

export default function PipelineForgeDocsPage() {
  return (
    <div className="w-full min-h-[100dvh] bg-[#030303] text-white font-sans selection:bg-[#f0883e]/20 selection:text-[#f0883e] pb-32">
      {/* Premium Minimal Navbar */}
      <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#030303]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          PIPELINEFORGE<span className="text-[#f0883e]">.</span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
            <Link href="/pipelineforge" className="hover:text-white transition-colors">Overview</Link>
            <Link href="/pipelineforge/architecture" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="/pipelineforge/decisions" className="hover:text-white transition-colors">Decisions</Link>
            <Link href="/pipelineforge/docs" className="text-[#f0883e] transition-colors">Docs</Link>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
        <FadeIn>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#f0883e] mb-6">Specification</div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-24">
            Configuration <br /> & Manifests.
          </h1>
        </FadeIn>

        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="mb-16">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Distroless Dockerfile</h2>
              <div className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-lg text-sm text-zinc-300 font-mono overflow-x-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<pre>{`# Build Stage
FROM golang:1.21 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o pipelineforge .

# Final Stage (Distroless)
FROM gcr.io/distroless/static:nonroot
WORKDIR /
COPY --from=builder /app/pipelineforge .
USER 65532:65532
ENTRYPOINT ["/pipelineforge"]`}</pre>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Trivy Security Gate (GitHub Actions)</h2>
              <div className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-lg text-sm text-zinc-300 font-mono overflow-x-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<pre>{`- name: Run Trivy vulnerability scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'rounakneema/pipelineforge:\${{ github.sha }}'
    format: 'table'
    exit-code: '1'
    ignore-unfixed: true
    vuln-type: 'os,library'
    severity: 'CRITICAL,HIGH'`}</pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
