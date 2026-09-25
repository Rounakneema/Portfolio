import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleDotDashed,
  Command,
  Container,
  Database,
  Github,
  Network,
  Search,
  Shield,
  Layers,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetroMind — Microservices Document Intelligence',
  description: 'AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, vector search, and 100% audit logging.',
  keywords: ['Microservices', 'OCR', 'Vector Search', 'Document Intelligence', 'Smart India Hackathon', 'Docker', 'RabbitMQ'],
  alternates: { canonical: 'https://metromind.rounakneema.in' },
  openGraph: {
    title: 'MetroMind — Document Intelligence',
    description: 'Transforming physical transit documents into searchable semantic vectors.',
    url: 'https://metromind.rounakneema.in',
    siteName: 'MetroMind',
    type: 'website',
  },
};

const capabilities = [
  { icon: Layers, eyebrow: '01 / Decoupled', title: 'Microservices Scale.', description: '12+ independent Docker containers orchestrating API gateways, background workers, and AI pipelines without bottlenecking each other.', accent: 'text-fuchsia-400', iconBg: 'bg-fuchsia-400/10 border-fuchsia-400/20' },
  { icon: Search, eyebrow: '02 / Semantic', title: 'Understand meaning.', description: 'Go beyond keywords. MetroMind extracts text via OCR and creates high-dimensional embeddings for natural language semantic querying.', accent: 'text-cyan-400', iconBg: 'bg-cyan-400/10 border-cyan-400/20' },
  { icon: Shield, eyebrow: '03 / Secure', title: 'Zero compromise.', description: 'Multi-tenant department isolation enforced by an API Gateway. Every privileged action is explicitly recorded in an immutable audit log.', accent: 'text-indigo-400', iconBg: 'bg-indigo-400/10 border-indigo-400/20' },
];

const explorerLinks = [
  { href: '/architecture', title: 'Architecture', detail: 'The 12+ microservices, RabbitMQ async pipeline, and Vector DB.' },
  { href: '/llms.txt', title: 'AI Context', detail: 'Raw markdown summary designed for LLMs.' },
];

export default function MetroMindHome() {
  return (
    <div className="relative isolate overflow-hidden bg-[#06040a]">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
        <div className="absolute left-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <nav className="relative z-50 flex h-16 items-center justify-between border-b border-white/[0.07] px-6 md:px-10">
        <div className="flex items-center gap-4">
          <a href="https://rounakneema.in/projects" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <span className="text-zinc-600">/</span>
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-200">METROMIND</span>
        </div>
        <div className="hidden items-center gap-7 text-[10px] font-bold tracking-[0.16em] md:flex">
          <Link href="/architecture" className="text-zinc-400 transition-colors hover:text-fuchsia-400">ARCHITECTURE</Link>
          <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-fuchsia-400">
            GITHUB <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </nav>

      <section className="relative px-6 pb-20 pt-24 lg:pt-36 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" /></span>
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-fuchsia-300">DOCUMENT INTELLIGENCE PLATFORM</span>
              </div>
              <h1 className="mt-8 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Unlocking <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">Physical Data</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Built for the Smart India Hackathon (Kochi Metro). MetroMind orchestrates 12+ Dockerized microservices to extract text via OCR, embed it into a vector space, and allow strict RBAC-controlled semantic querying across departments.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/architecture" className="flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-black transition-colors hover:bg-zinc-200">
                  <Network className="h-4 w-4" /> System Architecture
                </Link>
                <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-bold text-white transition-colors hover:bg-white/[0.08]">
                  <Github className="h-4 w-4" /> View Source
                </a>
              </div>
            </div>

            {/* Microservices Cluster Visual */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0a10] lg:mt-4 shadow-2xl shadow-fuchsia-900/20">
              <div className="border-b border-white/[0.07] bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  <Container className="h-3.5 w-3.5 text-fuchsia-400" /> Service Topology
                </div>
              </div>
              <div className="p-5 sm:p-7 relative min-h-[300px]">
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 60,80 C 150,80 100,160 200,160" stroke="#c084fc" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-[dash_20s_linear_infinite]" />
                  <path d="M 60,200 C 120,200 120,160 200,160" stroke="#c084fc" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-[dash_20s_linear_infinite]" />
                  <path d="M 280,160 C 320,160 320,100 380,100" stroke="#22d3ee" strokeWidth="2" fill="none" />
                  <path d="M 280,160 C 320,160 320,220 380,220" stroke="#22d3ee" strokeWidth="2" fill="none" />
                </svg>

                {/* Nodes */}
                <div className="absolute left-6 top-16 flex flex-col gap-2">
                    <div className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-zinc-300">Client Web</div>
                    <div className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-zinc-300">Admin Panel</div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-xl border-2 border-fuchsia-500/50 bg-fuchsia-500/10 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                        <Command className="w-6 h-6 text-fuchsia-400 mb-1" />
                        <span className="text-[9px] font-mono font-bold text-fuchsia-300">API GW</span>
                    </div>
                </div>

                <div className="absolute right-6 top-16 flex flex-col gap-2">
                    <div className="px-3 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-mono text-cyan-300 flex items-center gap-2"><Database className="w-3 h-3" /> Vector DB</div>
                    <div className="px-3 py-1.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-mono text-indigo-300 flex items-center gap-2"><Shield className="w-3 h-3" /> Audit Log</div>
                    <div className="px-3 py-1.5 rounded border border-orange-500/30 bg-orange-500/10 text-[10px] font-mono text-orange-300 flex items-center gap-2"><Layers className="w-3 h-3" /> OCR Engine</div>
                </div>
                
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes dash {
                        to {
                            stroke-dashoffset: -100;
                        }
                    }
                `}} />
              </div>
              
              <div className="border-t border-white/[0.07] bg-fuchsia-900/[0.03] p-5">
                <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-500">Service Status</span>
                    <span className="text-fuchsia-400 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" /> 12/12 Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/[0.07] px-6 sm:grid-cols-4 sm:divide-x sm:divide-y-0 md:px-10">
          {[
            ['Go & Python', 'Core Microservices', 'High performance backend processing.'],
            ['Docker', 'Orchestration', 'Seamless multi-container deployment.'],
            ['RabbitMQ', 'Async Pipeline', 'Non-blocking heavy OCR tasks.'],
            ['Milvus / Qdrant', 'Vector DB', 'Semantic embeddings storage.']
          ].map(([metric, label, detail]) => (
            <div key={label} className="py-7 text-center sm:py-9">
              <div className="text-xl font-black tracking-tight text-white">{metric}</div>
              <div className="mt-1 text-sm font-medium text-fuchsia-300">{label}</div>
              <p className="mt-2 px-2 text-xs text-zinc-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">The MetroMind Advantage</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">Physical files are dark data. We shine a light on them.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">A scalable intelligence layer built to process, index, and secure inter-departmental transit documents.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${capability.iconBg}`}>
                <capability.icon className={`h-5 w-5 ${capability.accent}`} />
              </div>
              <p className={`mt-7 text-[10px] font-bold uppercase tracking-[0.16em] ${capability.accent}`}>{capability.eyebrow}</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0a10]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-white/[0.08] p-7 lg:border-b-0 lg:border-r md:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/[0.08]">
                <Command className="h-5 w-5 text-fuchsia-400" />
              </div>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Deploy via Compose</p>
              <code className="mt-3 block text-sm text-fuchsia-200">docker-compose up -d --build</code>
              <p className="mt-5 text-sm leading-6 text-zinc-500">Spin up the entire 12-container infrastructure locally with a single command.</p>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {explorerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center gap-5 px-7 py-5 transition-colors hover:bg-white/[0.035] md:px-10">
                  <CircleDotDashed className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-fuchsia-400" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-zinc-200 transition-colors group-hover:text-white">{item.title}</h3>
                    <p className="mt-1 truncate text-xs text-zinc-600 sm:text-sm">{item.detail}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-fuchsia-400" />
                </Link>
              ))}
              <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 px-7 py-5 transition-colors hover:bg-white/[0.035] md:px-10">
                <Github className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-fuchsia-400" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-zinc-200 transition-colors group-hover:text-white">Source code</h3>
                  <p className="mt-1 text-xs text-zinc-600 sm:text-sm">Inspect the Go microservices and Python workers.</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fuchsia-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
