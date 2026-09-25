import Link from 'next/link';
import { Database, Workflow, ShieldCheck, FileSearch, ArrowLeft, ArrowRight, TerminalSquare } from 'lucide-react';
import type { Metadata } from 'next';
import MermaidDiagram from '@/components/Mermaid';

export const metadata: Metadata = {
    title: 'Architecture Spec — MetroMind',
    description: 'Engineering specification for the MetroMind distributed document intelligence system.',
    alternates: { canonical: 'https://metromind.rounakneema.in/architecture' },
};

export default function MetroMindArchitecture() {
    return (
        <div className="min-h-screen bg-[#030305] text-zinc-400 font-mono text-sm selection:bg-cyan-500/30">
            
            {/* Top Nav Rail */}
            <nav className="border-b border-fuchsia-500/20 bg-[#030305] sticky top-0 z-50">
                <div className="flex h-12 items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <Link href="/metromind" className="text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> HOME
                        </Link>
                        <span className="text-zinc-700">/</span>
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">Architecture_Spec</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto border-x border-fuchsia-500/10 min-h-screen bg-[#040406]">
                
                <header className="p-8 md:p-16 border-b border-fuchsia-500/10">
                    <h1 className="text-2xl font-black text-white tracking-tighter uppercase mb-6 flex items-center gap-4">
                        <TerminalSquare className="w-10 h-10 text-fuchsia-500" />
                        System Topology
                    </h1>
                    <p className="text-zinc-500 font-sans text-lg max-w-2xl leading-relaxed">
                        MetroMind separates concerns aggressively. HTTP requests, background processing, semantic embedding, and vector storage exist in isolated domains to prevent long-running tasks from degrading the user experience.
                    </p>
                </header>

                {/* RAW ASCII DIAGRAM */}
                <section className="border-b border-fuchsia-500/10 p-4 md:p-8 overflow-x-auto bg-[#020203]">
                    <MermaidDiagram chart={`flowchart TD
    Client[CLIENT REQUEST]
    
    Gateway[API GATEWAY<br/>Go]
    Auth[AUTH SERVICE<br/>Postgres/Redis]
    Rabbit[RABBITMQ<br/>MESSAGE BROKER]
    OCR[OCR WORKERS<br/>Python]
    Embed[EMBED SERVICE<br/>all-MiniLM-L6]
    Milvus[MILVUS VECTOR<br/>DATABASE]

    Client -- "HTTPS / JWT" --> Gateway
    Gateway -- "Verify" --> Auth
    Auth -- "Allow" --> Gateway
    Gateway -- "Publish Event" --> Rabbit
    Rabbit -- "Consume Event" --> OCR
    OCR -- "Chunks" --> Embed
    Embed --> Milvus`} />
                </section>

                {/* SERVICE SPECS */}
                <section className="divide-y divide-fuchsia-500/10">
                    
                    <div className="p-8 md:p-12 grid md:grid-cols-[200px_1fr] gap-8 hover:bg-white/[0.01] transition-colors">
                        <div>
                            <div className="text-fuchsia-400 font-bold tracking-widest text-xs mb-2">SVC_01</div>
                            <h3 className="text-white text-lg font-bold">API Gateway</h3>
                            <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 border border-zinc-700 text-[10px] text-zinc-400">
                                <Workflow className="w-3 h-3" /> Lang: Go
                            </div>
                        </div>
                        <div className="font-sans text-base text-zinc-400 leading-relaxed">
                            Acts as the single entry point for the frontend. It strictly handles HTTP routing, payload validation, and interacts directly with the Auth Service to validate JWTs before accepting any documents for upload or queries for search. It immediately acknowledges uploads, publishing an event to RabbitMQ, ensuring a non-blocking UX.
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-[200px_1fr] gap-8 hover:bg-white/[0.01] transition-colors">
                        <div>
                            <div className="text-fuchsia-400 font-bold tracking-widest text-xs mb-2">SVC_02</div>
                            <h3 className="text-white text-lg font-bold">Event Bus</h3>
                            <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 border border-zinc-700 text-[10px] text-zinc-400">
                                <Workflow className="w-3 h-3" /> RabbitMQ
                            </div>
                        </div>
                        <div className="font-sans text-base text-zinc-400 leading-relaxed">
                            Provides asynchronous decoupling. If 500 documents are uploaded simultaneously, the Gateway does not wait for OCR. RabbitMQ queues the tasks. Worker nodes consume these tasks at their own processing capacity. This ensures the system absorbs traffic spikes without memory exhaustion.
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-[200px_1fr] gap-8 hover:bg-white/[0.01] transition-colors">
                        <div>
                            <div className="text-fuchsia-400 font-bold tracking-widest text-xs mb-2">SVC_03</div>
                            <h3 className="text-white text-lg font-bold">Intel Core</h3>
                            <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 border border-zinc-700 text-[10px] text-zinc-400">
                                <Database className="w-3 h-3" /> Python / Milvus
                            </div>
                        </div>
                        <div className="font-sans text-base text-zinc-400 leading-relaxed">
                            Python worker nodes execute OCR on binary blobs. Extracted text is normalized, chunked into overlapping windows, and passed to a local embedding model. The resulting dense vectors are indexed into a Milvus Vector Database, appended with metadata (Department ID, Access Level) for hybrid search capabilities.
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-[200px_1fr] gap-8 hover:bg-white/[0.01] transition-colors">
                        <div>
                            <div className="text-fuchsia-400 font-bold tracking-widest text-xs mb-2">SVC_04</div>
                            <h3 className="text-white text-lg font-bold">Audit & RBAC</h3>
                            <div className="mt-4 inline-flex items-center gap-2 px-2 py-1 border border-zinc-700 text-[10px] text-zinc-400">
                                <ShieldCheck className="w-3 h-3" /> Postgres
                            </div>
                        </div>
                        <div className="font-sans text-base text-zinc-400 leading-relaxed">
                            Search queries are intercepted here. A user's query is vectorized and sent to Milvus, but a mandatory pre-filter is applied using the user's Department ID from their validated JWT. Every query, and the resulting documents accessed, are logged to a PostgreSQL audit table for compliance.
                        </div>
                    </div>

                </section>

                <footer className="p-8 border-t border-fuchsia-500/10 flex justify-end">
                    <Link href="/metromind" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-xs font-bold">
                        Return to overview <ArrowRight className="w-4 h-4" />
                    </Link>
                </footer>
            </main>
        </div>
    );
}
