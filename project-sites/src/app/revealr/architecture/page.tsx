import Link from 'next/link';
import { ArrowRight, Braces, Database, Layers3, Network, PlugZap, Radar, ScanSearch, Terminal, Workflow } from 'lucide-react';
import type { Metadata } from 'next';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Architecture — Revealr Network Scanner',
  description: 'A visual technical overview of Revealr’s concurrent scanning engine, state layer, plugin bridge, and output pipeline.',
  alternates: { canonical: 'https://revealr.rounakneema.in/architecture' },
};

const layers = [
  { icon: Radar, number: '01', title: 'Concurrent scan engine', text: 'A bounded worker pool dispatches probes, controls the rate, and collects responses without tying throughput to a single process or target.', accent: 'text-lime-300' },
  { icon: Database, number: '02', title: 'Stateful memory', text: 'SQLite records scan sessions and host state. Subsequent runs compare the new surface against a known baseline instead of starting blind.', accent: 'text-sky-300' },
  { icon: ScanSearch, number: '03', title: 'Service intelligence', text: 'Confirmed ports flow through banner and version detection, yielding the practical service context needed for review and drift analysis.', accent: 'text-amber-200' },
  { icon: PlugZap, number: '04', title: 'Plugin bridge', text: 'JSON over stdin/stdout gives Python extensions a narrow, predictable interface for custom enrichment and offline checks.', accent: 'text-violet-300' },
];

export default function RevealrArchitecture() {
  return (
    <div className="relative isolate overflow-hidden bg-[#080b0a] text-zinc-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
        <div className="absolute left-1/2 top-[-370px] h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-lime-300/10 bg-lime-400/[0.035] shadow-[0_0_160px_40px_rgba(132,204,22,0.07)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(190,242,100,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(190,242,100,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300">System architecture</p>
            <h1 className="mt-5 text-balance text-2xl font-black leading-[0.93] tracking-tight text-white sm:text-2xl">Fast discovery, built on a durable signal path.</h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">Revealr separates probing, state, enrichment, and output so an authorized scan stays fast while its findings remain useful after the terminal closes.</p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b100d]/90 p-5 shadow-2xl shadow-black/30 sm:p-8 md:mt-20 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_0%,rgba(190,242,100,0.08),transparent_42%)]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500"><Workflow className="h-3.5 w-3.5 text-lime-300" /> Signal path</div>
                <span className="rounded-full border border-lime-300/15 bg-lime-300/[0.07] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-lime-200">Modular core</span>
              </div>
              <StaggerContainer>
                <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
                  {[
                    { icon: Terminal, label: 'CLI config', sub: 'Target · profile', color: 'text-zinc-300' },
                    { icon: Radar, label: 'Go engine', sub: 'Probe · collect', color: 'text-lime-300' },
                    { icon: Database, label: 'State store', sub: 'Baseline · diff', color: 'text-sky-300' },
                    { icon: Braces, label: 'Output', sub: 'JSON · stdout', color: 'text-violet-300' }
                  ].flatMap((node, index) => [
                    <StaggerItem key={node.label}>
                      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-5 hover:-translate-y-1 transition-all duration-300">
                        <node.icon className={`h-5 w-5 ${node.color}`} />
                        <p className="mt-6 text-sm font-bold tracking-tight text-white">{node.label}</p>
                        <p className="mt-1 text-xs text-zinc-600">{node.sub}</p>
                      </div>
                    </StaggerItem>,
                    index < 3 ? <StaggerItem key={`arrow-${index}`}><ArrowRight className="mx-auto h-4 w-4 rotate-90 text-lime-300/45 lg:rotate-0" /></StaggerItem> : null
                  ])}
                </div>
              </StaggerContainer>
              <StaggerContainer>
                <div className="mt-7 grid gap-3 border-t border-white/[0.07] pt-6 md:grid-cols-3">
                  <StaggerItem>
                    <div className="flex gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300">
                      <Network className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                      <p className="text-xs leading-relaxed text-zinc-500"><b className="font-medium text-zinc-300">Rate-aware:</b> profiles tune timing to the assessment context.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300">
                      <Database className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                      <p className="text-xs leading-relaxed text-zinc-500"><b className="font-medium text-zinc-300">Stateful:</b> historical results turn observations into changes.</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300">
                      <PlugZap className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                      <p className="text-xs leading-relaxed text-zinc-500"><b className="font-medium text-zinc-300">Extensible:</b> plugins enrich results without coupling to the core.</p>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-y border-white/[0.07] bg-white/[0.018]">
          <StaggerContainer>
            <div className="mx-auto grid max-w-7xl divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
              {[['Go', 'concurrent core'], ['SQLite', 'scan memory'], ['Python', 'plugin extension']].map(([value, label]) => (
                <StaggerItem key={label}>
                  <div className="py-7 text-center hover:-translate-y-1 transition-all duration-300">
                    <p className="text-xl font-black tracking-tight text-white">{value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">Layer by layer</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-2xl">Four layers, one clear workflow.</h2>
          </div>
          <StaggerContainer>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {layers.map((layer) => (
                <StaggerItem key={layer.number}>
                  <article className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/30">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-black/20">
                        <layer.icon className={`h-5 w-5 ${layer.accent}`} />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-700">{layer.number}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-bold tracking-tight text-white">{layer.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-500">{layer.text}</p>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          <div className="mt-16 border-t border-white/[0.07] pt-8">
            <Link href="/benchmarks" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-lime-300 transition-all duration-300 hover:-translate-y-1 hover:text-lime-200">
              See performance benchmarks <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
