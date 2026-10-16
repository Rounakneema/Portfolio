import { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TerminalStream, LogEntry } from '@/components/shared/TerminalStream';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { projectFaqs } from '@/lib/projectFaqs';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';

export const metadata: Metadata = {
  title: 'OSA — Offline Security Auditor for Air-Gapped Environments',
  description: 'Single-binary offline security auditor for air-gapped security auditing. Features built-in statistical detection engines (Z-Score & Markov Chains).',
  keywords: ['air-gapped security auditing', 'offline security auditor', 'Go security tool', 'Z-Score analytics'],
  alternates: { canonical: 'https://osa.rounakneema.in' },
};

const LOG_ENTRIES: LogEntry[] = [
  { time: '14:32:01', source: 'auth.log', message: 'INGESTING', level: 'info' },
  { time: '14:32:01', source: 'nginx', message: 'INGESTING', level: 'info' },
  { time: '14:32:02', source: 'docker', message: 'INGESTING', level: 'info' },
  { time: '14:32:02', source: 'k8s-audit', message: 'INGESTING', level: 'info' },
  { time: '14:32:03', source: 'windows-event', message: 'INGESTING', level: 'info' },
  { time: '14:32:03', source: 'auth.log', message: 'BASELINE COMPUTED', level: 'ok' },
  { time: '14:32:04', source: 'z-score', message: 'ANALYZING WINDOW...', level: 'info' },
  { time: '14:32:04', source: 'ANOMALY', message: 'Z-SCORE 4.2 — auth.log:4821 — ALERT', level: 'anomaly' },
  { time: '14:32:05', source: 'markov', message: 'BEHAVIORAL SEQUENCE DEVIATION DETECTED', level: 'warn' },
  { time: '14:32:05', source: 'policy', message: 'REPORT WRITTEN → /var/osa/reports/', level: 'ok' },
];

export default function OSAPage() {
    const project = getProjectBySlug('osa');

    if (!project) return <div>Project not found</div>;

    return (
        <main className="bg-[#0a0a0a] text-[#d4d4d4] font-mono selection:bg-[#ffb800] selection:text-[#000] overflow-x-hidden pb-32">
            {/* Custom CSS for industrial aesthetic */}
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .grid-bg {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, #111 1px, transparent 1px),
                                      linear-gradient(to bottom, #111 1px, transparent 1px);
                }
                .editorial-column {
                    column-count: 2;
                    column-gap: 2rem;
                }
                @media (max-width: 768px) {
                    .editorial-column { column-count: 1; }
                }
            `}} />

            <ProjectJsonLd slug="osa" />
            <h1 className="sr-only">OSA - Offline Security Auditor for Air-Gapped Environments</h1>
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
            </div>

            {/* HERO - LOG STREAM */}
            <ScrollReveal direction="up" delay={0.1}>
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffb800] border border-[#ffb800]/20 bg-[#ffb800]/10 px-3 py-1 rounded-full inline-block mb-4">
                                Air-Gapped Security Engineering
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
                                Security Analytics <br />
                                <span className="text-[#ffb800]">Without The Network.</span>
                            </h2>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                                When your infrastructure is strictly air-gapped, standard cloud SIEMs are useless. We engineered OSA so you can ingest millions of offline log events in &lt;200ms with zero network packets leaving your secure perimeter.
                            </p>
                        </div>
                        <div className="flex gap-4 text-xs font-bold text-[#ffb800] uppercase tracking-widest flex-wrap shrink-0">
                            <span>ZERO DEPENDENCIES</span>
                            <span className="text-[#333] hidden md:inline">/</span>
                            <span>&lt;200ms PIPELINE</span>
                            <span className="text-[#333] hidden md:inline">/</span>
                            <span>AIR-GAPPED</span>
                        </div>
                    </div>
                    
                    <section className="brutalist-border bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-1 shadow-xl">
                        <div className="bg-[#111] p-2 flex gap-2 border-b border-[#333] rounded-t-lg">
                            <div className="w-3 h-3 bg-[#ff4444] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#ffb800] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#22c55e] rounded-full"></div>
                        </div>
                        <div className="p-6 h-64 md:h-80 bg-[#050505] overflow-hidden rounded-b-lg">
                            <TerminalStream 
                                entries={LOG_ENTRIES} 
                                intervalMs={800} 
                                accentColor="text-[#ffb800]" 
                                className="h-full"
                            />
                        </div>
                    </section>
                </div>
            </ScrollReveal>


            {/* ASYMMETRIC LAYOUT BODY */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column - Challenge & Solution */}
                <div className="lg:col-span-5 space-y-16">
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-[#ffb800] mb-6 border-b border-[#333] pb-2 tracking-tight">The Challenge</h2>
                            <p className="text-xl leading-relaxed text-[#d4d4d4]">
                                {project.challenge}
                            </p>
                        </section>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-6 border-b border-[#333] pb-2 tracking-tight">The Solution</h2>
                            <p className="text-xl leading-relaxed text-white">
                                {project.solution}
                            </p>
                        </section>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2 tracking-tight">Metrics</h2>
                            <StaggerContainer className="grid grid-cols-2 gap-4">
                                {project.metrics?.map((m, i) => (
                                    <StaggerItem key={i}>
                                        <div className="brutalist-border bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl hover:-translate-y-1 hover:border-[#ffb800] transition-all duration-300">
                                            <div className="text-[10px] uppercase text-gray-500 mb-1">{m.label}</div>
                                            <div className="text-xl font-bold text-white tracking-tighter">{m.value}</div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </section>
                    </ScrollReveal>

                    {/* ROADMAP SECTION */}
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2 tracking-tight">Roadmap</h2>
                            <StaggerContainer className="space-y-4 font-mono text-sm">
                                <StaggerItem>
                                    <div className="flex justify-between items-center p-3 border-l-4 border-[#22c55e] bg-white/5 border-r border-y border-white/10 backdrop-blur-md rounded-r-lg shadow-xl hover:-translate-y-1 hover:border-r-[#ffb800] hover:border-y-[#ffb800] transition-all duration-300">
                                        <span className="text-white"><span className="text-gray-500 mr-2">v0</span> Offline Log Auditor</span>
                                        <span className="text-[#22c55e] text-xs">✓ STABLE</span>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="flex justify-between items-center p-3 border-l-4 border-[#22c55e] bg-white/5 border-r border-y border-white/10 backdrop-blur-md rounded-r-lg shadow-xl hover:-translate-y-1 hover:border-r-[#ffb800] hover:border-y-[#ffb800] transition-all duration-300">
                                        <span className="text-white"><span className="text-gray-500 mr-2">v1</span> Behavioral Detection</span>
                                        <span className="text-[#22c55e] text-xs">✓ IMPLEMENTED</span>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="flex justify-between items-center p-3 border-l-4 border-[#ffb800] bg-white/5 border-r border-y border-white/10 backdrop-blur-md rounded-r-lg shadow-xl hover:-translate-y-1 hover:border-r-[#ffb800] hover:border-y-[#ffb800] transition-all duration-300">
                                        <span className="text-white"><span className="text-gray-500 mr-2">v2</span> Secret Confidence Score</span>
                                        <span className="text-[#ffb800] text-xs">● IN PROGRESS</span>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="flex justify-between items-center p-3 border-l-4 border-gray-600 bg-white/5 border-r border-y border-white/10 backdrop-blur-md rounded-r-lg shadow-xl hover:-translate-y-1 hover:border-r-[#ffb800] hover:border-y-[#ffb800] transition-all duration-300">
                                        <span className="text-gray-400"><span className="text-gray-600 mr-2">v3</span> Kubernetes Native Engine</span>
                                        <span className="text-gray-500 text-xs">○ PLANNED</span>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </section>
                    </ScrollReveal>
                </div>

                {/* Right Column - Full Description & Modules */}
                <div className="lg:col-span-7 space-y-16">
                    <ScrollReveal direction="up" delay={0.1}>
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2 tracking-tight">System Overview</h2>
                            <div className="editorial-column text-[#d4d4d4] leading-relaxed text-lg">
                                <p className="mb-4">{project.fullDescription}</p>
                                <p>Evolving into a zero-config, Kubernetes-native security engine, OSA (also known internally as LogShield) automatically detects and masks sensitive secrets (API keys, passwords, PII) in application logs before they are written to disk or shipped to log aggregators. It operates natively inside your cluster without compromising performance.</p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
                        <section id="detection" className="brutalist-border p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl hover:-translate-y-1 hover:border-[#ffb800] transition-all duration-300">
                            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-[#333] pb-2 tracking-tight">Capabilities & Modules</h2>
                            <StaggerContainer className="space-y-6">
                                {project.bullets.map((b, i) => (
                                    <StaggerItem key={i}>
                                        <li className="flex gap-4">
                                            <span className="text-[#ffb800] font-bold">{(i+1).toString().padStart(2, '0')}.</span>
                                            <div>
                                                <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">{b.label}</div>
                                                <div className="text-[#d4d4d4] leading-relaxed">{b.text}</div>
                                            </div>
                                        </li>
                                    </StaggerItem>
                                ))}
                                <StaggerItem>
                                    <li className="flex gap-4">
                                        <span className="text-[#ffb800] font-bold">05.</span>
                                        <div>
                                            <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">Secret Confidence Score (SCS)</div>
                                            <div className="text-[#d4d4d4] leading-relaxed">Multi-layered detection pipeline using Aho-Corasick automaton, Context Engine, and ML-based Scoring.</div>
                                        </div>
                                    </li>
                                </StaggerItem>
                            </StaggerContainer>
                        </section>
                    </ScrollReveal>

                </div>
            </div>

            {/* Architecture Spec Banner & Searchable SEO FAQs */}
            <section className="border-t border-[#333] py-20 lg:py-24 bg-[#080808]">
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    
                    {/* Architecture Documentation Banner Card */}
                    <div className="mb-16 p-8 brutalist-border bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#ffb800]/50 transition-all duration-300">
                        <div className="space-y-2">
                            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ffb800] font-mono block">
                                AIR-GAPPED SPECIFICATION
                            </span>
                            <h3 className="text-2xl font-bold tracking-tight text-white font-mono">
                                Inspect Air-Gapped Topology &amp; SCS Pipeline
                            </h3>
                            <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-xl">
                                Explore the complete technical architecture: Mutating Admission Webhook sidecar injection, Aho-Corasick linear filtering, Secret Confidence Scoring, and encrypted SQLite audit vaults.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <Link
                                href="/architecture"
                                className="px-5 py-3 bg-[#ffb800] hover:bg-[#e0a300] text-black font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-sm flex items-center gap-2"
                            >
                                <span>Architecture Spec</span>
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link
                                href="/docs"
                                className="px-5 py-3 border border-zinc-700 hover:border-[#ffb800] text-zinc-300 hover:text-white font-medium text-xs font-mono uppercase tracking-wider rounded-lg transition-all bg-black/40 flex items-center gap-2"
                            >
                                <span>Docs &amp; Benchmarks</span>
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    {/* Searchable FAQ Component for SEO */}
                    <SearchableFaq
                        items={projectFaqs.osa}
                        theme="dark"
                        accentColor="#ffb800"
                        title="Frequently Asked Questions"
                        eyebrow="SECURITY KNOWLEDGE BASE &amp; FAQ"
                        projectName="OSA"
                    />

                    {/* Email Intake & Custom Tooling Inquiry */}
                    <div className="mt-16">
                        <ProjectEmailIntake
                            slug="osa"
                            projectName="OSA"
                            isLight={false}
                        />
                    </div>

                </div>
            </section>
        </main>
    );
}


