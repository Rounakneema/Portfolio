import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Users,
  ShieldCheck,
  FileSearch,
  MessageSquare,
  FileCheck,
  TrainFront,
  FileText,
  ArrowRight,
  Search,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Cpu,
  Layers,
  Database,
  Lock,
  Workflow,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { projectFaqs } from '@/lib/projectFaqs';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';
import { MetroMindDemo } from '@/components/metromind/MetroMindDemo';
import { MetroMindFooter } from '@/components/metromind/MetroMindNav';

export const metadata: Metadata = {
  title: 'MetroMind · Transit Document Intelligence Engine',
  description: 'MetroMind indexes municipal transit records, scanned maintenance blueprints, and safety audits into a grounded vector intelligence system with zero hallucinations.',
  keywords: ['transit document intelligence', 'OCR document search', 'Smart India Hackathon 2025', 'Milvus RAG', 'municipal records search', 'Rounak Neema'],
  alternates: { canonical: 'https://metromind.rounakneema.in' },
  openGraph: {
    title: 'MetroMind · Transit Document Intelligence Engine',
    description: 'The answer was already in the file. Instant, grounded document retrieval across complex municipal and transit archives.',
    url: 'https://metromind.rounakneema.in',
    siteName: 'MetroMind',
    type: 'website',
  },
};

export default function MetroMindHome() {
  return (
    <div className="relative w-full bg-[#faf8f5] text-slate-900 selection:bg-teal-500/20 selection:text-teal-900 overflow-x-hidden">
      <ProjectJsonLd slug="metromind" />

      {/* Ambient Diffused Lighting Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Teal Aura */}
        <div className="absolute -top-32 -left-20 w-[640px] h-[640px] rounded-full bg-teal-500/[0.08] blur-[140px]" />
        {/* Top Right Cyan Aura */}
        <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        {/* Mid-page Soft Amber Civic Glow */}
        <div className="absolute top-2/3 left-1/4 w-[550px] h-[450px] rounded-full bg-amber-500/[0.04] blur-[140px]" />
        {/* Fine Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10">

        {/* ========================================================= */}
        {/* SECTION 01: HERO SECTION (WINDOW-HEIGHT & DIFFUSED TYPE)  */}
        {/* ========================================================= */}
        <section
          id="overview"
          className="relative min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] lg:max-h-[880px] flex items-center justify-center border-b border-slate-200/70 py-10 lg:py-0"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Headline, Value Proposition & CTAs */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <ScrollReveal direction="up" delay={0.05}>
                  
                  {/* Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/5 border border-teal-800/15 text-teal-800 font-mono text-[11px] font-semibold tracking-wider uppercase mb-3 backdrop-blur-xs">
                    <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                    <span>SMART INDIA HACKATHON 2025 &middot; TRANSIT INTELLIGENCE</span>
                  </div>

                  {/* Serif Headline */}
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-slate-950 font-normal tracking-tight leading-[1.08] mb-4">
                    The answer was <br className="hidden sm:block" />
                    already in the file.
                  </h1>

                  {/* Body Copy */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                    MetroMind indexes municipal transit records, scanned maintenance blueprints, and safety audits into a grounded vector intelligence system. Built for transit authorities who need verified answers in milliseconds, not manual archive hunts.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3.5 mb-8">
                    <a
                      href="#demo"
                      className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow"
                    >
                      <span>Explore the platform</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href="/metromind/architecture"
                      className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-2xs backdrop-blur-xs"
                    >
                      <span>Inspect Architecture Spec</span>
                    </Link>
                  </div>

                  {/* 3 Metric Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5 text-teal-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">&lt;240ms</div>
                        <div className="text-[11px] text-slate-500">Query Latency</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">100%</div>
                        <div className="text-[11px] text-slate-500">Page Attribution</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                        <Database className="w-3.5 h-3.5 text-teal-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">Milvus RAG</div>
                        <div className="text-[11px] text-slate-500">Local Vector Store</div>
                      </div>
                    </div>
                  </div>

                </ScrollReveal>
              </div>

              {/* Right Column: Hero Visual with Desk Photograph & Grounded Intelligence Card */}
              <div className="lg:col-span-6 relative">
                <ScrollReveal direction="up" delay={0.15}>
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-200/80 bg-white/95 backdrop-blur-md">
                    
                    {/* Top Callout Badge */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-slate-950/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      <span>Line 2 &middot; Operational Records</span>
                    </div>

                    {/* Main Hero Photograph with Subtle Diffused Gradient */}
                    <div className="relative h-[240px] sm:h-[280px] w-full">
                      <Image
                        src="/images/metromind-hero-desk.jpg"
                        alt="Transit engineering analyst querying MetroMind document intelligence system"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    </div>

                    {/* Streamlined Live Grounded Query & Answer Card */}
                    <div className="p-5 sm:p-6 bg-white border-t border-slate-200/80 space-y-4 text-left">
                      
                      {/* Query Input Box */}
                      <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800">
                        <Search className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-medium truncate flex-1">
                          What is the scheduled ultrasonic bogie inspection cycle?
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded shrink-0">
                          &lt;240ms
                        </span>
                      </div>

                      {/* Unified Grounded Intelligence Answer & Citation */}
                      <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            Verified Grounding
                          </span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>99.4% Match</span>
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          Bogie suspension inspections are mandated every{' '}
                          <span className="bg-teal-200/90 text-teal-950 font-semibold px-1 py-0.5 rounded">
                            15,000 km or 30 days
                          </span>
                          . Critical wear thresholds require immediate ultrasonic testing.
                        </p>

                        <div className="pt-2.5 border-t border-teal-200/70 flex items-center justify-between text-[11px] text-slate-600 font-mono">
                          <span className="flex items-center gap-1.5 text-slate-700 truncate">
                            <FileCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                            <span className="truncate">Maintenance_Report_Q2_2024.pdf &middot; &sect;4.2, p. 18</span>
                          </span>
                          <span className="text-teal-800 font-semibold shrink-0">
                            Source Verified
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 02: VALUE STRIP & CORE NUMBERS                    */}
        {/* ========================================================= */}
        <section className="border-b border-slate-200/80 bg-white/70 backdrop-blur-xs py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              <div className="border-r border-slate-200/70 pr-4 last:border-none">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">250,000+</div>
                <div className="text-xs text-slate-500 mt-0.5">Scanned Pages Indexed per Node</div>
              </div>
              <div className="border-r border-slate-200/70 pr-4 last:border-none">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-700">&lt;240ms</div>
                <div className="text-xs text-slate-500 mt-0.5">Average Semantic Lookup Latency</div>
              </div>
              <div className="border-r border-slate-200/70 pr-4 last:border-none">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Zero</div>
                <div className="text-xs text-slate-500 mt-0.5">Synthetic LLM Hallucinations</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Air-Gappable On-Premise Execution</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 03: INTERACTIVE DOCUMENT INTELLIGENCE DEMO        */}
        {/* ========================================================= */}
        <section id="demo" className="py-20 lg:py-28 border-b border-slate-200/80 bg-[#f7f5ef]/60">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            
            <ScrollReveal direction="up" delay={0.05}>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block mb-3">
                  INTERACTIVE DOCUMENT RETRIEVAL
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight mb-4">
                  Query municipal archives in real time.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Select common transit queries below to see how MetroMind isolates the verified clause, paragraph, and page reference from dense transit archives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <MetroMindDemo />
            </ScrollReveal>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 04: CORE CAPABILITIES (DIFFUSED BENTO GRID)       */}
        {/* ========================================================= */}
        <section id="capabilities" className="py-20 lg:py-28 border-b border-slate-200/80 bg-white/80">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            
            <ScrollReveal direction="up" delay={0.05}>
              <div className="max-w-2xl mb-14 text-left">
                <div className="border-l-2 border-teal-600 pl-3 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block">
                    ENGINEERING CAPABILITIES
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight pt-1">
                  From scattered archives <br />to grounded operational answers.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  MetroMind replaces slow manual searches across legacy folders with automated OCR parsing, dense vector embeddings, and strict citation verification.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* Card 1: OCR */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#faf8f5]/90 hover:border-teal-500/60 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                      <FileSearch className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                      Multi-Modal OCR &amp; Blueprints
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Parses scanned TIFFs, multi-column reports, complex blueprints, and maintenance spreadsheets without destroying spatial layout or table structures.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-800">
                    Tesseract + LayoutLMv3
                  </div>
                </div>
              </StaggerItem>

              {/* Card 2: Grounded Citations */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#faf8f5]/90 hover:border-teal-500/60 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                      Zero-Hallucination Grounding
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Every answer is anchored to exact PDF page numbers, clause identifiers, and bounding boxes. If a claim cannot be verified in the source file, it is rejected.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-800">
                    Byte-Level PDF Attribution
                  </div>
                </div>
              </StaggerItem>

              {/* Card 3: RBAC & Security */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#faf8f5]/90 hover:border-teal-500/60 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                      Departmental RBAC &amp; Audit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Enforces strict role-based access control. Field technicians, auditors, and municipal directors only retrieve documents authorized for their clearance tier.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-800">
                    PostgreSQL Access Policies
                  </div>
                </div>
              </StaggerItem>

              {/* Card 4: Sub-Second Vector Search */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#faf8f5]/90 hover:border-teal-500/60 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                      Sub-Second Hybrid Search
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Combines BM25 lexical keyword matching with Milvus dense vector embeddings to handle exact component model numbers and natural conversational queries.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-800">
                    Milvus HNSW Vector Graph
                  </div>
                </div>
              </StaggerItem>

            </StaggerContainer>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 05: PANORAMIC CIVIC TRANSIT BANNER                */}
        {/* ========================================================= */}
        <section id="story" className="relative isolate overflow-hidden bg-slate-950 text-white">
          
          {/* Panoramic Transit Image */}
          <div className="absolute inset-0 -z-10 h-full w-full">
            <Image
              src="/images/metromind-transit-banner.jpg"
              alt="Elevated metro train viaduct smoothly moving through modern city and forest"
              fill
              className="object-cover object-center brightness-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 md:px-10">
            <div className="max-w-2xl space-y-6 text-left">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-teal-400 font-bold border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 rounded-full inline-block">
                Smart India Hackathon 2025 Engineering Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                Important information keeps cities moving.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                MetroMind was created by Rounak Neema as part of Smart India Hackathon 2025 to help transit authorities, engineers, and municipal agencies find critical operational answers instantly without lost records or manual page searches.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/metromind/architecture"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold px-6 py-3.5 rounded-full transition-all shadow-md font-mono uppercase tracking-wider"
                >
                  <span>Inspect System Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://github.com/rounakneema/MetroMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 hover:border-white text-white text-xs font-medium px-6 py-3.5 rounded-full transition-all backdrop-blur-md"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 06: HOW IT WORKS (3-STEP PIPELINE)                */}
        {/* ========================================================= */}
        <section id="how-it-works" className="py-20 lg:py-28 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            
            <ScrollReveal direction="up" delay={0.05}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block mb-3">
                  SYSTEM WORKFLOW
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight mb-4">
                  How MetroMind operates.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  From scanned PDF intake to sub-second grounded answers, the architecture is designed for deterministic attribution and high throughput.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              
              {/* Step 1 */}
              <div className="p-7 rounded-2xl bg-[#faf8f5] border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/80">
                    STEP 01
                  </span>
                  <Workflow className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Ingestion &amp; OCR Workers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Documents enter the Go API Gateway and are queued via RabbitMQ. Distributed Python workers run OCR extraction, table segmentation, and text tokenization asynchronously.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-7 rounded-2xl bg-[#faf8f5] border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/80">
                    STEP 02
                  </span>
                  <Layers className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Chunking &amp; Milvus Indexing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extracted text is partitioned into semantic chunks with overlapping boundaries, embedded via all-MiniLM-L6-v2, and indexed into a local Milvus HNSW vector database.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-7 rounded-2xl bg-[#faf8f5] border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/80">
                    STEP 03
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Grounded RAG &amp; Citation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  User queries retrieve the top-k most relevant document chunks. The answer synthesizer verifies exact clause references and returns direct page links with zero fabrication.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 07: STAKEHOLDERS & TRANSIT TEAMS                  */}
        {/* ========================================================= */}
        <section id="teams" className="py-20 lg:py-28 border-b border-slate-200/80 bg-[#f7f5ef]/50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            
            <ScrollReveal direction="up" delay={0.05}>
              <div className="max-w-2xl mb-12 text-left">
                <div className="border-l-2 border-teal-600 pl-3">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block">
                    BUILT FOR TRANSIT OPERATIONS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight mt-3">
                  Where verified records lead to action.
                </h2>
              </div>
            </ScrollReveal>

            {/* 4 Team Cards Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* Team 1 */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                    <TrainFront className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Operations &amp; Track Maintenance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Quickly isolate details from track inspection records, bogie diagnostics, third-rail specifications, and scheduled overhaul logs.
                  </p>
                </div>
              </StaggerItem>

              {/* Team 2 */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Safety &amp; Regulatory Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify compliance with NFPA 130 ventilation rules, CENELEC SIL-4 signaling standards, and audit checklists across municipal divisions.
                  </p>
                </div>
              </StaggerItem>

              {/* Team 3 */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Station Expansion &amp; Projects
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track contractor deliverables, station expansion milestones, architectural engineering blueprints, and vendor milestone approvals.
                  </p>
                </div>
              </StaggerItem>

              {/* Team 4 */}
              <StaggerItem>
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Internal Municipal Auditors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Enable cross-functional auditors to search historical archives without relying on personal memory or siloed desktop files.
                  </p>
                </div>
              </StaggerItem>

            </StaggerContainer>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 08: ARCHITECTURE SUBPAGE LINK CARD                */}
        {/* ========================================================= */}
        <section className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="p-8 rounded-2xl bg-[#faf8f5] border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-teal-400 transition-all duration-300 text-left">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal-800 font-mono block">
                  TECHNICAL SPECIFICATION SUBPAGE
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950 font-serif">
                  Inspect Distributed Microservices &amp; Milvus Topology
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  All low-level Go gateway benchmarks, RabbitMQ queue metrics, Python OCR workers, and PostgreSQL RBAC schema details belong strictly on our technical architecture page.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/metromind/architecture"
                  className="px-6 py-3.5 bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 09: SEARCHABLE SEO FAQS                           */}
        {/* ========================================================= */}
        <section id="faq" className="py-20 lg:py-24 border-b border-slate-200/80 bg-[#fcfbf9]">
          <div className="max-w-5xl mx-auto px-6 md:px-10 text-left">
            <SearchableFaq
              items={projectFaqs.metromind}
              theme="light"
              accentColor="#0d9488"
              title="Frequently Asked Questions"
              eyebrow="TRANSIT INTELLIGENCE KNOWLEDGE BASE"
              projectName="MetroMind"
            />

            {/* Email Intake & Custom Tooling Inquiry */}
            <div className="mt-16">
              <ProjectEmailIntake
                slug="metromind"
                projectName="MetroMind"
                isLight={true}
              />
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <MetroMindFooter />
      </div>
    </div>
  );
}
