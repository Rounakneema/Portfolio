import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Model — Revealr Network Scanner',
    description: 'Revealr\'s security model: IDS-aware scan profiles, responsible use policy, network timing controls, and ethical scanning guidelines.',
    alternates: { canonical: 'https://revealr.rounakneema.in/security' },
};

const nav = [
    { href: '/revealr', label: 'Overview' },
    { href: '/revealr/architecture', label: 'Architecture' },
    { href: '/revealr/benchmarks', label: 'Benchmarks' },
    { href: '/revealr/security', label: 'Security' },
    { href: '/revealr/docs', label: 'Docs' },
    { href: '/revealr/changelog', label: 'Changelog' },
];

const scanProfiles = [
    {
        name: 'Paranoid',
        flag: '--profile paranoid',
        rate: '< 1,000 ports/min',
        jitter: 'High (randomized delays)',
        fragmentation: 'Yes',
        useCase: 'Maximum IDS evasion in monitored production environments.',
        color: 'border-red-500 text-red-400',
    },
    {
        name: 'Stealthy',
        flag: '--profile stealthy',
        rate: '~5,000 ports/min',
        jitter: 'Moderate',
        fragmentation: 'Optional',
        useCase: 'Authorized assessments where alerting should be minimized.',
        color: 'border-yellow-500 text-yellow-400',
    },
    {
        name: 'Polite',
        flag: '--profile polite (default)',
        rate: '~10,000 ports/min',
        jitter: 'Low',
        fragmentation: 'No',
        useCase: 'Standard authorized internal network audits.',
        color: 'border-blue-500 text-blue-400',
    },
    {
        name: 'Aggressive',
        flag: '--profile aggressive',
        rate: '~50,000 ports/min',
        jitter: 'None',
        fragmentation: 'No',
        useCase: 'Internal LAN audits where speed is the priority and IDS evasion is not required.',
        color: 'border-green-500 text-green-400',
    },
];

export default function RevealrSecurity() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">// Security Model</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Security & Responsible Use</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        Revealr is a tool designed for authorized network assessments. It includes built-in features for minimizing network disruption and IDS/IPS triggering during legitimate engagements.
                    </p>
                </div>

                {/* Legal / Ethical Notice */}
                <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-8 mb-16">
                    <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">// Legal Notice</div>
                    <p className="text-zinc-300 text-base leading-relaxed">
                        <strong className="text-white">Revealr is strictly for authorized use.</strong> Using Revealr to scan networks, systems, or IP ranges without explicit written permission from the network owner is illegal in most jurisdictions and may constitute unauthorized computer access under laws such as the Computer Fraud and Abuse Act (CFAA) or similar regional legislation. Always obtain proper written authorization before performing any scanning activity.
                    </p>
                </div>

                {/* Scan Profiles */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-8">// IDS-Aware Scan Profiles</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {scanProfiles.map(profile => (
                            <div key={profile.name} className={`bg-zinc-900 border-l-4 ${profile.color.split(' ')[0]} rounded-xl p-6`}>
                                <div className={`text-sm font-black ${profile.color.split(' ')[1]} mb-1`}>{profile.name}</div>
                                <code className="text-xs text-zinc-500 mb-5 block">{profile.flag}</code>
                                <div className="space-y-3 mb-5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-500">Rate</span>
                                        <span className="text-zinc-200">{profile.rate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-500">Jitter</span>
                                        <span className="text-zinc-200">{profile.jitter}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-500">Fragmentation</span>
                                        <span className="text-zinc-200">{profile.fragmentation}</span>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{profile.useCase}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Network Timing Controls */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-8">// Network Timing Controls</div>
                    <div className="space-y-6">
                        {[
                            {
                                title: 'Token-Bucket Rate Limiting',
                                body: 'The packet dispatch engine uses a token-bucket algorithm to enforce a strict upper bound on outgoing packet rate. This prevents accidental bandwidth saturation and avoids triggering rate-based IDS rules even at high throughput settings.',
                            },
                            {
                                title: 'Randomized Scan Order (Stealthy/Paranoid)',
                                body: 'In Stealthy and Paranoid profiles, port probing order is randomized instead of sequential. Sequential port scans from 1–65535 are a classic IDS signature. Randomization disrupts this pattern.',
                            },
                            {
                                title: 'Inter-Packet Jitter',
                                body: 'Paranoid and Stealthy profiles inject random delay between packets, mimicking organic traffic patterns. This reduces the statistical confidence of IDS correlation engines that look for probe bursts.',
                            },
                            {
                                title: 'Source Port Randomization',
                                body: 'Revealr randomizes the source port on outgoing SYN packets to prevent trivial stateful firewall fingerprinting based on source port patterns.',
                            },
                        ].map(item => (
                            <div key={item.title} className="border-l-2 border-zinc-700 pl-6">
                                <h3 className="text-base font-bold text-zinc-200 mb-2">{item.title}</h3>
                                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Responsible Use */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Responsible Use Checklist</div>
                    <div className="space-y-4">
                        {[
                            'Obtain written authorization from the network owner before scanning.',
                            'Define the scope: specify IP ranges, ports, and timing constraints in your authorization.',
                            'Use the Polite profile by default. Only escalate to Aggressive when specifically approved.',
                            'Do not scan from shared cloud IP ranges (AWS, GCP, Azure). These may be blocked at the ISP level or trigger legal action.',
                            'Review the scan output before sharing or storing. Vulnerability data is sensitive.',
                            'Delete local SQLite scan state databases after completing authorized engagements.',
                            'Report discovered vulnerabilities to system owners through responsible disclosure.',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                                <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/benchmarks" className="text-zinc-500 hover:text-white transition-colors text-sm">← Benchmarks</Link>
                    <Link href="/docs" className="text-green-400 hover:text-green-300 transition-colors text-sm">Documentation →</Link>
                </div>
            </div>
    );
}
