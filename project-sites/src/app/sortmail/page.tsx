import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';
import sortmailHeroScene from '@/assets/sortmail-hero-scene.png';

export const metadata: Metadata = {
  title: 'SortMail - AI Email Intelligence Layer',
  description: 'SortMail parses, prioritizes, and extracts structured action items from high-volume inboxes using a Database-First architecture and Gemini 2.0 Flash.',
  alternates: {
    canonical: 'https://sortmail.rounakneema.in',
  },
};

const sortmailFaq = [
  {
    question: "What is SortMail?",
    answer: "SortMail is an inbox intelligence engine that turns chaotic email threads into structured action items. It reads message context, drafts executive briefings, extracts deadlines, and surfaces critical attachments before you click through threads."
  },
  {
    question: "How does the Database-First architecture improve load speed?",
    answer: "Rather than waiting on synchronous Gmail API round-trips every time you open your inbox, SortMail serves cached metadata from PostgreSQL in under 50 milliseconds. A background worker performs delta syncs using Gmail historyId to pull only new messages."
  },
  {
    question: "Why use a single-pass LLM pipeline?",
    answer: "Multi-agent loops introduce latency and unpredictable billing. SortMail uses a single structured JSON invocation with Gemini 2.0 Flash, extracting thread intent, tasks, and deadlines in under 850 milliseconds for approximately ₹0.25 per email."
  },
  {
    question: "How does SortMail protect against malicious attachments?",
    answer: "The ingestion gateway verifies file headers and MIME types before preview generation. If a message contains an executable disguised as an invoice, the system flags the MIME mismatch and halts execution."
  },
  {
    question: "Can we commission similar email automation or LLM pipeline engineering?",
    answer: "Yes. Rounak Neema builds custom email intelligence engines, FastAPI LLM pipelines, and secure document ingestion tools. Reach out through the contact page or submit your email below."
  }
];

export default function SortMailPage() {
  const project = projects.find((p) => p.slug === 'sortmail');
  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-blue-600 selection:text-white">
      <ProjectJsonLd slug="sortmail" />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 lg:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono block">
              AI FOR YOUR INBOX
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-bold tracking-tight text-neutral-900 leading-[1.04] mb-8">
              From chaotic<br />
              inbox to <span className="text-blue-600 font-bold">clear</span><br />
              actions.
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md mb-10">
              SortMail parses, prioritizes, and extracts structured action items from high-volume inboxes so you can focus on high-priority execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="/sortmail/architecture"
                className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95 text-center flex-1 sm:flex-none flex items-center justify-center gap-2"
              >
                <span>Explore Architecture</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#features"
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-medium text-sm rounded-xl transition-all text-center flex-1 sm:flex-none flex items-center justify-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>See How It Works</span>
              </a>
            </div>

            {/* Integration & Privacy Badges */}
            <div className="pt-6 border-t border-neutral-200/80 w-full flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-blue-50 text-blue-600 font-bold text-[10px]">
                  M
                </span>
                <span className="font-medium text-neutral-700">Works with Gmail &amp; Outlook</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium text-neutral-700">Zero data retention · Local database cache</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Editorial Laptop Scene */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-neutral-100 group transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
              <Image
                src={sortmailHeroScene}
                alt="SortMail Executive Briefing interface displayed on a laptop in a sunlit workspace"
                placeholder="blur"
                priority={true}
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 01: WORKFLOW & INTELLIGENCE                       */}
      {/* ========================================================= */}
      <section id="features" className="border-t border-neutral-200/90 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>01</span>
            <span className="uppercase tracking-[0.2em]">CORE INTELLIGENCE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.08]">
                Understand threads.<br />
                Extract commitments.<br />
                Ship responses.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                SortMail processes thread context in a single pass. It discards conversational padding and surfaces concrete obligations before you open individual messages.
              </p>
            </div>
          </div>

          {/* 6 Intelligence Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-neutral-200/60">
            
            {/* Card 01 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">01 / BRIEFINGS</span>
                  <span className="text-[10px] font-mono text-neutral-400">RFC-822 Sanitizer</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Executive Summaries</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Condenses multi-party exchanges into structured bullet points. The ingestion engine strips corporate disclaimers, signature blocks, and redundant quotes before passing clean conversational text to the extractor.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">Extraction Metric</span>
                24-email chain condensed into a 3-bullet BLUF in 720ms. 82% token reduction.
              </div>
            </div>

            {/* Card 02 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">02 / ATTACHMENTS</span>
                  <span className="text-[10px] font-mono text-neutral-400">ChromaDB Vectors</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Vector Document Parsing</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Attached PDFs, spreadsheets, and Word documents are automatically chunked into 500-token blocks with 50-token overlap. Queries run against local vector embeddings so you can query contracts without manual downloads.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">In-Inbox Query</span>
                &quot;What are the indemnification caps in section 8.2?&quot; answered in 410ms.
              </div>
            </div>

            {/* Card 03 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">03 / ACTIONS</span>
                  <span className="text-[10px] font-mono text-neutral-400">P0 / P1 / P2 Triage</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Task Extraction</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Parses modal commitments (&quot;please sign&quot;, &quot;will deploy by&quot;, &quot;review needed&quot;) and maps them to assigned owners, urgency categories, and completion criteria. Pushed directly to PostgreSQL task tables.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">Task Dispatch</span>
                Extracted 3 actionable items; assigned 2 to current user with verified due dates.
              </div>
            </div>

            {/* Card 04 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">04 / ASSISTANCE</span>
                  <span className="text-[10px] font-mono text-neutral-400">Tone Adaptive</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Contextual Drafts</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Synthesizes the previous 5 thread interactions and matches your communication style. It prepares a complete response payload ready for review, keeping you in full human control before dispatch.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">Human In The Loop</span>
                Draft generated in 680ms; zero emails sent without deliberate human confirmation.
              </div>
            </div>

            {/* Card 05 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">05 / DEADLINES</span>
                  <span className="text-[10px] font-mono text-neutral-400">ISO 8601 UTC</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Timeline Tracking</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Normalizes informal phrases like &quot;by end of day Thursday&quot; or &quot;before our call on the 24th&quot; into validated UTC timestamps. Highlights waiting-for-reply states before deliverable dates expire.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">Normalized Record</span>
                Converted &quot;end of week&quot; to 2026-10-17T17:00:00Z with high confidence (0.97).
              </div>
            </div>

            {/* Card 06 */}
            <div className="space-y-4 p-6 rounded-2xl border border-neutral-200/70 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-blue-600 block">06 / SECURITY</span>
                  <span className="text-[10px] font-mono text-neutral-400">Magic Bytes Gate</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">Attachment Guard</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Validates file headers and binary magic numbers (%PDF-, PK, MZ) before preview generation. Disguised executables or polyglot scripts are blocked and isolated before touching your operating system.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/70 text-xs font-mono text-neutral-700">
                <span className="text-[10px] text-neutral-400 block uppercase mb-1">Integrity Gate</span>
                Intercepted application/x-dosexec payload named Invoice_Q3.pdf in 12ms.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: SYSTEM DESIGN & ARCHITECTURE                  */}
      {/* ========================================================= */}
      <section id="intelligence" className="border-t border-neutral-200/90 py-20 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-12 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>02</span>
            <span className="uppercase tracking-[0.2em]">ENGINEERING HIGHLIGHTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">01 / Storage &amp; Sync</span>
                <span className="text-xs font-mono text-neutral-400">&lt;50ms Read</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Database-First Architecture</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Instead of making blocking requests to external mail APIs on page load, SortMail serves cached metadata from PostgreSQL immediately. A lightweight background daemon leverages Gmail historyId tokens to stream delta changes into local storage, eliminating API rate limits and rendering inboxes in under 50ms.
              </p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 font-mono text-xs text-neutral-700">
                SELECT thread_id, bluf, priority FROM thread_intelligence WHERE user_id = $1 ORDER BY updated_at DESC LIMIT 50;
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">02 / LLM Cost Control</span>
                <span className="text-xs font-mono text-neutral-400">~₹0.25 / Email</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Single-Pass Gemini Pipeline</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Recursive agent loops create unbounded billing risk and slow turnaround. SortMail passes entire thread contexts to Gemini 2.0 Flash in a single structured invocation. Pure extractor functions map the JSON payload directly to the database, slashing processing expense to fractions of a rupee per message.
              </p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 font-mono text-xs text-neutral-700">
                response_format = &#123; &quot;type&quot;: &quot;json_object&quot;, &quot;schema&quot;: ThreadIntelligencePayload &#125;
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">03 / Real-Time Client Push</span>
                <span className="text-xs font-mono text-neutral-400">Server-Sent Events</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Push-Based Reactivity</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                When background extraction completes, the FastAPI backend publishes an intel_ready notification via Redis Pub/Sub. The browser receives the event over an open SSE connection, immediately refreshing the active view without manual page reloads or polling overhead.
              </p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 font-mono text-xs text-neutral-700">
                EventSource(&apos;/api/v1/stream/events&apos;) &rarr; onmessage &rarr; optimistic UI merge (45ms)
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">04 / Schema Boundaries</span>
                <span className="text-xs font-mono text-neutral-400">Zero Hallucinations</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Strict DTO Contracts</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                To guarantee reliable database writes, incoming LLM outputs undergo strict validation against Pydantic models. Messages failing schema verification route to an isolation quarantine for manual inspection rather than corrupting user records or propagating bad dates.
              </p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 font-mono text-xs text-neutral-700">
                ValidationError &rarr; Dead-Letter Queue (DLQ) &rarr; Zero bad writes to Postgres
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/sortmail/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all bg-white shadow-sm"
            >
              <span>View System Architecture &amp; Data Flow</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: PRACTICAL WORKFLOWS & USE CASES                */}
      {/* ========================================================= */}
      <section id="workflows" className="border-t border-neutral-200/90 py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-12 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>03</span>
            <span className="uppercase tracking-[0.2em]">PRACTICAL WORKFLOWS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.08]">
                How operators use SortMail<br />
                in real work.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                SortMail is built for high-stakes inboxes where missed attachments, forgotten commitments, and slow replies directly impact revenue and deliverables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Persona 1: Consulting Agencies */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">01 / AGENCY OPS</span>
                  <span className="text-[10px] font-mono text-neutral-400">Multi-Client SOWs</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Consulting &amp; Client Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Manage 25+ simultaneous client engagements without losing change requests or approval timestamps inside long conversational email threads.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Real-World Flow:</div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  Client sends: &quot;Please add the SSO module by Friday, budget approved.&quot;<br />
                  &rarr; SortMail extracts scope addition, logs ₹1,50,000 billing flag, and generates approval confirmation draft.
                </div>
              </div>
            </div>

            {/* Persona 2: Technical Founders */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">02 / LEADERSHIP</span>
                  <span className="text-[10px] font-mono text-neutral-400">10-Min Morning Triage</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Technical Founders &amp; Operators</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Triage 100+ inbound updates every morning across investor inquiries, enterprise sales leads, and engineering alerts in under 10 minutes.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Real-World Flow:</div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  Reads 1-sentence BLUF for all 18 unread threads.<br />
                  &rarr; Approves 6 pre-populated calendar responses with a single keyboard shortcut.
                </div>
              </div>
            </div>

            {/* Persona 3: Legal & Security Teams */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">03 / COMPLIANCE</span>
                  <span className="text-[10px] font-mono text-neutral-400">Zero Cloud Retention</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Legal &amp; High-Trust Operations</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Extract redline contract clauses and enforce byte-level attachment verification for teams handling confidential agreements and financial documents.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Real-World Flow:</div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  Incoming 48-page NDA.pdf parsed into ChromaDB.<br />
                  &rarr; SortMail flags non-standard non-compete clause in section 12 without sending document bytes to third-party clouds.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: TECHNICAL BRIEFING & BENCHMARKS               */}
      {/* ========================================================= */}
      <section className="border-t border-neutral-200/90 py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-6 mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono block mb-2">
                VERIFICATION &amp; EVIDENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                Technical Briefing
              </h2>
            </div>
            <div className="flex gap-3">
              <a
                href="/sortmail/decisions"
                className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Engineering Tradeoffs</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="/sortmail/docs"
                className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Schema Docs</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Q&A Accordion */}
          <div className="space-y-10">
            {sortmailFaq.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pl-7">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CLI Pipeline Benchmark Evidence Card */}
          <div className="mt-16 border border-neutral-200 rounded-2xl bg-neutral-50/50 overflow-hidden shadow-sm">
            <div className="bg-neutral-100/70 border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800">
                  AI Pipeline Benchmark Evidence
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">Verified Pipeline</span>
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
