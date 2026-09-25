import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Changelog — Revealr Network Scanner',
    description: 'Development history, version milestones, and feature additions for Revealr.',
    alternates: { canonical: 'https://revealr.rounakneema.in/changelog' },
};

const changelog = [
    {
        version: 'v1.0.0',
        date: 'Current Release',
        status: 'current',
        changes: [
            { type: 'feat', text: 'Initial release with high-concurrency Go scanning engine' },
            { type: 'feat', text: 'SQLite-backed stateful scan persistence and resume capability' },
            { type: 'feat', text: 'Network drift detection — diff between current and historical scan results' },
            { type: 'feat', text: 'Python plugin IPC bridge for extensible fingerprinting' },
            { type: 'feat', text: 'Scan profiles: Paranoid, Stealthy, Polite, Aggressive' },
            { type: 'feat', text: 'Raw socket packet generation with token-bucket rate limiter' },
            { type: 'feat', text: 'JSON and STDOUT output modes' },
        ],
    },
];

const typeColors: Record<string, string> = {
    feat: 'text-lime-300 bg-lime-400/10 border-lime-400/20',
    fix: 'text-rose-300 bg-rose-400/10 border-rose-400/20',
    perf: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
};

export default function RevealrChangelog() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-[#080b0a] text-zinc-400 font-sans">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
                <div className="absolute left-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20 md:px-10">
                <div className="mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">// Version History</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Changelog</h1>
                </div>

                <div className="relative border-l border-white/[0.07] ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
                    {changelog.map((release) => (
                        <div key={release.version} className="relative">
                            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 flex items-center justify-center">
                                <div className={`h-4 w-4 rounded-full border border-[#080b0a] bg-lime-400 shadow-[0_0_12px_2px_rgba(190,242,100,0.5)]`} />
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-2xl font-black text-white">{release.version}</h2>
                                <span className="text-xs font-mono text-zinc-500">{release.date}</span>
                                {release.status === 'current' && <span className="rounded-full bg-lime-400/10 border border-lime-400/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-lime-300">Latest</span>}
                            </div>

                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-8">
                                <ul className="space-y-4">
                                    {release.changes.map((change, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className={`shrink-0 mt-0.5 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest border ${typeColors[change.type]}`}>
                                                {change.type}
                                            </span>
                                            <span className="text-sm leading-6 text-zinc-400">{change.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-end">
                    <a href="https://github.com/rounakneema/Revealr/commits" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-zinc-400 hover:text-white">
                        Full Git History <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
