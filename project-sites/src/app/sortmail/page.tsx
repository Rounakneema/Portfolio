import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { FadeIn } from '@/components/shared/FadeIn';
import { TypeWriter } from '@/components/shared/TypeWriter';

export const metadata: Metadata = {
    title: 'SortMail // AI Intelligence Layer for Professional Email',
    description: 'A database-first intelligence layer for Gmail and Outlook, utilizing Gemini 2.0 Flash for structured thread parsing and task extraction.',
    alternates: {
        canonical: 'https://sortmail.rounakneema.in'
    }
};

export default function SortMailPage() {
    const projectData = {
        name: 'SortMail',
        url: 'https://sortmail.rounakneema.in',
        description: 'A database-first intelligence layer for Gmail and Outlook, utilizing Gemini 2.0 Flash for structured thread parsing and task extraction.',
        schemaCategory: 'SoftwareApplication',
        programmingLanguage: 'Python, TypeScript',
        faq: [
            { question: "What is SortMail?", answer: "SortMail is an intelligence layer that sits on top of Gmail and Outlook to automatically extract tasks, deadlines, and context from email threads." },
            { question: "How does it reduce LLM costs?", answer: "It uses a single-pass pipeline where a central engine requests structured JSON from Gemini 2.0 Flash, which is then routed by pure functions, dropping processing costs to ~₹0.25–0.50 per email." },
            { question: "How is real-time updates achieved?", answer: "It uses a 'Push, Don't Poll' architecture with Redis Pub/Sub and Server-Sent Events (SSE) to push AI-processed data directly to the client without manual refreshes." },
            { question: "Does SortMail read attachments?", answer: "Yes, it parses and extracts context from attached documents (PDF, DOCX, PPTX) during the LLM pass." }
        ]
    };

    return (
        <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 selection:text-amber-100 font-sans pb-32">
            <ProjectJsonLd slug="sortmail" />
            
            {/* 
              HERO: Premium SaaS Identity (Linear/Superhuman aesthetic)
              Amber Accent, High-Contrast Typography, Asymmetric Layout
            */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 lg:pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
                    
                    {/* Left Column: Copy */}
                    <FadeIn className="lg:col-span-5 relative z-10 lg:sticky lg:top-32" id="concept">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Intelligence Layer
                        </div>
                        
                        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-zinc-100 mb-8">
                            Your Inbox <br />
                            <span className="text-zinc-600">Is Not Your</span> <br />
                            Workflow.
                        </h1>
                        
                        <p className="text-lg md:text-xl font-light text-zinc-400 max-w-md leading-relaxed tracking-tight mb-8">
                            A database-first intelligence layer for Gmail and Outlook. We use a single-pass LLM pipeline to extract tasks, deadlines, and context, streaming structured data to the UI via Server-Sent Events.
                        </p>

                        <div className="flex flex-col gap-6 pt-8 border-t border-zinc-900">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-2xl font-bold text-zinc-100 mb-1">&lt; 50ms</div>
                                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">DB-First Load</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-zinc-100 mb-1">~₹0.25</div>
                                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Cost Per Thread</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Generative UI Mockups */}
                    <FadeIn 
                        delay={0.2}
                        scale={true}
                        className="lg:col-span-7 relative z-20 w-full flex flex-col gap-6" id="architecture"
                    >
                        {/* 1. The Raw Stream (Database-First) */}
                        <div className="bg-white/5 border border-white/10 p-2 rounded-[2rem] shadow-2xl relative group transform hover:-translate-y-1 transition-transform duration-700 ease-out opacity-60 hover:opacity-100">
                            <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-[calc(2rem-0.5rem)] p-6 overflow-hidden relative font-mono text-xs">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-[0.02] blur-[60px] pointer-events-none"></div>
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/50">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">RAW_STREAM / input: gemini-engine</div>
                                    <div className="px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded-sm text-[10px] font-bold">SSE PUSH</div>
                                </div>
                                <div className="text-zinc-400 opacity-70 whitespace-pre-wrap leading-relaxed">
{`{
  "thread_id": "msg_18f4a9b2",
  "operation": "EXTRACT_INTENT",
  "payload": {
    "sender": "client@acmecorp.com",
    "subject": "Q3 Contract Review - URGENT",
    "body": "Hi team, please review the attached NDA. We need this signed by Friday 5 PM EST or we miss the launch window."
  },
  "attachments": ["NDA_v3_Final.pdf (application/pdf)"]
}`}
                                </div>
                            </div>
                        </div>

                        {/* 2. The Parsed Intelligence (Actionable Workspace) */}
                        <div className="bg-white/5 border border-white/10 p-2 rounded-[2rem] shadow-2xl relative group transform -translate-y-4">
                            <div className="bg-[#050505] border border-zinc-800 rounded-[calc(2rem-0.5rem)] overflow-hidden relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                
                                <div className="h-10 border-b border-zinc-800 flex items-center px-6 justify-between bg-[#0a0a0a]">
                                    <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        RESOLVED_TASKS
                                    </div>
                                    <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Output: Database</div>
                                </div>
                                
                                <div className="p-6 flex flex-col gap-4">
                                    {/* Task Row 1 */}
                                    <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 flex gap-4 items-start relative overflow-hidden">
                                        <div className="w-1 h-full bg-red-500 absolute left-0 top-0"></div>
                                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-600"></div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-medium text-zinc-100 text-sm">Review and Sign Q3 NDA</h3>
                                                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-red-500/10 text-red-400">High Priority</span>
                                            </div>
                                            <p className="text-xs text-zinc-400 mb-3">Client needs signed NDA by Friday 5 PM EST to secure launch window.</p>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono bg-zinc-900 px-2 py-1 rounded">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                                    NDA_v3_Final.pdf
                                                </div>
                                                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                                                    Deadline: Friday 5 PM EST
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Task Row 2 */}
                                    <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-xl p-4 flex gap-4 items-start opacity-70">
                                        <div className="w-1 h-full bg-zinc-700 absolute left-0 top-0"></div>
                                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-zinc-600"></div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-medium text-zinc-300 text-sm">Schedule Onboarding Sync</h3>
                                            </div>
                                            <p className="text-xs text-zinc-500">Coordinate with Sarah for next week's integration planning.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </FadeIn>
                </div>
            </div>

            {/* Architecture Details (Deslopped Content) */}
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 pb-32">
                <EntityHeader 
                    title="Database-First Architecture" 
                    subtitle="Single-Pass Execution Pipeline" 
                    githubUrl="https://github.com/Rounakneema/SortMail"
                    liveUrl="https://sortmail.rounakneema.in"
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section className="space-y-6">
                        <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest border-b border-zinc-800 pb-4">Single-Pass LLM Pipeline</h3>
                        <p className="text-zinc-400 font-light leading-relaxed text-sm">
                            To minimize latency and cost, the intelligence pipeline executes a single LLM call per thread. A central engine requests structured JSON from Gemini 2.0 Flash. Pure extractor functions (Summarizer, Intent Classifier, Deadline Extractor) route this JSON to the database, completely preventing multi-agent hallucination loops.
                        </p>
                    </section>
                    
                    <section className="space-y-6">
                        <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest border-b border-zinc-800 pb-4">Push, Don't Poll</h3>
                        <p className="text-zinc-400 font-light leading-relaxed text-sm">
                            We utilize a Redis Pub/Sub architecture combined with Server-Sent Events (SSE). When the background process finishes processing a thread, the FastAPI backend publishes an event. The Next.js client instantly invalidates its cache and streams the structured data directly into the DOM.
                        </p>
                    </section>
                </div>

                <div className="mt-24">
                    <ProjectFacts 
                        stack={['Next.js 14', 'FastAPI', 'Gemini 2.0 Flash', 'PostgreSQL', 'Redis', 'ChromaDB']} 
                        year="2024"
                        role="Full Stack Architecture"
                    />
                </div>
                
                <div className="mt-32 border-t border-zinc-900 pt-16">
                    <RelatedProjects currentSlug="sortmail" />
                </div>
            </div>
        </div>
    );
}
