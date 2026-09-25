import Link from 'next/link';
import { ArrowLeft, ArrowRight, Gauge, Activity, Timer } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Benchmarks — Revealr Network Scanner',
    description: 'Measured performance data for Revealr: throughput at different rates, latency, and comparison against nmap and masscan on controlled test networks.',
    alternates: { canonical: 'https://revealr.rounakneema.in/benchmarks' },
};

const benchmarkData = [
    { rate: '5,000',   time: '?? s', ports: '65,535', notes: 'Polite — IDS-safe' },
    { rate: '10,000',  time: '?? s', ports: '65,535', notes: 'Default mode' },
    { rate: '25,000',  time: '?? s', ports: '65,535', notes: 'Fast mode' },
    { rate: '50,000',  time: '~0.8 s', ports: '65,535', notes: 'Benchmark target' },
    { rate: '100,000', time: '?? s', ports: '65,535', notes: 'High-perf (LAN only)' },
];

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
                        <div className="text-3xl font-black text-white">0.8s</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Full 65k Sweep</div>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 text-center">
                        <Activity className="w-6 h-6 text-amber-400 mx-auto mb-4" />
                        <div className="text-3xl font-black text-white">Raw</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Socket Layer</div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c100e] mb-16">
                    <div className="border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Throughput vs. Rate Flag</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/[0.02] text-xs font-mono text-zinc-500 border-b border-white/[0.08]">
                                <tr>
                                    <th className="px-6 py-4 font-normal">--rate</th>
                                    <th className="px-6 py-4 font-normal">Time (65k)</th>
                                    <th className="px-6 py-4 font-normal">Probes</th>
                                    <th className="px-6 py-4 font-normal">Context</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.04]">
                                {benchmarkData.map((row, i) => (
                                    <tr key={i} className={`hover:bg-white/[0.02] transition-colors ${row.rate === '50,000' ? 'bg-sky-400/5' : ''}`}>
                                        <td className="px-6 py-4 font-mono text-sky-300 font-bold">{row.rate}</td>
                                        <td className="px-6 py-4 text-zinc-300">{row.time}</td>
                                        <td className="px-6 py-4 text-zinc-500">{row.ports}</td>
                                        <td className="px-6 py-4 text-xs text-zinc-500">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
