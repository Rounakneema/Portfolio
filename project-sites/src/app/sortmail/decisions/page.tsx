import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // Decisions & Benchmarks',
    description: 'Engineering trade-offs, performance benchmarks, and decision logs for SortMail.',
};

export default function DecisionsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-amber-500/30 selection:text-white pb-24">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#222] flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/" className="hover:text-amber-500 transition-colors text-[#888]">
                        &larr; Back
                    </Link>
                    <span className="text-[#333]">|</span>
                    <Link href="/" className="text-[#888] hover:text-white transition-colors">
                        Overview
                    </Link>
                    <Link href="/architecture" className="text-[#888] hover:text-white transition-colors">
                        Architecture
                    </Link>
                    <span className="text-white font-semibold">
                        Decisions
                    </span>
                    <Link href="/docs" className="text-[#888] hover:text-white transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            <header className="px-6 md:px-12 py-16 border-b border-[#333]">
                <h1 className="text-2xl font-black uppercase tracking-tighter mb-4">
                    Decisions & Trade-offs
                </h1>
                <p className="text-[#888] max-w-2xl text-sm md:text-base leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
                    An unfiltered log of our engineering compromises, performance benchmarks, and the explicit rejection of generic SaaS paradigms.
                </p>
            </header>

            <section className="px-6 md:px-12 py-12 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Log 01 */}
                    <div className="border border-[#222] bg-[#0a0a0a] p-8 relative">
                        <div className="absolute top-0 right-0 bg-[#222] text-xs px-2 py-1 m-4 text-[#888]">ADR-001</div>
                        <h3 className="text-xl font-bold uppercase mb-4 text-white">Go vs Python for Ingress</h3>
                        <div className="text-sm text-[#aaa] space-y-4">
                            <p>
                                <strong>Context:</strong> Webhook ingestion needs high throughput and low memory footprint. Python (FastAPI) was initially evaluated.
                            </p>
                            <p>
                                <strong>Decision:</strong> We opted for Go at the edge. Python's GIL and async event loop overhead became apparent during synthetic load tests of 5,000+ concurrent webhook deliveries. Go's goroutines allow us to ingest, validate signatures, and dump to the event bus with minimal latency.
                            </p>
                            <p>
                                <strong>Trade-off:</strong> This forced a polyglot architecture. Go handles the dumb pipe, Python handles the smart AI parsing, increasing deployment complexity.
                            </p>
                        </div>
                    </div>

                    {/* Log 02 */}
                    <div className="border border-[#222] bg-[#0a0a0a] p-8 relative">
                        <div className="absolute top-0 right-0 bg-[#222] text-xs px-2 py-1 m-4 text-[#888]">ADR-002</div>
                        <h3 className="text-xl font-bold uppercase mb-4 text-white">Rejection of 'Agentic' Loops</h3>
                        <div className="text-sm text-[#aaa] space-y-4">
                            <p>
                                <strong>Context:</strong> Trend towards autonomous AI agents that reply and delete emails on the user's behalf.
                            </p>
                            <p>
                                <strong>Decision:</strong> We explicitly rejected autonomous actions. SortMail uses deterministic logic to construct prompts, but execution (sending, scheduling) always requires human confirmation.
                            </p>
                            <p>
                                <strong>Trade-off:</strong> Lower automation score on paper, but absolute trust in reality. We prioritize decision clarity over feature count. No silent actions, no hidden automation.
                            </p>
                        </div>
                    </div>

                    {/* Log 03 */}
                    <div className="border border-[#222] bg-[#0a0a0a] p-8 relative">
                        <div className="absolute top-0 right-0 bg-[#222] text-xs px-2 py-1 m-4 text-[#888]">ADR-003</div>
                        <h3 className="text-xl font-bold uppercase mb-4 text-white">Ephemeral Token Storage</h3>
                        <div className="text-sm text-[#aaa] space-y-4">
                            <p>
                                <strong>Context:</strong> Storing Gmail/Outlook OAuth tokens securely.
                            </p>
                            <p>
                                <strong>Decision:</strong> Tokens are encrypted at rest using a rotating master key (KMS). More importantly, the system aggressively expires refresh tokens if inactivity is detected, forcing re-authentication.
                            </p>
                            <p>
                                <strong>Trade-off:</strong> Increased user friction if they don't log in frequently. We accept this UX hit to maintain a fortified security posture.
                            </p>
                        </div>
                    </div>

                    {/* Benchmarks */}
                    <div className="border border-[#222] bg-black p-8 relative col-span-1 lg:col-span-2">
                        <h3 className="text-xl font-bold uppercase mb-6 text-red-500">Latency Benchmarks (p99)</h3>
                        <div className="font-mono text-xs overflow-x-auto text-[#ccc]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#333] text-[#666]">
                                        <th className="py-2 pr-4 font-normal uppercase">Operation</th>
                                        <th className="py-2 px-4 font-normal uppercase">Target</th>
                                        <th className="py-2 px-4 font-normal uppercase">Actual</th>
                                        <th className="py-2 pl-4 font-normal uppercase">Delta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 pr-4">Webhook Ingress (Auth + Enqueue)</td>
                                        <td className="py-3 px-4 text-yellow-500">&lt; 50ms</td>
                                        <td className="py-3 px-4 text-green-500">12ms</td>
                                        <td className="py-3 pl-4 text-green-500">-38ms</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 pr-4">Attachment Extraction (Air-Gapped)</td>
                                        <td className="py-3 px-4 text-yellow-500">&lt; 2000ms</td>
                                        <td className="py-3 px-4 text-red-500">2800ms</td>
                                        <td className="py-3 pl-4 text-red-500">+800ms</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 pr-4">LLM RAG Context Assembly</td>
                                        <td className="py-3 px-4 text-yellow-500">&lt; 300ms</td>
                                        <td className="py-3 px-4 text-green-500">185ms</td>
                                        <td className="py-3 pl-4 text-green-500">-115ms</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Full BLUF Generation (Claude Haiku)</td>
                                        <td className="py-3 px-4 text-yellow-500">&lt; 1500ms</td>
                                        <td className="py-3 px-4 text-green-500">1200ms</td>
                                        <td className="py-3 pl-4 text-green-500">-300ms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
