import { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TerminalStream, LogEntry } from '@/components/shared/TerminalStream';

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

            {/* HEADER */}
            
            <ProjectJsonLd project={{
                name: 'OSA',
                url: 'https://osa.rounakneema.in',
                description: 'Offline Security Auditor for Air-Gapped Environments',
                programmingLanguage: 'Go',
                schemaCategory: 'SoftwareApplication',
                faq: [
                    { question: "What is OSA?", answer: "OSA — Offline Security Auditor designed for air-gapped environments." },
                    { question: "What is an offline security auditor?", answer: "It's a tool that analyzes security logs without requiring an active internet connection or external APIs." },
                    { question: "How does OSA analyze security logs?", answer: "OSA uses statistical detection engines including Z-Score and Markov Chains." },
                    { question: "Can OSA run without internet?", answer: "Yes, OSA is a single-binary application that requires zero runtime dependencies and no internet access." },
                    { question: "What makes OSA suitable for air-gapped environments?", answer: "Its standalone nature, built-in analytics, and complete lack of external telemetry or API calls." },
                    { question: "Who created OSA?", answer: "OSA was developed by Rounak Neema for specialized security environments." },
                    { question: "What languages is OSA written in?", answer: "The primary language for OSA is Go." }
                ]
            }} />
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
                </div>

            {/* NEW HERO - LOG STREAM */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
                        SECURITY ANALYTICS WITHOUT THE NETWORK.
                    </h2>
                    <div className="flex gap-4 text-xs font-bold text-[#ffb800] uppercase tracking-widest flex-wrap">
                        <span>ZERO DEPENDENCIES</span>
                        <span className="text-[#333] hidden md:inline">/</span>
                        <span>&lt;200ms PIPELINE</span>
                        <span className="text-[#333] hidden md:inline">/</span>
                        <span>AIR-GAPPED</span>
                    </div>
                </div>
                
                <section className="brutalist-border bg-black p-1">
                    <div className="bg-[#111] p-2 flex gap-2 border-b border-[#333]">
                        <div className="w-3 h-3 bg-[#ff4444] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#ffb800] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#22c55e] rounded-full"></div>
                    </div>
                    <div className="p-6 h-64 md:h-80 bg-[#050505] overflow-hidden">
                        <TerminalStream 
                            entries={LOG_ENTRIES} 
                            intervalMs={800} 
                            accentColor="text-[#ffb800]" 
                            className="h-full"
                        />
                    </div>
                </section>
            </div>


            {/* ASYMMETRIC LAYOUT BODY */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column - Challenge & Solution */}
                <div className="lg:col-span-5 space-y-16">
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-[#ffb800] mb-6 border-b border-[#333] pb-2">The Challenge</h2>
                        <p className="text-xl leading-relaxed text-[#d4d4d4]">
                            {project.challenge}
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-6 border-b border-[#333] pb-2">The Solution</h2>
                        <p className="text-xl leading-relaxed text-white">
                            {project.solution}
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2">Metrics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {project.metrics?.map((m, i) => (
                                <div key={i} className="brutalist-border p-4 hover:bg-[#111] transition-colors">
                                    <div className="text-[10px] uppercase text-gray-500 mb-1">{m.label}</div>
                                    <div className="text-xl font-bold text-white">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ROADMAP SECTION */}
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2">Roadmap</h2>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between items-center p-3 border-l-4 border-[#22c55e] bg-[#111]">
                                <span className="text-white"><span className="text-gray-500 mr-2">v0</span> Offline Log Auditor</span>
                                <span className="text-[#22c55e] text-xs">✓ STABLE</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-l-4 border-[#22c55e] bg-[#111]">
                                <span className="text-white"><span className="text-gray-500 mr-2">v1</span> Behavioral Detection</span>
                                <span className="text-[#22c55e] text-xs">✓ IMPLEMENTED</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-l-4 border-[#ffb800] bg-[#111]">
                                <span className="text-white"><span className="text-gray-500 mr-2">v2</span> Secret Confidence Score</span>
                                <span className="text-[#ffb800] text-xs">◐ IN PROGRESS</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-l-4 border-gray-600 bg-[#111]">
                                <span className="text-gray-400"><span className="text-gray-600 mr-2">v3</span> Kubernetes Native Engine</span>
                                <span className="text-gray-500 text-xs">○ PLANNED</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column - Full Description & Modules */}
                <div className="lg:col-span-7 space-y-16">
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2">System Overview</h2>
                        <div className="editorial-column text-[#d4d4d4] leading-relaxed text-lg">
                            <p className="mb-4">{project.fullDescription}</p>
                            <p>Evolving into a zero-config, Kubernetes-native security engine, OSA (also known internally as LogShield) automatically detects and masks sensitive secrets (API keys, passwords, PII) in application logs before they are written to disk or shipped to log aggregators. It operates natively inside your cluster without compromising performance.</p>
                        </div>
                    </section>

                    <section className="brutalist-border p-8 bg-[#050505]">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-[#333] pb-2">Capabilities & Modules</h2>
                        <ul className="space-y-6">
                            {project.bullets.map((b, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-[#ffb800] font-bold">{(i+1).toString().padStart(2, '0')}.</span>
                                    <div>
                                        <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">{b.label}</div>
                                        <div className="text-[#d4d4d4]">{b.text}</div>
                                    </div>
                                </li>
                            ))}
                            <li className="flex gap-4">
                                <span className="text-[#ffb800] font-bold">05.</span>
                                <div>
                                    <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">Secret Confidence Score (SCS)</div>
                                    <div className="text-[#d4d4d4]">Multi-layered detection pipeline using Aho-Corasick automaton, Context Engine, and ML-based Scoring.</div>
                                </div>
                            </li>
                        </ul>
                    </section>

                
                    <section className="brutalist-border p-8 bg-[#0a0a0a]">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-[#333] pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">01.</span> What is OSA?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA — Offline Security Auditor designed for air-gapped environments.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">02.</span> What is an offline security auditor?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">It's a tool that analyzes security logs without requiring an active internet connection or external APIs.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">03.</span> How does OSA analyze security logs?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA uses statistical detection engines including Z-Score and Markov Chains.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">04.</span> Can OSA run without internet?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">Yes, OSA is a single-binary application that requires zero runtime dependencies and no internet access.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">05.</span> What makes OSA suitable for air-gapped environments?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">Its standalone nature, built-in analytics, and complete lack of external telemetry or API calls.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#333] pb-4">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">06.</span> Who created OSA?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">OSA was developed by Rounak Neema for specialized security environments.</p>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm"><span className="text-[#ffb800] mr-4">07.</span> What languages is OSA written in?<span className="transition group-open:rotate-180">▼</span></summary>
                                <p className="mt-4 text-gray-400 pl-8 font-mono">The primary language for OSA is Go.</p>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        
            <div className="max-w-7xl mx-auto px-6 pb-24">
                </div>
        </main>
    );
}
