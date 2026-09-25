import Link from 'next/link';
import { ArrowRight, Database, Code2, Network, ScanText, Server, Activity, ShieldAlert, Cpu } from 'lucide-react';
import type { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';

export const metadata: Metadata = {
    title: 'MetroMind — Enterprise AI Document Intelligence Platform',
    description: 'An event-driven microservices architecture for OCR document intelligence, vector search, and secure document retrieval using RBAC microservices.',
    keywords: ['OCR document intelligence', 'vector search', 'RBAC microservices'],
    alternates: { canonical: 'https://metromind.rounakneema.in' },
};

export default function MetroMindHome() {
    return (
        <div className="min-h-screen bg-[#030305] text-zinc-400 selection:bg-fuchsia-500/30 font-mono text-sm">
            <ProjectJsonLd />
            
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
                <EntityHeader title="MetroMind" subtitle="Enterprise AI Document Intelligence Platform" />
                <ProjectFacts facts={[
                    { label: 'Built by', value: 'Rounak Neema' },
                    { label: 'Languages', value: 'Go & Python' },
                    { label: 'Architecture', value: '12+ Microservices' },
                    { label: 'Features', value: 'OCR & Vector Search' }
                ]} />

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

                
                {/* SEO/AEO FAQ Section */}
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
                            { q: "Who built MetroMind?", a: "MetroMind was architected and built by Rounak Neema." }
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
                <RelatedProjects />
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
