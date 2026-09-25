import Link from 'next/link';
import { ArrowRight, TerminalSquare, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
    title: 'Documentation — Revealr Network Scanner',
    description: 'Complete CLI reference, flag documentation, plugin API, output formats, and usage examples for Revealr.',
    alternates: { canonical: 'https://revealr.rounakneema.in/docs' },
};

const cliFlags = [
    { flag: '-target, -t', type: 'string', desc: 'Target IP, CIDR range, or hostname. (e.g. 192.168.1.0/24)' },
    { flag: '-ports, -p', type: 'string', desc: 'Port range to scan. Default: 1-65535. (e.g. 22,80,443 or 1-1024)' },
    { flag: '--rate', type: 'int', desc: 'Packets per minute dispatch rate. Default: 10000.' },
    { flag: '--profile', type: 'string', desc: 'Scan profile: paranoid | stealthy | polite | aggressive. Default: polite.' },
    { flag: '--resume', type: 'bool', desc: 'Resume the last interrupted scan session for this target.' },
    { flag: '--diff', type: 'bool', desc: 'Show diff against the last scan. Outputs new/changed/removed services.' },
    { flag: '--plugins', type: 'string', desc: 'Path to Python plugin directory. Plugins are auto-discovered.' },
    { flag: '--output, -o', type: 'string', desc: 'Output format: json | stdout | file. Default: stdout.' },
];

export default function RevealrDocs() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-[#080b0a] text-zinc-400 font-sans">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
                <div className="absolute left-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 md:px-10">
                <ScrollReveal direction="up" delay={0.1}>
                    <header className="mb-16">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 mb-4 leading-relaxed">// Documentation</p>
                        <h1 className="text-2xl font-black tracking-tight text-white mb-6">CLI Reference</h1>
                    </header>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                    <StaggerContainer>
                        <div className="mb-16 grid lg:grid-cols-2 gap-6">
                            <StaggerItem>
                                <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 mb-6">
                                        <TerminalSquare className="h-3.5 w-3.5 text-violet-400" /> Quick Start
                                    </div>
                                    <div className="space-y-4 font-mono text-xs leading-relaxed">
                                        <div><span className="text-zinc-600"># Clone</span><br/><span className="text-zinc-300">git clone https://github.com/rounakneema/Revealr.git</span></div>
                                        <div><span className="text-zinc-600"># Build</span><br/><span className="text-zinc-300">go build -o revealr ./cmd/revealr</span></div>
                                        <div><span className="text-zinc-600"># Run (Requires sudo for raw sockets)</span><br/><span className="text-lime-300">sudo ./revealr -target 10.10.11.0/24</span></div>
                                    </div>
                                </article>
                            </StaggerItem>
                            <StaggerItem>
                                <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 mb-6">
                                        <BookOpen className="h-3.5 w-3.5 text-violet-400" /> Example Workflows
                                    </div>
                                    <div className="space-y-4 text-xs font-mono leading-relaxed">
                                        <div><span className="text-zinc-600">// Scan full subnet with drift detection</span><br/><span className="text-zinc-300">sudo ./revealr -t 192.168.1.0/24 --diff</span></div>
                                        <div><span className="text-zinc-600">// Resume interrupted scan</span><br/><span className="text-zinc-300">sudo ./revealr -t 192.168.1.0/24 --resume</span></div>
                                        <div><span className="text-zinc-600">// Run with external python vulnerability plugins</span><br/><span className="text-zinc-300">sudo ./revealr -t 10.0.0.1 --plugins ./plugins/</span></div>
                                    </div>
                                </article>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl mb-16 overflow-hidden">
                        <div className="border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Flag Reference</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <StaggerContainer as="tbody" className="divide-y divide-white/[0.04]">
                                    {cliFlags.map((row, i) => (
                                        <StaggerItem as="tr" key={i} className="hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300">
                                            <td className="px-6 py-4 font-mono text-lime-300 font-bold whitespace-nowrap">{row.flag}</td>
                                            <td className="px-6 py-4 text-xs font-mono text-sky-400">{row.type}</td>
                                            <td className="px-6 py-4 text-xs text-zinc-400 leading-relaxed">{row.desc}</td>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </table>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mt-16 flex justify-end">
                        <Link href="/changelog" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-lime-300 hover:text-lime-200 hover:-translate-y-1 transition-all duration-300">
                            Next: Changelog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
