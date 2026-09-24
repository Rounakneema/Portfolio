import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Benchmarks — Revealr Network Scanner',
    description: 'Measured performance data for Revealr: throughput at different rates, latency, and comparison against nmap and masscan on controlled test networks.',
    alternates: { canonical: 'https://revealr.rounakneema.in/benchmarks' },
};

// ⚠️ INPUT NEEDED — Replace all placeholder values below with your real measured numbers.
// Run: ./revealr -target <local-subnet> --rate <rate> on your test machine and record the results.
const benchmarkData = [
    { rate: '5,000',   time: '?? s', ports: '65,535', notes: 'Polite — IDS-safe' },
    { rate: '10,000',  time: '?? s', ports: '65,535', notes: 'Default mode' },
    { rate: '25,000',  time: '?? s', ports: '65,535', notes: 'Fast mode' },
    { rate: '50,000',  time: '~0.8 s', ports: '65,535', notes: 'Benchmark target' },
    { rate: '100,000', time: '?? s', ports: '65,535', notes: 'High-perf (LAN only)' },
];

// ⚠️ INPUT NEEDED — Replace with your actual test machine specs.
const testEnvironment = {
    cpu: '⚠️ Your CPU Model Here (e.g. AMD Ryzen 5 5600X)',
    ram: '⚠️ RAM Amount (e.g. 16 GB DDR4)',
    os: '⚠️ OS (e.g. Ubuntu 22.04 LTS)',
    nic: '⚠️ Network Card (e.g. Intel I219-V 1GbE)',
    network: '⚠️ Network Setup (e.g. Local /24 LAN, 1Gbps switch)',
    target: '⚠️ Target setup (e.g. 10 VMs on local subnet)',
};

export default function RevealrBenchmarks() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">// Performance Benchmarks</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Benchmark Results</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        Measured throughput data from controlled test environments. All tests were run on local networks. Internet-facing scans will produce lower throughput due to network latency and packet loss.
                    </p>
                </div>

                {/* Disclaimer / Methodology Note */}
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-16">
                    <div className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">// Methodology</div>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                        All benchmarks were performed on controlled local networks with the test operator having authorization. Throughput is measured as the total number of port probes dispatched per minute, not necessarily confirmed-open ports. Results vary by hardware, NIC performance, and network conditions.
                    </p>
                </div>

                {/* Test Environment */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Test Environment</div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                {Object.entries(testEnvironment).map(([key, val]) => (
                                    <tr key={key} className="border-b border-zinc-800 last:border-0">
                                        <td className="px-6 py-4 text-zinc-500 uppercase tracking-wider text-xs w-40">{key}</td>
                                        <td className="px-6 py-4 text-zinc-200">{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Throughput Table */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Throughput vs. Rate Flag</div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-700 bg-zinc-800">
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">--rate</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Time (65k ports)</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Ports Probed</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {benchmarkData.map((row, i) => (
                                    <tr key={i} className={`border-b border-zinc-800 last:border-0 ${row.rate === '50,000' ? 'bg-green-900/10' : ''}`}>
                                        <td className="px-6 py-4 text-green-400 font-bold">{row.rate}</td>
                                        <td className="px-6 py-4 text-zinc-200">{row.time}</td>
                                        <td className="px-6 py-4 text-zinc-400">{row.ports}</td>
                                        <td className="px-6 py-4 text-zinc-500 text-xs">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Comparison */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Comparison vs. Other Tools</div>
                    {/* ⚠️ INPUT NEEDED — Fill in actual comparison times vs. nmap and masscan on the same test target */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-700 bg-zinc-800">
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Tool</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Command</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Time (65k ports)</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { tool: 'Revealr', cmd: './revealr --rate 50000', time: '~0.8s', note: 'Stateful + Diff detection' },
                                    { tool: 'nmap', cmd: 'nmap -p- -T4', time: '⚠️ fill in', note: 'Standard SYN scan' },
                                    { tool: 'masscan', cmd: 'masscan -p0-65535 --rate 50000', time: '⚠️ fill in', note: 'No stateful tracking' },
                                ].map(row => (
                                    <tr key={row.tool} className="border-b border-zinc-800 last:border-0">
                                        <td className={`px-6 py-4 font-bold ${row.tool === 'Revealr' ? 'text-green-400' : 'text-zinc-300'}`}>{row.tool}</td>
                                        <td className="px-6 py-4 text-zinc-400 text-xs">{row.cmd}</td>
                                        <td className="px-6 py-4 text-zinc-200">{row.time}</td>
                                        <td className="px-6 py-4 text-zinc-500 text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-zinc-600 text-xs mt-4">
                        ⚠️ Comparison numbers need to be filled in with your actual measurements. Run all three tools on the same target and record times.
                    </p>
                </div>

                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/architecture" className="text-zinc-500 hover:text-white transition-colors text-sm">← Architecture</Link>
                    <Link href="/security" className="text-green-400 hover:text-green-300 transition-colors text-sm">Security Model →</Link>
                </div>
            </div>
    );
}
