import { Metadata } from 'next';
import { FadeIn } from '@/components/shared/FadeIn';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'SortMail — Data Contracts & Schema Docs',
  description: 'Schema specifications, Data Transfer Object (DTO) contracts, and SSE event formats for SortMail.',
  alternates: {
    canonical: 'https://sortmail.rounakneema.in/docs',
  },
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white pb-32">
      <ProjectJsonLd slug="sortmail" pageType="Docs" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 lg:pt-20">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono block">
            INTEGRATION SPECIFICATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-8">
            Data Contracts.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
            SortMail enforces strict schemas between the Gemini 2.0 parser, the FastAPI application, and client-side React Query subscribers.
          </p>
        </FadeIn>

        <div className="max-w-3xl space-y-12">
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  Schema Specification
                </span>
                <span className="text-xs font-mono text-neutral-400">TypeScript / Pydantic</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">
                Thread Intelligence Schema (V1)
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Output shape produced by the single-pass Gemini 2.0 Flash extractor function.
              </p>
              <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-6 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`type ThreadIntelV1 = {
  thread_id: string;
  summary: {
    bluf: string;
    key_points: string[];
  };
  tasks: Array<{
    id: string;
    description: string;
    priority: "low" | "medium" | "high";
    deadline_iso: string | null;
  }>;
  sentiment: "urgent" | "neutral" | "frustrated";
  attachments_parsed: boolean;
};`}
              </pre>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  Event Stream
                </span>
                <span className="text-xs font-mono text-neutral-400">Server-Sent Events</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">
                SSE Notification Payload
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Dispatched by Redis Pub/Sub to invalidate client-side caches when a thread finishes processing.
              </p>
              <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-6 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`event: intel_ready
data: {
  "thread_id": "18f4a9b2",
  "status": "processed",
  "timestamp": 1729124400
}`}
              </pre>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
