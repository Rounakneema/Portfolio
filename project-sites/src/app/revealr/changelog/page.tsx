import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Changelog — Revealr Network Scanner',
    description: 'Development history, version milestones, and feature additions for Revealr.',
    alternates: { canonical: 'https://revealr.rounakneema.in/changelog' },
};

const nav = [
    { href: '/revealr', label: 'Overview' },
    { href: '/revealr/architecture', label: 'Architecture' },
    { href: '/revealr/benchmarks', label: 'Benchmarks' },
    { href: '/revealr/security', label: 'Security' },
    { href: '/revealr/docs', label: 'Docs' },
    { href: '/revealr/changelog', label: 'Changelog' },
];

// ⚠️ INPUT NEEDED — Fill in your actual version history. Replace placeholder entries below with real dates, version numbers, and changes.
const changelog = [
    {
        version: 'v1.0.0-beta',
        date: '⚠️ Your release date here (e.g. Jan 2025)',
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
    {
        version: 'v0.9.0',
        date: '⚠️ Your date here',
        status: 'past',
        changes: [
            { type: 'feat', text: '⚠️ Add your real change here' },
            { type: 'fix', text: '⚠️ Add your real fix here' },
            { type: 'perf', text: '⚠️ Add your real optimization here' },
        ],
    },
    {
        version: 'v0.5.0',
        date: '⚠️ Your date here',
        status: 'past',
        changes: [
            { type: 'feat', text: '⚠️ Add your initial prototype changes here' },
        ],
    },
];

const typeColors: Record<string, string> = {
    feat: 'text-green-400 bg-green-900/20 border-green-800',
    fix: 'text-red-400 bg-red-900/20 border-red-800',
    perf: 'text-blue-400 bg-blue-900/20 border-blue-800',
    docs: 'text-yellow-400 bg-yellow-900/20 border-yellow-800',
    refactor: 'text-purple-400 bg-purple-900/20 border-purple-800',
};

export default function RevealrChangelog() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">// Development History</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Changelog</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        All notable changes to Revealr are documented here. The format follows Semantic Versioning.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-zinc-800"></div>

                    <div className="space-y-12">
                        {changelog.map((release, idx) => (
                            <div key={release.version} className="pl-10 relative">
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                                    release.status === 'current'
                                        ? 'border-green-500 bg-green-900/30'
                                        : 'border-zinc-600 bg-zinc-900'
                                }`}>
                                    {release.status === 'current' && <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>}
                                    {release.status === 'past' && <div className="w-2 h-2 rounded-full bg-zinc-600"></div>}
                                </div>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className={`text-lg font-black ${release.status === 'current' ? 'text-green-400' : 'text-zinc-300'}`}>
                                        {release.version}
                                    </span>
                                    <span className="text-xs text-zinc-500">{release.date}</span>
                                    {release.status === 'current' && (
                                        <span className="text-xs bg-green-900/30 border border-green-800 text-green-400 px-2 py-0.5 rounded-full">LATEST</span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    {release.changes.map((change, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-widest shrink-0 mt-0.5 ${typeColors[change.type] || typeColors.feat}`}>
                                                {change.type}
                                            </span>
                                            <span className="text-zinc-300 text-sm leading-relaxed">{change.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/docs" className="text-zinc-500 hover:text-white transition-colors text-sm">← Documentation</Link>
                    <a href="https://github.com/rounakneema/Revealr/commits" target="_blank" rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors text-sm">Full Git History →</a>
                </div>
            </div>
    );
}
