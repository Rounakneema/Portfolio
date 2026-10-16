import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cpu, Database, ShieldCheck, Terminal, HardDrive, Sparkles } from 'lucide-react';
import MermaidDiagram from '@/components/Mermaid';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
    title: 'AXIOM OS · Architecture Spec',
    description: 'Deep dive into AXIOM OS system topology, Specter Go daemon, SQLite memory layer, and local-first AI execution.',
    alternates: { canonical: 'https://axiomos.rounakneema.in/architecture' },
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#faf7ee] text-[#1c1917] selection:bg-[#2d5a3f] selection:text-white pb-32 font-sans">
            <ProjectJsonLd slug="axiomos" pageType="Architecture" />

            {/* Top Subpage Navigation Bar */}
            <nav className="border-b border-[#e5ded2] bg-[#faf7ee]/90 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/axiomos"
                            className="text-[#57534e] hover:text-[#2d5a3f] font-medium text-xs flex items-center gap-2 transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Return to AXIOM OS</span>
                        </Link>
                        <span className="text-[#d6caba]">/</span>
                        <span className="text-[#2d5a3f] font-mono font-bold tracking-widest uppercase text-[11px]">
                            Architecture Spec
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/axiomos/decisions"
                            className="text-xs font-mono text-[#57534e] hover:text-[#2d5a3f] transition-colors hidden sm:block"
                        >
                            Decisions &rarr;
                        </Link>
                        <Link
                            href="/axiomos/docs"
                            className="text-xs font-mono text-[#57534e] hover:text-[#2d5a3f] transition-colors hidden sm:block"
                        >
                            Docs &rarr;
                        </Link>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] font-mono text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f]"></span>
                            Zero-Cloud Invariant
                        </span>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 space-y-16">
                
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <header className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] text-[11px] font-mono font-semibold uppercase tracking-wider">
                            <Cpu className="w-3.5 h-3.5" />
                            Local-First System Specification
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1917] font-serif leading-[1.1]">
                            System Topology &amp; Daemon Architecture
                        </h1>
                        <p className="text-[#57534e] text-base sm:text-lg leading-relaxed">
                            AXIOM OS operates entirely on the local machine. There is no cloud telemetry, no remote inference, and no external API dependencies. The architecture is strictly separated into three layers: Collection (Specter), Storage (SQLite), and Intelligence (Ollama + Qwen).
                        </p>
                    </header>
                </ScrollReveal>

                {/* Section 1: Top-Level Topology */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    1. Top-Level Local Topology
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Air-Gapped Flow</span>
                        </div>
                        
                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed max-w-2xl">
                                Strict process boundaries guarantee that telemetry stays local. The Go daemon writes to SQLite; the local Ollama LLM queries SQLite on demand to evaluate context.
                            </p>
                            <div className="bg-white/80 border border-[#e5ded2] rounded-xl p-4 sm:p-6 overflow-x-auto">
                                <MermaidDiagram chart={`flowchart TD
    subgraph USER_MACHINE ["USER LOCAL MACHINE (Zero Cloud Egress)"]
        Specter["Specter Daemon<br/>(Go Background Service)"]
        SQLite["SQLite Memory Layer<br/>(~/.axiomos/telemetry.db)"]
        Ollama["Ollama Engine<br/>(qwen2.5:3b Local LLM)"]
        
        Specter -- "Deterministic Telemetry" --> SQLite
        Ollama -- "Read Context & Infer" --> SQLite
    end`} />
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 2: Specter Daemon */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    2. Specter Daemon (Sensory Organ)
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Go Core</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                Written in Go for minimal overhead, the Specter daemon is the sensory organ of AXIOM. It continuously monitors window focus, active processes, and system state. It does not analyze text; it merely records deterministic facts.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                                <div className="p-4 rounded-xl bg-white/80 border border-[#e5ded2] space-y-1">
                                    <span className="text-[#78716c] uppercase text-[10px]">Process Name</span>
                                    <p className="text-sm font-bold text-[#2d5a3f]">specter.exe</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/80 border border-[#e5ded2] space-y-1">
                                    <span className="text-[#78716c] uppercase text-[10px]">Memory Footprint</span>
                                    <p className="text-sm font-bold text-[#2d5a3f]">&lt; 15MB RAM</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/80 border border-[#e5ded2] space-y-1">
                                    <span className="text-[#78716c] uppercase text-[10px]">Sampling Interval</span>
                                    <p className="text-sm font-bold text-[#2d5a3f]">1Hz (1 poll / sec)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 3: Local Memory Layer */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    3. Local Memory Layer (SQLite Schema)
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Immutable Ledger</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                All telemetry is funneled into a local SQLite database. This acts as the single source of truth. The AI layer cannot modify the raw telemetry, ensuring an immutable ledger of behavior that prevents the LLM from hallucinating past user actions.
                            </p>

                            <div className="rounded-xl border border-[#2d5a3f]/30 bg-[#202722] text-[#d4e2d4] p-5 font-mono text-xs overflow-x-auto shadow-inner">
                                <div className="text-[#7ba88a] text-[10px] mb-2">// TELEMETRY SCHEMA</div>
                                <pre><code>{`CREATE TABLE telemetry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    active_window TEXT NOT NULL,
    process_name TEXT NOT NULL,
    category TEXT DEFAULT 'UNKNOWN'
);`}</code></pre>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 4: AI Interpretation */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    4. Local AI Interpretation (Ollama + Qwen)
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">On-Demand Infer</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-4">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                The intelligence layer runs on demand, querying the SQLite database for recent behavior contexts. Using small, efficient local models via Ollama (such as Qwen 2.5 3B), it cross-references recorded actions against predefined user policies to generate Focus Scores and deliver gentle or blunt contextual coaching.
                            </p>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 5: Daemon Execution & Live Session Trace Evidence */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#2d5a3f]/40 bg-[#1c221e] text-[#d4e2d4] overflow-hidden shadow-xl">
                        <div className="bg-[#151a17] border-b border-[#2d5a3f]/30 px-6 py-3.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                                <span className="ml-2 font-mono text-xs text-[#a0c2a7] font-bold">
                                    Evidence: Local-First Privacy &amp; Offline AI Execution
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#7ba88a] uppercase tracking-wider">
                                0 BYTES EGRESS
                            </span>
                        </div>
                        <div className="p-6 sm:p-8 font-mono text-xs leading-relaxed space-y-2">
                            <div><span className="text-[#a0c2a7] font-bold">$</span> specter start --daemon</div>
                            <div className="text-zinc-400">[+] Telemetry ingest started locally. Network: DISABLED (0 bytes egress)</div>
                            <div className="text-zinc-400">[+] SQLite WAL store: opened at ~/.axiomos/telemetry.db</div>
                            <div className="text-zinc-400">[+] Ollama inference engine loaded in memory (qwen2.5:3b)</div>
                            <div className="text-emerald-400 font-semibold">[✓] Policy Engine: Running locally without cloud APIs</div>
                            <div className="text-emerald-400 font-semibold">[✓] Loop interval: 1Hz, memory usage: 14.2MB</div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Bottom Navigation */}
                <div className="pt-8 border-t border-[#e5ded2] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                        href="/axiomos"
                        className="text-xs font-semibold text-[#2d5a3f] hover:text-[#1c1917] transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to AXIOM OS Overview</span>
                    </Link>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#57534e]">
                        <Link href="/axiomos/decisions" className="hover:text-[#2d5a3f] transition-colors">
                            Engineering Decisions &rarr;
                        </Link>
                        <Link href="/axiomos/docs" className="hover:text-[#2d5a3f] transition-colors">
                            System Documentation &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
