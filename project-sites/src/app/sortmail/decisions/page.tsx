import { Metadata } from 'next';
import { FadeIn } from '@/components/shared/FadeIn';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'SortMail — Engineering Decisions & Tradeoffs',
  description: 'Technical design decisions, tradeoffs, and architectural rationales behind SortMail.',
  alternates: {
    canonical: 'https://sortmail.rounakneema.in/decisions',
  },
};

export default function DecisionsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white pb-32">
      <ProjectJsonLd slug="sortmail" pageType="Decisions" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 lg:pt-20">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono block">
            ENGINEERING RATIONALE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-8">
            Engineering<br />
            Tradeoffs.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
            Every architectural choice in SortMail balances latency, operational cost, and schema integrity. Here are the core technical decisions and their alternatives.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn delay={0.1} className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              01 / PERSISTENCE
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Database-First over API-First</h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Directly querying third-party mail APIs creates latency spikes of one to two seconds per thread. By persisting metadata to PostgreSQL and using Gmail historyId tokens for incremental delta syncs, inbox rendering stays instantaneous. The tradeoff is local storage overhead, which is negligible compared to the responsiveness gains.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              02 / MODEL SELECTION
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Gemini 2.0 Flash over GPT-4o</h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              High-volume inbox parsing demands high speed at low cost. GPT-4o proved too slow and expensive for batch processing. Gemini 2.0 Flash reliably enforces structured JSON output, processes 10,000 tokens in under a second, and reduces expense to roughly ₹0.25 per message.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              03 / PIPELINE TOPOLOGY
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Single-Pass Execution over ReAct Loops</h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Autonomous agent loops increase latency and introduce unpredictable hallucinations. SortMail uses a functional pipeline where the LLM acts as a single-pass parser returning strict JSON. Standard FastAPI backend routines handle state management, routing, and database writes.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              04 / CONTRACT INTEGRITY
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Strict DTO Contracts over Freeform Output</h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We enforce strict Pydantic schemas for all extracted objects. When an AI output violates expected types or structure, the parser quarantines the payload for inspection rather than allowing invalid entries into database tables.
            </p>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
