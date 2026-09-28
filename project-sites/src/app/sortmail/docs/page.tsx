import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/FadeIn';

export const metadata: Metadata = {
    title: 'SortMail // Docs',
    description: 'Documentation for SortMail schema and integration boundaries.',
};

export default function DocsPage() {
    return (
        <main className="min-h-[100dvh] bg-[#050505] text-white font-sans selection:bg-amber-500/20 selection:text-amber-500 pb-32">
            {/* Header / Nav */}
            <div className="w-full px-6 md:px-12 py-8 flex justify-between items-center max-w-[1400px] mx-auto sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="text-xl font-bold tracking-tighter text-white">
                    SORTMAIL<span className="text-amber-500">.</span>
                </div>
                <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
                    <a href="/sortmail" className="hover:text-white transition-colors">Overview</a>
                    <a href="/sortmail/architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="/sortmail/decisions" className="hover:text-white transition-colors">Decisions</a>
                    <a href="/sortmail/docs" className="text-amber-500 transition-colors">Docs</a>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 lg:pt-32">
                <FadeIn>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6">Specification</div>
                    <h1 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-white mb-24">
                        Data Contracts.
                    </h1>
                </FadeIn>

                <div className="max-w-3xl">
                    <FadeIn delay={0.1}>
                        <div className="mb-16">
                            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Thread Intelligence Schema (V1)</h2>
                            <div className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-lg text-sm text-zinc-300 font-mono overflow-x-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<pre>{`type ThreadIntelV1 = {
  thread_id: string;
  summary: {
    bluf: string;
    key_points: string[];
  };
  tasks: Array<{
    id: string;
    description: string;
    priority: "low" | "medium" | "high";
    deadline_iso: string | null;
  }>;
  sentiment: "urgent" | "neutral" | "frustrated";
  attachments_parsed: boolean;
}`}</pre>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mb-16">
                            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">SSE Event Format</h2>
                            <div className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-lg text-sm text-zinc-300 font-mono overflow-x-auto shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<pre>{`event: intel_ready
data: {
  "thread_id": "18f4a9b2",
  "status": "processed",
  "timestamp": 1698249822
}`}</pre>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
