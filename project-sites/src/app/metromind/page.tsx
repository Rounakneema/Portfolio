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
  title: 'MetroMind — Document Intelligence for Real Work',
  description: 'MetroMind helps transit authorities and engineering teams find verified information across reports, scanned documents, and internal records without digging through every file.',
  keywords: ['transit document intelligence', 'OCR document search', 'Smart India Hackathon 2025', 'Milvus RAG', 'municipal records search'],
  alternates: { canonical: 'https://metromind.rounakneema.in' },
  openGraph: {
    title: 'MetroMind — Document Intelligence for Real Work',
    description: 'The answer was already in the file. Instant, grounded document retrieval across complex municipal and transit archives.',
    url: 'https://metromind.rounakneema.in',
    siteName: 'MetroMind',
    type: 'website',
  },
};

export default function MetroMindHome() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      <ProjectJsonLd slug="metromind" />

      {/* ========================================================= */}
      {/* SECTION 01: HERO SECTION                                  */}
      {/* ========================================================= */}
      <section id="overview" className="border-b border-slate-200/80 bg-[#faf8f5] pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-6 space-y-8">
              <ScrollReveal direction="up" delay={0.05}>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block mb-4">
                  DOCUMENT INTELLIGENCE FOR REAL WORK
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-950 font-normal tracking-tight leading-[1.08] mb-6">
                  The answer was <br />already in the file.
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  MetroMind helps teams find the information they need across reports, scanned documents and internal records without digging through every file.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm"
                  >
                    <span>See how it works</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <Link
                    href="/architecture"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-2xs"
                  >
                    <span>Explore MetroMind</span>
                  </Link>
                </div>

                {/* 3 Value Props */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-teal-700" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      Find information in seconds
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-teal-700" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      Ask questions in everyday language
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-teal-700" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      Keep access clear and accountable
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Visual with Stacked Reports & Grounded Answer */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="up" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
                  
                  {/* Subtle Callout at Top Right */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm">
                    <span className="text-xs font-serif italic text-slate-700">Different documents. One answer.</span>
                  </div>

                  {/* Main Hero Photograph */}
                  <div className="relative h-[320px] sm:h-[400px] w-full">
                    <Image
                      src="/images/metromind-hero-desk.jpg"
                      alt="Transit engineering analyst querying MetroMind document intelligence system"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  {/* Floating Document Query & Citation Mockup Card */}
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-200/80 space-y-4">
                    
                    {/* Mock Search Bar */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Search className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                        What do you want to know?
                      </div>
                    </div>

                    {/* Answer Bubble */}
                    <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold font-mono">Q</span>
                        <span className="text-[11px] font-bold text-teal-950 uppercase tracking-wider font-mono">Grounded Intelligence</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        According to the Q2 2024 maintenance report, the scheduled track inspection frequency has been{' '}
                        <span className="bg-teal-200/80 text-teal-950 font-semibold px-1 py-0.5 rounded">
                          increased from quarterly to monthly
                        </span>.
                      </p>
                    </div>

                    {/* Document Citation Card */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <FileCheck className="w-4 h-4 text-teal-700 shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900">Maintenance report - Section 4.2</div>
                          <div className="text-[11px] text-slate-500 font-mono">Page 18 &middot; Q2 2024</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>

                    {/* Stacked Report Indicators */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {[
                        'Maintenance Report Q2 2024',
                        'Inspection Summary',
                        'Operational Guidelines',
                        'Safety Audit',
                        'Project Report',
                      ].map((item, idx) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: TURN DOCUMENTS INTO PROGRESS                  */}
      {/* ========================================================= */}
      <section id="capabilities" className="py-20 lg:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <ScrollReveal direction="up" delay={0.05}>
                <div className="border-l-2 border-teal-600 pl-3">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block">
                    TURN DOCUMENTS INTO PROGRESS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight pt-2">
                  From scattered files <br />to clear answers.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed pt-2">
                  MetroMind brings your documents together and helps teams make better decisions with the information they already have.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Cards: 3 Pillars */}
            <div className="lg:col-span-8">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <StaggerItem>
                  <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#fcfbf9] hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                        <FileSearch className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                        Find the detail
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Search across reports, PDFs, scanned files and internal records in one place without losing context.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 2 */}
                <StaggerItem>
                  <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#fcfbf9] hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                        Ask a direct question
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Get answers in simple language. No boolean keywords, complex query syntax, or database scripts needed.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 3 */}
                <StaggerItem>
                  <div className="p-6 rounded-2xl border border-slate-200/90 bg-[#fcfbf9] hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                        Know where it came from
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Every answer is linked directly to the original document, complete with page references and section citations.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: BUILT FOR TEAMS THAT KEEP THINGS MOVING       */}
      {/* ========================================================= */}
      <section id="teams" className="py-20 lg:py-28 border-b border-slate-200/80 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-2xl mb-12">
              <div className="border-l-2 border-teal-600 pl-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block">
                  BUILT FOR TEAMS THAT KEEP THINGS MOVING
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight mt-3">
                Where information leads to action.
              </h2>
            </div>
          </ScrollReveal>

          {/* 4 Team Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Team 1 */}
            <StaggerItem>
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                  <TrainFront className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Operations &amp; Maintenance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Quickly find details from maintenance reports, track diagnostics, and scheduled inspection records.
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
                  Safety &amp; Compliance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Access safety policies, audit documents, incident investigation logs, and regulatory guidelines instantly.
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
                  Project Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Track vendor updates, station construction milestones, contractor approvals, and technical specs in one view.
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
                  Internal Teams
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Help cross-functional teams locate official documentation without depending on specific individuals or file owners.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04: INTERACTIVE DOCUMENT INTELLIGENCE DEMO        */}
      {/* ========================================================= */}
      <section id="demo" className="py-20 lg:py-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <ScrollReveal direction="up" delay={0.05}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-teal-800 font-bold block mb-3">
                INTERACTIVE DOCUMENT RETRIEVAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal tracking-tight leading-tight mb-4">
                Query municipal archives in real time.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Click through common queries below to see how MetroMind isolates the verified clause, paragraph, and page reference from dense transit archives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <MetroMindDemo />
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05: SMART INDIA HACKATHON 2025 BANNER             */}
      {/* ========================================================= */}
      <section id="story" className="relative isolate overflow-hidden bg-slate-950 text-white">
        
        {/* Background Transit Image */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src="/images/metromind-transit-banner.jpg"
            alt="Elevated metro train viaduct through green modern city"
            fill
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 md:px-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-teal-400 font-bold border border-teal-400/30 bg-teal-400/10 px-3 py-1 rounded-full inline-block">
              Smart India Hackathon 2025 Engineering Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Important information keeps cities moving.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              MetroMind was created by Rounak Neema as part of Smart India Hackathon 2025 to help transit authorities, engineers, and municipal agencies find critical operational answers instantly without lost records or manual page searches.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/architecture"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold px-6 py-3.5 rounded-full transition-all shadow-md font-mono uppercase tracking-wider"
              >
                <span>Inspect System Architecture</span>
                <span aria-hidden="true">&rarr;</span>
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
      {/* SECTION 06: ARCHITECTURE SPEC BANNER                      */}
      {/* ========================================================= */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-teal-400 transition-all duration-300">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal-800 font-mono block">
                DISTRIBUTED SYSTEM SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 font-serif">
                Inspect Distributed Microservices &amp; Milvus Topology
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Review the engineering architecture: Go API Gateway, RabbitMQ message queues, Python OCR workers, all-MiniLM embeddings, and PostgreSQL RBAC audit trails.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/architecture"
                className="px-6 py-3.5 bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                <span>Architecture Spec</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 07: SEARCHABLE SEO FAQS                           */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
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
  );
}
