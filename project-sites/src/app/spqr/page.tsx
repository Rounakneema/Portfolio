import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SPQR | Distributed Postgres Sharding',
    description: 'Smart Packet Query & Routing Engine / Postgres Sharding observability contribution.',
};

export default function SpqrPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#ff3333] selection:text-white flex flex-col">
            <div className="flex-1 w-full max-w-screen-2xl mx-auto border-x border-[#333] relative">
                {/* Header / Nav */}
                <header className="border-b border-[#333] flex justify-between items-center p-4 md:p-6 uppercase text-xs tracking-[0.3em]">
                    <Link href="/" className="hover:text-white hover:bg-[#333] px-4 py-2 transition-colors border border-transparent hover:border-[#555]">
                        [ ESC ] BACK
                    </Link>
                    <div className="hidden md:block text-[#666]">
                        DISTRIBUTED_SYSTEMS // OBSERVABILITY
                    </div>
                </header>

                <article className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column */}
                    <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#333] p-6 md:p-12 flex flex-col justify-between">
                        <div>
                            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-6 mix-blend-lighten text-white">
                                SPQR
                            </h1>
                            <h2 className="text-xl md:text-2xl font-light text-[#888] mb-12">
                                Smart Packet Query & Routing Engine <br/>
                                <span className="text-[#ff3333] italic">Postgres Sharding</span>
                            </h2>
                            
                            <div className="space-y-8 mt-12 border-t border-[#333] pt-12">
                                <div>
                                    <h3 className="text-xs text-[#ff3333] uppercase tracking-[0.2em] mb-2 border-l-2 border-[#ff3333] pl-3">Challenge</h3>
                                    <p className="text-base leading-relaxed text-[#ccc]">
                                        Needed real-time Request Per Second (RPS) tracking across a distributed PostgreSQL sharding router to diagnose performance bottlenecks.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xs text-[#ff3333] uppercase tracking-[0.2em] mb-2 border-l-2 border-[#ff3333] pl-3">Solution</h3>
                                    <p className="text-base leading-relaxed text-[#ccc]">
                                        Implemented native RPS observability instrumentation into the SPQR routing layer for production-grade throughput visibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-[#333]">
                            <a href="https://github.com/pg-sharding/spqr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-[#ff3333] transition-colors group">
                                <span className="p-3 border border-[#333] group-hover:border-[#ff3333] group-hover:bg-[#ff3333]/10">GitHub</span>
                                <span>View Source ↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 bg-[#050505] p-6 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 p-4 text-[#111] text-[12rem] font-black leading-none pointer-events-none select-none">
                            *
                        </div>

                        <div className="z-10 relative">
                            <p className="text-lg md:text-2xl leading-relaxed text-[#aaa] font-light max-w-2xl mb-16 indent-12">
                                SPQR is a PostgreSQL distributed sharding router. My open-source contribution involved implementing native Request Per Second (RPS) tracking across the distributed routing layer. This added critical observability and performance instrumentation to a production-grade Go codebase, allowing administrators to properly diagnose routing bottlenecks and throughput issues.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-t border-[#222] pt-8">
                                <div className="space-y-2">
                                    <span className="block text-[0.65rem] text-[#666] uppercase tracking-widest">Contribution</span>
                                    <span className="block text-sm text-[#ddd]">Implemented RPS observability for distributed PostgreSQL routing.</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-[0.65rem] text-[#666] uppercase tracking-widest">Impact</span>
                                    <span className="block text-sm text-[#ddd]">Provided crucial visibility into query throughput to diagnose bottlenecks.</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-[0.65rem] text-[#666] uppercase tracking-widest">Skills</span>
                                    <span className="block text-sm text-[#ddd]">Demonstrated ability to work within an external, serious production-grade Go codebase.</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-[0.65rem] text-[#666] uppercase tracking-widest">Environment</span>
                                    <span className="block text-sm text-[#ddd]">Navigated pull requests, code reviews, and distributed systems architecture.</span>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Trace Section */}
                        <div className="border border-[#333] bg-[#0a0a0a] z-10 w-full mt-auto shadow-2xl">
                            <div className="border-b border-[#333] px-4 py-2 flex justify-between items-center bg-[#111]">
                                <span className="text-[#888] text-[0.65rem] uppercase tracking-widest">Terminal Trace :: RPS Tracking</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse"></div>
                                </div>
                            </div>
                            <div className="p-4 font-mono text-xs md:text-sm text-[#888] space-y-2 overflow-x-auto whitespace-pre">
                                <p><span className="text-[#555]">00:00:01</span> <span className="text-[#fff]">INFO</span>  [spqr] initializing distributed shard map...</p>
                                <p><span className="text-[#555]">00:00:01</span> <span className="text-[#fff]">INFO</span>  [spqr] listening on 0.0.0.0:6432</p>
                                <p><span className="text-[#555]">00:00:03</span> <span className="text-[#55f]">DEBUG</span> [observability] injecting RPS tracker middleware</p>
                                <p><span className="text-[#555]">00:00:05</span> <span className="text-[#fff]">INFO</span>  [spqr] connection accepted from 10.0.1.42</p>
                                <p><span className="text-[#555]">00:00:10</span> <span className="text-[#f55]">METRIC</span> <span className="text-white">[shard_01] RPS: 4,205 | P99: 12ms</span></p>
                                <p><span className="text-[#555]">00:00:11</span> <span className="text-[#f55]">METRIC</span> <span className="text-white">[shard_02] RPS: 8,192 | P99: 18ms</span></p>
                                <p><span className="text-[#555]">00:00:11</span> <span className="text-[#f55]">METRIC</span> <span className="text-white">[shard_03] RPS: 1,024 | P99: 8ms</span></p>
                                <p><span className="text-[#555]">00:00:15</span> <span className="text-[#f55]">WARN</span>  [shard_02] throughput threshold exceeded</p>
                                <p><span className="text-[#555]">00:00:16</span> <span className="text-[#f55]">METRIC</span> <span className="text-white">[global] Total RPS: 13,421 | Active Conns: 842</span></p>
                                <div className="mt-4 pt-4 border-t border-[#222] flex gap-3 text-[0.65rem] uppercase tracking-widest text-[#555]">
                                    <span>Go</span>
                                    <span>PostgreSQL</span>
                                    <span>Distributed Routing</span>
                                    <span>Observability</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>
            </div>
        </main>
    );
}
