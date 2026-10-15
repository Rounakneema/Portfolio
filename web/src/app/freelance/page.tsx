import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { ArrowUpRight, Shield, Terminal, Cpu, GitBranch, CheckCircle2, Layers, Clock, Zap, ArrowRight, Code, Lock } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: 'Freelance Software Engineer & Technical Consultant // Rounak Neema',
    description: 'Freelance engineering services specializing in high-performance Go/Python backends, authorized cybersecurity assessments, GitOps DevSecOps pipelines, and custom AI systems.',
    alternates: { canonical: 'https://rounakneema.in/freelance' },
    openGraph: {
        title: 'Freelance Engineering & Technical Consulting // Rounak Neema',
        description: 'Production backend services, authorized vulnerability assessments, CI/CD DevSecOps automation, and custom AI document pipelines. Backed by 8 open-source systems.',
        url: 'https://rounakneema.in/freelance',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FreelanceHubPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <JsonLd type="freelance" />
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-28">
                {/* Header Banner */}
                <header className="mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-emerald-50 border border-emerald-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-xs font-bold tracking-widest text-emerald-800 uppercase">
                            Accepting Client Projects & Consulting Engagements
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-gray-200">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-none mb-6">
                                FREELANCE ENGINEERING &amp; TECHNICAL CONSULTING.
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                                I design, build, and secure software systems for early-stage startups and engineering teams.
                                Specializing in concurrent Go/Python backends, authorized security audits, containerized DevSecOps automation, and local-first AI pipelines.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 min-w-[280px]">
                            <Link
                                href="/contact"
                                className="bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-md flex items-center justify-center gap-2 group"
                            >
                                START A PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/projects"
                                className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                            >
                                VIEW CASE STUDIES
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Four Service Pillars */}
                <section className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Capabilities</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black">Core Service Pillars</h2>
                        </div>
                        <span className="hidden md:block font-mono text-xs text-gray-400">04 SPECIALIZED PRACTICES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pillar 1: Backend */}
                        <div className="border border-gray-200 rounded-xl p-8 bg-gray-50/50 hover:bg-white hover:border-black transition-all flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                        <Terminal className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                                        Go / Python / REST / gRPC
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black mb-3 tracking-tight">
                                    Backend Engineering &amp; MVP Development
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    High-throughput concurrent services built in Go and Python. Clean REST/gRPC API architectures, SQLite/PostgreSQL data modeling, and end-to-end MVP execution designed for sub-millisecond response times.
                                </p>
                                <ul className="space-y-2 mb-8 font-mono text-xs text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Concurrent worker pools &amp; raw socket networking
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Resilient database journaling &amp; schema design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Fully tested, zero-dependency microservices
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                                <span className="font-mono text-xs text-gray-500">Proof: Revealr (50k ports/min)</span>
                                <Link
                                    href="/freelance/software-development"
                                    className="font-bold text-sm text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                >
                                    Explore Services <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Pillar 2: Cybersecurity */}
                        <div className="border border-gray-200 rounded-xl p-8 bg-gray-50/50 hover:bg-white hover:border-black transition-all flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                                        OWASP / Pentesting / Audits
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black mb-3 tracking-tight">
                                    Cybersecurity &amp; Vulnerability Assessment
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Authorized security evaluations for web applications and APIs. Systematic testing for OWASP Top 10 vulnerabilities, authentication bypasses, IAM misconfigurations, and air-gapped forensic log auditing.
                                </p>
                                <ul className="space-y-2 mb-8 font-mono text-xs text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> Authenticated API &amp; web app vulnerability testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> AWS IAM &amp; cloud access policy audits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> Actionable reports with exact reproduction proof
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                                <span className="font-mono text-xs text-gray-500">Proof: OSA &amp; 100+ CTFs Solved</span>
                                <Link
                                    href="/freelance/cybersecurity"
                                    className="font-bold text-sm text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                >
                                    Explore Services <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Pillar 3: DevSecOps */}
                        <div className="border border-gray-200 rounded-xl p-8 bg-gray-50/50 hover:bg-white hover:border-black transition-all flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-orange-100 text-orange-700 rounded-lg">
                                        <GitBranch className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                                        CI/CD / Docker / Kubernetes
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black mb-3 tracking-tight">
                                    DevSecOps &amp; Cloud Infrastructure
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Production GitOps deployment pipelines, container attack surface reduction via Google Distroless, and automated security scanning integrated directly into GitHub Actions.
                                </p>
                                <ul className="space-y-2 mb-8 font-mono text-xs text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" /> 99.3% Docker container image reduction (1.1GB &rarr; 8.4MB)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" /> Automated Trivy &amp; secret scanning pipeline gates
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" /> Hardened Kubernetes manifests &amp; Helm deployments
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                                <span className="font-mono text-xs text-gray-500">Proof: PipelineForge Automation</span>
                                <Link
                                    href="/freelance/devsecops"
                                    className="font-bold text-sm text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                >
                                    Explore Services <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Pillar 4: AI Development */}
                        <div className="border border-gray-200 rounded-xl p-8 bg-gray-50/50 hover:bg-white hover:border-black transition-all flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-purple-100 text-purple-700 rounded-lg">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                                        RAG / OCR / Ollama / AST
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black mb-3 tracking-tight">
                                    AI Systems &amp; Document Intelligence
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Pragmatic AI automation without hallucinations. High-volume OCR ingestion pipelines, vector databases (Milvus), codebase AST grounding, and local private LLM integrations.
                                </p>
                                <ul className="space-y-2 mb-8 font-mono text-xs text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> Asynchronous RabbitMQ OCR &amp; vector search pipelines
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> Grounded code intelligence with verified AST references
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" /> Zero-cloud private LLM integrations with Ollama
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                                <span className="font-mono text-xs text-gray-500">Proof: MetroMind &amp; Klarity</span>
                                <Link
                                    href="/freelance/ai-development"
                                    className="font-bold text-sm text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                >
                                    Explore Services <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="mb-20">
                    <div className="mb-8">
                        <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Collaboration</span>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black">How We Can Work Together</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Sprint 01</span>
                                <h3 className="text-xl font-bold text-black mb-2">Scoped MVP Build</h3>
                                <p className="text-gray-500 text-xs font-mono mb-4">2 TO 4 WEEKS · FIXED SCOPE</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Turn your architecture specification into a working, containerized software MVP. Includes backend microservices, clean API documentation, database schemas, and automated test coverage.
                                </p>
                            </div>
                            <Link href="/contact?type=mvp" className="text-xs font-bold font-mono text-black hover:text-blue-600 flex items-center gap-1">
                                SCOPE AN MVP &rarr;
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-wider block mb-2">Sprint 02</span>
                                <h3 className="text-xl font-bold text-black mb-2">Security Hardening Audit</h3>
                                <p className="text-gray-500 text-xs font-mono mb-4">1 TO 2 WEEKS · FIXED DELIVERABLE</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Thorough defensive security evaluation of your web app or cloud infrastructure. Identifies injection flaws, authorization gaps, and cloud misconfigurations with concrete remediation PRs.
                                </p>
                            </div>
                            <Link href="/contact?type=security" className="text-xs font-mono font-bold text-black hover:text-red-600 flex items-center gap-1">
                                REQUEST SECURITY AUDIT &rarr;
                            </Link>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">Sprint 03</span>
                                <h3 className="text-xl font-bold text-black mb-2">DevSecOps &amp; Cloud Retainer</h3>
                                <p className="text-gray-500 text-xs font-mono mb-4">WEEKLY OR MONTHLY ENGAGEMENT</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Ongoing engineering support for CI/CD pipeline automation, distroless Docker packaging, Kubernetes manifest reviews, and system performance tuning.
                                </p>
                            </div>
                            <Link href="/contact?type=devsecops" className="text-xs font-mono font-bold text-black hover:text-emerald-600 flex items-center gap-1">
                                DISCUSS RETAINER &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Proof & Evidence Matrix */}
                <section className="mb-20 bg-gray-900 text-white rounded-2xl p-8 md:p-12">
                    <div className="max-w-3xl mb-8">
                        <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Technical Evidence</span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                            Capabilities Backed by Real, Documented Software.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            I don't make claims I cannot reproduce. Every service pillar maps to a live, open-source system designed, coded, and benchmarked by me.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-800/80 p-4 rounded-lg border border-gray-700">
                            <span className="font-mono text-xs text-emerald-400 block mb-1">50,000 Ports/Min</span>
                            <span className="text-sm font-bold text-white block">Revealr Scanner</span>
                            <span className="text-xs text-gray-400">Raw Sockets &amp; SQLite</span>
                        </div>
                        <div className="bg-gray-800/80 p-4 rounded-lg border border-gray-700">
                            <span className="font-mono text-xs text-emerald-400 block mb-1">99.3% Reduction</span>
                            <span className="text-sm font-bold text-white block">PipelineForge</span>
                            <span className="text-xs text-gray-400">Distroless Docker &amp; Trivy</span>
                        </div>
                        <div className="bg-gray-800/80 p-4 rounded-lg border border-gray-700">
                            <span className="font-mono text-xs text-emerald-400 block mb-1">&lt;200ms Ingest</span>
                            <span className="text-sm font-bold text-white block">OSA Forensic Tool</span>
                            <span className="text-xs text-gray-400">Z-Score &amp; Markov Detection</span>
                        </div>
                        <div className="bg-gray-800/80 p-4 rounded-lg border border-gray-700">
                            <span className="font-mono text-xs text-emerald-400 block mb-1">AST Grounded</span>
                            <span className="text-sm font-bold text-white block">Klarity Intelligence</span>
                            <span className="text-xs text-gray-400">Zero-Hallucination Code RAG</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800 text-xs font-mono text-gray-400">
                        <span>All 8 live platforms accessible via dedicated subdomains</span>
                        <Link href="/projects" className="text-white hover:text-emerald-400 font-bold flex items-center gap-1 transition-colors">
                            EXPLORE ALL PROJECTS &rarr;
                        </Link>
                    </div>
                </section>

                {/* Frequently Asked Questions */}
                <section className="mb-20 max-w-4xl">
                    <div className="mb-8">
                        <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">FAQ</span>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black">Client Questions &amp; Process</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="border border-gray-200 rounded-xl p-6 bg-white">
                            <h3 className="text-lg font-bold text-black mb-2">How do you structure freelance engagements?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                I operate primarily on fixed-scope project milestones or dedicated weekly sprint retainers. Every engagement begins with an intake call or written specification review where we agree on concrete deliverables, acceptance criteria, and timelines before writing any code.
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-white">
                            <h3 className="text-lg font-bold text-black mb-2">What is your primary tech stack?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                For backend services and CLI tools, I specialize in <strong>Go</strong> and <strong>Python</strong>. For databases, I work with PostgreSQL and SQLite. For infrastructure, I use Docker (multi-stage Distroless), GitHub Actions, Kubernetes, and Linux internals. For AI pipelines, I work with Tesseract OCR, Milvus, and Ollama.
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-white">
                            <h3 className="text-lg font-bold text-black mb-2">Do you sign NDAs and work with international clients?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Yes. I routinely sign mutual Non-Disclosure Agreements (NDAs) prior to discussing proprietary code or infrastructure. I work remotely with clients worldwide and communicate asynchronously with daily or weekly written status summaries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Intake CTA Banner */}
                <section className="mb-20 border-2 border-black rounded-2xl p-8 md:p-12 text-center bg-gray-50">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black mb-4">
                        READY TO DISCUSS YOUR PROJECT?
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
                        Send over your project specification, timeline, or security requirements. I will review and reply within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-lg flex items-center gap-2"
                        >
                            SUBMIT PROJECT INTAKE <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="mailto:rounakneema414@gmail.com"
                            className="text-black font-mono text-sm font-bold border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                        >
                            rounakneema414@gmail.com
                        </a>
                    </div>
                </section>
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
