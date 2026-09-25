import Link from 'next/link';
import { ShieldAlert, Cpu } from 'lucide-react';
import type { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TerminalStream } from '@/components/shared/TerminalStream';

export const metadata: Metadata = {
    title: 'MetroMind — Enterprise AI Document Intelligence Platform',
    description: 'An event-driven microservices architecture for OCR document intelligence, vector search, and secure document retrieval using RBAC microservices.',
    keywords: ['OCR document intelligence', 'vector search', 'RBAC microservices'],
    alternates: { canonical: 'https://metromind.rounakneema.in' },
};

const PIPELINE_NODES = [
    'API_GATEWAY',
    'AUTH',
    'RABBITMQ',
    'OCR',
    'EMBED',
    'VECTOR',
    'AUDIT',
] as const;

const LOG_ENTRIES = [
    { time: '09:14:22', source: 'api_gateway', message: 'POST /ingest  200 OK',    level: 'ok'   as const },
    { time: '09:14:22', source: 'auth_svc',    message: 'TOKEN VALIDATED',         level: 'ok'   as const },
    { time: '09:14:23', source: 'rabbitmq',    message: 'MSG QUEUED → ocr.queue',  level: 'info' as const },
    { time: '09:14:23', source: 'ocr_worker',  message: 'TESSERACT PROCESSING...', level: 'info' as const },
    { time: '09:14:24', source: 'ocr_worker',  message: 'EXTRACTED 2,847 TOKENS',  level: 'ok'   as const },
    { time: '09:14:24', source: 'embed_svc',   message: 'EMBEDDING BATCH_SIZE=512',level: 'info' as const },
    { time: '09:14:25', source: 'vector_db',   message: 'UPSERTED 48 VECTORS',     level: 'ok'   as const },
    { time: '09:14:25', source: 'audit_log',   message: 'DOC_ID:7f3a COMMITTED',   level: 'info' as const },
];

export default function MetroMindHome() {
    return (
        <div className="min-h-screen bg-[#030305] text-zinc-400 selection:bg-fuchsia-500/30 font-mono text-sm">
            <ProjectJsonLd slug="metromind" />

            {/* ─── Sticky Nav ─────────────────────────────────────────── */}
            <nav className="border-b border-fuchsia-500/20 bg-[#030305] sticky top-0 z-50">
                <div className="flex h-12 items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <Link href="/projects" className="text-zinc-500 hover:text-fuchsia-400 transition-colors">
                            ← BACK
                        </Link>
                        <span className="text-zinc-700">/</span>
                        <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-xs">MetroMind_</span>
                    </div>
                    <div className="flex items-center gap-6 text-xs tracking-widest uppercase">
                        <Link href="/metromind/architecture" className="hover:text-white transition-colors">Architecture</Link>
                        <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Source</a>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto border-x border-fuchsia-500/10 min-h-screen">

                {/* ─── HERO: Headline ─────────────────────────────────── */}
                <section className="border-b border-fuchsia-500/10 px-6 pt-16 pb-10 md:px-16 md:pt-20 md:pb-12 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-fuchsia-500/70 mb-6 font-bold">
                        Enterprise AI · Document Intelligence
                    </p>
                    <h1 className="font-sans font-black leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent max-w-4xl mx-auto">
                        STOP SEARCHING FOR FILES.<br />
                        START QUERYING INTELLIGENCE.
                    </h1>
                    <p className="mt-6 text-zinc-500 font-sans text-base max-w-xl mx-auto leading-relaxed">
                        Event-driven OCR&nbsp;→&nbsp;embedding&nbsp;→&nbsp;vector search, secured by RBAC and audited end-to-end.
                    </p>
                </section>

                {/* ─── HERO: Live Pipeline ────────────────────────────── */}
                <section className="border-b border-fuchsia-500/10 bg-[#050508]">

                    {/* Section label */}
                    <div className="px-6 pt-8 pb-4 md:px-10">
                        <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-cyan-400/80">
                            ▶ LIVE DOCUMENT PIPELINE
                        </span>
                    </div>

                    {/* Pipeline node row */}
                    <div className="px-6 pb-6 md:px-10 overflow-x-auto">
                        <div className="flex items-center gap-0 min-w-max">
                            {PIPELINE_NODES.map((node, i) => (
                                <div key={node} className="flex items-center">
                                    <div className="border border-fuchsia-500/40 bg-fuchsia-500/5 px-3 py-2 text-[11px] font-bold tracking-widest text-fuchsia-300 whitespace-nowrap hover:border-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors cursor-default">
                                        {node}
                                    </div>
                                    {i < PIPELINE_NODES.length - 1 && (
                                        <div className="flex items-center">
                                            <div className="h-px w-6 bg-gradient-to-r from-fuchsia-500/60 to-cyan-500/60" />
                                            <span className="text-cyan-500/70 text-[10px]">→</span>
                                            <div className="h-px w-6 bg-gradient-to-r from-cyan-500/60 to-fuchsia-500/60" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Two-column: trace log (left) + live stream (right) */}
                    <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-fuchsia-500/10 border-t border-fuchsia-500/10">

                        {/* Left — static terminal trace */}
                        <div className="p-4 md:p-6">
                            <div className="border border-zinc-800 bg-black p-5 font-mono text-xs leading-relaxed overflow-x-auto relative">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-50" />
                                <div className="text-zinc-600 mb-4">// INGESTION PIPELINE TRACE</div>
                                <div className="text-zinc-300 space-y-1">
                                    <div><span className="text-fuchsia-500">[08:42:11.001]</span> <span className="text-cyan-400">INFO</span>  [API_GATEWAY]  Received payload: <span className="text-white">Q3_Operations_Report.pdf</span> (4.2MB)</div>
                                    <div><span className="text-fuchsia-500">[08:42:11.045]</span> <span className="text-cyan-400">INFO</span>  [AUTH_SVC]     Validating JWT signature... <span className="text-green-400">OK</span> (Role: Ops_Lead)</div>
                                    <div><span className="text-fuchsia-500">[08:42:11.102]</span> <span className="text-cyan-400">INFO</span>  [RABBITMQ]     Published to exchange `document.process` [RoutingKey: ocr.start]</div>
                                    <div><span className="text-zinc-600">... worker node assumed ...</span></div>
                                    <div><span className="text-fuchsia-500">[08:42:12.441]</span> <span className="text-cyan-400">INFO</span>  [OCR_WORKER]   Extracted 12,408 words. Confidence: 98.4%</div>
                                    <div><span className="text-fuchsia-500">[08:42:13.015]</span> <span className="text-cyan-400">INFO</span>  [EMBED_SVC]    Generated 48 vector chunks via all-MiniLM-L6-v2</div>
                                    <div><span className="text-fuchsia-500">[08:42:13.155]</span> <span className="text-cyan-400">INFO</span>  [VECTOR_DB]    Indexed successfully to Milvus. Collection: operations_docs</div>
                                    <div><span className="text-fuchsia-500">[08:42:13.158]</span> <span className="text-amber-400">AUDIT</span> [LOG_SVC]      Ingestion complete. TraceID: 9f8a-4b2c</div>
                                </div>
                            </div>
                        </div>

                        {/* Right — live TerminalStream */}
                        <div className="p-4 md:p-6">
                            <div className="border border-zinc-800 bg-black p-5 relative min-h-[200px]">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-50" />
                                <div className="text-zinc-600 mb-4 text-xs font-mono">// LIVE EVENT STREAM</div>
                                <TerminalStream
                                    entries={LOG_ENTRIES}
                                    intervalMs={700}
                                    className="text-zinc-300"
                                    accentColor="text-amber-400"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* ─── EntityHeader + ProjectFacts (moved below hero) ─── */}
                {/* ─── Tech Stack Marquee ──────────────────────────────── */}
                <section className="border-b border-fuchsia-500/10 flex overflow-hidden bg-fuchsia-500/5 py-4">
                    <div className="flex gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs tracking-[0.2em] uppercase font-bold text-fuchsia-400/60">
                        <span>Go Microservices</span> • <span>Python OCR Workers</span> • <span>RabbitMQ</span> • <span>Milvus Vector DB</span> • <span>PostgreSQL</span> • <span>JWT + RBAC</span> • <span>Redis Caching</span> • <span>Go Microservices</span> • <span>Python OCR Workers</span> • <span>RabbitMQ</span> • <span>Milvus Vector DB</span> • <span>PostgreSQL</span> • <span>JWT + RBAC</span> • <span>Redis Caching</span>
                    </div>
                </section>

                {/* ─── Problem / Solution ──────────────────────────────── */}
                <section className="border-b border-fuchsia-500/10 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-fuchsia-500/10">
                    <div className="p-8 md:p-16">
                        <div className="text-fuchsia-500 mb-6 border-b border-fuchsia-500/20 pb-4 inline-flex items-center gap-3 w-full">
                            <ShieldAlert className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-xs font-bold">The Problem</span>
                        </div>
                        <h2 className="text-3xl font-sans font-black text-white leading-tight mb-6">
                            Data is trapped in scanned PDFs. Security policies are ignored.
                        </h2>
                        <p className="text-zinc-400 leading-relaxed font-sans text-base">
                            Managing and searching large volumes of transit documents across departments is inefficient. Standard SQL databases can't read scanned text, and basic full-text search doesn't understand context. Furthermore, sensitive inter-departmental documents require strict isolation and access tracking.
                        </p>
                    </div>
                    <div className="p-8 md:p-16 bg-white/[0.01]">
                        <div className="text-cyan-400 mb-6 border-b border-cyan-500/20 pb-4 inline-flex items-center gap-3 w-full">
                            <Cpu className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-xs font-bold">The Solution</span>
                        </div>
                        <h2 className="text-3xl font-sans font-black text-white leading-tight mb-6">
                            Event-driven intelligence with cryptographic access controls.
                        </h2>
                        <ul className="space-y-4 text-zinc-400 font-sans text-base">
                            <li className="flex gap-4"><span className="text-cyan-500 font-mono mt-1">01/</span> An automated OCR pipeline extracts text asynchronously.</li>
                            <li className="flex gap-4"><span className="text-cyan-500 font-mono mt-1">02/</span> Text is chunked and embedded into semantic vectors.</li>
                            <li className="flex gap-4"><span className="text-cyan-500 font-mono mt-1">03/</span> A high-performance API Gateway validates JWT and RBAC.</li>
                            <li className="flex gap-4"><span className="text-cyan-500 font-mono mt-1">04/</span> Every retrieval is logged for compliance and telemetry.</li>
                        </ul>
                    </div>
                </section>

                {/* ─── FAQ ─────────────────────────────────────────────── */}
                <section className="border-b border-fuchsia-500/10 p-8 md:p-16">
                    <h2 className="text-2xl font-black text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
                        {[
                            { q: "What is MetroMind?", a: "MetroMind is an Enterprise AI Document Intelligence Platform that transforms scanned documents into a secure semantic search engine." },
                            { q: "How does it process documents?", a: "It uses an automated OCR pipeline to extract text asynchronously and chunk it for semantic vectors using embedding models." },
                            { q: "What languages is MetroMind built in?", a: "MetroMind is built using Go for microservices and Python for OCR workers." },
                            { q: "Does MetroMind support vector search?", a: "Yes, it uses Milvus Vector DB for high-performance semantic vector search capabilities." },
                            { q: "How is access control managed?", a: "Access is managed via JWT and strict RBAC microservices ensuring secure document retrieval." },
                            { q: "How does MetroMind handle large volumes of documents?", a: "It employs an event-driven architecture with RabbitMQ and 12+ microservices to process large workloads." },
                            { q: "Who built MetroMind?", a: "MetroMind was architected and built by Rounak Neema." },
                        ].map((faq, idx) => (
                            <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 className="text-lg font-bold text-fuchsia-400" itemProp="name">{faq.q}</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="text-zinc-400 mt-2" itemProp="text">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="p-8 text-center text-xs text-zinc-600 flex justify-between items-center">
                    <span>© {new Date().getFullYear()} Rounak Neema</span>
                    <span className="uppercase tracking-widest">MetroMind_System</span>
                </footer>
            </main>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </div>
    );
}
