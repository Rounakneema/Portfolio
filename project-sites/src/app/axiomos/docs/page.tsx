import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Terminal, Database, Cpu, AlertTriangle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
    title: 'AXIOM OS · Documentation & Schemas',
    description: 'System documentation, Specter daemon CLI flags, SQLite memory schemas, and Ollama configuration for AXIOM OS.',
    alternates: { canonical: 'https://axiomos.rounakneema.in/docs' },
};

export default function AxiomOsDocsPage() {
    return (
        <main className="min-h-screen bg-[#faf7ee] text-[#1c1917] selection:bg-[#2d5a3f] selection:text-white pb-32 font-sans">
            <ProjectJsonLd slug="axiomos" pageType="Docs" />

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
                            Documentation
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
                            href="/axiomos/decisions"
                            className="text-xs font-mono text-[#57534e] hover:text-[#2d5a3f] transition-colors hidden sm:block"
                        >
                            Decisions &rarr;
                        </Link>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] font-mono text-[10px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f]"></span>
                            System Reference
                        </span>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 space-y-16">
                
                {/* Header */}
                <ScrollReveal direction="up" delay={0.05}>
                    <header className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d5a3f]/10 border border-[#2d5a3f]/20 text-[#2d5a3f] text-[11px] font-mono font-semibold uppercase tracking-wider">
                            <BookOpen className="w-3.5 h-3.5" />
                            Engineering Documentation
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1917] font-serif leading-[1.1]">
                            System Manual &amp; CLI Specification
                        </h1>
                        <p className="text-[#57534e] text-base sm:text-lg leading-relaxed">
                            Configuration specifications for the Specter Go daemon, SQLite memory schema definitions, and local Ollama initialization protocols.
                        </p>
                    </header>
                </ScrollReveal>

                {/* Section 1: Specter Daemon Configuration */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    1. Specter Daemon Configuration
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">CLI Reference</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                The Specter daemon (compiled static Go binary) collects local deterministic telemetry. It is strictly configured via CLI flags or a <code>config.yaml</code> manifest.
                            </p>

                            <div className="rounded-xl border border-[#2d5a3f]/30 bg-[#202722] text-[#d4e2d4] p-5 font-mono text-xs overflow-x-auto shadow-inner">
                                <pre><code>{`$ specterd --help
Usage of specterd:
  -config string
        Path to config.yaml (default "/etc/axiom/specter.yaml")
  -db string
        SQLite database path (default "~/.axiomos/telemetry.db")
  -poll-interval duration
        Telemetry polling interval (default 1s)
  -module-browser bool
        Enable browser history tracking (default true)
  -module-shell bool
        Enable bash/zsh command parsing (default true)
  -module-screen bool
        Enable periodic screen OCR [HEAVY] (default false)
  -log-level string
        Log level: debug, info, warn, error (default "info")`}</code></pre>
                            </div>

                            <div className="p-4 rounded-xl bg-[#fdf3e7] border border-[#f5c699] text-[#8a3800] text-xs leading-relaxed flex items-start gap-3">
                                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#b45309]" />
                                <div>
                                    <strong className="font-bold uppercase tracking-wider text-[11px] block mb-0.5">Performance Notice</strong>
                                    Enabling <code>-module-screen</code> invokes the local Tesseract binary and consumes noticeable CPU cycles. Use with caution during battery-operated laptop sessions.
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 2: Memory Layer (SQLite Schema) */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    2. Memory Layer (SQLite Schema)
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">SQL Spec</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                AXIOM relies on a deterministic memory layer to store context before AI evaluation. The schema ensures strict typing for telemetry events and audit trails.
                            </p>

                            <div className="rounded-xl border border-[#2d5a3f]/30 bg-[#202722] text-[#d4e2d4] p-5 font-mono text-xs overflow-x-auto shadow-inner">
                                <div className="text-[#7ba88a] text-[10px] mb-2">// memory.sql</div>
                                <pre><code>{`CREATE TABLE telemetry_events (
    id TEXT PRIMARY KEY,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    source TEXT NOT NULL, -- e.g., 'browser', 'shell', 'window_manager'
    payload JSON NOT NULL,
    processed BOOLEAN DEFAULT 0
);

CREATE TABLE behavior_evaluations (
    id TEXT PRIMARY KEY,
    event_id TEXT,
    axis_1_score REAL, -- Current Role Duties
    axis_2_score REAL, -- Personal Goal Alignment
    axis_3_score REAL, -- General Wellbeing
    intent_label TEXT,
    roast_generated BOOLEAN DEFAULT 0,
    FOREIGN KEY(event_id) REFERENCES telemetry_events(id)
);

CREATE INDEX idx_unprocessed_events ON telemetry_events(timestamp) WHERE processed = 0;`}</code></pre>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 3: Local Ollama Initialization */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="rounded-2xl border border-[#e5ded2] bg-[#f4efe4] overflow-hidden shadow-xs">
                        <div className="bg-[#ede6d8] border-b border-[#e5ded2] px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#d6caba]"></span>
                                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    3. Local Ollama Initialization &amp; Model Pull
                                </span>
                            </div>
                            <span className="font-mono text-[10px] text-[#78716c] uppercase">Ollama Setup</span>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                            <p className="text-sm text-[#44403c] leading-relaxed">
                                AXIOM is powered by local quantized models via Ollama. We use a 3-billion parameter Qwen 2.5 model for rapid, low-thermal background evaluation.
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    Pulling the Model
                                </h3>
                                <div className="rounded-xl border border-[#2d5a3f]/30 bg-[#202722] text-[#d4e2d4] p-5 font-mono text-xs overflow-x-auto shadow-inner">
                                    <pre><code>{`$ ollama pull qwen2.5:3b
pulling manifest
pulling 8a3423... 100% ▕████████████████████████████████████████▏ 1.7 GB
pulling 4a1323... 100% ▕████████████████████████████████████████▏ 12 KB
verifying sha256 digest
writing manifest
removing any unused layers
success`}</code></pre>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2d5a3f]">
                                    Starting the Local Inference Server
                                </h3>
                                <div className="rounded-xl border border-[#2d5a3f]/30 bg-[#202722] text-[#d4e2d4] p-5 font-mono text-xs overflow-x-auto shadow-inner">
                                    <div className="text-[#7ba88a] text-[10px] mb-2"># start-inference.sh</div>
                                    <pre><code>{`#!/bin/bash
export OLLAMA_HOST="127.0.0.1:11434"
export OLLAMA_MAX_VRAM="4G"

echo "[*] Starting Ollama server daemon..."
systemctl start ollama

echo "[*] Pre-loading Qwen 2.5 context..."
curl -X POST http://$OLLAMA_HOST/api/generate -d '{
  "model": "qwen2.5:3b",
  "prompt": "SYSTEM: Initialize AXIOM evaluation protocol.",
  "stream": false
}'

echo "[+] Inference layer online."`}</code></pre>
                                </div>
                            </div>
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
                        <Link href="/axiomos/decisions" className="hover:text-[#2d5a3f] transition-colors">
                            Engineering Decisions &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
