import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
  title: 'PipelineForge // Decisions',
  description: 'Technical page covering engineering trade-offs, security gates, and performance metrics for PipelineForge.',
};

export default function DecisionsPage() {
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
            <Link href="/pipelineforge/decisions" className="text-[#f0883e] transition-colors">Decisions</Link>
            <Link href="/pipelineforge/docs" className="hover:text-white transition-colors">Docs</Link>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
        <FadeIn>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#f0883e] mb-6">Tradeoffs & Metrics</div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-24">
            Engineering <br /> Decisions.
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <FadeIn delay={0.1}>
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Multi-stage Distroless Builds</h2>
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">1.1GB &rarr; 8MB</div>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              Using standard Golang images resulted in a massive footprint full of unused operating system binaries. By switching to a multi-stage distroless build, the final container only contains the compiled Go binary. This reduces the attack surface dramatically and speeds up K8s image pull times.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">GitHub Actions vs Jenkins</h2>
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">SaaS vs Self-hosted CI</div>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              While Jenkins offers unparalleled customizability, maintaining the Jenkins server and plugins is a DevOps anti-pattern for small teams. GitHub Actions provides native repository integration, ephemeral runners, and reduces infrastructure overhead to zero.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Trivy over Clair</h2>
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">Scan Speed & Accuracy</div>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              Trivy was selected as the security gate because it operates statelessly without requiring a background database, making it perfect for ephemeral CI pipelines. It executes faster than Clair and handles both OS packages and language-specific dependencies in a single run.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Helm vs Kustomize</h2>
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">Templating over Patching</div>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              We chose Helm for its powerful templating engine and package management capabilities. While Kustomize is great for simple overlay patching, Helm allows us to bundle the entire microservice architecture (including Redis and Postgres dependencies) into a single installable release.
            </p>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
