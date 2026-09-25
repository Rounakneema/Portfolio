import Link from 'next/link';
import { ArrowRight, Database, Code2, Network, ScanText, Server, Activity, ShieldAlert, Cpu } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MetroMind — Enterprise Document Intelligence',
    description: 'An event-driven microservices architecture for OCR, semantic search, and secure document retrieval.',
    alternates: { canonical: 'https://metromind.rounakneema.in/' },
};

export default function MetroMindHome() {
    return (
        <div className="min-h-screen bg-[#030305] text-zinc-400 selection:bg-fuchsia-500/30 font-mono text-sm">
            
            {/* Top Nav Rail */}
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
                
                {/* HERO SECTION - Brutalist & Typography Heavy */}
                <header className="border-b border-fuchsia-500/10 p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <ScanText className="w-96 h-96 text-fuchsia-500" />
                    </div>
                    
                    <div className="relative z-10 max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] uppercase tracking-widest mb-8">
                            <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
                            System Status: Operational
                        </div>
                        
                        <h1 className="text-2xl font-black text-white tracking-tighter leading-[0.9] font-sans mb-8">
                            Stop searching for files. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Start querying intelligence.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-sans mb-12">
                            MetroMind is a distributed microservices pipeline that transforms dead PDFs and scanned documents into a secure, RBAC-gated semantic vector search engine.
                        </p>

                        <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
                            <Link href="/metromind/architecture" className="px-6 py-4 bg-white text-black hover:bg-fuchsia-400 transition-colors flex items-center gap-2 font-bold">
                                View Architecture <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="https://github.com/rounakneema/MetroMind" className="px-6 py-4 border border-zinc-700 hover:border-fuchsia-500 hover:text-fuchsia-400 transition-colors flex items-center gap-2">
                                <Code2 className="w-4 h-4" /> GitHub Repository
                            </a>
                        </div>
                    </div>
                </header>

                {/* THE PIPELINE VISUAL - Raw Terminal Style */}
                <section className="border-b border-fuchsia-500/10 p-4 md:p-8 bg-[#050508]">
                    <div className="border border-zinc-800 bg-black p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-50" />
                        <div className="text-zinc-500 mb-4">// LIVE INGESTION PIPELINE TRACE</div>
                        <div className="text-zinc-300">
                            <span className="text-fuchsia-500">[08:42:11.001]</span> <span className="text-cyan-400">INFO</span>  [API_GATEWAY]  Received payload: <span className="text-white">Q3_Operations_Report.pdf</span> (4.2MB)<br/>
                            <span className="text-fuchsia-500">[08:42:11.045]</span> <span className="text-cyan-400">INFO</span>  [AUTH_SVC]     Validating JWT signature... <span className="text-green-400">OK</span> (Role: Ops_Lead)<br/>
                            <span className="text-fuchsia-500">[08:42:11.102]</span> <span className="text-cyan-400">INFO</span>  [RABBITMQ]     Published to exchange `document.process` [RoutingKey: ocr.start]<br/>
                            <span className="text-zinc-600">... worker node assumed ...</span><br/>
                            <span className="text-fuchsia-500">[08:42:12.441]</span> <span className="text-cyan-400">INFO</span>  [OCR_WORKER]   Extracted 12,408 words. Confidence: 98.4%<br/>
                            <span className="text-fuchsia-500">[08:42:13.015]</span> <span className="text-cyan-400">INFO</span>  [EMBED_SVC]    Generated 48 vector chunks via all-MiniLM-L6-v2<br/>
                            <span className="text-fuchsia-500">[08:42:13.155]</span> <span className="text-cyan-400">INFO</span>  [VECTOR_DB]    Indexed successfully to Milvus. Collection: operations_docs<br/>
                            <span className="text-fuchsia-500">[08:42:13.158]</span> <span className="text-amber-400">AUDIT</span> [LOG_SVC]      Ingestion complete. TraceID: 9f8a-4b2c<br/>
                        </div>
                    </div>
                </section>

                {/* TECH STACK RAIL */}
                <section className="border-b border-fuchsia-500/10 flex overflow-hidden bg-fuchsia-500/5 py-4">
                    <div className="flex gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs tracking-[0.2em] uppercase font-bold text-fuchsia-400/60">
                        <span>Go Microservices</span> • <span>Python OCR Workers</span> • <span>RabbitMQ</span> • <span>Milvus Vector DB</span> • <span>PostgreSQL</span> • <span>JWT + RBAC</span> • <span>Redis Caching</span> • <span>Go Microservices</span> • <span>Python OCR Workers</span> • <span>RabbitMQ</span> • <span>Milvus Vector DB</span> • <span>PostgreSQL</span> • <span>JWT + RBAC</span> • <span>Redis Caching</span>
                    </div>
                </section>

                {/* EDITORIAL PROSE - Asymmetric layout */}
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

                <footer className="p-8 text-center text-xs text-zinc-600 flex justify-between items-center">
                    <span>© {new Date().getFullYear()} Rounak Neema</span>
                    <span className="uppercase tracking-widest">MetroMind_System</span>
                </footer>
            </main>
            
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </div>
    );
}
