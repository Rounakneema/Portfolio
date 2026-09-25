import Link from 'next/link';
import { ArrowLeft, Server, Activity, ArrowRight, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Architecture — Revealr Network Scanner',
    description: 'Deep-dive into Revealr\'s system architecture: the concurrent Go scanning engine, SQLite state layer, Python IPC plugin bridge, and structured output pipeline.',
    alternates: { canonical: 'https://revealr.rounakneema.in/architecture' },
};

export default function RevealrArchitecture() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-[#080b0a] text-zinc-400 font-sans">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
                <div className="absolute left-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-lime-500/5 blur-[120px]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <nav className="relative z-50 flex h-16 items-center border-b border-white/[0.07] px-6 md:px-10">
                <Link href="/revealr" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white mr-4">
                    <ArrowLeft className="h-4 w-4" />
                </Link>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-200">REVEALR <span className="text-zinc-600">/</span> ARCHITECTURE</span>
            </nav>

            <div className="max-w-6xl mx-auto px-6 py-20 md:px-10">
                <div className="mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300 mb-4">// System Architecture</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">How Revealr Works</h1>
                    <p className="text-sm leading-6 text-zinc-500 max-w-2xl">
                        Revealr is structured as four loosely coupled layers communicating through well-defined interfaces, enabling high throughput without sacrificing extensibility.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c100e] mb-16 shadow-2xl shadow-lime-900/10">
                    <div className="border-b border-white/[0.08] bg-white/[0.02] px-5 py-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                        <Server className="h-3.5 w-3.5 text-lime-300" /> System Overview
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="text-[11px] sm:text-xs text-lime-100/70 font-mono leading-relaxed whitespace-pre">{`
  CLI Input / Config
        │
        ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │                     REVEALR CORE (Go)                           │
  │                                                                 │
  │   ┌────────────────┐      ┌────────────────────┐               │
  │   │  Concurrency   │      │   State Manager    │               │
  │   │  Engine        │◄────►│   (SQLite)         │               │
  │   │  (Goroutines)  │      │                    │               │
  │   │                │      │  - Resume scans    │               │
  │   │  - Raw Sockets │      │  - Diff / Drift    │               │
  │   │  - Rate Limiter│      │  - History         │               │
  │   │  - Scan Profiles│     └────────────────────┘               │
  │   └───────┬────────┘                                           │
  │           │                                                     │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Service Fingerprinter          │                         │
  │   │   (Banner Grabbing + Built-ins)  │                         │
  │   └───────┬──────────────────────────┘                         │
  │           │ IPC (stdin/stdout)                                  │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Python Plugin Bridge           │                         │
  │   │   - Custom fingerprinters        │                         │
  │   │   - Offline vuln checks          │                         │
  │   │   - User-defined scripts         │                         │
  │   └───────┬──────────────────────────┘                         │
  │           │                                                     │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Output Layer                   │                         │
  │   │   JSON / STDOUT / Report         │                         │
  │   └──────────────────────────────────┘                         │
  └─────────────────────────────────────────────────────────────────┘
`}</pre>
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            num: '01',
                            title: 'Concurrency Engine',
                            icon: Zap,
                            color: 'border-lime-400/20',
                            bg: 'bg-lime-400/10',
                            accent: 'text-lime-300',
                            sections: [
                                { heading: 'Goroutine Pool + Raw Sockets', body: 'The scanning engine uses a bounded goroutine pool to dispatch raw TCP SYN packets via raw sockets. This bypasses the OS TCP stack for maximum throughput, allowing 50,000+ probes per minute without maintaining full socket state on every port.' },
                                { heading: 'Rate Limiter', body: 'A token-bucket rate limiter controls the packet dispatch rate. The --rate flag configures the burst ceiling, preventing Revealr from overwhelming the target network adapter or triggering IDS rate-based alerts prematurely.' },
                            ],
                        },
                        {
                            num: '02',
                            title: 'State Manager (SQLite)',
                            icon: Database,
                            color: 'border-sky-400/20',
                            bg: 'bg-sky-400/10',
                            accent: 'text-sky-300',
                            sections: [
                                { heading: 'Scan Resumption', body: 'Every scan writes incremental state to a local SQLite database keyed by target IP and scan session ID. If a scan is interrupted, Revealr re-reads the last known state and continues from the last unconfirmed port range.' },
                                { heading: 'Network Drift Detection', body: 'Historical scan results are persisted per-host. On subsequent scans, Revealr performs a structural diff between the current result set and the stored baseline. Any new open port, service version change, or disappeared service is flagged as a [DIFF] event.' },
                            ],
                        },
                        {
                            num: '03',
                            title: 'Service Fingerprinter',
                            icon: Shield,
                            color: 'border-amber-400/20',
                            bg: 'bg-amber-400/10',
                            accent: 'text-amber-300',
                            sections: [
                                { heading: 'Banner Grabbing', body: 'For each confirmed open port, a secondary probe establishes a brief connection to read the initial service banner. This banner is matched against a built-in pattern library to identify common services (SSH, HTTP, FTP, SMTP, Redis, etc.) without needing an external database.' },
                            ],
                        },
                        {
                            num: '04',
                            title: 'Python Plugin Bridge',
                            icon: Activity,
                            color: 'border-violet-400/20',
                            bg: 'bg-violet-400/10',
                            accent: 'text-violet-300',
                            sections: [
                                { heading: 'IPC via stdin/stdout', body: 'Revealr spawns Python plugin processes and communicates via JSON-encoded messages over stdin/stdout. This allows plugins to be written in standard Python without any special runtime dependencies or custom SDK installation.' },
                                { heading: 'Offline Vulnerability Checks', body: 'Plugins can ship with local CVE data files or version matching tables, enabling offline vulnerability correlation without internet access — critical for air-gapped or controlled assessment environments.' },
                            ],
                        },
                    ].map((layer) => (
                        <div key={layer.num} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-10 transition-all hover:border-white/20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${layer.color} ${layer.bg}`}>
                                    <layer.icon className={`h-6 w-6 ${layer.accent}`} />
                                </div>
                                <div>
                                    <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${layer.accent}`}>Layer {layer.num}</p>
                                    <h2 className="text-2xl font-bold tracking-tight text-white">{layer.title}</h2>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {layer.sections.map(s => (
                                    <div key={s.heading}>
                                        <h3 className="text-sm font-bold text-zinc-200 mb-2">{s.heading}</h3>
                                        <p className="text-xs leading-6 text-zinc-500">{s.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-end">
                    <Link href="/revealr/benchmarks" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-lime-300 hover:text-lime-200">
                        Next: Benchmarks <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
