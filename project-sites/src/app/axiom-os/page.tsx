import React from 'react';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { TypeWriter } from '@/components/shared/TypeWriter';
import { TerminalStream } from '@/components/shared/TerminalStream';
import Link from 'next/link';

export const metadata = {
  title: 'AXIOM OS — Local-First Personal AI Operating System',
  description: 'A zero-cloud, high-performance telemetry daemon and interactive desktop pet that tracks your digital life and uses local AI to brutally hold you accountable.',
  alternates: {
    canonical: 'https://axiom-os.rounakneema.in',
  },
};

const axiomJsonLd = {
    faq: [
        { question: "What is AXIOM OS?", answer: "AXIOM is a high-performance telemetry daemon and AI accountability partner built in Go and Java. It watches your digital activity and enforces your career goals using local LLMs." },
        { question: "Is it cloud-based?", answer: "No. AXIOM operates completely offline. Telemetry is saved to a local SQLite WAL-mode database, and AI processing is done via a local Ollama instance (Qwen 2.5/3B)." },
        { question: "How does it collect telemetry?", answer: "It uses deep OS hooks, monitoring window focus changes, terminal commands, and file saves across configured Git repositories with virtually zero CPU overhead." },
        { question: "Why does AXIOM use deterministic policies?", answer: "Rules before models. Evidence > Labels. We use a tri-axis evaluation model to deterministically score whether an activity is productive before invoking the LLM for a qualitative roast." }
    ]
};

export default function AxiomPage() {
    const project = projects.find((p) => p.slug === 'axiom-os');
    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00d4aa] selection:text-black font-sans overflow-hidden">
            <ProjectJsonLd slug="axiom-os" />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-red-600/10 blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00d4aa]/10 blur-[120px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-32 relative z-10">
                
                {/* SECTION 1: HERO HEADER */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center mt-12 mb-24">
                        <div className="bg-[#00d4aa]/10 text-[#00d4aa] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-[#00d4aa]/20">
                            SYSTEM ONLINE ✦ ZERO-CLOUD ARCHITECTURE
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[1.1] max-w-5xl">
                            The AI Operating System That <span className="text-red-500">Refuses</span> To Let You Fail.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
                            A high-performance telemetry daemon and interactive desktop pet that tracks your digital life, analyzes your focus, and uses local AI to brutally hold you accountable to your career goals.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#00d4aa] text-black font-black uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 text-sm flex items-center justify-center shadow-[0_0_40px_rgba(0,212,170,0.3)]">
                                View on GitHub
                            </a>
                            <Link href="/architecture" className="bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-sm flex items-center justify-center">
                                Deep Dive
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>

                {/* HUD MOCKUP */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="w-full max-w-5xl mx-auto mb-32 bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative group">
                        <div className="bg-black/50 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-auto flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest">Rage Mode Active</span>
                            </div>
                        </div>
                        <div className="p-8 font-mono text-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-gray-400">CURRENT STATE</span>
                                    <span className="text-[#00d4aa] font-bold">ACTIVE APPS</span>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1"><span>Focus</span><span className="text-red-400">12%</span></div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[12%] animate-pulse"></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1"><span>Intent</span><span className="text-yellow-400">SCROLLING</span></div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden"><div className="bg-yellow-500 h-full w-[65%]"></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1"><span>Goal Align</span><span className="text-red-400">4%</span></div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[4%]"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-red-500 text-black px-2 py-0.5 text-[10px] font-black">AI ENFORCER</div>
                                <p className="text-red-400 font-bold mb-4 mt-2">"You've been watching 'Top 10 Mechanical Keyboards' on YouTube for 42 minutes. Your goal is 'Become a DevOps Engineer'. Close the tab, open VS Code, and write the damn Terraform script. Now."</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* SECTION 2: THE PROBLEM / SOLUTION */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
                        <div>
                            <h4 className="text-[#00d4aa] font-bold tracking-widest text-sm uppercase mb-4">Beyond Passive Dashboards</h4>
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-6 leading-tight">Time trackers tell you what you did. AXIOM tells you to get back to work.</h2>
                            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Most productivity tools rely on passive dashboards that you eventually ignore. AXIOM takes a radically different approach. Designed specifically for engineers, it runs silently in the background, consuming practically zero CPU.
                                </p>
                                <p>
                                    It watches your code saves, your terminal commands, and your active windows. When your focus drops, it doesn't just show you a chart—it spawns an interactive mascot, shakes your screen, and uses a local Large Language Model to deliver a hyper-personalized, context-aware roast based on exactly what you were distracted by.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                            <TerminalStream 
                                entries={[
                                    { time: '10:42', source: 'sensor', message: 'VS Code active — main.go', level: 'ok' },
                                    { time: '10:44', source: 'git', message: 'Commit: "fix db race condition"', level: 'ok' },
                                    { time: '10:51', source: 'sensor', message: 'Chrome active — youtube.com', level: 'info' },
                                    { time: '10:55', source: 'sensor', message: 'Chrome active — youtube.com', level: 'info' },
                                    { time: '11:02', source: 'eval', message: 'FOCUS SCORE DROPPED < 40%', level: 'warn' },
                                    { time: '11:03', source: 'ollama', message: 'GENERATING INTERVENTION...', level: 'info' },
                                    { time: '11:03', source: 'daemon', message: 'TRIGGERING SCREEN SHAKE', level: 'anomaly' },
                                ]}
                                intervalMs={1200}
                            />
                        </div>
                    </section>
                </ScrollReveal>

                {/* SECTION 3: CORE FEATURES */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black uppercase tracking-tight">System Capabilities</h2>
                        </div>
                        <StaggerContainer>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <StaggerItem>
                                    <div id="policies" className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-[#00d4aa]/50 h-full scroll-mt-24">
                                        <div className="text-3xl mb-6">🧠</div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Dynamic Goals Engine</h3>
                                        <p className="text-gray-400 leading-relaxed">AXIOM reads your personal <code>goals.yaml</code> to understand your exact career targets, minimum daily commits, and Peak Focus Windows. The AI's persona adapts to enforce your specific standards.</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div id="telemetry" className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-[#00d4aa]/50 h-full scroll-mt-24">
                                        <div className="text-3xl mb-6">📡</div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Zero-Cloud Telemetry</h3>
                                        <p className="text-gray-400 leading-relaxed">Built in Go for blistering speed, AXIOM features deep OS hooks. It tracks file saves, intercepts shell commands, and analyzes background audio—all kept strictly on your local machine.</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div id="intelligence" className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-[#00d4aa]/50 h-full scroll-mt-24">
                                        <div className="text-3xl mb-6">🤖</div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Context-Aware Roasting</h3>
                                        <p className="text-gray-400 leading-relaxed">AXIOM feeds your live telemetry and current time into a local Ollama instance (Qwen 2.5). The result? A personalized, highly logical, and ruthlessly funny AI that holds you accountable.</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div id="memory" className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-[#00d4aa]/50 h-full scroll-mt-24">
                                        <div className="text-3xl mb-6">👾</div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">The Enforcer Mascot</h3>
                                        <p className="text-gray-400 leading-relaxed">A Java-based pixel-art desktop pet lives on top of your windows. If your focus drops below 40%, the mascot enters "Rage Mode," shaking your active screen to break your distraction loop.</p>
                                    </div>
                                </StaggerItem>
                            </div>
                        </StaggerContainer>
                    </section>
                </ScrollReveal>

                {/* SECTION 4: ARCHITECTURE */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="bg-[#050505] border border-white/10 rounded-2xl p-8 md:p-12 mb-32 shadow-2xl">
                        <div className="mb-12 border-b border-white/10 pb-8">
                            <h4 className="text-[#00d4aa] font-bold tracking-widest text-sm uppercase mb-4">Engineered for Performance</h4>
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Complex OS Telemetry. Zero Cloud Dependencies.</h2>
                            <p className="text-xl text-gray-400">AXIOM was architected from the ground up to respect system resources while providing deep analytics. It operates entirely offline, ensuring 100% data privacy.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white border-l-4 border-[#00d4aa] pl-4">The Backend (Go)</h3>
                                <p className="text-gray-400 leading-relaxed">Highly concurrent goroutines manage OS sensors (File Watchers, Windows API hooks, Shell interception). A thread-safe event bus pipes thousands of events a day into a centralized channel without dropping a single frame.</p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white border-l-4 border-yellow-500 pl-4">The Memory (SQLite)</h3>
                                <p className="text-gray-400 leading-relaxed">Telemetry is persisted in a local WAL-mode SQLite database, optimizing for rapid, continuous writes and complex daily rollup queries.</p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white border-l-4 border-red-500 pl-4">The Intelligence (Ollama)</h3>
                                <p className="text-gray-400 leading-relaxed">AI processing is handled fully locally. Asynchronous Go workers prompt a local Qwen 3B model with dynamic system contexts to classify vague data (e.g., classifying a YouTube video as "Educational" vs. "Entertainment") and generate interventions.</p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white border-l-4 border-purple-500 pl-4">The Presentation (Java/Swing)</h3>
                                <p className="text-gray-400 leading-relaxed">The mascot and glassmorphism UI are rendered using lightweight, undecorated Java frames, capable of triggering OS-level screen-shake API calls natively.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* SECTION 5: INTERACTIVE TERMINAL */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="mb-32 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Your Data, Conversational.</h2>
                            <p className="text-xl text-gray-400">Because AXIOM stores your entire digital timeline, you can interact with your data naturally.</p>
                        </div>
                        
                        <div className="bg-black border border-[#333] rounded-xl p-6 font-mono shadow-2xl relative">
                            <div className="absolute top-0 right-0 bg-[#333] text-white px-3 py-1 rounded-bl-lg text-xs font-bold">axiom.exe</div>
                            <div className="mt-4">
                                <div className="text-[#00d4aa] mb-2">$ axiom chat --roast-me</div>
                                <div className="text-gray-400 mb-6 font-italic">Analyzing today's telemetry timeline...</div>
                                <div className="text-red-400 border-l-2 border-red-500 pl-4">
                                    <TypeWriter text="You've spent exactly 12 minutes coding in VS Code today, but somehow managed to rack up 45 minutes scrolling r/sysadmin complaining about cloud costs. The only thing scaling right now is your procrastination. Close the browser." delay={30} />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                    <EntityHeader 
                        title={project.title}
                        subtitle="The AI Operating System That Refuses to Let You Fail."
                        category={project.category}
                        status={project.status}
                        language="Go, Java, SQLite, Ollama"
                        github={project.github}
                    />
                    <ProjectFacts facts={[
                        { label: 'Role', value: 'Architect & Developer' },
                        { label: 'Domain', value: 'AI OS / Telemetry' },
                        { label: 'Integrations', value: 'Windows API, Ollama' }
                    ]} />
                </ScrollReveal>

                {/* TECHNICAL BRIEFING */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="relative z-10 mt-32 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-12 text-center tracking-tight uppercase">Technical Briefing</h2>
                        <StaggerContainer>
                            <div className="space-y-4">
                                {axiomJsonLd.faq.map((q, idx) => {
                                    const num = String(idx + 1).padStart(2, '0');
                                    return (
                                        <StaggerItem key={idx}>
                                            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-white/10 pb-4 hover:-translate-y-1 transition-all duration-300">
                                                <summary className="flex cursor-pointer items-center justify-between font-bold text-white uppercase text-sm">
                                                    <span><span className="text-[#00d4aa] mr-4">{num}.</span> {q.question}</span>
                                                    <span className="transition group-open:rotate-180">▼</span>
                                                </summary>
                                                <p className="mt-4 text-gray-400 pl-8 font-mono leading-relaxed">{q.answer}</p>
                                            </details>
                                        </StaggerItem>
                                    );
                                })}
                            </div>
                        </StaggerContainer>

                        {/* EVIDENCE BLOCK */}
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className="mt-16 bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                <div className="bg-black/50 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-auto">
                                        <span className="text-[#00d4aa] font-mono text-[10px] font-bold uppercase tracking-widest">Evidence: Local-First Privacy & Offline AI Execution</span>
                                    </div>
                                </div>
                                <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                                    <div><span className="text-[#00d4aa]">$</span> specter start --daemon</div>
                                    <div className="text-gray-400">[+] Telemetry ingest started locally. Network: DISABLED</div>
                                    <div className="text-gray-400">[+] Ollama inference engine loaded in memory</div>
                                    <div className="text-green-500">[✓] Policy Engine: Running locally without cloud APIs</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                </ScrollReveal>

                {/* SECTION 6: CTA / FOOTER */}
                <ScrollReveal direction="up" delay={0.1}>
                    <section className="mt-32 text-center">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Ready to stop slacking?</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Dive into the source code and see how deep OS hooks and local LLMs can redefine productivity.</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-black uppercase tracking-widest px-10 py-5 rounded-lg hover:bg-[#00d4aa] transition-colors text-lg shadow-xl">
                            View Source Code on GitHub
                        </a>
                    </section>
                </ScrollReveal>
            </div>
        </main>
    );
}
