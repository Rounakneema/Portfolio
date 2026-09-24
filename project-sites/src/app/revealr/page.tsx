import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Terminal, Zap, Database, Puzzle, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Revealr — Adaptive Network Scanner & Vulnerability Mapper',
    description: 'High-performance Go-based network scanner achieving 50,000 ports/min with stateful SQLite-backed scanning, network drift detection, and modular Python vulnerability mapping.',
    keywords: [
        'Go network scanner', 'port scanner', 'vulnerability mapper', 'network security',
        'high performance port scanning', 'network drift detection', 'SQLite stateful scanner',
        'Python plugin scanner', 'nmap alternative', 'Go security tools'
    ],
    alternates: { canonical: 'https://revealr.rounakneema.in' },
    openGraph: {
        title: 'Revealr — Adaptive Network Scanner',
        description: 'High-concurrency Go network scanner. 50k ports/min. Stateful. Extensible.',
        url: 'https://revealr.rounakneema.in',
        siteName: 'Revealr',
        type: 'website',
    },
};

export default function RevealrHome() {
    return (
        <div>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-xs tracking-widest uppercase">Active · Production Ready</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6">
                    Revealr
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-4">
                    Adaptive high-concurrency network scanner and vulnerability mapping platform.
                </p>
                <p className="text-zinc-500 text-base max-w-xl leading-relaxed mb-12">
                    Built in Go. 50,000 ports/minute. Stateful scanning with SQLite-backed network drift detection and a modular Python plugin system for offline vulnerability mapping.
                </p>

                <div className="flex flex-wrap gap-4 mb-20">
                    <a href="https://github.com/rounakneema/Revealr" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-6 py-3 bg-green-500 text-black font-black rounded-lg hover:bg-green-400 transition-colors">
                        <Github className="w-4 h-4" /> View Source
                    </a>
                    <Link href="/revealr/docs"
                        className="flex items-center gap-2.5 px-6 py-3 border border-zinc-700 text-zinc-300 font-bold rounded-lg hover:border-white hover:text-white transition-all">
                        Documentation <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/revealr/benchmarks"
                        className="flex items-center gap-2.5 px-6 py-3 border border-zinc-700 text-zinc-300 font-bold rounded-lg hover:border-white hover:text-white transition-all">
                        Benchmarks <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-20 border-b border-zinc-800">
                    {[
                        { value: '50K', unit: 'ports/min', label: 'Throughput' },
                        { value: 'Go', unit: '+ Python', label: 'Stack' },
                        { value: 'SQLite', unit: 'Stateful', label: 'Persistence' },
                        { value: '3', unit: 'Scan Profiles', label: 'IDS Evasion' },
                    ].map(s => (
                        <div key={s.label}>
                            <div className="text-green-400 text-3xl font-black">{s.value}</div>
                            <div className="text-zinc-500 text-xs">{s.unit}</div>
                            <div className="text-zinc-400 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Terminal Demo */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Quick Start</div>
                <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-800 bg-zinc-900">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-zinc-500 text-xs">revealr — bash</span>
                    </div>
                    <div className="p-8 text-sm space-y-3">
                        <div className="flex gap-2">
                            <span className="text-blue-400">➜</span>
                            <span className="text-zinc-500">~</span>
                            <span className="text-white">./revealr -target 10.10.11.0/24 --rate 50000</span>
                        </div>
                        <div className="pl-4 space-y-2 border-l-2 border-zinc-800 mt-4">
                            <div className="text-green-400">[+] Target: 10.10.11.15 (Linux/Ubuntu)</div>
                            <div className="text-zinc-300 pl-4">├── 22/tcp  OPEN  (ssh)</div>
                            <div className="text-zinc-300 pl-4">├── 80/tcp  OPEN  (http) → nginx/1.18.0</div>
                            <div className="text-yellow-400 pl-4">└── 8080/tcp OPEN (http) → Node.js Express</div>
                            <div className="text-red-400">[DIFF] New service detected since last scan: 8080/tcp</div>
                            <div className="text-blue-400">[*] Scan complete in 0.8s (50k pps)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Pillars */}
            <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-12">// Core Capabilities</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: Zap,
                            title: 'High-Concurrency Engine',
                            desc: 'Raw socket packet generation using Go goroutines achieves 50k ports/minute throughput on local networks.',
                            color: 'text-green-400',
                        },
                        {
                            icon: Database,
                            title: 'Stateful Persistence',
                            desc: 'SQLite-backed scan state enables scan resumption after interruption and network drift detection between runs.',
                            color: 'text-blue-400',
                        },
                        {
                            icon: Puzzle,
                            title: 'Python Plugin System',
                            desc: 'Extend fingerprinting and vulnerability checks without recompiling the core binary using the Python plugin IPC bridge.',
                            color: 'text-purple-400',
                        },
                        {
                            icon: Terminal,
                            title: 'Scan Profiles',
                            desc: 'Paranoid, Stealthy, and Polite profiles control timing behavior to adapt to IDS/IPS environments.',
                            color: 'text-yellow-400',
                        },
                    ].map(f => (
                        <div key={f.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
                            <f.icon className={`w-7 h-7 ${f.color} mb-4`} />
                            <h3 className="text-white font-bold text-base mb-3">{f.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Deep-Dive Links */}
            <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-12">// Explore the Engineering</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { href: '/revealr/architecture', title: 'System Architecture', desc: 'Scanner engine, SQLite state layer, Python IPC bridge, and output pipeline.' },
                        { href: '/revealr/benchmarks', title: 'Performance Benchmarks', desc: 'Measured throughput, test methodology, and comparison vs. nmap and masscan.' },
                        { href: '/revealr/security', title: 'Security Model', desc: 'Scan profiles, IDS-awareness, network timing controls, and responsible use.' },
                        { href: '/revealr/docs', title: 'Documentation', desc: 'CLI flags, plugin API reference, output formats, and example workflows.' },
                        { href: '/revealr/changelog', title: 'Changelog', desc: 'Development history, version milestones, and feature additions.' },
                        { href: 'https://github.com/rounakneema/Revealr', title: 'Source Code', desc: 'Full Go and Python source on GitHub.', external: true },
                    ].map(l => (
                        <Link key={l.href} href={l.href}
                            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } as Record<string, string> : {})}
                            className="group flex items-start justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-500/50 hover:bg-zinc-800 transition-all">
                            <div>
                                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-green-400 transition-colors">{l.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{l.desc}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0 group-hover:text-green-400 group-hover:translate-x-1 transition-all mt-0.5" />
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
