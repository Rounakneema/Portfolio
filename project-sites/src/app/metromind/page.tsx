import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Database, Search, Shield, Zap, Container } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MetroMind — Microservices Document Intelligence',
    description: 'AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, vector search, and 100% audit logging built for the Smart India Hackathon.',
    alternates: { canonical: 'https://metromind.rounakneema.in' },
};

export default function MetroMindHome() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="https://rounakneema.in/projects" className="text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </a>
                        <span className="text-zinc-600">/</span>
                        <span className="font-mono text-sm tracking-widest text-zinc-200 font-bold">METROMIND</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm font-mono tracking-widest">
                        <Link href="/architecture" className="text-zinc-400 hover:text-purple-400 transition-colors">ARCHITECTURE</Link>
                        <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                            GITHUB <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                {/* Hero Section */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-6 bg-purple-900/20 border border-purple-500/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span className="font-mono text-xs tracking-[0.2em] text-purple-300">DOCUMENT INTELLIGENCE PLATFORM</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                        Transforming Transit Documents into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Searchable Vectors</span>.
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
                        Built for the Smart India Hackathon (Kochi Metro), MetroMind orchestrates 12+ Dockerized microservices to provide scalable OCR pipelines, semantic vector search, and strict RBAC-controlled document management.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                            <Github className="w-5 h-5" />
                            View Source
                        </a>
                        <Link href="/architecture" 
                           className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors">
                            Architecture
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </header>

                {/* Tech Stack Bar */}
                <div className="border-y border-zinc-800 py-8 mb-20 flex flex-wrap gap-8 items-center text-zinc-500 font-mono text-sm">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Go</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Python</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Docker</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400"></div> RabbitMQ</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div> Vector DB</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> OCR Engine</div>
                </div>

                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
                        <Container className="w-8 h-8 text-purple-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">12+ Microservices</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Decoupled architecture orchestrated via Docker Compose. Independent scaling for OCR processing, search indexing, and API gateways.
                        </p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors">
                        <Search className="w-8 h-8 text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Vector Semantic Search</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Beyond keyword matching. Extracts text via OCR and embeds chunks into a Vector DB, allowing natural language semantic querying of transit documents.
                        </p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-colors">
                        <Shield className="w-8 h-8 text-red-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Strict RBAC & Audit Logging</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Enterprise-grade security. 100% of privileged operations are audit-logged. Granular Role-Based Access Control isolates department data.
                        </p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors">
                        <Zap className="w-8 h-8 text-green-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Async Messaging Pipeline</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            RabbitMQ handles heavy OCR workloads asynchronously. The frontend API never blocks while documents are being indexed in the background.
                        </p>
                    </div>
                </div>
                
                {/* The Problem & Solution */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
                    <div>
                        <div className="text-zinc-500 font-mono text-sm tracking-widest mb-4">THE CHALLENGE</div>
                        <h2 className="text-3xl font-bold mb-6">Unstructured transit data trapped in physical and scanned documents.</h2>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Managing and semantically searching large volumes of transit documents across departments is inefficient without intelligent tooling. When documents are scanned, their text is inaccessible to standard SQL databases.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            Additionally, sensitive inter-departmental documents require strict isolation and access tracking to prevent unauthorized retrieval.
                        </p>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        <div className="text-zinc-500 font-mono text-sm tracking-widest mb-4">THE METROMIND SOLUTION</div>
                        <ul className="space-y-4">
                            {[
                                "Automated OCR extraction pipeline",
                                "Text chunking and embedding generation",
                                "Vector database for semantic querying",
                                "API Gateway handling JWT & RBAC validation",
                                "Distributed logging and telemetry",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-purple-400 mt-0.5">✓</span>
                                    <span className="text-zinc-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </main>
    );
}
