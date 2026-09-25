import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // Architecture Spec',
    description: 'Deep dive into the SortMail system topology, Go concurrency, and channel-based email ingestion.',
};

export default function SortMailArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-900 selection:text-white">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#333] flex justify-between items-center text-xs tracking-widest uppercase">
                <div className="flex gap-4">
                    <Link href="/sortmail" className="text-[#666] hover:text-red-500 transition-colors">
                        &lt; Back to Overview
                    </Link>
                </div>
                <div className="flex gap-6">
                    <span className="text-[#666]">PAGE: Architecture</span>
                    <span className="text-[#666]">VER: 1.0.0</span>
                </div>
            </nav>

            <section className="px-6 md:px-12 py-16 max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 text-white border-b-4 border-red-600 pb-4 inline-block">
                    System Topology
                </h1>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 mb-12 overflow-x-auto text-[#4af626] text-[10px] md:text-xs">
<pre>{`
    [IMAP/OAUTH INGRESS]
           │
           ▼
    +--------------+      (Worker Pool - 500 Goroutines)
    |  Go Router   | ════════════════════════════════╗
    | (Channels)   |                                 ║
    +--------------+       [MIME Parser]             ║
           │                     │                   ║
    (sync.Cond)                  ▼                   ▼
           │             +---------------+    +-------------+
           ├────────────►| Attachment DB |    | LLM Gateway |
           │             |  (SQLAlchemy) |    |  (Claude)   |
           ▼             +---------------+    +-------------+
    [Rate Limiter]               │                   │
    (Token Bucket)               ▼                   ▼
                          [Virus Scanner]      [BLUF Engine]
`}</pre>
                </div>

                <article className="space-y-8 text-[#aaa] leading-relaxed text-lg">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Concurrency Model: Channels & Goroutines</h2>
                    <p>
                        The core ingestion engine of SortMail is written in Go, specifically designed to handle massive spikes of incoming IMAP push notifications and OAuth token refreshes. We utilize an aggressive pool of 500 Goroutines for the worker pool.
                    </p>
                    <p>
                        When a webhook fires indicating a new email payload, the request is dumped into an unbuffered channel: <code className="bg-[#222] text-red-400 px-2 py-1">chan *EmailPayload</code>. If the channel blocks because all workers are busy, we immediately shed the load (HTTP 429) to prevent cascading failures. This fail-fast mechanism ensures the system remains highly responsive under DDoS or rapid notification floods.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight mt-12">State Management with sync.Cond</h2>
                    <p>
                        While channels handle the routing of payloads, managing the lifecycle of the AI jobs requires more complex orchestration. We use <code className="bg-[#222] text-red-400 px-2 py-1">sync.Cond</code> to broadcast state changes across multiple observer goroutines (like the Telemetry logger, the Billing counter, and the WebSocket updater).
                    </p>
                    <div className="bg-black border border-[#333] p-6 text-sm text-[#ddd]">
                        <div className="text-[#666] mb-4">// Core synchronization struct</div>
                        <code>
                            type JobState struct {'{'}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;mu    sync.RWMutex<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;cond  *sync.Cond<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;phase int<br/>
                            {'}'}
                        </code>
                    </div>

                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight mt-12">Hybrid Architecture (Go + Python)</h2>
                    <p>
                        While Go handles the high-throughput, highly concurrent network boundary and routing layer, the actual business logic of analyzing the emails, interfacing with SQLAlchemy, and executing the LLM prompts is handled by Python microservices. The Go router communicates with the Python backends via gRPC, allowing us to leverage Python's rich ecosystem for AI while maintaining edge resilience with Go.
                    </p>
                </article>
            </section>
        </main>
    );
}
