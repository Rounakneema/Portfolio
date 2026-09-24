import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation — Revealr Network Scanner',
    description: 'Complete CLI reference, flag documentation, plugin API, output formats, and usage examples for Revealr — the Go-based adaptive network scanner.',
    alternates: { canonical: 'https://revealr.rounakneema.in/docs' },
};

const nav = [
    { href: '/revealr', label: 'Overview' },
    { href: '/revealr/architecture', label: 'Architecture' },
    { href: '/revealr/benchmarks', label: 'Benchmarks' },
    { href: '/revealr/security', label: 'Security' },
    { href: '/revealr/docs', label: 'Docs' },
    { href: '/revealr/changelog', label: 'Changelog' },
];

const cliFlags = [
    { flag: '-target, -t', type: 'string', desc: 'Target IP, CIDR range, or hostname. (e.g. 192.168.1.0/24)' },
    { flag: '-ports, -p', type: 'string', desc: 'Port range to scan. Default: 1-65535. (e.g. 22,80,443 or 1-1024)' },
    { flag: '--rate', type: 'int', desc: 'Packets per minute dispatch rate. Default: 10000.' },
    { flag: '--profile', type: 'string', desc: 'Scan profile: paranoid | stealthy | polite | aggressive. Default: polite.' },
    { flag: '--resume', type: 'bool', desc: 'Resume the last interrupted scan session for this target.' },
    { flag: '--diff', type: 'bool', desc: 'Show diff against the last scan. Outputs new/changed/removed services.' },
    { flag: '--plugins', type: 'string', desc: 'Path to Python plugin directory. Plugins are auto-discovered.' },
    { flag: '--output, -o', type: 'string', desc: 'Output format: json | stdout | file. Default: stdout.' },
    { flag: '--timeout', type: 'int', desc: 'Per-port connection timeout in milliseconds. Default: 1000.' },
    { flag: '--db', type: 'string', desc: 'Path to SQLite database file. Default: ~/.revealr/state.db.' },
    { flag: '--verbose, -v', type: 'bool', desc: 'Enable verbose logging.' },
    { flag: '--version', type: 'bool', desc: 'Print Revealr version and exit.' },
];

export default function RevealrDocs() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">// Documentation</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">CLI Reference</h1>
                </div>

                {/* Installation */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Installation</div>
                    <div className="space-y-4">
                        {[
                            { label: 'Clone', cmd: 'git clone https://github.com/rounakneema/Revealr.git && cd Revealr' },
                            { label: 'Build', cmd: 'go build -o revealr ./cmd/revealr' },
                            { label: 'Run', cmd: './revealr -target 192.168.1.1 -p 1-1024' },
                        ].map(step => (
                            <div key={step.label}>
                                <div className="text-xs text-zinc-500 mb-2"># {step.label}</div>
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-6 py-4 text-green-300 text-sm overflow-x-auto">
                                    <span className="text-zinc-600 mr-2">$</span>{step.cmd}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ⚠️ INPUT NEEDED — Add any additional prerequisites (Go version, libpcap, root/sudo requirements) */}
                    <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <p className="text-blue-300 text-xs">
                            ⚠️ <strong>Note:</strong> Raw socket access requires elevated privileges on Linux. Run with <code className="bg-zinc-800 px-1 rounded">sudo</code> or grant capabilities: <code className="bg-zinc-800 px-1 rounded">sudo setcap cap_net_raw+ep ./revealr</code>
                        </p>
                    </div>
                </div>

                {/* CLI Flags Table */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Flags</div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-700 bg-zinc-800">
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Flag</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-4 text-left text-xs text-zinc-400 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cliFlags.map(f => (
                                    <tr key={f.flag} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-6 py-4 text-green-400 text-xs font-bold whitespace-nowrap">{f.flag}</td>
                                        <td className="px-6 py-4 text-blue-400 text-xs">{f.type}</td>
                                        <td className="px-6 py-4 text-zinc-300 text-xs leading-relaxed">{f.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Example Workflows */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Example Workflows</div>
                    <div className="space-y-8">
                        {[
                            {
                                title: 'Full subnet scan with drift detection',
                                cmd: './revealr -target 192.168.1.0/24 --rate 50000 --diff --output json > report.json',
                                desc: 'Scans a full /24 subnet at maximum rate and compares results against the last stored scan, outputting the diff in JSON format.',
                            },
                            {
                                title: 'Stealthy top-1000 port scan',
                                cmd: './revealr -target 10.10.11.15 -p 1-1000 --profile stealthy',
                                desc: 'Scans the 1000 most common ports using the Stealthy profile, which randomizes port order and injects timing jitter to minimize IDS triggering.',
                            },
                            {
                                title: 'Resume an interrupted scan',
                                cmd: './revealr -target 192.168.1.0/24 --resume',
                                desc: 'Revealr reads the last incomplete scan session from the SQLite state database and continues from where it left off.',
                            },
                            {
                                title: 'Scan with Python vulnerability plugins',
                                cmd: './revealr -target 10.0.0.1 --plugins ./plugins/ --output json',
                                desc: 'Runs the scan and passes each discovered service through all Python plugins in the ./plugins/ directory, enriching the output with custom vulnerability data.',
                            },
                        ].map(ex => (
                            <div key={ex.title}>
                                <h3 className="text-sm font-bold text-zinc-200 mb-3">{ex.title}</h3>
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-6 py-4 text-green-300 text-xs overflow-x-auto mb-3">
                                    <span className="text-zinc-600 mr-2">$</span>{ex.cmd}
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{ex.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plugin API */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">// Python Plugin API</div>
                    <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-3xl">
                        Plugins are Python scripts placed in the plugin directory. Each plugin receives a JSON payload on stdin and must write a JSON response to stdout.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="text-xs text-zinc-500 mb-3">// Input Payload (stdin)</div>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-xs overflow-x-auto h-48">
                                <pre className="text-zinc-300">{JSON.stringify({
                                    host: '192.168.1.15',
                                    port: 8080,
                                    protocol: 'tcp',
                                    service: 'http',
                                    banner: 'HTTP/1.1 200 OK\nServer: nginx/1.18.0',
                                    version: 'nginx/1.18.0',
                                }, null, 2)}</pre>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-zinc-500 mb-3">// Expected Output (stdout)</div>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-xs overflow-x-auto h-48">
                                <pre className="text-zinc-300">{JSON.stringify({
                                    plugin: 'nginx-vuln-check',
                                    findings: [
                                        { cve: 'CVE-2021-XXXX', severity: 'medium', description: '...' }
                                    ],
                                    metadata: { checked_at: '2024-01-01T00:00:00Z' },
                                }, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/security" className="text-zinc-500 hover:text-white transition-colors text-sm">← Security</Link>
                    <Link href="/changelog" className="text-green-400 hover:text-green-300 transition-colors text-sm">Changelog →</Link>
                </div>
            </div>
    );
}
