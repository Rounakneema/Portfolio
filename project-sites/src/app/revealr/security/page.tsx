import Link from 'next/link';
import { ArrowRight, ShieldAlert, Activity } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Model — Revealr Network Scanner',
    description: 'Revealr\'s security model: IDS-aware scan profiles, responsible use policy, network timing controls, and ethical scanning guidelines.',
    alternates: { canonical: 'https://revealr.rounakneema.in/security' },
};

const scanProfiles = [
    { name: 'Paranoid', flag: '--profile paranoid', rate: '< 1,000 p/m', jitter: 'High', frag: 'Yes', use: 'Maximum IDS evasion in monitored production environments.', accent: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-400/20' },
    { name: 'Stealthy', flag: '--profile stealthy', rate: '~5,000 p/m', jitter: 'Moderate', frag: 'Optional', use: 'Authorized assessments where alerting should be minimized.', accent: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
    { name: 'Polite', flag: '--profile polite', rate: '~10,000 p/m', jitter: 'Low', frag: 'No', use: 'Standard authorized internal network audits. (Default)', accent: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/20' },
    { name: 'Aggressive', flag: '--profile aggressive', rate: '~50,000 p/m', jitter: 'None', frag: 'No', use: 'Internal LAN audits where speed is the priority.', accent: 'text-lime-400', bg: 'bg-lime-400/10 border-lime-400/20' },
];

export default function RevealrSecurity() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-[#080b0a] text-zinc-400 font-sans">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
                <div className="absolute left-[20%] top-[-10%] h-[300px] w-[600px] rounded-full bg-rose-500/5 blur-[120px]" />
                <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyb1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOSAxdjM4SDFWMWhMOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 md:px-10">
                <div className="mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 mb-4">// Operational Security</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Timing & Ethics</h1>
                    <p className="text-sm leading-6 text-zinc-500 max-w-2xl">
                        Revealr is designed for authorized network assessments. It includes built-in features for minimizing network disruption and IDS/IPS triggering during legitimate engagements.
                    </p>
                </div>

                <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-6 md:p-8 mb-16 flex gap-4 md:gap-6 items-start">
                    <ShieldAlert className="h-8 w-8 text-rose-400 shrink-0 mt-1" />
                    <div>
                        <h2 className="text-lg font-bold text-rose-200 mb-2">Legal Authorization Required</h2>
                        <p className="text-sm leading-relaxed text-rose-200/70">
                            Revealr is strictly for authorized use. Using Revealr to scan networks, systems, or IP ranges without explicit written permission from the network owner is illegal in most jurisdictions. Always obtain proper written authorization before performing any scanning activity.
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-2xl font-bold tracking-tight text-white mb-8">IDS-Aware Scan Profiles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {scanProfiles.map(p => (
                            <div key={p.name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all hover:border-white/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`h-8 w-8 rounded-lg border flex items-center justify-center ${p.bg}`}>
                                        <Activity className={`h-4 w-4 ${p.accent}`} />
                                    </div>
                                    <h3 className={`text-lg font-bold ${p.accent}`}>{p.name}</h3>
                                </div>
                                <code className="block text-xs font-mono text-zinc-500 bg-white/[0.02] border border-white/[0.05] rounded px-3 py-2 mb-4">{p.flag}</code>
                                <div className="space-y-2 mb-5">
                                    <div className="flex justify-between text-xs"><span className="text-zinc-600">Rate Limits</span><span className="text-zinc-300 font-mono">{p.rate}</span></div>
                                    <div className="flex justify-between text-xs"><span className="text-zinc-600">Packet Jitter</span><span className="text-zinc-300">{p.jitter}</span></div>
                                    <div className="flex justify-between text-xs"><span className="text-zinc-600">Fragmentation</span><span className="text-zinc-300">{p.frag}</span></div>
                                </div>
                                <p className="text-xs leading-relaxed text-zinc-500">{p.use}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-end">
                    <Link href="/revealr/docs" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-lime-300 hover:text-lime-200">
                        Next: Documentation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
