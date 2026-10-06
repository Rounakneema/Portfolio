import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/FadeIn';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
    title: 'SortMail // Decisions',
    description: 'Engineering decisions and tradeoffs in SortMail.',
};

export default function DecisionsPage() {
    return (
        <main className="min-h-[100dvh] bg-[#050505] text-white font-sans selection:bg-amber-500/20 selection:text-amber-500 pb-32">
        <ProjectJsonLd slug="sortmail" pageType="Decisions" />
            {/* Header / Nav */}
            <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="text-xl font-bold tracking-tighter text-white">
                    SORTMAIL<span className="text-amber-500">.</span>
                </div>
                <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                    <a href="/sortmail" className="hover:text-white transition-colors">Overview</a>
                    <a href="/sortmail/architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="/sortmail/decisions" className="text-amber-500 transition-colors">Decisions</a>
                    <a href="/sortmail/docs" className="hover:text-white transition-colors">Docs</a>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
                <FadeIn>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6">Tradeoffs</div>
                    <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-24">
                        Engineering <br /> Decisions.
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    
                    <FadeIn delay={0.1}>
                        <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Database-First over API-First</h2>
                        <div className="text-2xl font-bold text-white mb-4 tracking-tight">Why sync emails at all?</div>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            Building a wrapper around the Gmail API introduces massive latency (often 1-2 seconds per thread fetch). By syncing metadata to PostgreSQL in the background and tracking the <code className="text-white">historyId</code>, the frontend UI feels native and instantaneous. The tradeoff is storage cost and database sync complexity, which is heavily outweighed by the UX improvement.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Gemini 2.0 Flash vs GPT-4</h2>
                        <div className="text-2xl font-bold text-white mb-4 tracking-tight">Speed vs Depth</div>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            Email processing is a high-volume, low-latency requirement. GPT-4o was too slow and expensive for bulk thread processing. Gemini 2.0 Flash offers structured JSON enforcement and processes 10,000 tokens in under a second, bringing the cost down to roughly ~₹0.25 per email without sacrificing extraction quality.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Single-Pass Execution</h2>
                        <div className="text-2xl font-bold text-white mb-4 tracking-tight">Avoiding the Agent Loop</div>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            Many "AI Assistants" use ReAct loops or multi-agent frameworks. This introduces catastrophic hallucination risk and unbounded costs. We explicitly chose a functional, pipeline-based approach: The LLM acts as a pure parser returning JSON. Traditional backend functions (FastAPI) handle all the routing, persistence, and state.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={0.4}>
                        <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Strict Contracts (DTOs)</h2>
                        <div className="text-2xl font-bold text-white mb-4 tracking-tight">No Loose Schemas</div>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            We define exact Pydantic models for <code className="text-white">ThreadIntelV1</code>. If the AI deviates from the schema, the backend simply rejects or retries it at the integration boundary, ensuring the database is never corrupted with malformed output.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
