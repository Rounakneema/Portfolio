import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // Engineering Decisions',
    description: 'Engineering trade-offs, concurrency models, and performance metrics for SortMail.',
};

export default function SortMailDecisionsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-900 selection:text-white">
            <nav className="p-6 md:p-12 border-b border-[#333] flex justify-between items-center text-xs tracking-widest uppercase">
                <div className="flex gap-4">
                    <Link href="/sortmail" className="text-[#666] hover:text-red-500 transition-colors">
                        &lt; Back to Overview
                    </Link>
                </div>
                <div className="flex gap-6">
                    <span className="text-[#666]">PAGE: Decisions</span>
                    <span className="text-[#666]">VER: 1.0.0</span>
                </div>
            </nav>

            <section className="px-6 md:px-12 py-16 max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 text-white border-b-4 border-red-600 pb-4 inline-block">
                    Trade-offs & Benchmarks
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <article>
                        <h2 className="text-xl font-bold uppercase mb-4 text-white border-l-2 border-red-500 pl-4">The Latency vs. Thoroughness Trade-off</h2>
                        <p className="text-[#999] leading-relaxed text-sm">
                            When building the BLUF engine, we initially tried analyzing the entire email graph (attachments, inline images, forward history) in a single pass. This resulted in P99 latencies of &gt;12s. We compromised by splitting the process. We use Claude Haiku for a rapid 200ms triage pass to determine if deep processing is even needed. Only high-value chains are sent to Claude 3.5 Sonnet for deep analysis.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-xl font-bold uppercase mb-4 text-white border-l-2 border-red-500 pl-4">Memory Safety over Raw Speed</h2>
                        <p className="text-[#999] leading-relaxed text-sm">
                            Parsing complex, often malformed MIME structures from older Outlook clients natively in Python using the `email` module caused frequent OOM errors and memory leaks. We shifted this responsibility to the Go layer, leveraging Go's robust standard library to strip headers and payload data into a flat buffer before sending it to Python, reducing idle memory overhead by 60%.
                        </p>
                    </article>

                    <article className="md:col-span-2 mt-8">
                        <div className="bg-[#111] border border-[#333] p-6">
                            <h3 className="text-xs text-[#555] uppercase tracking-widest border-b border-[#333] pb-2 mb-6">Performance Metrics</h3>
                            <table className="w-full text-left text-sm text-[#aaa]">
                                <thead>
                                    <tr className="border-b border-[#333] text-white">
                                        <th className="pb-2">Metric</th>
                                        <th className="pb-2">Target</th>
                                        <th className="pb-2">Actual (P95)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-4 text-[#ddd]">Ingestion Router Latency</td>
                                        <td className="py-4">{"< 50ms"}</td>
                                        <td className="py-4 text-[#4af626]">18ms</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-4 text-[#ddd]">BLUF Generation</td>
                                        <td className="py-4">{"< 3000ms"}</td>
                                        <td className="py-4 text-yellow-400">2800ms</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-[#ddd]">Attachment Scan</td>
                                        <td className="py-4">{"< 5000ms"}</td>
                                        <td className="py-4 text-red-500">6200ms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
