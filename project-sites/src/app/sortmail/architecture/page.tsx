import { Metadata } from 'next';
import MermaidDiagram from '@/components/Mermaid';
import { FadeIn } from '@/components/shared/FadeIn';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'SortMail — System Topology & Architecture',
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
      </div>
    </main>
  );
}
