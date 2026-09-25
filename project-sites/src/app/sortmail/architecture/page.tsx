import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // Architecture',
    description: 'Deep dive into the system topology, Go concurrency, and channel-based event loops driving SortMail.',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-900 selection:text-white pb-24">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs tracking-widest uppercase gap-4 sticky top-0 bg-[#050505] z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/sortmail" className="hover:text-red-500 transition-colors">
                        &lt; System.SortMail
                    </Link>
                    <span className="text-[#444]">|</span>
                    <span className="text-white font-bold bg-[#222] px-2 py-1">
                        [Architecture]
                    </span>
                    <Link href="/sortmail/decisions" className="text-[#888] hover:text-white transition-colors">
                        [Decisions]
                    </Link>
                </div>
                <div className="flex gap-6">
                    <span className="text-[#666]">TOPOLOGY: DISTRIBUTED</span>
                    <span className="text-[#666]">VER: 0.9.1a</span>
                </div>
            </nav>

            <header className="px-6 md:px-12 py-16 border-b border-[#333]">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    System Topology
                </h1>
                <p className="text-[#888] max-w-2xl text-sm md:text-base leading-relaxed border-l-2 border-red-600 pl-4 py-1">
                    An in-depth look at the internal routing, ingestion pipelines, and the Go-based concurrency models that power real-time email intelligence.
                </p>
            </header>

            <section className="px-6 md:px-12 py-12">
                <div className="mb-8 border-b border-[#333] pb-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                    // Diagram: Core Ingestion Pipeline
                </div>
                <div className="bg-[#0a0a0a] border border-[#222] p-4 md:p-8 overflow-x-auto">
                    <pre className="text-[10px] md:text-xs leading-tight text-[#4af626] font-mono whitespace-pre">
{`
                               [ EXTERNAL WEBHOOKS ] (Gmail/Outlook push)
                                         |
                                         v
+-----------------------------------------------------------------------------------+
|                           API GATEWAY (Load Balancer)                             |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
+-----------------------------------------------------------------------------------+
|                            INGRESS BUFFER (Go/Redis)                              |
|                                                                                   |
|  [ Routine 1 ] ---> ( channel_a: Auth Validation )                                |
|  [ Routine 2 ] ---> ( channel_b: Rate Limit Check)                                |
|  [ Routine 3 ] ---> ( channel_c: Payload Sanity  )                                |
+-----------------------------------------------------------------------------------+
                                         | (fan-out)
            +----------------------------+-----------------------------+
            |                            |                             |
            v                            v                             v
+-----------------------+    +-----------------------+    +-----------------------+
|  ENGINE: EMAIL PARSE  |    |  ENGINE: ATTACHMENT   |    |  ENGINE: TASK GEN     |
|  (Python/FastAPI)     |    |  (Go / ClamAV)        |    |  (Go / LLM Routing)   |
|-----------------------|    |-----------------------|    |-----------------------|
| - Thread Unrolling    |    | - MIME Validation     |    | - Priority Scoring    |
| - Context Extraction  |    | - Virus Scanning      |    | - Deadline Extraction |
| - Intent Classification|   | - Summary Generation  |    | - Actionable Sync     |
+-----------------------+    +-----------------------+    +-----------------------+
            |                            |                             |
            +----------------------------+-----------------------------+
                                         | (fan-in / aggregation)
                                         v
+-----------------------------------------------------------------------------------+
|                         EVENT BUS (RabbitMQ / Kafka)                              |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
                        [ POSTGRESQL / VECTOR DB (RAG) ]
`}
                    </pre>
                </div>
            </section>

            <section className="px-6 md:px-12 py-12 max-w-4xl space-y-12">
                <article>
                    <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight text-white">
                        Go Concurrency & Ingestion
                    </h2>
                    <div className="text-[#ccc] text-sm leading-relaxed space-y-4">
                        <p>
                            To handle bursty traffic from global email providers, the ingress layer is written entirely in Go. Webhook payloads arrive at the API Gateway and are immediately dumped into high-throughput Go channels. We heavily utilize the <strong>fan-out/fan-in concurrency pattern</strong>.
                        </p>
                        <p>
                            A pool of worker goroutines pulls from the <code>ingress_channel</code>, parsing headers and authenticating signatures in parallel. By avoiding blocking I/O on the main thread, the ingress buffer can absorb traffic spikes (e.g., morning email rushes) without dropping webhooks or timing out provider APIs.
                        </p>
                        <div className="bg-black p-4 border border-[#333] text-[#aaa]">
                            <pre className="whitespace-pre-wrap">
{`func worker(id int, jobs <-chan WebhookPayload, results chan<- ParsedEmail) {
    for j := range jobs {
        // CPU-bound: signature verification, initial parsing
        parsed := ValidateAndParse(j) 
        results <- parsed
    }
}`}
                            </pre>
                        </div>
                    </div>
                </article>

                <article>
                    <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight text-white">
                        Air-Gapped Attachment Processing
                    </h2>
                    <div className="text-[#ccc] text-sm leading-relaxed space-y-4">
                        <p>
                            The Attachment Engine is explicitly decoupled. Because attachments are a prime vector for malicious payloads (macros, zero-days), they are never processed in the same memory space as the LLM routing logic.
                        </p>
                        <p>
                            We employ a Go daemon that mounts a volatile temporary filesystem. Attachments are downloaded, verified against MIME type strictlists (e.g., blocking <code>.exe</code> disguised as <code>.pdf</code>), and passed through ClamAV via a UNIX socket. If the file is clean, text is extracted via dedicated binaries (e.g., <code>pdftotext</code>) and only the raw UTF-8 string is forwarded to the Python-based AI engines for RAG vectorization.
                        </p>
                    </div>
                </article>

                <article>
                    <h2 className="text-2xl font-bold uppercase mb-4 tracking-tight text-white">
                        State & Event Consistency
                    </h2>
                    <div className="text-[#ccc] text-sm leading-relaxed space-y-4">
                        <p>
                            Because the engines (Email Parse, Attachment, Task Gen) execute asynchronously, we rely on a central Event Bus to maintain consistency. Each email is assigned a unique idempotency key based on its <code>Message-ID</code>.
                        </p>
                        <p>
                            If the Task Generation engine detects a high-priority deadline but the Attachment Engine is still churning through a 50-page PDF, the Event Bus holds the final "Executive Brief" construction in a pending state until all child routines report success or timeout. This ensures the user never sees a fragmented brief.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}
