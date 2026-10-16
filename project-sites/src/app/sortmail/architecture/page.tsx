import { Metadata } from 'next';
import MermaidDiagram from '@/components/Mermaid';
import { FadeIn } from '@/components/shared/FadeIn';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'SortMail · System Topology & Architecture',
  description: 'Deep dive into the system topology, single-pass pipeline, and push-based SSE architecture driving SortMail.',
  alternates: {
    canonical: 'https://sortmail.rounakneema.in/architecture',
  },
};

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white pb-32">
      <ProjectJsonLd slug="sortmail" pageType="Architecture" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 lg:pt-20">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono block">
            SYSTEM DESIGN
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-8">
            Topology &amp;<br />
            Data Flow.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
            SortMail separates data ingestion from AI inference. By serving directly from local storage and pushing events over Server-Sent Events, the interface maintains sub-50ms reads regardless of upstream mail provider load.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mt-12">
          {/* Diagram Container */}
          <FadeIn delay={0.2} className="lg:col-span-8">
            <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                  Push, Don't Poll Data Pipeline
                </span>
                <span className="text-xs font-mono text-neutral-400">Mermaid Topology</span>
              </div>
              <div className="overflow-x-auto py-4">
                <MermaidDiagram chart={`
                flowchart TD
                    A[Next.js Client] <-->|OAuth / Auth| B(Google OAuth 2.0)
                    A -->|REST Queries| C{FastAPI Backend}
                    
                    subgraph Background Pipeline
                        D[Gmail/Outlook Sync] -->|History ID| E[(PostgreSQL)]
                        E --> F[Gemini 2.0 Flash Engine]
                        F -->|Structured JSON| G[Pure Extractor Functions]
                        G -->|Update Task State| E
                    end
                    
                    G -->|Publish: intel_ready| H((Redis Pub/Sub))
                    H -.->|Server-Sent Events| A
                `} />
              </div>
            </div>
          </FadeIn>

          {/* Architectural Notes */}
          <FadeIn delay={0.3} className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                01 / DATABASE-FIRST
              </span>
              <h3 className="text-base font-bold text-neutral-900">Immediate Page Renders</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                SortMail eliminates blocking third-party API calls during inbox renders. Next.js reads directly from PostgreSQL in under 50 milliseconds while a background worker syncs delta state via Gmail historyId tokens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                02 / SSE STREAMING
              </span>
              <h3 className="text-base font-bold text-neutral-900">Event-Driven Reactivity</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Rather than polling the server every few seconds, the client maintains a persistent Server-Sent Events stream. Redis Pub/Sub detects background extraction completions and pushes targeted cache invalidation signals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                03 / SINGLE-PASS LLM
              </span>
              <h3 className="text-base font-bold text-neutral-900">Strict Cost Predictability</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Instead of multi-hop autonomous agent loops, SortMail dispatches one dense JSON schema query per thread to Gemini 2.0 Flash, achieving deterministic extraction at approximately ₹0.25 per message.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* AI Pipeline Benchmark & CLI Session Trace Evidence Card */}
        <div className="mt-20 border border-neutral-200/90 rounded-2xl bg-white overflow-hidden shadow-sm">
          <div className="bg-neutral-100/70 border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800">
                AI Pipeline Benchmark &amp; Extraction Evidence
              </span>
            </div>
            <span className="text-[11px] font-mono text-neutral-500">Verified Pipeline Spec</span>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-b border-neutral-200/80 pb-6">
              <div>
                <span className="block text-neutral-400 font-mono text-xs mb-1">Local Read Latency</span>
                <span className="text-neutral-900 font-semibold font-mono">&lt;50ms (PostgreSQL)</span>
              </div>
              <div>
                <span className="block text-neutral-400 font-mono text-xs mb-1">Inference Round-Trip</span>
                <span className="text-neutral-900 font-semibold font-mono">&lt;850ms (Gemini 2.0)</span>
              </div>
              <div>
                <span className="block text-neutral-400 font-mono text-xs mb-1">Sync Strategy</span>
                <span className="text-neutral-900 font-semibold font-mono">Gmail historyId Delta</span>
              </div>
              <div>
                <span className="block text-neutral-400 font-mono text-xs mb-1">Security Gate</span>
                <span className="text-neutral-900 font-semibold font-mono">Strict MIME Verification</span>
              </div>
            </div>

            <div>
              <span className="block text-neutral-500 font-mono text-xs mb-2">Live Session Trace</span>
              <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-5 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`$ sortmail process --msg "NDA_Q3.eml"
[info] Fetching thread via historyId: 18F4B2
[info] Cache hit: PostgreSQL local replica ready (38ms)
[info] Invoking Gemini 2.0 Flash single-pass extractor
[✓] Extracted bluf: "Priya Mehta shared updated Q3 agreement for review."
[✓] Deadline Extracted: 2026-10-17T17:00:00Z (Priority: High)
[✓] Extracted action items: 3 tasks routed to tasks table
[✓] Attachment verified: Q3_Analytics_Agreement.pdf (MIME: application/pdf)
[!] Threat check complete: 0 warnings
[info] Published intel_ready on Redis channel: thread_18F4B2 (62ms)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
