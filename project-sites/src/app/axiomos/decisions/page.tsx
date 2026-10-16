import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Scale, Cpu, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
    title: 'AXIOM OS · Engineering Decisions & Tradeoffs',
    description: 'Engineering tradeoffs, zero-cloud privacy constraints, and local LLM model selection for AXIOM OS.',
    alternates: { canonical: 'https://axiomos.rounakneema.in/decisions' },
};

export default function DecisionsPage() {
    return (
        <main className="min-h-screen bg-[#faf7ee] text-[#1c1917] selection:bg-[#2d5a3f] selection:text-white pb-32 font-sans">
            <ProjectJsonLd slug="axiomos" pageType="Decisions" />

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
                            Decisions &amp; Tradeoffs
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/axiomos/architecture"
                            className="text-xs font-mono text-[#57534e] hover:text-[#2d5a3f] transition-colors hidden sm:block"
                        >
                            Architecture &rarr;
                        </Link>
                        <Link
                            href="/axiomos/docs"
                            className="text-xs font-mono text-[#57534e] hover:text-[#2d5a3f] transition-colors hidden sm:block"
                        >
                            Docs &rarr;
                        </Link>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] font-mono text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f]"></span>
                            Architectural Rationale
                        </span>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 space-y-16">
                
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <header className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] text-[11px] font-mono font-semibold uppercase tracking-wider">
                            <Scale className="w-3.5 h-3.5" />
                            Engineering Tradeoffs
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1917] font-serif leading-[1.1]">
                            Architectural Decisions &amp; Zero-Cloud Constraints
                        </h1>
                        <p className="text-[#57534e] text-base sm:text-lg leading-relaxed">
                            Every design choice in AXIOM OS prioritizes strict local privacy, minimal battery drain, and deterministic accountability over cloud convenience.
                        </p>
                    </header>
                </ScrollReveal>

                {/* Decision 1: Zero-Cloud Privacy */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    01 / Zero-Cloud Privacy Invariant
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Core Invariant</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm sm:text-base text-[#44403c] leading-relaxed">
                                Modern productivity agents rely heavily on cloud APIs to process context. This fundamentally compromises privacy when dealing with screen content, private messages, and personal work habits. AXIOM OS enforces a strict <strong>zero-cloud constraint</strong>.
                            </p>

                            <StaggerContainer>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <StaggerItem>
                                        <div className="p-5 rounded-xl bg-white/80 border border-[#e5ded2] space-y-2">
                                            <div className="flex items-center gap-2 text-[#2d5a3f] font-mono text-xs font-bold">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Zero API Keys</span>
                                            </div>
                                            <p className="text-xs text-[#57534e] leading-relaxed">
                                                No OpenAI, Anthropic, or external credentials required. The system works completely air-gapped.
                                            </p>
                                        </div>
                                    </StaggerItem>
                                    <StaggerItem>
                                        <div className="p-5 rounded-xl bg-white/80 border border-[#e5ded2] space-y-2">
                                            <div className="flex items-center gap-2 text-[#2d5a3f] font-mono text-xs font-bold">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Local Ollama Run</span>
                                            </div>
                                            <p className="text-xs text-[#57534e] leading-relaxed">
                                                All intelligence executes directly on local CPU/GPU silicon using quantized GGUF weights.
                                            </p>
                                        </div>
                                    </StaggerItem>
                                    <StaggerItem>
                                        <div className="p-5 rounded-xl bg-white/80 border border-[#e5ded2] space-y-2">
                                            <div className="flex items-center gap-2 text-[#2d5a3f] font-mono text-xs font-bold">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Loopback Only</span>
                                            </div>
                                            <p className="text-xs text-[#57534e] leading-relaxed">
                                                Telemetry never leaves the 127.0.0.1 interface, enforced with operating-system socket blocks.
                                            </p>
                                        </div>
                                    </StaggerItem>
                                </div>
                            </StaggerContainer>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Decision 2: Model Selection */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    02 / Local Model Selection (VRAM vs Latency)
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Silicon Benchmarks</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm sm:text-base text-[#44403c] leading-relaxed">
                                Running an LLM constantly in the background can monopolize system resources. We evaluated several open-weights models before settling on the 3-billion parameter class for everyday background execution.
                            </p>

                            <div className="overflow-x-auto rounded-xl border border-[#e5ded2] bg-white/80">
                                <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
                                    <thead>
                                        <tr className="border-b border-[#e5ded2] bg-[#ede6d8]/60 text-[#2b2723] font-mono text-xs uppercase tracking-wider">
                                            <th className="py-3 px-4 sm:px-6">Candidate Model</th>
                                            <th className="py-3 px-4 sm:px-6">VRAM Footprint</th>
                                            <th className="py-3 px-4 sm:px-6">Reasoning Speed</th>
                                            <th className="py-3 px-4 sm:px-6">Engineering Verdict</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#e5ded2] text-[#44403c]">
                                        <tr className="hover:bg-[#faf7ee] transition-colors">
                                            <td className="py-3.5 px-4 sm:px-6 font-semibold">Llama-3-8B</td>
                                            <td className="py-3.5 px-4 sm:px-6 font-mono text-xs">~6.0 GB</td>
                                            <td className="py-3.5 px-4 sm:px-6">Medium</td>
                                            <td className="py-3.5 px-4 sm:px-6 text-[#78716c]">High reasoning quality, but excessive memory drain on ultraportable laptops.</td>
                                        </tr>
                                        <tr className="bg-[#2d5a3f]/5 hover:bg-[#2d5a3f]/10 transition-colors font-medium">
                                            <td className="py-3.5 px-4 sm:px-6 text-[#2d5a3f] font-bold">Qwen-2.5-3B (Selected)</td>
                                            <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-[#2d5a3f]">~2.5 GB</td>
                                            <td className="py-3.5 px-4 sm:px-6 text-[#2d5a3f]">Sub-second (Very Fast)</td>
                                            <td className="py-3.5 px-4 sm:px-6 text-[#2d5a3f] font-semibold">Optimal balance: Fits in unified memory with negligible thermal footprint.</td>
                                        </tr>
                                        <tr className="hover:bg-[#faf7ee] transition-colors">
                                            <td className="py-3.5 px-4 sm:px-6 font-semibold">Phi-3-Mini</td>
                                            <td className="py-3.5 px-4 sm:px-6 font-mono text-xs">~2.2 GB</td>
                                            <td className="py-3.5 px-4 sm:px-6">Fast</td>
                                            <td className="py-3.5 px-4 sm:px-6 text-[#78716c]">Fast inference, but exhibited context truncation on multi-hour timeline summaries.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Decision 3: Determinism vs Hallucination */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    03 / Determinism vs Hallucination Prevention
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Ground Truth</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-4">
                            <p className="text-sm sm:text-base text-[#44403c] leading-relaxed">
                                A critical design decision was separating the factual measurement of behavior from the AI interpretation. The Go daemon writes strict facts to SQLite (such as "Chrome was open on youtube.com for 5 minutes"). The LLM is only given read-access to this data to form opinions.
                            </p>
                            <p className="text-sm sm:text-base text-[#44403c] leading-relaxed">
                                This guarantees the AI cannot hallucinate past user actions; it can only judge recorded, immutable ground truth.
                            </p>
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
                        <Link href="/axiomos/architecture" className="hover:text-[#2d5a3f] transition-colors">
                            System Architecture &rarr;
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
