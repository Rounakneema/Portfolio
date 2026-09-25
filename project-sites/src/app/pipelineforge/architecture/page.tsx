import { Metadata } from 'next';
import Link from 'next/link';

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
            <pre className="text-sm md:text-base leading-tight">
{`[DEVELOPER]
    │
    ▼ (git push)
[GITHUB REPOSITORY] ────────────────────────┐
    │                                       │
    ▼ triggers                              ▼ configuration
[GITHUB ACTIONS CI/CD]                      [HELM CHARTS]
    │                                       │
    ├─► 1. Lint & Test (Go)                 │
    │                                       │
    ├─► 2. Build Multi-stage Docker         │
    │   (golang:1.21-alpine -> distroless)  │
    │                                       │
    ├─► 3. Security Scan (Trivy)            │
    │   [FAIL IF HIGH/CRITICAL CVEs]        │
    │                                       │
    ├─► 4. Push Image                       │
    ▼                                       │
[CONTAINER REGISTRY] ◄──────────────────────┘
    │
    ▼ pull
[KUBERNETES CLUSTER]
    │
    ├─► [INGRESS / SVC] ───────► (Traffic Routing)
    │
    ├─► [HPA] ─────────────────► (Scales 1..8 on CPU > 70%)
    │
    └─► [DEPLOYMENT] ──────────► [POD 1] [POD 2] ... [POD N]
                                  (Distroless Go Binary)
`}
            </pre>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-6 bg-white text-black inline-block px-4 py-2">Kubernetes Architecture</h2>
          <p className="text-xl leading-relaxed max-w-4xl mb-8">
            The Kubernetes environment is managed via Helm. It includes advanced networking and scaling configurations to ensure high availability and security inside the cluster boundary.
          </p>
          
          <div className="border-4 border-white p-6 overflow-x-auto bg-[#111] text-cyan-400">
            <pre className="text-sm md:text-base leading-tight">
{`+-------------------------------------------------------------+
| KUBERNETES NAMESPACE (pipelineforge)                        |
|                                                             |
|  +------------------------+                                 |
|  | NETWORK POLICY         |  <-- Default Deny All           |
|  | Allow Ingress on 8080  |                                 |
|  +------------------------+                                 |
|                                                             |
|  +------------------------+      +-----------------------+  |
|  | SERVICE (ClusterIP)    | ---> | HORIZONTAL POD        |  |
|  | Port: 80 -> 8080       |      | AUTOSCALER (HPA)      |  |
|  +-----------+------------+      | Target CPU: 70%       |  |
|              |                   +-----------+-----------+  |
|              v                               |              |
|  +------------------------+                  |              |
|  | DEPLOYMENT             | <----------------+              |
|  | Replicas: 1 to 8       |                                 |
|  +-----------+------------+                                 |
|              |                                              |
|              v                                              |
|  +------------------------+      +-----------------------+  |
|  | POD (App)              |      | POD (App)             |  |
|  | - Liveness Probe       |      | - Liveness Probe      |  |
|  | - Readiness Probe      |      | - Readiness Probe     |  |
|  | - Resource Limits      |      | - Resource Limits     |  |
|  +------------------------+      +-----------------------+  |
+-------------------------------------------------------------+
`}
            </pre>
          </div>
        </section>

      </main>
    </div>
  );
}
