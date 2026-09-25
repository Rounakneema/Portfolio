import { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'OSA - Offline Security Auditor',
    description: 'Single-binary offline security auditor with built-in statistical detection engines (Z-Score & Markov Chains) — no runtime dependencies required.',
};

export default function OSAPage() {
    const project = getProjectBySlug('osa');

    if (!project) return <div>Project not found</div>;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden pb-32">
            {/* Custom CSS for brutalist aesthetic */}
            <style dangerouslySetInnerHTML={{ __html: `
                .crt-flicker { animation: flicker 0.15s infinite; }
                @keyframes flicker {
                    0% { opacity: 0.95; }
                    50% { opacity: 0.85; }
                    100% { opacity: 0.95; }
                }
                .brutalist-border { border: 2px solid #333; }
                .text-glitch { position: relative; }
                .text-glitch::before, .text-glitch::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0.8;
                }
                .text-glitch::before {
                    left: 2px;
                    text-shadow: -2px 0 #ff00c1;
                    animation: glitch-anim 2s infinite linear alternate-reverse;
                }
                .text-glitch::after {
                    left: -2px;
                    text-shadow: -2px 0 #00fff9;
                    animation: glitch-anim 3s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim {
                    0% { clip: rect(24px, 9999px, 9px, 0); }
                    100% { clip: rect(85px, 9999px, 140px, 0); }
                }
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
                .nav-link {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border: 1px solid #333;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }
                .nav-link:hover, .nav-link.active {
                    background: #fff;
                    color: #000;
                    border-color: #fff;
                }
            `}} />

            {/* HEADER */}
            <header className="px-6 py-12 md:py-16 border-b-4 border-[#333] grid-bg">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation */}
                    <nav className="mb-12 flex flex-wrap gap-4 border-b border-[#333] pb-6">
                        <Link href="/" className="nav-link">← Index</Link>
                        <Link href="/osa" className="nav-link active">Overview</Link>
                        <Link href="/osa/architecture" className="nav-link">Architecture</Link>
                        <Link href="/osa/decisions" className="nav-link">Decisions</Link>
                        <Link href="/osa/docs" className="nav-link">Docs</Link>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <h1 className="text-2xl font-black uppercase tracking-tighter text-glitch text-[#fff]" data-text={project.title}>
                            {project.title}
                        </h1>
                        <div className="text-right mt-8 md:mt-0">
                            <div className="text-sm uppercase tracking-widest text-gray-500 mb-2">Status</div>
                            <div className="text-xl md:text-2xl font-bold bg-[#fff] text-[#000] px-3 py-1 inline-block">
                                {project.status}
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-2xl font-bold text-gray-400 max-w-4xl leading-tight">
                        {project.subtitle}
                    </p>
                    
                    <div className="mt-12 flex flex-wrap gap-4">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 text-sm md:text-base border border-gray-600 uppercase tracking-widest text-[#fff]">
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* ASYMMETRIC LAYOUT BODY */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column - Challenge & Solution */}
                <div className="lg:col-span-5 space-y-16">
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-[#00fff9] mb-6 border-b border-[#333] pb-2">The Challenge</h2>
                        <p className="text-xl leading-relaxed text-gray-300">
                            {project.challenge}
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-[#ff00c1] mb-6 border-b border-[#333] pb-2">The Solution</h2>
                        <p className="text-xl leading-relaxed text-[#fff]">
                            {project.solution}
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2">Metrics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {project.metrics?.map((m, i) => (
                                <div key={i} className="brutalist-border p-4 hover:bg-[#111] transition-colors">
                                    <div className="text-[10px] uppercase text-gray-500 mb-1">{m.label}</div>
                                    <div className="text-xl font-bold text-[#fff]">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column - Terminal & Full Description */}
                <div className="lg:col-span-7 space-y-16">
                    
                    {project.terminal && (
                        <section className="brutalist-border bg-black p-1">
                            <div className="bg-[#111] p-2 flex gap-2 border-b border-[#333]">
                                <div className="w-3 h-3 bg-[#ff00c1] rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-[#00fff9] rounded-full"></div>
                            </div>
                            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto crt-flicker">
                                <div className="text-gray-500 mb-4">$ {project.terminal.command}</div>
                                {project.terminal.output.map((line, i) => (
                                    <div key={i} className={line.color || 'text-gray-300'}>
                                        {line.text}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 border-b border-[#333] pb-2">System Overview</h2>
                        <div className="editorial-column text-gray-300 leading-relaxed text-lg">
                            <p className="mb-4">{project.fullDescription}</p>
                            <p>Evolving into a zero-config, Kubernetes-native security engine, OSA (also known internally as LogShield) automatically detects and masks sensitive secrets (API keys, passwords, PII) in application logs before they are written to disk or shipped to log aggregators. It operates natively inside your cluster without compromising performance.</p>
                        </div>
                    </section>

                    <section className="brutalist-border p-8 bg-[#050505]">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-[#333] pb-2">Capabilities & Modules</h2>
                        <ul className="space-y-6">
                            {project.bullets.map((b, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-[#00fff9] font-bold">{(i+1).toString().padStart(2, '0')}.</span>
                                    <div>
                                        <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">{b.label}</div>
                                        <div className="text-gray-300">{b.text}</div>
                                    </div>
                                </li>
                            ))}
                            <li className="flex gap-4">
                                <span className="text-[#00fff9] font-bold">05.</span>
                                <div>
                                    <div className="uppercase text-sm tracking-widest text-gray-400 mb-1">Secret Confidence Score (SCS)</div>
                                    <div className="text-gray-300">Multi-layered detection pipeline using Aho-Corasick automaton, Context Engine, and ML-based Scoring.</div>
                                </div>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </main>
    );
}
