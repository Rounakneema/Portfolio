import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';

export const metadata: Metadata = {
    title: 'SortMail // Architecture',
    description: 'Deep dive into the system topology, Go concurrency, and channel-based event loops driving SortMail.',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-amber-500/30 selection:text-white pb-24">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#222] flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/" className="hover:text-amber-500 transition-colors text-[#888]">
                        &larr; Back
                    </Link>
                    <span className="text-[#333]">|</span>
                    <Link href="" className="text-[#888] hover:text-white transition-colors">
                        Overview
                    </Link>
                    <span className="text-white font-semibold">
                        Architecture
                    </span>
                    <Link href="/docs" className="text-[#888] hover:text-white transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            <header className="px-6 md:px-12 py-16 border-b border-[#333]">
                <h1 className="text-2xl font-black uppercase tracking-tighter mb-4">
                    System Topology
                </h1>
                <p className="text-[#888] max-w-2xl text-sm md:text-base leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
                    An in-depth look at the internal routing, ingestion pipelines, and the Go-based concurrency models that power real-time email intelligence.
                </p>
            </header>

            <section className="px-6 md:px-12 py-12">
                <div className="mb-8 border-b border-[#333] pb-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                    // Diagram: Core Ingestion Pipeline
                </div>
                <div className="bg-[#0a0a0a] border border-[#222] p-4 md:p-8 overflow-x-auto">
                    <MermaidDiagram chart={`
flowchart TD
    Webhooks["EXTERNAL WEBHOOKS (Gmail/Outlook push)"] --> APIGW["API GATEWAY (Load Balancer)"]
    
    subgraph Ingress["INGRESS BUFFER (Go/Redis)"]
        direction TB
        R1["Routine 1"] --> CA["channel_a: Auth Validation"]
        R2["Routine 2"] --> CB["channel_b: Rate Limit Check"]
        R3["Routine 3"] --> CC["channel_c: Payload Sanity"]
    end
    
    APIGW --> Ingress
    
    Parse["ENGINE: EMAIL PARSE (Python/FastAPI)<br><br>- Thread Unrolling<br>- Context Extraction<br>- Intent Classification"]
    Attachment["ENGINE: ATTACHMENT (Go / ClamAV)<br><br>- MIME Validation<br>- Virus Scanning<br>- Summary Generation"]
    TaskGen["ENGINE: TASK GEN (Go / LLM Routing)<br><br>- Priority Scoring<br>- Deadline Extraction<br>- Actionable Sync"]

    Ingress -- "(fan-out)" --> Parse
    Ingress --> Attachment
    Ingress --> TaskGen
    
    EventBus["EVENT BUS (RabbitMQ / Kafka)"]
    
    Parse --> EventBus
    Attachment --> EventBus
    TaskGen --> EventBus
    
    DB["POSTGRESQL / VECTOR DB (RAG)"]
    EventBus -- "(fan-in / aggregation)" --> DB
`} />
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
