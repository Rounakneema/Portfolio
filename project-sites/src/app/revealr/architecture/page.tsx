import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Architecture — Revealr Network Scanner',
    description: 'Deep-dive into Revealr\'s system architecture: the concurrent Go scanning engine, SQLite state layer, Python IPC plugin bridge, and structured output pipeline.',
    alternates: { canonical: 'https://revealr.rounakneema.in/architecture' },
};

export default function RevealrArchitecture() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">// System Architecture</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">How Revealr Works</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        Revealr is structured as four loosely coupled layers communicating through well-defined interfaces, enabling high throughput without sacrificing extensibility.
                    </p>
                </div>

                {/* High-Level Architecture Diagram (ASCII) */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-16 overflow-x-auto">
                    <div className="text-xs text-zinc-500 mb-6">// System Overview</div>
                    <pre className="text-sm text-zinc-300 leading-loose whitespace-pre">{`
  CLI Input / Config
        │
        ▼
  ┌─────────────────────────────────────────────────────────────────┐
  │                     REVEALR CORE (Go)                           │
  │                                                                 │
  │   ┌────────────────┐      ┌────────────────────┐               │
  │   │  Concurrency   │      │   State Manager    │               │
  │   │  Engine        │◄────►│   (SQLite)         │               │
  │   │  (Goroutines)  │      │                    │               │
  │   │                │      │  - Resume scans    │               │
  │   │  - Raw Sockets │      │  - Diff / Drift    │               │
  │   │  - Rate Limiter│      │  - History         │               │
  │   │  - Scan Profiles│     └────────────────────┘               │
  │   └───────┬────────┘                                           │
  │           │                                                     │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Service Fingerprinter          │                         │
  │   │   (Banner Grabbing + Built-ins)  │                         │
  │   └───────┬──────────────────────────┘                         │
  │           │ IPC (stdin/stdout)                                  │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Python Plugin Bridge           │                         │
  │   │   - Custom fingerprinters        │                         │
  │   │   - Offline vuln checks          │                         │
  │   │   - User-defined scripts         │                         │
  │   └───────┬──────────────────────────┘                         │
  │           │                                                     │
  │           ▼                                                     │
  │   ┌──────────────────────────────────┐                         │
  │   │   Output Layer                   │                         │
  │   │   JSON / STDOUT / Report         │                         │
  │   └──────────────────────────────────┘                         │
  └─────────────────────────────────────────────────────────────────┘
`}</pre>
                </div>

                {/* Layer-by-Layer Breakdown */}
                <div className="space-y-12">
                    {[
                        {
                            num: '01',
                            title: 'Concurrency Engine',
                            color: 'border-green-500',
                            accent: 'text-green-400',
                            sections: [
                                {
                                    heading: 'Goroutine Pool + Raw Sockets',
                                    body: 'The scanning engine uses a bounded goroutine pool to dispatch raw TCP SYN packets via raw sockets. This bypasses the OS TCP stack for maximum throughput, allowing 50,000+ probes per minute without maintaining full socket state on every port.',
                                },
                                {
                                    heading: 'Rate Limiter',
                                    body: 'A token-bucket rate limiter controls the packet dispatch rate. The --rate flag configures the burst ceiling, preventing Revealr from overwhelming the target network adapter or triggering IDS rate-based alerts prematurely.',
                                },
                                {
                                    heading: 'Port Range Dispatcher',
                                    body: 'Port ranges are partitioned across workers. Each worker processes a range independently, reporting open ports back to a result collector channel, ensuring all responses are captured without lock contention.',
                                },
                            ],
                        },
                        {
                            num: '02',
                            title: 'State Manager (SQLite)',
                            color: 'border-blue-500',
                            accent: 'text-blue-400',
                            sections: [
                                {
                                    heading: 'Scan Resumption',
                                    body: 'Every scan writes incremental state to a local SQLite database keyed by target IP and scan session ID. If a scan is interrupted, Revealr re-reads the last known state and continues from the last unconfirmed port range.',
                                },
                                {
                                    heading: 'Network Drift Detection',
                                    body: 'Historical scan results are persisted per-host. On subsequent scans, Revealr performs a structural diff between the current result set and the stored baseline. Any new open port, service version change, or disappeared service is flagged as a [DIFF] event.',
                                },
                                {
                                    heading: 'Scan Session Metadata',
                                    body: 'Each session records the timestamp, operator, target, flags used, and completion status. This creates an audit-friendly history of all scans performed from a single Revealr installation.',
                                },
                            ],
                        },
                        {
                            num: '03',
                            title: 'Service Fingerprinter',
                            color: 'border-yellow-500',
                            accent: 'text-yellow-400',
                            sections: [
                                {
                                    heading: 'Banner Grabbing',
                                    body: 'For each confirmed open port, a secondary probe establishes a brief connection to read the initial service banner. This banner is matched against a built-in pattern library to identify common services (SSH, HTTP, FTP, SMTP, Redis, etc.) without needing an external database.',
                                },
                                {
                                    heading: 'Version Extraction',
                                    body: 'Regex-based version extractors parse banners to extract software version strings where available (e.g., nginx/1.18.0, OpenSSH_8.4). Version data is persisted in SQLite for drift tracking across scans.',
                                },
                            ],
                        },
                        {
                            num: '04',
                            title: 'Python Plugin Bridge',
                            color: 'border-purple-500',
                            accent: 'text-purple-400',
                            sections: [
                                {
                                    heading: 'IPC via stdin/stdout',
                                    body: 'Revealr spawns Python plugin processes and communicates via JSON-encoded messages over stdin/stdout. This allows plugins to be written in standard Python without any special runtime dependencies or custom SDK installation.',
                                },
                                {
                                    heading: 'Plugin Contract',
                                    body: 'Each plugin receives a JSON payload describing the open port, service fingerprint, and host metadata. It returns a JSON response with enriched data or vulnerability findings. Plugins are isolated from the Go core and cannot crash the main scanner process.',
                                },
                                {
                                    heading: 'Offline Vulnerability Checks',
                                    body: 'Plugins can ship with local CVE data files or version matching tables, enabling offline vulnerability correlation without internet access — critical for air-gapped or controlled assessment environments.',
                                },
                            ],
                        },
                    ].map(layer => (
                        <div key={layer.num} className={`border-l-4 ${layer.color} pl-8`}>
                            <div className={`text-2xl font-black ${layer.accent} mb-2`}>{layer.num}</div>
                            <h2 className="text-2xl font-bold text-white mb-8">{layer.title}</h2>
                            <div className="space-y-8">
                                {layer.sections.map(s => (
                                    <div key={s.heading}>
                                        <h3 className="text-base font-bold text-zinc-200 mb-3">{s.heading}</h3>
                                        <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">{s.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next */}
                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">← Overview</Link>
                    <Link href="/benchmarks" className="text-green-400 hover:text-green-300 transition-colors text-sm">Benchmarks →</Link>
                </div>
            </div>
    );
}
