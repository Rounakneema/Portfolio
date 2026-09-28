import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
    title: 'SortMail // AI Intelligence Layer',
    description: 'Transforming high-volume inboxes into actionable workspaces with Database-First architecture and Gemini 2.0 Flash.',
    alternates: {
        canonical: 'https://sortmail.rounakneema.in'
    }
};

export default function SortMailPage() {
    return (
        <div className="w-full min-h-[100dvh] bg-[#050505] text-white font-sans selection:bg-amber-500/20 selection:text-amber-500 pb-32">
            <ProjectJsonLd slug="sortmail" />
            
            {/* Nav */}
            <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="text-xl font-bold tracking-tighter text-white">
                    SORTMAIL<span className="text-amber-500">.</span>
                </div>
                <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                    <a href="/sortmail" className="text-amber-500 transition-colors">Overview</a>
                    <a href="/sortmail/architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="/sortmail/decisions" className="hover:text-white transition-colors">Decisions</a>
                    <a href="/sortmail/docs" className="hover:text-white transition-colors">Docs</a>
                </div>
            </div>

            {/* Asymmetric Hero */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
                    
                    <FadeIn className="lg:col-span-7 relative z-10 lg:pr-12">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-amber-500"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">SaaS Intelligence Layer</span>
                        </div>
                        <h1 className="text-[clamp(3.5rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.85] text-white mb-10">
                            Your Inbox <br />
                            Is Not Your <br />
                            <span className="text-zinc-600">Workflow.</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light mb-12">
                            Modern professionals spend hours daily reading long email chains and manually extracting tasks. SortMail fundamentally changes this by applying a "Database-First" and "Push, Don't Poll" architecture combined with a highly optimized Gemini 2.0 AI intelligence pipeline.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#features" className="px-6 py-3 bg-amber-500 text-black text-[11px] font-bold uppercase tracking-widest hover:scale-[0.98] transition-transform duration-300">
                                Explore Architecture
                            </a>
                            <a href="https://github.com/Rounakneema/SortMail" target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
                                View Repository
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:col-span-5 relative w-full lg:mt-16">
                        <div className="w-full aspect-[4/5] bg-zinc-900/30 border border-zinc-800 p-8 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            <div className="flex justify-between items-start border-b border-zinc-800 pb-6">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Live Stream</div>
                                <div className="flex gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-6 pt-6 flex-1 overflow-hidden">
                                <div className="space-y-2 opacity-40">
                                    <div className="text-[10px] text-zinc-500 font-mono">MSG_ID: 18F4A9</div>
                                    <div className="text-sm font-medium text-white">Review Q3 Contract.pdf</div>
                                    <div className="text-xs text-zinc-600 font-mono">Processing attachments...</div>
                                </div>
                                <div className="space-y-2 opacity-70">
                                    <div className="text-[10px] text-zinc-500 font-mono">MSG_ID: 18F4B2</div>
                                    <div className="text-sm font-medium text-white">Client Onboarding Sync</div>
                                    <div className="text-xs text-amber-500 font-mono">Extracting deadline: Friday 5PM</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] text-zinc-500 font-mono">MSG_ID: 18F4C8</div>
                                    <div className="text-sm font-medium text-white">Invoice.pdf.exe</div>
                                    <div className="text-xs text-red-400 font-mono">MIME mismatch detected - BLOCKED</div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-800">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex justify-between">
                                    <span>Latency</span>
                                    <span className="text-white">&lt; 50ms Load</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Features / Content Expansion */}
            <div id="features" className="max-w-[1400px] mx-auto px-6 md:px-12 mt-32 lg:mt-48 pt-32 border-t border-zinc-900">
                <FadeIn>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-4">Core Intelligence</div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16 max-w-2xl">
                        A smart assistant that processes the inbox so you don't have to.
                    </h2>
                </FadeIn>

                {/* Grid over Flex-Math -> Strictly CSS Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    <FadeIn delay={0.1}>
                        <div className="border-t border-zinc-800 pt-6">
                            <div className="text-xl font-bold text-white mb-3">Executive Briefings</div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Automatically condenses long, multi-participant email threads into clear, actionable bullet points, discarding signature bloat and generic corporate noise.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="border-t border-zinc-800 pt-6">
                            <div className="text-xl font-bold text-white mb-3">Attachment Intelligence</div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Capable of reading and summarizing attached documents (PDF, DOCX, PPTX) via vector embedding to provide full context without forcing the user to open files.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="border-t border-amber-500 pt-6 relative">
                            <div className="text-xl font-bold text-white mb-3">Smart Task Generation</div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Automatically converts emails into prioritized tasks (do_now, do_today, can_wait) based on AI confidence scores and urgency tracking.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="border-t border-zinc-800 pt-6">
                            <div className="text-xl font-bold text-white mb-3">Draft Copilot</div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Context-aware reply generation that reads the specific thread history and allows users to draft responses with explicit tone parameters.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <div className="border-t border-zinc-800 pt-6">
                            <div className="text-xl font-bold text-white mb-3">Follow-up Tracking</div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                Automatically tracks "waiting for reply" threads and seamlessly detects meeting times and deadlines hidden within unstructured email text.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Architecture Details */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-32 lg:mt-48">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16">
                        Engineering <br /> Highlights.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <FadeIn delay={0.1}>
                        <div className="space-y-6">
                            <div className="text-xs font-bold uppercase tracking-widest text-amber-500">01 / Instant Load</div>
                            <h3 className="text-3xl font-bold tracking-tight text-white">Database-First Inbox</h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                Instead of relying on slow API calls to Gmail every time the user opens the app, SortMail loads instantly from a PostgreSQL database (under 50ms). Background synchronization uses Gmail's <code className="text-white bg-white/10 px-1 py-0.5 rounded text-sm">historyId</code> to perform incremental delta syncs, only fetching exactly what has changed since the last sync.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="space-y-6">
                            <div className="text-xs font-bold uppercase tracking-widest text-amber-500">02 / Pipeline Execution</div>
                            <h3 className="text-3xl font-bold tracking-tight text-white">Single-Pass LLM Pipeline</h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                To keep API costs exceptionally low, the intelligence pipeline executes a single LLM call per thread. A central engine requests a structured JSON response from Gemini 2.0 Flash. Pure extractor functions route this to the database, dropping processing cost to roughly ~₹0.25 per email (50% under budget).
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="space-y-6">
                            <div className="text-xs font-bold uppercase tracking-widest text-amber-500">03 / Reactivity</div>
                            <h3 className="text-3xl font-bold tracking-tight text-white">"Push, Don't Poll" SSE</h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                SortMail utilizes a Redis Pub/Sub architecture combined with Server-Sent Events (SSE). When the AI finishes processing, the FastAPI backend publishes an <code className="text-white bg-white/10 px-1 py-0.5 rounded text-sm">intel_ready</code> event. The Next.js frontend instantly invalidates its React Query cache, magically updating the screen without manual refreshes.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="space-y-6">
                            <div className="text-xs font-bold uppercase tracking-widest text-amber-500">04 / Stack</div>
                            <h3 className="text-3xl font-bold tracking-tight text-white">Strict Contracts</h3>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                Built with Next.js 14, React Query, FastAPI, PostgreSQL, and ChromaDB. To maintain a robust integration between the AI engine and backend, the system utilizes strict Data Transfer Object (DTO) contracts to prevent AI hallucinations regarding database schemas.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Footer space handled by layout */}
        </div>
    );
}
