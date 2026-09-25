import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleDotDashed,
  Command,
  Database,
  Github,
  Layers3,
  Network,
  Radar,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revealr — Adaptive Network Scanner & Vulnerability Mapper',
  description: 'High-performance Go-based network scanner with stateful scan history, network drift detection, and modular Python vulnerability mapping.',
  keywords: ['Go network scanner', 'port scanner', 'vulnerability mapper', 'network security', 'network drift detection', 'SQLite stateful scanner'],
  alternates: { canonical: 'https://revealr.rounakneema.in' },
  openGraph: {
    title: 'Revealr — Adaptive Network Scanner',
    description: 'High-concurrency network visibility, with memory.',
    url: 'https://revealr.rounakneema.in',
    siteName: 'Revealr',
    type: 'website',
  },
};

const capabilities = [
  { icon: Zap, eyebrow: '01 / Speed', title: 'Move at network speed.', description: 'A bounded goroutine engine and raw socket workflow keep discovery rapid without turning every scan into a waiting game.', accent: 'text-lime-300', iconBg: 'bg-lime-400/10 border-lime-400/20' },
  { icon: Database, eyebrow: '02 / Memory', title: 'Know what changed.', description: 'SQLite-backed scan history turns each run into a baseline, so new services and disappearing assets are immediately visible.', accent: 'text-sky-300', iconBg: 'bg-sky-400/10 border-sky-400/20' },
  { icon: Layers3, eyebrow: '03 / Extensibility', title: 'Make it your own.', description: 'Use the Python plugin bridge to add bespoke fingerprints and offline checks without changing the scanning core.', accent: 'text-violet-300', iconBg: 'bg-violet-400/10 border-violet-400/20' },
];

const explorerLinks = [
  { href: '/revealr/architecture', title: 'Architecture', detail: 'The engine, state layer, plugin bridge, and output pipeline.' },
  { href: '/revealr/benchmarks', title: 'Benchmarks', detail: 'Throughput methodology and performance results.' },
  { href: '/revealr/security', title: 'Security model', detail: 'Profiles, controls, and responsible-use guardrails.' },
  { href: '/revealr/docs', title: 'Documentation', detail: 'CLI flags, output formats, and plugin workflows.' },
];

export default function RevealrHome() {
  return (
    <div className="relative isolate overflow-hidden bg-[#080b0a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
        <div className="absolute left-1/2 top-[-330px] h-[730px] w-[730px] -translate-x-1/2 rounded-full border border-lime-300/10 bg-lime-400/[0.035] shadow-[0_0_150px_45px_rgba(132,204,22,0.08)]" />
        <div className="absolute left-1/2 top-[-125px] h-[410px] w-[410px] -translate-x-1/2 rounded-full border border-lime-300/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-lime-200">
            <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-300" /></span>
            Built for authorized assessments
          </div>
          <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white sm:text-7xl md:text-8xl">
            See the network
            <span className="block bg-gradient-to-r from-lime-200 via-lime-400 to-emerald-300 bg-clip-text text-transparent">before it surprises you.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">Revealr is a high-concurrency network scanner that pairs rapid discovery with persistent context—so every authorized scan tells you what is new, gone, and worth investigating.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://github.com/rounakneema/Revealr" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-3 text-sm font-black text-zinc-950 transition-all hover:bg-lime-200 hover:shadow-[0_0_30px_rgba(190,242,100,0.2)]"><Github className="h-4 w-4" />Explore the source<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <Link href="/revealr/docs" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.07] hover:text-white">Read the docs <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl rounded-2xl border border-white/10 bg-[#0c100e]/90 p-2 shadow-2xl shadow-black/40 backdrop-blur md:mt-20">
          <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-lime-300/20 via-transparent to-transparent blur-sm" />
          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#090c0b]">
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-lime-300/80" /><span className="ml-2 hidden text-[10px] text-zinc-600 sm:inline">revealr / scan session</span></div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-lime-300"><Activity className="h-3 w-3" /> Live analysis</div>
            </div>
            <div className="grid lg:grid-cols-[1.26fr_0.74fr]">
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Current target</p><div className="mt-1 flex items-center gap-2 text-lg font-bold text-white"><Network className="h-4 w-4 text-lime-300" /> 10.10.11.0/24</div></div><span className="rounded-md border border-lime-300/15 bg-lime-300/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-300">Stealth profile</span></div>
                <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                  {[['63,981', 'probes sent'], ['41', 'services found'], ['02', 'new since baseline']].map(([value, label]) => <div key={label} className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3 sm:p-4"><p className="text-lg font-black tracking-tight text-white sm:text-xl">{value}</p><p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px]">{label}</p></div>)}
                </div>
                <div className="mt-5 overflow-hidden rounded-lg border border-white/[0.07] bg-black/25">
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Open services</span><span className="text-[10px] text-zinc-600">last response 12ms</span></div>
                  <div className="divide-y divide-white/[0.06]">
                    {[['22', 'ssh', 'OpenSSH 8.9', 'Baseline'], ['80', 'http', 'nginx 1.22.1', 'Baseline'], ['8080', 'http-alt', 'Node.js Express', 'New']].map(([port, service, detail, state]) => <div key={port} className="grid grid-cols-[40px_1fr_auto] items-center gap-3 px-4 py-3 text-xs"><span className="font-bold text-lime-300">{port}</span><span><b className="font-medium text-zinc-200">{service}</b><span className="hidden text-zinc-600 sm:inline"> · {detail}</span></span><span className={state === 'New' ? 'rounded bg-amber-300/10 px-1.5 py-1 text-[9px] font-bold uppercase text-amber-200' : 'text-[10px] text-zinc-600'}>{state}</span></div>)}
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.07] bg-gradient-to-b from-lime-300/[0.035] to-transparent p-5 lg:border-l lg:border-t-0 sm:p-7">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500"><Radar className="h-3.5 w-3.5 text-lime-300" /> Signal map</div>
                <div className="relative mx-auto mt-7 aspect-square max-w-[270px] overflow-hidden rounded-full border border-lime-300/20 bg-[radial-gradient(circle,rgba(190,242,100,0.10)_1px,transparent_1px)] bg-[size:22px_22px]"><div className="absolute inset-[15%] rounded-full border border-lime-300/15" /><div className="absolute inset-[32%] rounded-full border border-lime-300/20" /><div className="absolute inset-[47%] rounded-full border border-lime-300/30" /><div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200 shadow-[0_0_18px_5px_rgba(190,242,100,0.4)]" /><span className="absolute left-[24%] top-[30%] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_2px_rgba(125,211,252,0.7)]" /><span className="absolute right-[17%] top-[46%] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_2px_rgba(190,242,100,0.7)]" /><span className="absolute bottom-[20%] left-[42%] h-2 w-2 animate-pulse rounded-full bg-amber-300 shadow-[0_0_12px_2px_rgba(252,211,77,0.7)]" /><div className="absolute left-1/2 top-1/2 h-[52%] w-px origin-bottom -translate-x-1/2 -translate-y-full rotate-[52deg] bg-gradient-to-t from-lime-300/70 to-transparent" /></div>
                <div className="mt-7 space-y-3">{[['Scan engine', 'Running', 'text-lime-300'], ['State store', 'Synced', 'text-sky-300'], ['Diff detector', '1 alert', 'text-amber-200']].map(([label, value, color]) => <div key={label} className="flex items-center justify-between text-xs"><span className="text-zinc-500">{label}</span><span className={`flex items-center gap-1.5 font-medium ${color}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{value}</span></div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.018]"><div className="mx-auto grid max-w-7xl divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">{[['50K', 'ports / minute', 'High-concurrency discovery'], ['SQLite', 'stateful history', 'A baseline for every asset'], ['Python', 'plugin bridge', 'Offline mapping, your rules']].map(([metric, label, detail]) => <div key={label} className="py-7 text-center sm:py-9"><div className="text-2xl font-black tracking-tight text-white">{metric} <span className="text-sm font-medium text-zinc-400">{label}</span></div><p className="mt-1.5 text-xs text-zinc-600">{detail}</p></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">The Revealr advantage</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">Fast is useful. Context is what makes it actionable.</h2></div><p className="max-w-sm text-sm leading-6 text-zinc-500">A focused toolkit for security teams and practitioners who need a clean view of authorized network change.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{capabilities.map((capability) => <article key={capability.title} className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"><div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${capability.iconBg}`}><capability.icon className={`h-5 w-5 ${capability.accent}`} /></div><p className={`mt-7 text-[10px] font-bold uppercase tracking-[0.16em] ${capability.accent}`}>{capability.eyebrow}</p><h3 className="mt-2 text-xl font-bold tracking-tight text-white">{capability.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{capability.description}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32"><div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1210]"><div className="grid lg:grid-cols-[0.82fr_1.18fr]"><div className="border-b border-white/[0.08] p-7 lg:border-b-0 lg:border-r md:p-10"><div className="flex h-11 w-11 items-center justify-center rounded-lg border border-lime-300/20 bg-lime-300/[0.08]"><Command className="h-5 w-5 text-lime-300" /></div><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">One command. More clarity.</p><code className="mt-3 block text-sm text-lime-200">./revealr -target 10.10.11.0/24</code><p className="mt-5 text-sm leading-6 text-zinc-500">Start with discovery, preserve the signal, and follow the change.</p><div className="mt-8 flex items-center gap-2 text-xs text-zinc-400"><ShieldCheck className="h-4 w-4 text-lime-300" /> For systems you own or are authorized to test.</div></div><div className="divide-y divide-white/[0.07]">{explorerLinks.map((item) => <Link key={item.href} href={item.href} className="group flex items-center gap-5 px-7 py-5 transition-colors hover:bg-white/[0.035] md:px-10"><CircleDotDashed className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-lime-300" /><div className="min-w-0 flex-1"><h3 className="font-bold text-zinc-200 transition-colors group-hover:text-white">{item.title}</h3><p className="mt-1 truncate text-xs text-zinc-600 sm:text-sm">{item.detail}</p></div><ChevronRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-lime-300" /></Link>)}<a href="https://github.com/rounakneema/Revealr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 px-7 py-5 transition-colors hover:bg-white/[0.035] md:px-10"><Github className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-lime-300" /><div className="min-w-0 flex-1"><h3 className="font-bold text-zinc-200 transition-colors group-hover:text-white">Source code</h3><p className="mt-1 text-xs text-zinc-600 sm:text-sm">Inspect the Go core and Python extensions on GitHub.</p></div><ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-300" /></a></div></div></div></section>

      <section className="border-t border-white/[0.07] px-6 py-16 text-center md:px-10"><Terminal className="mx-auto h-5 w-5 text-lime-300" /><p className="mt-4 text-lg font-bold text-white">Discover thoughtfully. Verify deliberately.</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">Revealr is designed for legitimate, authorized network security work.</p><Link href="/revealr/security" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-lime-300 hover:text-lime-200">Review the security model <ArrowRight className="h-3.5 w-3.5" /></Link></section>
    </div>
  );
}
