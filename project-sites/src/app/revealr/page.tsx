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
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { NetworkTopology } from '@/components/revealr/NetworkTopology';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Revealr — High-Speed Go Network Scanner & Vulnerability Mapping Tool',
  description: 'High-performance Go-based network scanner with stateful scan history, network drift detection, and modular Python vulnerability mapping.',
  keywords: ['Go network scanner', 'port scanner', 'vulnerability mapper', 'network security', 'network drift detection', 'SQLite stateful scanner'],
  alternates: { canonical: 'https://revealr.rounakneema.in' },
  openGraph: {
    title: 'Revealr — High-Speed Go Network Scanner & Vulnerability Mapping Tool',
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
  { href: '/architecture', title: 'Architecture', detail: 'The engine, state layer, plugin bridge, and output pipeline.' },
  { href: '/benchmarks', title: 'Benchmarks', detail: 'Throughput methodology and performance results.' },
  { href: '/security', title: 'Security model', detail: 'Profiles, controls, and responsible-use guardrails.' },
  { href: '/docs', title: 'Documentation', detail: 'CLI flags, output formats, and plugin workflows.' },
];

export default function RevealrHome() {
  return (
    <div className="relative isolate overflow-hidden bg-[#080b0a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
        <div className="absolute left-1/2 top-[-330px] h-[730px] w-[730px] -translate-x-1/2 rounded-full border border-lime-300/10 bg-lime-400/[0.035] shadow-[0_0_150px_45px_rgba(132,204,22,0.08)]" />
        <div className="absolute left-1/2 top-[-125px] h-[410px] w-[410px] -translate-x-1/2 rounded-full border border-lime-300/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <ProjectJsonLd project={{
              name: 'Revealr',
              url: 'https://revealr.rounakneema.in',
              description: 'High-Speed Go Network Scanner & Vulnerability Mapping Tool',
              programmingLanguage: 'Go',
              schemaCategory: 'SoftwareApplication',
              faq: [
                  { question: "What is Revealr?", answer: "Revealr is a high-speed Go-based network scanner and vulnerability mapping tool designed to maintain stateful scan history across sessions." },
                  { question: "What does Revealr scan?", answer: "It scans network ports up to the maximum 65535 range, identifying open services and fingerprinting them." },
                  { question: "How does Revealr perform network scanning?", answer: "Revealr uses a highly concurrent Go engine with raw sockets for rapid discovery of network assets." },
                  { question: "How does Revealr detect network changes?", answer: "It stores previous scan states in a local SQLite database and diffs current results against the baseline to detect drift." },
                  { question: "Can Revealr be extended?", answer: "Yes, it features a Python plugin bridge that allows users to write custom vulnerability mapping and fingerprinting scripts." },
                  { question: "How fast is Revealr?", answer: "Benchmarks show Revealr can achieve scan times of ~0.8s for local networks." },
                  { question: "Who built Revealr?", answer: "Revealr was built by Rounak Neema for authorized network security assessments." }
              ]
          }} />
          <div className="relative mx-auto mt-16 max-w-6xl p-2 md:mt-20 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300">
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-lime-300/20 via-transparent to-transparent blur-sm" />
            <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#090c0b]">
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-lime-300/80" /><span className="ml-2 hidden text-[10px] text-zinc-600 sm:inline">revealr / scan session</span></div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-lime-300"><Activity className="h-3 w-3" /> Live analysis</div>
              </div>
              <div className="grid lg:grid-cols-[1.26fr_0.74fr]">
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Current target</p><div className="mt-1 flex items-center gap-2 text-lg font-bold text-white"><Network className="h-4 w-4 text-lime-300" /> 10.10.11.0/24</div></div><span className="rounded-md border border-lime-300/15 bg-lime-300/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-300">Stealth profile</span></div>
                  
                  <StaggerContainer className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                    {[['63,981', 'probes sent'], ['41', 'services found'], ['02', 'new since baseline']].map(([value, label]) => (
                      <StaggerItem key={label}>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-3 sm:p-4 hover:-translate-y-1 transition-all duration-300">
                          <p className="text-lg font-black tracking-tight text-white sm:text-xl">{value}</p>
                          <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px]">{label}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <div className="mt-5 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Open services</span><span className="text-[10px] text-zinc-600">last response 12ms</span></div>
                    <StaggerContainer className="divide-y divide-white/[0.06]">
                      {[['22', 'ssh', 'OpenSSH 8.9', 'Baseline'], ['80', 'http', 'nginx 1.22.1', 'Baseline'], ['8080', 'http-alt', 'Node.js Express', 'New']].map(([port, service, detail, state]) => (
                        <StaggerItem key={port}>
                          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3 px-4 py-3 text-xs hover:-translate-y-1 transition-all duration-300">
                            <span className="font-bold text-lime-300">{port}</span><span><b className="font-medium text-zinc-200">{service}</b><span className="hidden text-zinc-600 sm:inline"> · {detail}</span></span><span className={state === 'New' ? 'rounded bg-amber-300/10 px-1.5 py-1 text-[9px] font-bold uppercase text-amber-200' : 'text-[10px] text-zinc-600'}>{state}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
                <div className="border-t border-white/[0.07] bg-gradient-to-b from-lime-300/[0.035] to-transparent p-5 lg:border-l lg:border-t-0 sm:p-7">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500"><Radar className="h-3.5 w-3.5 text-lime-300" /> Signal map</div>
                  <div className="relative mx-auto mt-7 aspect-square max-w-[270px] flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden p-3 hover:-translate-y-1 transition-all duration-300">
                      <NetworkTopology />
                  </div>
                  <StaggerContainer className="mt-7 space-y-3">
                    {[['Scan engine', 'Running', 'text-lime-300'], ['State store', 'Synced', 'text-sky-300'], ['Diff detector', '1 alert', 'text-amber-200']].map(([label, value, color]) => (
                      <StaggerItem key={label}>
                        <div className="flex items-center justify-between text-xs hover:-translate-y-1 transition-all duration-300"><span className="text-zinc-500">{label}</span><span className={`flex items-center gap-1.5 font-medium ${color}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{value}</span></div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-y border-white/[0.07] bg-white/[0.018]">
          <StaggerContainer className="mx-auto flex flex-col sm:flex-row max-w-7xl divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07] px-6 md:px-10 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500">
            {[['50K', 'ports / minute'], ['SQLite', 'stateful history'], ['Python', 'plugin bridge']].map(([metric, label]) => (
              <StaggerItem key={label} className="flex-1">
                <div className="py-7 px-4 flex items-center justify-center gap-4 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl font-black text-lime-400">{metric}</span><span>{label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-lime-500/20 backdrop-blur-md rounded-lg shadow-xl text-lime-400 text-[9px] uppercase tracking-widest mb-6">
                      <Database className="w-3 h-3" /> Zero Amnesia
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-white mb-6">
                      Fast is useful. <br />Context is actionable.
                  </h2>
                  <p className="text-zinc-400 leading-relaxed font-sans text-base mb-8">
                      Traditional scanners suffer from amnesia. They forget the network the second the scan ends. Revealr turns point-in-time scans into a continuous, stateful timeline of your attack surface by persisting every assessment to a local SQLite vault.
                  </p>
                  <StaggerContainer className="space-y-4 font-mono text-xs">
                      <StaggerItem>
                        <div className="flex gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl text-zinc-300 hover:-translate-y-1 transition-all duration-300">
                            <span className="text-lime-500">01</span>
                            <span>Discover raw assets via highly concurrent Go engine</span>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="flex gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl text-zinc-300 hover:-translate-y-1 transition-all duration-300">
                            <span className="text-sky-500">02</span>
                            <span>Hash and store banners immutably in SQLite</span>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="flex gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl text-zinc-300 hover:-translate-y-1 transition-all duration-300">
                            <span className="text-violet-500">03</span>
                            <span>Trigger Python IPC bridge for vulnerability correlation</span>
                        </div>
                      </StaggerItem>
                  </StaggerContainer>
              </div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 font-mono text-xs overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 via-sky-500 to-violet-500 opacity-50" />
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4">
                      <span className="text-zinc-600 uppercase tracking-widest">Baseline Diff</span>
                      <span className="text-amber-400 animate-pulse">DRIFT DETECTED</span>
                  </div>
                  <div className="text-zinc-500 mb-2">[ BASELINE: MONDAY 08:00 ]</div>
                  <div className="text-zinc-300 pl-4 border-l border-white/[0.05] mb-6 leading-relaxed">
                      10.0.0.45<br/>
                      ├── :22   [SSH]    OpenSSH 8.9p1<br/>
                      └── :443  [HTTPS]  nginx/1.18.0
                  </div>
                  <div className="text-zinc-500 mb-2">[ CURRENT: TUESDAY 09:00 ]</div>
                  <div className="text-zinc-300 pl-4 border-l border-white/[0.05] leading-relaxed">
                      10.0.0.45<br/>
                      ├── :22   [SSH]    OpenSSH 8.9p1   <span className="text-zinc-600">(Unchanged)</span><br/>
                      ├── :443  [HTTPS]  nginx/1.18.0    <span className="text-zinc-600">(Unchanged)</span><br/>
                      └── :8080 <span className="text-amber-400 font-bold">[HTTP]   Node.js Express (✦ NEW)</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-rose-400">⚠ Exposed staging API environment</span>
                  </div>
              </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-t border-white/[0.07] bg-[#0c1210]">
          <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Explore the documentation</h3>
                  <p className="text-sm text-zinc-500 max-w-md leading-relaxed">Detailed breakdowns of the scan engine, raw socket methodology, and SQLite state schemas.</p>
              </div>
              <div className="flex gap-4 font-mono text-xs uppercase tracking-widest font-bold">
                  <Link href="/architecture" className="px-6 py-3 bg-white text-black hover:bg-lime-400 hover:-translate-y-1 transition-all duration-300 rounded-lg shadow-xl">Architecture</Link>
                  <Link href="/docs" className="px-6 py-3 bg-white/5 border border-zinc-700 backdrop-blur-md rounded-lg shadow-xl hover:border-lime-500 hover:text-lime-400 hover:-translate-y-1 transition-all duration-300 text-white">CLI Reference</Link>
              </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-t border-white/[0.07] px-6 py-8 md:px-10 bg-white/[0.01]">
          <div className="mx-auto max-w-7xl">
              <StaggerContainer className="flex flex-wrap items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.16em]">
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">Language</span><span className="text-lime-300 border border-lime-300/20 bg-lime-400/10 px-2 py-0.5 rounded">Go</span></div></StaggerItem>
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">State</span><span className="text-sky-300 border border-sky-300/20 bg-sky-400/10 px-2 py-0.5 rounded">SQLite</span></div></StaggerItem>
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">Extension</span><span className="text-violet-300 border border-violet-300/20 bg-violet-400/10 px-2 py-0.5 rounded">Python</span></div></StaggerItem>
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">Network</span><span className="text-zinc-300 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded">Raw TCP</span></div></StaggerItem>
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">Range</span><span className="text-zinc-300 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded">65,535 Ports</span></div></StaggerItem>
                  <StaggerItem><div className="flex items-center gap-3"><span className="text-zinc-600">Status</span><span className="text-amber-300 border border-amber-300/20 bg-amber-400/10 px-2 py-0.5 rounded">v1.0-beta</span></div></StaggerItem>
              </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <section className="border-t border-white/[0.07] px-6 py-16 text-center md:px-10">
          <Terminal className="mx-auto h-5 w-5 text-lime-300" />
          <p className="mt-4 text-lg font-bold text-white tracking-tight">Discover thoughtfully. Verify deliberately.</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600">Revealr is designed for legitimate, authorized network security work.</p>
          <Link href="/security" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-lime-300 hover:text-lime-200 hover:-translate-y-1 transition-all duration-300">Review the security model <ArrowRight className="h-3.5 w-3.5" /></Link>
        </section>
      </ScrollReveal>
    
      <ScrollReveal direction="up" delay={0.1}>
        <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
          <h2 className="text-2xl font-black text-white mb-8 tracking-tight">Frequently Asked Questions</h2>
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">01.</span> What is Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">Revealr is a high-speed Go-based network scanner and vulnerability mapping tool designed to maintain stateful scan history across sessions.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">02.</span> What does Revealr scan?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">It scans network ports up to the maximum 65535 range, identifying open services and fingerprinting them.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">03.</span> How does Revealr perform network scanning?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">Revealr uses a highly concurrent Go engine with raw sockets for rapid discovery of network assets.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">04.</span> How does Revealr detect network changes?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">It stores previous scan states in a local SQLite database and diffs current results against the baseline to detect drift.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">05.</span> Can Revealr be extended?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">Yes, it features a Python plugin bridge that allows users to write custom vulnerability mapping and fingerprinting scripts.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">06.</span> How fast is Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">Benchmarks show Revealr can achieve scan times of ~0.8s for local networks.</p>
              </details>
            </StaggerItem>
            <StaggerItem>
              <details className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 hover:-translate-y-1 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-white"><span className="text-lime-300 mr-4">07.</span> Who built Revealr?<span className="transition group-open:rotate-180">▼</span></summary>
                <p className="mt-4 text-zinc-400 pl-8 leading-relaxed">Revealr was built by Rounak Neema for authorized network security assessments.</p>
              </details>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
      </div>
    </div>
  );
}
