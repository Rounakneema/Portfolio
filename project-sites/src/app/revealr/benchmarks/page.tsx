import Link from 'next/link';
import { ArrowLeft, ArrowRight, Gauge, Activity, Timer } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Benchmarks — Revealr Network Scanner',
    description: 'Measured performance data for Revealr: throughput at different rates, latency, and comparison against nmap and masscan on controlled test networks.',
    alternates: { canonical: 'https://revealr.rounakneema.in/benchmarks' },
};



export default function RevealrBenchmarks() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-[#080b0a] text-zinc-400 font-sans">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
                <div className="absolute right-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <nav className="relative z-50 flex h-16 items-center border-b border-white/[0.07] px-6 md:px-10">
                <Link href="/revealr/architecture" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white mr-4">
                    <ArrowLeft className="h-4 w-4" />
                </Link>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-200">REVEALR <span className="text-zinc-600">/</span> BENCHMARKS</span>
            </nav>

            <div className="max-w-6xl mx-auto px-6 py-20 md:px-10">
                <div className="mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-300 mb-4">// Performance Data</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Benchmark Results</h1>
                    <p className="text-sm leading-6 text-zinc-500 max-w-2xl">
                        Measured throughput data from controlled test environments. All tests were run on local networks. Internet-facing scans will produce lower throughput due to network latency and packet loss.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 text-center">
                        <Gauge className="w-6 h-6 text-sky-400 mx-auto mb-4" />
                        <div className="text-3xl font-black text-white">50K+</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Ports / Minute</div>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 text-center">
                        <Timer className="w-6 h-6 text-lime-400 mx-auto mb-4" />
                        <div className="text-3xl font-black text-white">~0.8s</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Full 65k Sweep</div>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 text-center">
                        <Activity className="w-6 h-6 text-amber-400 mx-auto mb-4" />
                        <div className="text-3xl font-black text-white">Raw</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Socket Layer</div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c100e] mb-16 p-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">Throughput Scaling (Ports per Minute)</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-2">
                                <span className="text-sky-300 font-bold">50,000+ (Aggressive)</span>
                                <span className="text-zinc-500">~0.8s / 65k sweep</span>
                            </div>
                            <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                                <div className="h-full bg-sky-400 w-[100%] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-2">
                                <span className="text-lime-300 font-bold">25,000 (Fast)</span>
                                <span className="text-zinc-500">Not Measured</span>
                            </div>
                            <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                                <div className="h-full bg-lime-400 w-[50%] rounded-full"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-2">
                                <span className="text-amber-300 font-bold">10,000 (Polite Default)</span>
                                <span className="text-zinc-500">Not Measured</span>
                            </div>
                            <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                                <div className="h-full bg-amber-400 w-[20%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">Benchmark Conditions</h3>
                        <ul className="space-y-4 text-xs font-mono">
                            <li className="flex justify-between border-b border-white/[0.05] pb-2"><span className="text-zinc-500">Environment</span><span className="text-zinc-300">Local Network</span></li>
                            <li className="flex justify-between border-b border-white/[0.05] pb-2"><span className="text-zinc-500">Transport</span><span className="text-zinc-300">Raw Socket SYN</span></li>
                            <li className="flex justify-between border-b border-white/[0.05] pb-2"><span className="text-zinc-500">Target</span><span className="text-zinc-300">65,535 Ports</span></li>
                            <li className="flex justify-between pb-2"><span className="text-zinc-500">Rate Cap</span><span className="text-zinc-300">50,000 probes/min</span></li>
                        </ul>
                        <div className="mt-6 text-[10px] text-zinc-500 leading-relaxed border-l-2 border-amber-500/50 pl-3">
                            <strong className="text-amber-400">Important:</strong> These results represent controlled local-network measurements. They are not a claim of equivalent Internet-wide scanning performance where latency and packet loss dictate throughput.
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">Methodology</h3>
                        <ol className="space-y-4 text-xs text-zinc-400">
                            <li className="flex gap-4"><span className="text-sky-400 font-mono">01</span> Generate controlled isolated target environment.</li>
                            <li className="flex gap-4"><span className="text-sky-400 font-mono">02</span> Execute full 1-65535 port sweep against target.</li>
                            <li className="flex gap-4"><span className="text-sky-400 font-mono">03</span> Record raw packet dispatch rate at OS level.</li>
                            <li className="flex gap-4"><span className="text-sky-400 font-mono">04</span> Measure end-to-end completion time.</li>
                            <li className="flex gap-4"><span className="text-sky-400 font-mono">05</span> Verify scan accuracy against known baseline.</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-16 flex justify-end">
                    <Link href="/revealr/security" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-lime-300 hover:text-lime-200">
                        Next: Security Model <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
