import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
    title: 'SortMail // Architecture',
    description: 'Deep dive into the system topology, single-pass pipeline, and push-based SSE architecture driving SortMail.',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-[100dvh] bg-[#050505] text-white font-sans selection:bg-amber-500/20 selection:text-amber-500 pb-32">
            {/* Header / Nav */}
            <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="text-xl font-bold tracking-tighter text-white">
                    SORTMAIL<span className="text-amber-500">.</span>
                </div>
                <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                    <a href="/sortmail" className="hover:text-white transition-colors">Overview</a>
                    <a href="/sortmail/architecture" className="text-amber-500 transition-colors">Architecture</a>
                    <a href="/sortmail/decisions" className="hover:text-white transition-colors">Decisions</a>
                    <a href="/sortmail/docs" className="hover:text-white transition-colors">Docs</a>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
                
                <FadeIn>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6">System Design</div>
                    <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-12">
                        Topology <br /> & Data Flow.
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-24">
                    <FadeIn delay={0.2} className="lg:col-span-8">
                        {/* Diagram Container (DASHBOARD HARDENING Rule: No generic cards, just minimal border lines) */}
                        <div className="border-t border-b border-zinc-800 py-12">
                            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-10">Push, Don't Poll Pipeline</h2>
                            <div className="overflow-x-auto">
                                <MermaidDiagram chart={`
                                flowchart TD
                                    A[Next.js Client] <-->|OAuth / Auth| B(Google OAuth 2.0)
                                    A -->|REST Queries| C{FastAPI Backend}
                                    
                                    subgraph Background Pipeline
                                        D[Gmail/Outlook Sync] -->|History ID| E[(PostgreSQL)]
                                        E --> F[Gemini 2.0 Flash Engine]
                                        F -->|Structured JSON| G[Pure Extractor Functions]
                                        G -->|Update Task State| E
                                    end
                                    
                                    G -->|Publish: intel_ready| H((Redis Pub/Sub))
                                    H -.->|Server-Sent Events| A
                                `} />
                            </div>
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.3} className="lg:col-span-4 space-y-12 lg:pl-12">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Database-First Load</h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Bypassing slow, rate-limited vendor API calls during initial load. The Next.js 14 frontend renders instantly from PostgreSQL (under 50ms) while background synchronization leverages Gmail's <code className="text-amber-500">historyId</code> for incremental delta syncing.
                            </p>
                        </div>
                        <div className="space-y-4 border-t border-zinc-900 pt-12">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white">SSE Streaming</h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Polling creates UI stutter and wastes database resources. SortMail connects to the FastAPI backend via SSE. Redis Pub/Sub listens for worker completions and immediately pushes cache-invalidation payloads to React Query on the client.
                            </p>
                        </div>
                        <div className="space-y-4 border-t border-zinc-900 pt-12">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Single-Pass Extraction</h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Rather than running LLMs in an endless loop, a single thread is sent to Gemini 2.0 Flash asking for a dense, strictly typed JSON object.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
