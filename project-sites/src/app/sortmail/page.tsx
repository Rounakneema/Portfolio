import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { projectFaqs } from '@/lib/projectFaqs';
import { SortMailHeroInteractive } from '@/components/sortmail/SortMailHeroInteractive';

export const metadata: Metadata = {
  title: 'SortMail - AI Email Intelligence Layer',
  description: 'SortMail parses, prioritizes, and extracts structured action items from high-volume inboxes using a Database-First architecture and Gemini 2.0 Flash.',
  alternates: {
    canonical: 'https://sortmail.rounakneema.in',
  },
};

export default function SortMailPage() {
  const project = projects.find((p) => p.slug === 'sortmail');
  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white">
      <ProjectJsonLd slug="sortmail" />

      {/* ========================================================= */}
      {/* FULL HERO STAGE: DESKTOP VIEWPORT SIDE-BY-SIDE            */}
      {/* ========================================================= */}
      <section className="relative isolate w-full lg:h-[calc(100vh-4rem)] lg:max-h-[680px] flex items-center overflow-hidden border-b border-neutral-200/80 bg-[#faf9f6] py-6 lg:py-0">
        
        {/* Full-Bleed Atmospheric Background: Sunlit Desk & Wall */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src="/images/sortmail-hero-desk.jpg"
            alt="Warm sunlit workspace desk with soft morning shadows"
            fill
            priority={true}
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          {/* Directional scrim: smooth reading contrast on the left, clear natural daylight and desk on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 lg:from-white/90 lg:via-white/60 lg:to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
            
            {/* Left Column: Typography, CTAs, Badges (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-start relative z-10 space-y-4">
              
              <ScrollReveal direction="up" delay={0.05}>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-600 font-mono inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-neutral-300/70 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  ENGINEERING SHOWCASE · AI EMAIL INTELLIGENCE
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold tracking-tight text-neutral-950 leading-[1.08]">
                  From chaotic<br />
                  inbox to <span className="text-blue-600 font-bold">clear</span><br />
                  actions.
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.15}>
                <p className="text-neutral-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md">
                  SortMail parses high-volume inboxes, isolates non-obvious commitments, and extracts structured action items using a Database-First PostgreSQL architecture and Gemini 2.0 Flash.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto pt-0.5">
                  <Link
                    href="/sortmail/architecture"
                    className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Explore Architecture</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <a
                    href="#features"
                    className="px-5 py-2.5 bg-white/90 hover:bg-white text-neutral-800 border border-neutral-300/90 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-xs backdrop-blur-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Capabilities</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Engine & Privacy Badges */}
              <ScrollReveal direction="up" delay={0.25}>
                <div className="pt-3 border-t border-neutral-200/90 w-full flex flex-wrap items-center gap-3 text-xs text-neutral-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center justify-center w-4 h-4 rounded bg-blue-50 text-blue-600 font-bold text-[9px]">
                      M
                    </span>
                    <span>Gmail &amp; Outlook</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>&lt;50ms DB Cache</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>Zero Cloud Retention</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column: Interactive SortMail Intelligence Widget (lg:col-span-7) */}
            <div className="lg:col-span-7 relative z-10 w-full">
              <ScrollReveal direction="up" delay={0.3}>
                <SortMailHeroInteractive />
              </ScrollReveal>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 01: WORKFLOW & INTELLIGENCE                       */}
      {/* ========================================================= */}
      <section id="features" className="border-t border-stone-200/90 py-20 lg:py-24 bg-[#faf9f6] relative">
        {/* Subtle ambient sunlit glow in top corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex items-center gap-3 mb-6 text-xs font-semibold text-stone-500 tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span className="uppercase tracking-[0.2em]">01 / CORE INTELLIGENCE</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.08]">
                  Understand threads.<br />
                  Extract commitments.<br />
                  Ship responses.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md">
                  SortMail processes thread context in a single pass. It discards conversational padding and surfaces concrete obligations before you open individual messages.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Intelligence Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            
            {/* Card 01 */}
            <ScrollReveal direction="up" delay={0.12}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-200/70">
                      01 / BRIEFINGS
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">RFC-822 Sanitizer</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Executive Summaries</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Condenses multi-party exchanges into structured bullet points. The ingestion engine strips disclaimers, signature blocks, and redundant quotes before passing clean conversational text to Gemini.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-amber-700 font-bold block uppercase mb-0.5 tracking-wider">Extraction Metric</span>
                  24-email chain condensed into a 3-bullet BLUF in 720ms. 82% token reduction.
                </div>
              </div>
            </ScrollReveal>

            {/* Card 02 */}
            <ScrollReveal direction="up" delay={0.16}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-0.5 rounded-md border border-emerald-200/70">
                      02 / ATTACHMENTS
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">ChromaDB Vectors</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Vector Document Parsing</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Attached PDFs, spreadsheets, and Word documents are chunked into 500-token blocks with 50-token overlap. Queries run against local vector embeddings so you can query contracts without manual downloads.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-emerald-800 font-bold block uppercase mb-0.5 tracking-wider">In-Inbox Vector Query</span>
                  &quot;What are the indemnification caps in section 8.2?&quot; answered in 410ms.
                </div>
              </div>
            </ScrollReveal>

            {/* Card 03 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50/80 px-2.5 py-0.5 rounded-md border border-amber-200/70">
                      03 / ACTIONS
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">P0 / P1 / P2 Triage</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Task Extraction</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Parses commitments (&quot;please sign&quot;, &quot;will deploy by&quot;, &quot;review needed&quot;) and maps them to assigned owners, urgency categories, and completion criteria. Pushed directly to PostgreSQL task tables.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-amber-800 font-bold block uppercase mb-0.5 tracking-wider">Task Dispatch</span>
                  Extracted 3 actionable items; assigned 2 to current user with verified due dates.
                </div>
              </div>
            </ScrollReveal>

            {/* Card 04 */}
            <ScrollReveal direction="up" delay={0.24}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-200/70">
                      04 / ASSISTANCE
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Tone Adaptive</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Contextual Drafts</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Synthesizes the previous 5 thread interactions and matches your communication style. It prepares a complete response payload ready for review, keeping you in full human control before dispatch.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-blue-700 font-bold block uppercase mb-0.5 tracking-wider">Human In The Loop</span>
                  Draft generated in 680ms; zero emails sent without deliberate human confirmation.
                </div>
              </div>
            </ScrollReveal>

            {/* Card 05 */}
            <ScrollReveal direction="up" delay={0.28}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50/80 px-2.5 py-0.5 rounded-md border border-amber-200/70">
                      05 / DEADLINES
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">ISO 8601 UTC</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Timeline Tracking</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Normalizes informal phrases like &quot;by end of day Thursday&quot; or &quot;before our call on the 24th&quot; into validated UTC timestamps. Highlights waiting-for-reply states before deliverable dates expire.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-amber-800 font-bold block uppercase mb-0.5 tracking-wider">Normalized Record</span>
                  Converted &quot;end of week&quot; to 2026-10-17T17:00:00Z with high confidence (0.97).
                </div>
              </div>
            </ScrollReveal>

            {/* Card 06 */}
            <ScrollReveal direction="up" delay={0.32}>
              <div className="p-6 rounded-2xl border border-stone-200/90 bg-white hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-0.5 rounded-md border border-emerald-200/70">
                      06 / SECURITY
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Magic Bytes Gate</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-950">Attachment Guard</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Validates file headers and binary magic numbers (%PDF-, PK, MZ) before preview generation. Disguised executables or polyglot scripts are blocked and isolated before touching your operating system.
                  </p>
                </div>
                <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 text-xs font-mono text-stone-700">
                  <span className="text-[10px] text-emerald-800 font-bold block uppercase mb-0.5 tracking-wider">Integrity Gate</span>
                  Intercepted application/x-dosexec payload named Invoice_Q3.pdf in 12ms.
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: SYSTEM DESIGN & ARCHITECTURE                  */}
      {/* ========================================================= */}
      <section id="intelligence" className="border-t border-stone-200/90 py-20 lg:py-24 bg-[#f5f2eb] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex items-center gap-3 mb-6 text-xs font-semibold text-stone-500 tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="uppercase tracking-[0.2em]">02 / SYSTEM ARCHITECTURE</span>
            </div>
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.08] mb-4">
                Architected for zero data retention and sub-50ms cache reads.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                SortMail decouples user requests from external mail APIs. State stays local in PostgreSQL, while Gemini 2.0 Flash is called only for structured delta extractions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-amber-400 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    01 / Storage &amp; Sync
                  </span>
                  <span className="text-xs font-mono text-stone-500">&lt;50ms Read</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950">Database-First Architecture</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Instead of making blocking requests to external mail APIs on page load, SortMail serves cached metadata from PostgreSQL immediately. A lightweight background daemon leverages Gmail historyId tokens to stream delta changes into local storage, eliminating API rate limits and rendering inboxes in under 50ms.
                </p>
                <div className="p-3.5 bg-stone-900 rounded-xl font-mono text-xs text-stone-200 overflow-x-auto shadow-inner">
                  <span className="text-amber-400">SELECT</span> thread_id, bluf, priority <span className="text-amber-400">FROM</span> thread_intelligence <span className="text-amber-400">WHERE</span> user_id = $1 <span className="text-amber-400">ORDER BY</span> updated_at <span className="text-amber-400">DESC LIMIT</span> 50;
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    02 / LLM Cost Control
                  </span>
                  <span className="text-xs font-mono text-stone-500">~₹0.24 / Email</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950">Single-Pass Gemini Pipeline</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Recursive agent loops create unbounded billing risk and slow turnaround. SortMail passes entire thread contexts to Gemini 2.0 Flash in a single structured invocation. Pure extractor functions map the JSON payload directly to the database, slashing processing expense to fractions of a rupee per message.
                </p>
                <div className="p-3.5 bg-stone-900 rounded-xl font-mono text-xs text-stone-200 overflow-x-auto shadow-inner">
                  response_format = &#123; <span className="text-emerald-400">&quot;type&quot;</span>: <span className="text-emerald-400">&quot;json_object&quot;</span>, <span className="text-emerald-400">&quot;schema&quot;</span>: ThreadIntelligencePayload &#125;
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    03 / Real-Time Client Push
                  </span>
                  <span className="text-xs font-mono text-stone-500">Server-Sent Events</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950">Push-Based Reactivity</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  When background extraction completes, the FastAPI backend publishes an intel_ready notification via Redis Pub/Sub. The browser receives the event over an open SSE connection, immediately refreshing the active view without manual page reloads or polling overhead.
                </p>
                <div className="p-3.5 bg-stone-900 rounded-xl font-mono text-xs text-stone-200 overflow-x-auto shadow-inner">
                  EventSource(<span className="text-emerald-400">&apos;/api/v1/stream/events&apos;</span>) &rarr; onmessage &rarr; optimistic UI merge (45ms)
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4 hover:border-amber-400 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    04 / Schema Boundaries
                  </span>
                  <span className="text-xs font-mono text-stone-500">Zero Hallucinations</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950">Strict DTO Contracts</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  To guarantee reliable database writes, incoming LLM outputs undergo strict validation against Pydantic models. Messages failing schema verification route to an isolation quarantine for manual inspection rather than corrupting user records or propagating bad dates.
                </p>
                <div className="p-3.5 bg-stone-900 rounded-xl font-mono text-xs text-stone-200 overflow-x-auto shadow-inner">
                  ValidationError &rarr; Dead-Letter Queue (DLQ) &rarr; Zero bad writes to Postgres
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/sortmail/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 hover:border-stone-900 text-stone-900 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all bg-white shadow-xs"
            >
              <span>View System Architecture &amp; Data Flow</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: PRACTICAL WORKFLOWS & USE CASES                */}
      {/* ========================================================= */}
      <section id="workflows" className="border-t border-stone-200/90 py-20 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex items-center gap-3 mb-6 text-xs font-semibold text-stone-500 tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="uppercase tracking-[0.2em]">03 / PRACTICAL WORKFLOWS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.08]">
                  How operators use SortMail<br />
                  in real work.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md">
                  SortMail is built for high-stakes inboxes where missed attachments, forgotten commitments, and slow replies directly impact revenue and deliverables.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Persona 1: Consulting Agencies */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-7 rounded-2xl border border-stone-200/90 bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50/90 px-2.5 py-0.5 rounded border border-amber-200/80 uppercase tracking-wider">
                      01 / AGENCY OPS
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Multi-Client SOWs</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-950">Consulting &amp; Client Services</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Manage 25+ simultaneous client engagements without losing change requests or approval timestamps inside long conversational email threads.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-stone-200/70 text-xs">
                  <div className="font-semibold text-stone-800 font-mono text-[11px] uppercase tracking-wider">Desk Flow:</div>
                  <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 font-mono text-stone-700 leading-relaxed text-[11px]">
                    Client sends: &quot;Please add the SSO module by Friday, budget approved.&quot;<br />
                    <span className="text-emerald-800 font-bold">&rarr;</span> SortMail extracts scope addition, logs ₹1,50,000 billing flag, and generates approval confirmation draft.
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Persona 2: Technical Founders */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-7 rounded-2xl border border-stone-200/90 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded border border-blue-200/80 uppercase tracking-wider">
                      02 / LEADERSHIP
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">10-Min Morning Triage</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-950">Technical Founders &amp; Operators</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Triage 100+ inbound updates every morning across investor inquiries, enterprise sales leads, and engineering alerts in under 10 minutes.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-stone-200/70 text-xs">
                  <div className="font-semibold text-stone-800 font-mono text-[11px] uppercase tracking-wider">Desk Flow:</div>
                  <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 font-mono text-stone-700 leading-relaxed text-[11px]">
                    Reads 1-sentence BLUF for all 18 unread threads.<br />
                    <span className="text-blue-700 font-bold">&rarr;</span> Approves 6 pre-populated calendar responses with a single keyboard shortcut.
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Persona 3: Legal & Security Teams */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-7 rounded-2xl border border-stone-200/90 bg-white hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50/90 px-2.5 py-0.5 rounded border border-emerald-200/80 uppercase tracking-wider">
                      03 / COMPLIANCE
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Zero Cloud Retention</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-950">Legal &amp; High-Trust Operations</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    Extract redline contract clauses and enforce byte-level attachment verification for teams handling confidential agreements and financial documents.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-stone-200/70 text-xs">
                  <div className="font-semibold text-stone-800 font-mono text-[11px] uppercase tracking-wider">Desk Flow:</div>
                  <div className="p-3 bg-[#fbfaf8] rounded-xl border border-stone-200/80 font-mono text-stone-700 leading-relaxed text-[11px]">
                    Incoming 48-page NDA.pdf parsed into ChromaDB.<br />
                    <span className="text-emerald-800 font-bold">&rarr;</span> SortMail flags non-standard non-compete clause in section 12 without sending bytes to third-party clouds.
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04: ARCHITECTURE SPECS & SEARCHABLE FAQ            */}
      {/* ========================================================= */}
      <section className="border-t border-stone-200/90 py-20 lg:py-24 bg-[#f8f6f0]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          {/* Architecture Banner Card */}
          <div className="mb-16 p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-400 transition-all duration-300">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-700 font-mono block">
                ENGINEERING SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-stone-950">
                Inspect System Topology &amp; Database-First Architecture
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
                Explore the complete technical breakdown including PostgreSQL delta sync cursors, Gemini 2.0 Flash JSON schemas, and verified latency benchmarks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/sortmail/architecture"
                className="px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Topology Spec</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/sortmail/decisions"
                className="px-5 py-3 border border-stone-300 hover:border-stone-900 text-stone-800 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all bg-white flex items-center gap-2"
              >
                <span>Decisions &amp; Trade-offs</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/sortmail/docs"
                className="px-5 py-3 border border-stone-300 hover:border-stone-900 text-stone-800 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all bg-white flex items-center gap-2"
              >
                <span>Schema Docs</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Searchable FAQ Component for SEO */}
          <SearchableFaq
            items={projectFaqs.sortmail}
            theme="light"
            accentColor="#d97706"
            title="Frequently Asked Questions"
            eyebrow="AI EMAIL INTELLIGENCE KNOWLEDGE BASE"
            projectName="SortMail"
          />

          {/* Direct Email Intake Section */}
          <div className="mt-16">
            <ProjectEmailIntake
              slug="sortmail"
              projectName="SortMail"
              isLight={true}
            />
          </div>

        </div>
      </section>

    </div>
  );
}
