import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Terminal, CheckCircle2, ArrowRight, ArrowUpRight, Cpu, Database, Server } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: 'Freelance Go & Backend Developer // Rounak Neema',
    description: 'Hire a freelance Go developer and backend engineer for concurrent microservices, low-latency API development, high-throughput systems, and production MVPs.',
    alternates: { canonical: 'https://rounakneema.in/freelance/software-development' },
    openGraph: {
        title: 'Freelance Go Developer & Backend Systems // Rounak Neema',
        description: 'Concurrent backend systems in Go and Python. High-performance REST/gRPC API architectures, SQLite/PostgreSQL engineering, and production MVP delivery.',
        url: 'https://rounakneema.in/freelance/software-development',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SoftwareDevelopmentServicesPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-blue-50 border border-blue-200">
                        <Terminal className="w-3.5 h-3.5 text-blue-600" />
                        <span className="font-mono text-xs font-bold tracking-widest text-blue-800 uppercase">
                            Backend &amp; Systems Engineering
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
                        FREELANCE GO &amp; BACKEND DEVELOPER.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mb-8">
                        I build high-throughput concurrent backends, resilient APIs, and early-stage MVPs in Go and Python.
                        Every architecture is engineered for low latency, zero runtime bloat, and predictable production scaling.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact?service=backend"
                            className="bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2 group"
                        >
                            HIRE FOR BACKEND WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://revealr.rounakneema.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                        >
                            SEE PROOF: REVEALR (GO SCANNER) <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </header>

                {/* What I Deliver */}
                <section className="mb-16">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Scope of Work</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-8">What I Build for Clients</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg inline-block mb-4">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">High-Concurrency Go Engines</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Bounded worker pools, channel orchestration, and raw socket networking capable of handling tens of thousands of operations per minute without memory leaks or race conditions.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Goroutine rate-limiting and context cancellation</li>
                                <li>· Custom protocol parsers and packet engines</li>
                                <li>· Benchmark-verified memory footprint under load</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg inline-block mb-4">
                                <Server className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">REST &amp; gRPC API Architecture</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Clean, versioned microservices with strict schema validation, structured JSON logging, Prometheus metrics, and automated OpenAPI (Swagger) documentation.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Idempotent payment, webhook, and auth flows</li>
                                <li>· JWT and API key authentication middleware</li>
                                <li>· Sub-10ms p95 latency targets</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg inline-block mb-4">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Database Design &amp; State Management</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Optimized SQLite embedded stores with WAL (Write-Ahead Logging) journaling and PostgreSQL databases with indexing strategies, connection pooling, and automated migrations.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Historical state diffing and scan history tracking</li>
                                <li>· SQL migration tooling and zero-downtime schemas</li>
                                <li>· High write-volume transaction safety</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg inline-block mb-4">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Full MVP Delivery (2–4 Weeks)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                For early-stage founders who need a backend built right the first time. We turn your product requirements into a production Docker image ready to run on any cloud host.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Complete backend service with clean docs</li>
                                <li>· Integration tests and GitHub Actions CI workflow</li>
                                <li>· Zero vendor lock-in; runs anywhere via Docker</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Evidence & Case Study Anchor */}
                <section className="mb-16 border-2 border-black rounded-xl p-8 bg-zinc-50">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Featured Evidence</span>
                    <h2 className="text-2xl font-black text-black mb-4">Revealr: 50,000 Ports/Minute Stateful Go Scanner</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-3xl">
                        Revealr is an open-source adaptive network scanner written in Go. It demonstrates low-level raw socket synthesis, rate-limiting concurrency control, and SQLite stateful persistence to detect network drift across scans.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Throughput</span>
                            <span className="font-bold text-base text-black">50k Ports / min</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">State Engine</span>
                            <span className="font-bold text-base text-black">SQLite WAL Mode</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Language</span>
                            <span className="font-bold text-base text-black">Go (Golang)</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Status</span>
                            <span className="font-bold text-base text-emerald-600">Open Source</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/projects/revealr" className="text-xs font-bold font-mono text-black hover:text-blue-600 flex items-center gap-1">
                            READ CASE STUDY &rarr;
                        </Link>
                        <a href="https://github.com/rounakneema/revealr" target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-gray-600 hover:text-black flex items-center gap-1">
                            VIEW SOURCE ON GITHUB &rarr;
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black text-black mb-6">Backend Engineering FAQ</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">Why hire a Go developer for a backend project?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Go compiles into a single statically linked binary with near-instant boot times and minimal RAM usage. Its built-in concurrency primitives (goroutines and channels) allow backends to handle high concurrent traffic loads with a fraction of the cloud hosting costs required by Node.js or Python runtimes.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">Can you work with our existing frontend or mobile app?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Absolutely. I build clean RESTful and gRPC APIs adhering strictly to OpenAPI 3.0 specifications. Your frontend (React, Next.js, Flutter, iOS) integrates seamlessly via strongly typed endpoints.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conversion Bar */}
                <section className="mb-20 text-center py-12 px-6 bg-black text-white rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Need a High-Performance Backend Built?</h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mb-8">
                        Let's scope your technical requirements and deliver a fast, reliable, containerized service.
                    </p>
                    <Link
                        href="/contact?service=backend"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-lg"
                    >
                        START BACKEND INTAKE <ArrowRight className="w-4 h-4" />
                    </Link>
                </section>
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
