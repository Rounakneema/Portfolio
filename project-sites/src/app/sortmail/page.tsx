import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // AI Operating Layer',
    description: 'An AI operating layer for professional email, featuring BLUF summarization and secure attachment analysis.',
};

export default function SortMailPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-900 selection:text-white">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#333] flex justify-between items-center text-xs tracking-widest uppercase">
                <Link href="/" className="hover:text-red-500 transition-colors">
                    &lt; System.Root
                </Link>
                <div className="flex gap-6">
                    <span className="text-[#666]">STATUS: [WIP]</span>
                    <span className="text-[#666]">VER: 0.9.1a</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden border-b border-[#333]">
                {/* Background Noise / Accents */}
                <div className="absolute top-0 right-0 p-8 text-[#111] text-[12rem] font-bold leading-none select-none z-0">
                    S/M
                </div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8">
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-white">
                            Sort<span className="text-red-600">Mail</span>
                        </h1>
                        <h2 className="text-xl md:text-3xl font-medium tracking-tight text-[#888] mb-12 max-w-3xl border-l-4 border-red-600 pl-6 py-2">
                            AI Operating Layer for Professional Email.
                        </h2>
                    </div>
                    
                    <div className="md:col-span-4 flex flex-col justify-end">
                        <div className="bg-[#111] p-6 border border-[#222]">
                            <div className="text-xs text-[#555] mb-4 uppercase tracking-widest border-b border-[#333] pb-2">Telemetry</div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-[#888]">Engines</span>
                                    <span className="text-white">4 AI Models</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-[#888]">Integration</span>
                                    <span className="text-white">Gmail/Outlook</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-[#888]">Security</span>
                                    <span className="text-white">GDPR/PCI</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-[#888]">Tech</span>
                                    <span className="text-white">Python / Claude</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminal Trace / Abstract */}
            <section className="px-6 md:px-12 py-16 bg-[#0a0a0a] border-b border-[#333]">
                <div className="max-w-5xl">
                    <div className="font-mono text-xs text-red-500 mb-6 uppercase tracking-wider">
                        [Syslog :: Execution Abstract]
                    </div>
                    <p className="text-lg md:text-2xl leading-relaxed text-[#ccc]">
                        Professionals receiving <span className="text-white font-bold bg-[#222] px-2">40+ emails daily</span> struggle with prioritization, actionable task extraction, and secure attachment analysis without compromising data privacy. 
                        SortMail acts as an intelligent proxy, securely ingesting data via OAuth to perform <span className="italic">BLUF summarization</span>, extract critical deadlines, and conduct strict security filtering before human interaction.
                    </p>
                </div>
            </section>

            {/* Asymmetric Details */}
            <section className="px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    
                    {/* Left Column - Large Typography Engine descriptions */}
                    <div className="md:col-span-7 space-y-24">
                        <article>
                            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tight flex items-center gap-4">
                                <span className="text-red-600 text-sm">01.</span>
                                Executive Briefing Engine
                            </h3>
                            <p className="text-[#999] leading-relaxed mb-8">
                                SortMail bypasses standard thread bloat by deploying a Bottom Line Up Front (BLUF) strategy. Utilizing Claude family LLMs, the engine parses entire conversational graphs, filtering out pleasantries and redundant context, outputting strictly actionable synopses.
                            </p>
                            <div className="bg-black p-6 border border-[#222] font-mono text-sm text-[#4af626] overflow-x-auto">
                                <div className="text-[#666] mb-2">// Sample Processing Output</div>
                                <div>&gt; INGEST: thread_id_948x21</div>
                                <div>&gt; ANALYZING CONTEXT... [OK]</div>
                                <div>&gt; EXTRACTING: tasks (2), deadlines (1)</div>
                                <div className="mt-4 text-white">&gt; BLUF: Client requires signed NDA by EOD Friday before releasing staging environment keys.</div>
                            </div>
                        </article>

                        <article>
                            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tight flex items-center gap-4">
                                <span className="text-red-600 text-sm">02.</span>
                                Secure Attachment Intelligence
                            </h3>
                            <p className="text-[#999] leading-relaxed">
                                Most AI tools blindly read attachments, introducing significant attack vectors. SortMail enforces an air-gapped processing phase involving MIME type verification, strict size limits, and ClamAV-based virus scanning prior to any LLM ingestion. Malicious payloads are isolated and dropped at the ingress layer.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tight flex items-center gap-4">
                                <span className="text-red-600 text-sm">03.</span>
                                Enterprise SaaS Architecture
                            </h3>
                            <p className="text-[#999] leading-relaxed">
                                Built for compliance. The system implements aggressive rate limiting to prevent API abuse, OAuth token encryption at rest, and webhook-driven Stripe billing. Full GDPR deletion processes are integrated directly into the core event bus, ensuring absolute user data sovereignty.
                            </p>
                        </article>
                    </div>

                    {/* Right Column - Tech stack & Metrics */}
                    <div className="md:col-span-5 relative">
                        <div className="sticky top-24">
                            <div className="border border-[#333] p-8 bg-[#080808]">
                                <h4 className="text-white font-bold uppercase mb-8 border-b border-[#333] pb-4">
                                    System Specification
                                </h4>
                                
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-xs text-[#666] uppercase mb-2">Core Tech</div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Python', 'SQLAlchemy', 'Docker', 'Claude LLM', 'OAuth2'].map(t => (
                                                <span key={t} className="px-3 py-1 bg-[#1a1a1a] border border-[#333] text-sm text-[#ddd]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-[#666] uppercase mb-2">Observability Layer</div>
                                        <div className="text-[#aaa] text-sm">
                                            Sentry, Better Stack, AWS CloudWatch
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-[#666] uppercase mb-2">Security Posture</div>
                                        <div className="text-[#aaa] text-sm leading-relaxed">
                                            - SQL Injection Protection<br/>
                                            - GDPR / PCI Compliant<br/>
                                            - Ephemeral Token Storage
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#333] p-6 md:p-12 text-center md:text-left text-[#555] text-xs uppercase tracking-widest flex flex-col md:flex-row justify-between items-center">
                <div>&copy; {new Date().getFullYear()} // SORTMAIL ENGINEERING</div>
                <div className="mt-4 md:mt-0">END OF TRANSMISSION</div>
            </footer>
        </main>
    );
}
