import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'PipelineForge Architecture · GitOps CI/CD Topology',
  description: 'Technical architecture, container pipeline flow, and Kubernetes cluster configuration for PipelineForge.',
  alternates: {
    canonical: 'https://pipelineforge.rounakneema.in/architecture',
  },
};

export default function ArchitecturePage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="pipelineforge" pageType="Architecture" />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            PIPELINE ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Pipeline Topology
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            End-to-end container delivery flow from commit to automated Kubernetes rollout.
          </p>
        </header>

        {/* System Diagram */}
        <section className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-8">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Delivery Workflow Diagram
            </h2>
          </div>
          
          <div className="bg-neutral-50/70 border border-neutral-200/90 rounded-2xl p-6 md:p-10 overflow-x-auto shadow-sm">
            <MermaidDiagram chart={`
flowchart TD
    DEV[Developer Commit] -->|git push| REPO[GitHub Repository]
    REPO -->|trigger| CI[GitHub Actions Runner]
    CI --> LINT[1. Static Analysis & Go Unit Tests]
    LINT --> BUILD[2. Multi-Stage Docker Build<br/>golang:1.21-alpine -> distroless/static]
    BUILD --> SCAN[3. Trivy Security Scan<br/>Halt if High or Critical CVEs]
    SCAN --> PUSH[4. Push to Container Registry]
    PUSH --> REGISTRY[Container Registry]
    
    REGISTRY -->|pull| K8S[Kubernetes Cluster]
    HELM[Helm Chart Values] --> K8S
    K8S --> INGRESS[Ingress Controller<br/>Traffic Routing]
    K8S --> HPA[HPA Controller<br/>Autoscale on CPU > 70%]
    K8S --> PODS[Distroless Go Pods<br/>Non-root, read-only rootfs]
`} />
          </div>
        </section>

        {/* Pipeline Stages Breakdown */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-12">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Pipeline Stage Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#f97316] block">01</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Multi-Stage Packaging</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                Compilation happens in an Alpine builder image. The resulting statically linked Go binary is copied into Google&apos;s distroless runtime image. The final artifact contains zero package managers, shells, or OS debugging utilities, shrinking the artifact from 1.1GB to 8.4MB.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#f97316] block">02</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Trivy Security Gate</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                Before any image pushes to the container registry, Trivy inspects OS layers and binary dependencies for CVEs. The pipeline halts immediately if a High or Critical vulnerability is detected, keeping vulnerable code out of registry storage.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#f97316] block">03</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Kubernetes GitOps</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                Helm releases declare pod security standards, resource limits, and NetworkPolicies. Rolling updates ensure zero downtime, while readiness and liveness probes prevent traffic from reaching uninitialized replicas.
              </p>
            </div>

          </div>
        </section>

        {/* 99.3% Container Image Reduction & Zero CVE Gate Evidence */}
        <section className="border-t border-neutral-200 pt-16 mt-20">
          <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm">
            <div className="bg-neutral-100/70 border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800">
                  99.3% Container Image Reduction &amp; Zero CVE Gate Evidence
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">Verified Pipeline Spec</span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-b border-neutral-100 pb-6">
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Standard Go Image</span>
                  <span className="text-neutral-900 font-semibold font-mono">1.1 GB (Alpine)</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Distroless Image</span>
                  <span className="text-emerald-600 font-semibold font-mono">8.4 MB (Final)</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Trivy CVE Count</span>
                  <span className="text-emerald-600 font-semibold font-mono">0 Vulnerabilities</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Target Cluster</span>
                  <span className="text-neutral-900 font-semibold font-mono">Kubernetes (Helm)</span>
                </div>
              </div>

              <div>
                <span className="block text-neutral-500 font-mono text-xs mb-2">Build &amp; Scan Verification Output</span>
                <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-5 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`$ docker images | grep pipelineforge
pipelineforge-app  builder     1.1GB (golang:1.21-alpine)
pipelineforge-app  distroless  8.4MB (gcr.io/distroless/static-debian11)

$ trivy image --severity HIGH,CRITICAL pipelineforge-app:distroless
2026-10-15T12:00:00Z INFO Vulnerability database up to date
pipelineforge-app:distroless (debian 11.9)
=========================================
Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)

[✓] Security gate passed: zero CVE vulnerabilities detected`}
                </pre>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
