import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Cpu, CheckCircle2, ArrowRight, ArrowUpRight, FileText, Sparkles, Database, Code2 } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: 'Freelance AI Engineer & Document Intelligence // Rounak Neema',
    description: 'Hire a freelance AI engineer for enterprise document intelligence (OCR), custom RAG pipelines, codebase AST grounding, and local private LLM integrations (Ollama).',
    alternates: { canonical: 'https://rounakneema.in/freelance/ai-development' },
    openGraph: {
        title: 'Freelance AI Engineering & Document Systems // Rounak Neema',
        description: 'Pragmatic AI automation: Asynchronous OCR document pipelines, Milvus vector search, AST-grounded code intelligence, and zero-cloud private LLMs.',
        url: 'https://rounakneema.in/freelance/ai-development',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AiDevelopmentServicesPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <JsonLd type="freelance" />
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1200px] mx-auto pt-28">
                {/* Back navigation */}
                <div className="mb-6">
                    <Link
                        href="/freelance"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-500 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL SERVICES
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-14 pb-8 border-b border-gray-200">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-purple-50 border border-purple-200">
                        <Cpu className="w-3.5 h-3.5 text-purple-600" />
                        <span className="font-mono text-xs font-bold tracking-widest text-purple-800 uppercase">
                            AI Systems &amp; Document Intelligence
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
                        FREELANCE AI ENGINEER &amp; DOCUMENT AUTOMATION.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mb-8">
                        I build pragmatic AI applications that solve real workflow bottlenecks without hallucinations or runaway cloud API costs.
                        Specializing in high-volume OCR ingestion pipelines, vector search (Milvus), AST-grounded codebase RAG, and private local LLMs.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact?service=ai"
                            className="bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2 group"
                        >
                            START AN AI INTAKE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://metromind.rounakneema.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                        >
                            SEE PROOF: METROMIND <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </header>

                {/* What I Build */}
                <section className="mb-16">
                    <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">Capabilities</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-8">AI Engineering Solutions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg inline-block mb-4">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Enterprise Document OCR &amp; Ingestion</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Asynchronous PDF, scan, and contract processing pipelines. Using RabbitMQ worker queues and Tesseract OCR to convert messy multi-page documents into structured, searchable text blocks.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· High-concurrency worker pool parsing PDFs at scale</li>
                                <li>· Semantic chunking preserving document headers &amp; tables</li>
                                <li>· Bounded memory usage preventing server out-of-memory crashes</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg inline-block mb-4">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Custom RAG &amp; Vector Search</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                High-dimensional embedding pipelines with Milvus, Qdrant, or pgvector. Engineered with hybrid keyword-vector retrieval (BM25 + Dense) to return exact domain context instead of superficial fuzzy matches.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Re-ranking algorithms ensuring top-k precision</li>
                                <li>· Role-based access control (RBAC) filtering at vector search time</li>
                                <li>· Audit logging tracking all query context and model completions</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg inline-block mb-4">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Codebase AST Grounding (Zero Hallucination)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Eliminate model hallucinations when querying complex code repositories. By analyzing Abstract Syntax Trees (ASTs), model responses are strictly bound to verified file paths and line number evidence.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· AST symbol extraction (functions, interfaces, structs)</li>
                                <li>· Strict grounding verification rejecting unreferenced claims</li>
                                <li>· Automated repository intelligence for technical recruiting and audits</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg inline-block mb-4">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Local-First Private AI (Ollama)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Deploy quantized open-weight models (Llama 3, Qwen, DeepSeek) on private on-premise hardware or edge devices. Keeps proprietary enterprise data 100% offline with zero cloud API billing.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Ollama daemon integration with Go/Python system background services</li>
                                <li>· Zero internet network egress for strictly confidential operations</li>
                                <li>· Sub-50ms token generation on modern GPU/NPU hardware</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Evidence & Case Study Anchor */}
                <section className="mb-16 border-2 border-black rounded-xl p-8 bg-zinc-50">
                    <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">Featured Evidence</span>
                    <h2 className="text-2xl font-black text-black mb-4">MetroMind &amp; Klarity: Enterprise Intelligence in Action</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-3xl">
                        Explore MetroMind (enterprise asynchronous OCR and vector search pipeline) and Klarity (evidence-grounded repository intelligence engine), demonstrating practical AI system engineering without vaporware.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Queue Ingestion</span>
                            <span className="font-bold text-base text-black">RabbitMQ + OCR</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Vector Engine</span>
                            <span className="font-bold text-base text-black">Milvus High-Dim</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Grounding</span>
                            <span className="font-bold text-base text-black">AST Line Evidence</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Offline Option</span>
                            <span className="font-bold text-base text-emerald-600">Ollama Private</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/projects/metromind" className="text-xs font-bold font-mono text-black hover:text-purple-600 flex items-center gap-1">
                            READ METROMIND CASE STUDY &rarr;
                        </Link>
                        <Link href="/projects/devcontext" className="text-xs font-bold font-mono text-black hover:text-purple-600 flex items-center gap-1">
                            READ KLARITY CASE STUDY &rarr;
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black text-black mb-6">AI Engineering FAQ</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">How do you prevent hallucinations in business RAG systems?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Most RAG failures occur from poor document chunking and naive similarity search. I implement strict syntactic grounding: the model is instructed to answer solely using citations with character or line-number evidence from retrieved chunks. If the retrieved evidence does not contain the answer, the system deterministically outputs an explicit non-match rather than hallucinating.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">Can we run the models completely within our private VPC?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Yes. For clients dealing with sensitive financial, medical, or legal documents, I deploy local model engines using Ollama or vLLM directly on your own private cloud compute instances (AWS EC2, GCP Compute) with zero third-party API exposure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conversion Bar */}
                <section className="mb-20 text-center py-12 px-6 bg-black text-white rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Build Reliable AI Automation Today</h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mb-8">
                        Integrate document intelligence and vector search with proven, predictable engineering.
                    </p>
                    <Link
                        href="/contact?service=ai"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-lg"
                    >
                        START AI PROJECT INTAKE <ArrowRight className="w-4 h-4" />
                    </Link>
                </section>
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
