import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
  title: 'PipelineForge // Architecture',
  description: 'Deep dive into the DevSecOps GitOps pipeline topology, cluster design, and data flows of PipelineForge.',
};

export default function ArchitecturePage() {
  return (
    <div className="w-full min-h-[100dvh] bg-[#030303] text-white font-sans selection:bg-[#f0883e]/20 selection:text-[#f0883e] pb-32">
      {/* Premium Minimal Navbar */}
      <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#030303]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          PIPELINEFORGE<span className="text-[#f0883e]">.</span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
            <Link href="/pipelineforge" className="hover:text-white transition-colors">Overview</Link>
            <Link href="/pipelineforge/architecture" className="text-[#f0883e] transition-colors">Architecture</Link>
            <Link href="/pipelineforge/decisions" className="hover:text-white transition-colors">Decisions</Link>
            <Link href="/pipelineforge/docs" className="hover:text-white transition-colors">Docs</Link>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
        <FadeIn>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#f0883e] mb-6">System Design</div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-24">
            Topology <br /> & Data Flow.
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <FadeIn delay={0.2} className="lg:col-span-8">
            <div className="border-t border-b border-zinc-900 py-12">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-10">GitOps DevSecOps Pipeline</h2>
              <div className="overflow-x-auto">
                <MermaidDiagram chart={`
                  flowchart TD
                    subgraph CI["Continuous Integration (GitHub Actions)"]
                        A[Developer Commits Code] --> B{Code Checks}
                        B -->|Unit Tests| C[Go Test]
                        B -->|SAST| D[Trivy Scan - FS]
                        C & D --> E[Docker Build]
                        E --> F[Trivy Scan - Image]
                        F --> G[Push to Registry]
                    end
                    
                    subgraph CD["Continuous Deployment (GitOps)"]
                        G --> H[Update Helm Values repo]
                        H --> I[ArgoCD / Flux syncs cluster]
                        I --> J{Kubernetes Cluster}
                        J --> K[Rolling Update]
                    end
                    
                    CI --> CD
                `} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-4 space-y-12 lg:pl-12">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Left-Shifted Security</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Trivy runs twice in the pipeline. First, a filesystem scan on the raw code to catch vulnerabilities in dependencies. Second, a deep image scan on the compiled Docker artifact before it's allowed into the registry.
              </p>
            </div>
            <div className="space-y-4 border-t border-zinc-900 pt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">GitOps Pull Model</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Instead of CI pushing directly to production (exposing cluster credentials), the CI pipeline only updates a separate config repository. The cluster runs an operator that pulls changes securely.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
