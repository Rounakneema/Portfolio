import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';

export const metadata: Metadata = {
  title: 'PipelineForge Architecture | Topology & Flows',
  description: 'Deep dive into the DevSecOps GitOps pipeline topology, cluster design, and data flows of PipelineForge.',
};

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white selection:text-black">
      <header className="border-b-4 border-white p-6 flex justify-between items-center uppercase font-bold tracking-tighter">
        <div className="text-xl">
          <Link href="/pipelineforge" className="hover:bg-white hover:text-black transition-colors px-2 py-1">← BACK TO PIPELINEFORGE</Link>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-white text-black px-2 py-1 text-sm font-black mb-1">ARCHITECTURE</div>
        </div>
      </header>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden">
        <h1 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-12 border-b-8 border-white pb-6">
          PIPELINE TOPOLOGY
        </h1>

        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">System Overview</h2>
          <p className="text-xl leading-relaxed max-w-4xl mb-8">
            PipelineForge utilizes a GitOps methodology powered by GitHub Actions, containerized using Docker multi-stage builds (distroless), and orchestrated on Kubernetes via Helm charts. Below is the raw topology of the DevSecOps pipeline.
          </p>
          
          <div className="border-4 border-white p-6 overflow-x-auto bg-[#111] text-green-400">
            <MermaidDiagram chart={`flowchart TD
    DEV[DEVELOPER] -->|git push| REPO[GITHUB REPOSITORY]
    REPO -->|triggers| CI[GITHUB ACTIONS CI/CD]
    REPO -->|configuration| HELM[HELM CHARTS]
    CI --> LINT[1. Lint & Test Go]
    LINT --> BUILD[2. Build Multi-stage Docker<br/>golang:1.21-alpine -> distroless]
    BUILD --> SCAN[3. Security Scan Trivy<br/>FAIL IF HIGH/CRITICAL CVEs]
    SCAN --> PUSH[4. Push Image]
    PUSH --> REGISTRY[CONTAINER REGISTRY]
    HELM --> REGISTRY
    REGISTRY -->|pull| K8S[KUBERNETES CLUSTER]
    K8S --> SVC[INGRESS / SVC<br/>Traffic Routing]
    K8S --> HPA[HPA<br/>Scales 1..8 on CPU > 70%]
    K8S --> DEPLOY[DEPLOYMENT]
    DEPLOY --> PODS[POD 1 ... POD N<br/>Distroless Go Binary]`} />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">Kubernetes Architecture</h2>
          <p className="text-xl leading-relaxed max-w-4xl mb-8">
            The Kubernetes environment is managed via Helm. It includes advanced networking and scaling configurations to ensure high availability and security inside the cluster boundary.
          </p>
          
          <div className="border-4 border-white p-6 overflow-x-auto bg-[#111] text-cyan-400">
            <MermaidDiagram chart={`flowchart TD
    subgraph K8S_NS [KUBERNETES NAMESPACE pipelineforge]
        NP[NETWORK POLICY<br/>Default Deny All<br/>Allow Ingress on 8080]
        
        SVC[SERVICE ClusterIP<br/>Port: 80 --> 8080]
        HPA[HORIZONTAL POD AUTOSCALER<br/>Target CPU: 70%]
        
        SVC --> HPA
        
        DEPLOY[DEPLOYMENT<br/>Replicas: 1 to 8]
        SVC --> DEPLOY
        HPA --> DEPLOY
        
        POD1[POD App<br/>- Liveness Probe<br/>- Readiness Probe<br/>- Resource Limits]
        POD2[POD App<br/>- Liveness Probe<br/>- Readiness Probe<br/>- Resource Limits]
        
        DEPLOY --> POD1
        DEPLOY --> POD2
    end`} />
          </div>
        </section>

      </main>
    </div>
  );
}
