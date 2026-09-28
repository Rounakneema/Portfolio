import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { PipelineSteps } from '@/components/shared/PipelineSteps';
import { AnimatedStat } from '@/components/shared/AnimatedStat';
import { FadeIn } from '@/components/shared/FadeIn';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'PipelineForge // GitOps DevSecOps CI/CD',
  description: 'Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice built to demonstrate production-grade DevOps automation.',
  alternates: { canonical: 'https://pipelineforge.rounakneema.in' },
};

const pipelineSteps = [
  { label: 'CODE', sublabel: 'GitHub Actions' },
  { label: 'BUILD', sublabel: 'Docker Build' },
  { label: 'SCAN', sublabel: 'Trivy Scan' },
  { label: 'PACKAGE', sublabel: 'Helm Chart' },
  { label: 'DEPLOY', sublabel: 'K8s Rollout' },
  { label: 'VERIFY', sublabel: 'Health Check' },
  { label: 'DONE', sublabel: 'Success' },
];

export default function PipelineForgePage() {
  return (
    <div className="w-full min-h-[100dvh] bg-[#030303] text-white font-sans selection:bg-[#f0883e]/20 selection:text-[#f0883e] pb-32">
      <ProjectJsonLd slug="pipelineforge" />
      
      {/* Premium Minimal Navbar */}
      <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#030303]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          PIPELINEFORGE<span className="text-[#f0883e]">.</span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">&larr; Portfolio</Link>
            <Link href="/pipelineforge" className="text-[#f0883e] transition-colors">Overview</Link>
            <Link href="/pipelineforge/architecture" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="/pipelineforge/decisions" className="hover:text-white transition-colors">Decisions</Link>
            <Link href="/pipelineforge/docs" className="hover:text-white transition-colors">Docs</Link>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
        {/* Kinetic Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-32">
          
          <FadeIn className="lg:col-span-6 relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="px-3 py-1 bg-[#f0883e]/10 border border-[#f0883e]/20 text-[#f0883e] text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f0883e] animate-pulse"></span>
                DevSecOps Control Plane
              </div>
            </div>
            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white mb-10">
              Ship <br />
              Code <br />
              <span className="text-zinc-600">Securely.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-md leading-relaxed font-light mb-12">
              A comprehensive GitOps pipeline orchestrating Docker builds, Trivy security gates, and Kubernetes deployments. Designed for zero-touch velocity and military-grade compliance.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-6 relative w-full lg:mt-12">
            {/* Doppelrand Pipeline Dashboard */}
            <div className="bg-white/5 border border-white/10 p-2 rounded-[2rem] shadow-2xl relative group">
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-[calc(2rem-0.5rem)] overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
                <div className="p-4 border-b border-zinc-800/50 bg-[#0c0c0c] flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Execution Matrix</span>
                    <span className="text-[10px] font-mono text-zinc-600">ID: PF-8482</span>
                </div>
                <div className="p-8 pb-12">
                  <PipelineSteps stepDurationMs={700} successColor="#3fb950" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Metrics Section (Bento Grid) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#f0883e]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0883e] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-700"></div>
                <AnimatedStat value={99.3} suffix="%" label="Image Reduction" className="flex-col items-start" />
                <p className="text-xs text-zinc-500 mt-4 leading-relaxed">Multi-stage distroless builds shrank containers from 1.1GB down to 8MB.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#f0883e]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0883e] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-700"></div>
                <AnimatedStat prefix="<" value={5} suffix="ms" label="Latency Overhead" className="flex-col items-start" />
                <p className="text-xs text-zinc-500 mt-4 leading-relaxed">Highly optimized Go microservices ensure minimal execution latency.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#f0883e]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0883e] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-700"></div>
                <AnimatedStat value={500} suffix=" VU" label="Load Tested" className="flex-col items-start" />
                <p className="text-xs text-zinc-500 mt-4 leading-relaxed">Load tested concurrently using K6 to guarantee production readiness.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation to Sub-pages (Liquid Glass Minimal) */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="border-t border-zinc-900 pt-32 mb-32">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#f0883e] mb-12">Deep Dive</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/pipelineforge/architecture" className="group block">
                <div className="pb-4 border-b border-zinc-800 group-hover:border-[#f0883e] transition-colors duration-500">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Architecture &rarr;</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">Topology, cluster design, and data flows.</p>
                </div>
              </Link>
              <Link href="/pipelineforge/decisions" className="group block">
                <div className="pb-4 border-b border-zinc-800 group-hover:border-[#f0883e] transition-colors duration-500">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Decisions &rarr;</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">Trade-offs, security gates, and optimization.</p>
                </div>
              </Link>
              <Link href="/pipelineforge/docs" className="group block">
                <div className="pb-4 border-b border-zinc-800 group-hover:border-[#f0883e] transition-colors duration-500">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Docs &rarr;</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">YAML manifests, scripts, and terminal traces.</p>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32 py-16 border-t border-zinc-900">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-12 text-center">Engineered With</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase font-bold tracking-widest text-zinc-400 justify-center items-center">
              {['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Trivy', 'K6', 'Go'].map((tech) => (
                <span key={tech} className="hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-16">Questions.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { q: "What is PipelineForge?", a: "A GitOps DevSecOps CI/CD Pipeline Automation framework demonstrating production-grade DevOps." },
                { q: "How does it secure pipelines?", a: "It utilizes Trivy security gates for automated vulnerability scanning during the deployment process." },
                { q: "How was the image size reduced?", a: "Container images were optimized from 1.1GB down to 8MB (99.3% reduction) via multi-stage distroless builds." },
                { q: "What orchestration platform is used?", a: "The deployment environment and GitOps pipeline are orchestrated using Kubernetes and Helm." }
              ].map((faq, idx) => (
                <div key={idx} className="border-t border-zinc-800 pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

      </main>
    </div>
  );
}
