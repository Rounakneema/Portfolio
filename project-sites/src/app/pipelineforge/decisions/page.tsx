import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'PipelineForge Decisions — Container Hardening & Metrics',
  description: 'Engineering trade-offs, distroless container packaging, and k6 load testing benchmarks for PipelineForge.',
  alternates: {
    canonical: 'https://pipelineforge.rounakneema.in/decisions',
  },
};

export default function DecisionsPage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="pipelineforge" pageType="Decisions" />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            ENGINEERING RATIONALE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Decisions &amp; Metrics
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            Trade-offs in container attack surface reduction, CI vulnerability gating, and Kubernetes load profiles.
          </p>
        </header>

        {/* Section 01: Distroless Trade-offs */}
        <section className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Container Footprint
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Multi-Stage Distroless vs. Standard Base Images
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 space-y-4">
              <h4 className="text-lg font-bold text-neutral-900 tracking-tight">Standard Linux Base Images (1.1 GB)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Standard developer images include bash, curl, package managers, and dozens of shared C libraries. While convenient for interactive debugging, these utilities give attackers execution primitives if an application suffers a remote code execution exploit.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-neutral-900 bg-white space-y-4 shadow-sm">
              <h4 className="text-lg font-bold text-neutral-900 tracking-tight">Distroless Static Packaging (8.4 MB)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Distroless images contain only the compiled binary and essential root certificates. There is no package manager, no shell binary, and no user-space toolchain. The artifact size drops by 99.3%, dramatically accelerating container pull times across cluster nodes.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-neutral-950 p-6 sm:p-8 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
            <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px]">
              Artifact Comparison
            </div>
            <div className="grid grid-cols-3 max-w-lg gap-4 text-xs">
              <span className="text-neutral-500">Image</span>
              <span className="text-neutral-500">Size</span>
              <span className="text-neutral-500">Shells / Packages</span>
              
              <span className="text-white font-medium">golang:1.21-alpine</span>
              <span className="text-neutral-400">1.1 GB</span>
              <span className="text-red-400">/bin/sh, apk included</span>

              <span className="text-white font-medium">pipelineforge:distroless</span>
              <span className="text-emerald-400 font-bold">8.4 MB</span>
              <span className="text-emerald-400">None (0 OS binaries)</span>
            </div>
          </div>
        </section>

        {/* Section 02: k6 Load Test Metrics */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Cluster Performance
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              k6 Load Testing &amp; HPA Autoscaling
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 space-y-4 text-neutral-600 text-base leading-relaxed">
              <p>
                We validated the Kubernetes cluster under simulated production traffic using k6. Tests sustained 500 concurrent virtual users generating API requests over a 10-minute window.
              </p>
              <p>
                The Horizontal Pod Autoscaler triggered at 70% CPU utilization, dynamically scaling pods from 2 to 8 replicas without dropping active HTTP sessions or exceeding 5ms P95 latency.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="border border-neutral-200 rounded-2xl p-6 bg-neutral-50/50 space-y-4">
                <span className="text-xs font-mono font-semibold uppercase text-neutral-500 tracking-wider block">
                  k6 Benchmark Summary
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                    <span className="text-neutral-400 text-[10px] block font-mono">Virtual Users</span>
                    <span className="text-xl font-bold text-neutral-900 font-mono">500 VUs</span>
                  </div>
                  <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                    <span className="text-neutral-400 text-[10px] block font-mono">P95 Latency</span>
                    <span className="text-xl font-bold text-emerald-600 font-mono">&lt; 5 ms</span>
                  </div>
                  <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                    <span className="text-neutral-400 text-[10px] block font-mono">Success Rate</span>
                    <span className="text-xl font-bold text-emerald-600 font-mono">100%</span>
                  </div>
                  <div className="p-3 bg-white border border-neutral-200 rounded-xl">
                    <span className="text-neutral-400 text-[10px] block font-mono">Max Replicas</span>
                    <span className="text-xl font-bold text-neutral-900 font-mono">8 Pods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
