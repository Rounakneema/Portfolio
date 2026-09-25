import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
    title: 'SortMail // Decisions & Benchmarks',
    description: 'Engineering trade-offs, performance benchmarks, and decision logs for SortMail.',
};

export default function DecisionsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-amber-500/30 selection:text-black pb-24">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-white/90 backdrop-blur-md z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/" className="hover:text-amber-500 transition-colors text-gray-600">
                        &larr; Back
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                        Overview
                    </Link>
                    <Link href="/architecture" className="text-gray-600 hover:text-black transition-colors">
                        Architecture
                    </Link>
                    <span className="text-black font-semibold">
                        Decisions
                    </span>
                    <Link href="/docs" className="text-gray-600 hover:text-black transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            <ScrollReveal direction="up" delay={0.1}>
                <header className="px-6 md:px-12 py-16 border-b border-gray-200">
                    <h1 className="text-2xl font-black uppercase tracking-tight mb-4">
                        Decisions & Trade-offs
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
                        An unfiltered log of our engineering compromises, performance benchmarks, and the explicit rejection of generic SaaS paradigms.
                    </p>
                </header>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
                <section className="px-6 md:px-12 py-12 max-w-5xl">
                    <StaggerContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            
                            {/* Log 01 */}
                            <StaggerItem>
                                <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-8 relative hover:-translate-y-1 transition-all duration-300 hover:border-amber-500 h-full">
                                    <div className="absolute top-0 right-0 bg-white border border-gray-200 text-xs px-2 py-1 m-4 text-gray-500 rounded">ADR-001</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">Go vs Python for Ingress</h3>
                                    <div className="text-sm text-gray-600 space-y-4">
                                        <p className="leading-relaxed">
                                            <strong>Context:</strong> Webhook ingestion needs high throughput and low memory footprint. Python (FastAPI) was initially evaluated.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Decision:</strong> We opted for Go at the edge. Python's GIL and async event loop overhead became apparent during synthetic load tests of 5,000+ concurrent webhook deliveries. Go's goroutines allow us to ingest, validate signatures, and dump to the event bus with minimal latency.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Trade-off:</strong> This forced a polyglot architecture. Go handles the dumb pipe, Python handles the smart AI parsing, increasing deployment complexity.
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Log 02 */}
                            <StaggerItem>
                                <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-8 relative hover:-translate-y-1 transition-all duration-300 hover:border-amber-500 h-full">
                                    <div className="absolute top-0 right-0 bg-white border border-gray-200 text-xs px-2 py-1 m-4 text-gray-500 rounded">ADR-002</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">Rejection of 'Agentic' Loops</h3>
                                    <div className="text-sm text-gray-600 space-y-4">
                                        <p className="leading-relaxed">
                                            <strong>Context:</strong> Trend towards autonomous AI agents that reply and delete emails on the user's behalf.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Decision:</strong> We explicitly rejected autonomous actions. SortMail uses deterministic logic to construct prompts, but execution (sending, scheduling) always requires human confirmation.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Trade-off:</strong> Lower automation score on paper, but absolute trust in reality. We prioritize decision clarity over feature count. No silent actions, no hidden automation.
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Log 03 */}
                            <StaggerItem>
                                <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-8 relative hover:-translate-y-1 transition-all duration-300 hover:border-amber-500 h-full">
                                    <div className="absolute top-0 right-0 bg-white border border-gray-200 text-xs px-2 py-1 m-4 text-gray-500 rounded">ADR-003</div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">Ephemeral Token Storage</h3>
                                    <div className="text-sm text-gray-600 space-y-4">
                                        <p className="leading-relaxed">
                                            <strong>Context:</strong> Storing Gmail/Outlook OAuth tokens securely.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Decision:</strong> Tokens are encrypted at rest using a rotating master key (KMS). More importantly, the system aggressively expires refresh tokens if inactivity is detected, forcing re-authentication.
                                        </p>
                                        <p className="leading-relaxed">
                                            <strong>Trade-off:</strong> Increased user friction if they don't log in frequently. We accept this UX hit to maintain a fortified security posture.
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Benchmarks */}
                            <div className="col-span-1 lg:col-span-2">
                                <StaggerItem>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-8 relative hover:-translate-y-1 transition-all duration-300 hover:border-amber-500 w-full">
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-red-600">Latency Benchmarks (p99)</h3>
                                        <div className="font-mono text-xs overflow-x-auto text-gray-700">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-300 text-gray-500">
                                                        <th className="py-2 pr-4 font-normal uppercase tracking-tight">Operation</th>
                                                        <th className="py-2 px-4 font-normal uppercase tracking-tight">Target</th>
                                                        <th className="py-2 px-4 font-normal uppercase tracking-tight">Actual</th>
                                                        <th className="py-2 pl-4 font-normal uppercase tracking-tight">Delta</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 hover:bg-black/5 transition-colors">
                                                        <td className="py-3 pr-4 leading-relaxed">Webhook Ingress (Auth + Enqueue)</td>
                                                        <td className="py-3 px-4 text-amber-600 leading-relaxed">&lt; 50ms</td>
                                                        <td className="py-3 px-4 text-green-600 leading-relaxed">12ms</td>
                                                        <td className="py-3 pl-4 text-green-600 leading-relaxed">-38ms</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-black/5 transition-colors">
                                                        <td className="py-3 pr-4 leading-relaxed">Attachment Extraction (Air-Gapped)</td>
                                                        <td className="py-3 px-4 text-amber-600 leading-relaxed">&lt; 2000ms</td>
                                                        <td className="py-3 px-4 text-red-600 leading-relaxed">2800ms</td>
                                                        <td className="py-3 pl-4 text-red-600 leading-relaxed">+800ms</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-black/5 transition-colors">
                                                        <td className="py-3 pr-4 leading-relaxed">LLM RAG Context Assembly</td>
                                                        <td className="py-3 px-4 text-amber-600 leading-relaxed">&lt; 300ms</td>
                                                        <td className="py-3 px-4 text-green-600 leading-relaxed">185ms</td>
                                                        <td className="py-3 pl-4 text-green-600 leading-relaxed">-115ms</td>
                                                    </tr>
                                                    <tr className="hover:bg-black/5 transition-colors">
                                                        <td className="py-3 pr-4 leading-relaxed">Full BLUF Generation (Claude Haiku)</td>
                                                        <td className="py-3 px-4 text-amber-600 leading-relaxed">&lt; 1500ms</td>
                                                        <td className="py-3 px-4 text-green-600 leading-relaxed">1200ms</td>
                                                        <td className="py-3 pl-4 text-green-600 leading-relaxed">-300ms</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </div>
                        </div>
                    </StaggerContainer>
                </section>
            </ScrollReveal>
        </main>
    );
}
