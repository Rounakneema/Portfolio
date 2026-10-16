import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'PipelineForge Architecture — GitOps CI/CD Topology',
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

      </main>
    </div>
  );
}
