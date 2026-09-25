import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';

export const metadata: Metadata = {
    title: 'SortMail — AI Operating Layer for Professional Email',
    description: 'An AI operating layer for professional email, featuring BLUF summarization and secure attachment analysis.',
    alternates: {
        canonical: 'https://sortmail.rounakneema.in'
    }
};

export default function SortMailPage() {
    const projectData = {
        name: 'SortMail',
        url: 'https://sortmail.rounakneema.in',
        description: 'An AI operating layer for professional email, featuring BLUF summarization and secure attachment analysis.',
        schemaCategory: 'SoftwareApplication',
        programmingLanguage: 'Go, Python',
        faq: [
            { question: "What is SortMail?", answer: "SortMail is an AI operating layer for professional email that securely ingests data to perform BLUF summarization, extract critical deadlines, and conduct strict security filtering before human interaction." },
            { question: "How does it detect deadlines?", answer: "It uses Claude family LLMs to parse conversational graphs and implicitly extract deadlines and actionable tasks from thread context." },
            { question: "How does SortMail protect email data?", answer: "It enforces an air-gapped processing phase using a Go daemon, including MIME type verification and ClamAV-based virus scanning, prior to any LLM ingestion." },
            { question: "What is the core architecture based on?", answer: "The system is an OAuth-based application utilizing an in-memory processing architecture to ensure data security and fast execution without persistent storage vulnerabilities." },
            { question: "Which email platforms does SortMail integrate with?", answer: "SortMail is designed to integrate natively with major providers including Gmail and Outlook." },
            { question: "What is BLUF summarization?", answer: "BLUF stands for Bottom Line Up Front. The engine outputs strictly actionable synopses by bypassing standard thread bloat and redundant context." },
            { question: "Who developed SortMail?", answer: "SortMail was built and engineered by Rounak Neema." }
        ]
    };

    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-amber-500/30 selection:text-white">
            <ProjectJsonLd slug="sortmail" />
            
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#222] flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/" className="hover:text-amber-500 transition-colors text-[#888]">
                        &larr; Back
                    </Link>
                    <span className="text-[#333]">|</span>
                    <span className="text-white font-semibold">
                        Overview
                    </span>
                    <Link href="#intelligence" className="text-[#888] hover:text-white transition-colors">
                        Intelligence
                    </Link>
                    <Link href="#security" className="text-[#888] hover:text-white transition-colors">
                        Security
                    </Link>
                    <Link href="/sortmail/architecture" className="text-[#888] hover:text-white transition-colors">
                        Architecture
                    </Link>
                    <Link href="/sortmail/docs" className="text-[#888] hover:text-white transition-colors">
                        Docs
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-6 md:px-12 pt-24 pb-20 border-b border-[#222] flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    YOUR INBOX IS NOT <br/><span className="text-amber-500">YOUR WORKFLOW.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#888] max-w-2xl mb-16">
                    Professionals receiving 30-100+ emails daily struggle with prioritization, actionable task extraction, and secure attachment analysis. SortMail acts as an intelligent layer over existing inboxes.
                </p>

                {/* Animated Mock Inbox Card */}
                <div className="w-full max-w-2xl text-left bg-[#0a0a0a] border border-[#222] rounded-xl shadow-2xl overflow-hidden font-mono text-sm mb-6">
                    <div className="flex items-center justify-between p-4 border-b border-[#222] bg-[#111]">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <span className="font-semibold text-white">Acme Corp</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <span className="text-amber-500 bg-amber-500/10 px-2 py-1 rounded">HIGH PRIORITY</span>
                            <span className="text-[#666]">2m ago</span>
                        </div>
                    </div>
                    <div className="p-4 border-b border-[#222]">
                        <div className="text-white font-medium mb-2">Contract approval needed</div>
                    </div>
                    <div className="p-4 bg-amber-500/5 border-b border-amber-500/10">
                        <div className="text-amber-500 text-xs font-bold mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            AI SUMMARY
                        </div>
                        <div className="text-[#ddd] mb-2">Client needs signed NDA by Friday.</div>
                        <div className="text-[#aaa] text-xs flex items-center gap-2">
                            Attachment: NDA_v3.pdf <span className="text-emerald-500">(verified ✓)</span>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-between bg-[#111]">
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded hover:bg-[#ddd] transition-colors">
                                &rarr; Reply
                            </button>
                            <button className="px-4 py-2 bg-[#222] text-white text-xs font-bold rounded hover:bg-[#333] transition-colors border border-[#333]">
                                &rarr; Review NDA
                            </button>
                        </div>
                        <div className="text-amber-500 text-xs font-medium">
                            Deadline: Friday 5 PM
                        </div>
                    </div>
                </div>

                {/* Threat Block */}
                <div className="w-full max-w-2xl text-left bg-[#110000] border border-red-900/50 rounded-xl overflow-hidden font-mono text-sm p-4 flex items-start gap-4">
                    <div className="mt-0.5 text-red-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <div>
                        <div className="text-red-500 font-bold mb-1">⛔ ATTACHMENT THREAT BLOCKED</div>
                        <div className="text-[#aaa] text-xs">Invoice.pdf.exe <span className="mx-2">|</span> MIME mismatch <span className="mx-2">|</span> application/x-dosexec</div>
                    </div>
                </div>
            </section>

            <div className="px-6 md:px-12 pt-12 pb-12 border-b border-[#222]">
                <EntityHeader 
                    title="SortMail"
                    subtitle="AI Operating Layer for Professional Email"
                    category="Productivity Tool"
                    status="Active"
                    language="Go / Python"
                    architecture="/sortmail/architecture"
                    docs="/sortmail/docs"
                />
                <ProjectFacts facts={[
                    { label: "Built by", value: "Rounak Neema" },
                    { label: "Targets", value: "Gmail & Outlook" },
                    { label: "Capabilities", value: "Summarization & Deadline Extraction" },
                    { label: "Architecture", value: "OAuth based, In-memory processing" }
                ]} />
            </div>

            {/* Main Features */}
            <section className="px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    
                    {/* Left Column */}
                    <div className="md:col-span-7 space-y-24">
                        <article id="intelligence">
                            <h3 className="text-3xl font-bold mb-6 tracking-tight text-white flex items-center gap-4">
                                <span className="text-amber-500 text-lg bg-amber-500/10 px-3 py-1 rounded-lg font-mono">01</span>
                                Email Intelligence
                            </h3>
                            <p className="text-[#aaa] text-lg leading-relaxed mb-8">
                                SortMail bypasses standard thread bloat by deploying a Bottom Line Up Front (BLUF) strategy. Utilizing Claude family LLMs, the engine parses entire conversational graphs, filtering out pleasantries and redundant context, outputting strictly actionable synopses.
                            </p>
                            <div className="bg-[#0a0a0a] p-6 border border-[#222] rounded-xl font-mono text-sm text-[#ddd] overflow-x-auto">
                                <div className="text-[#666] mb-3">// Sample Processing Output</div>
                                <div>&gt; INGEST: thread_id_948x21</div>
                                <div>&gt; ANALYZING CONTEXT... <span className="text-emerald-500">[OK]</span></div>
                                <div>&gt; EXTRACTING: tasks (2), deadlines (1)</div>
                                <div className="mt-4 text-amber-500 font-medium">&gt; BLUF: Client requires signed NDA by EOD Friday before releasing staging environment keys.</div>
                            </div>
                        </article>

                        <article id="security">
                            <h3 className="text-3xl font-bold mb-6 tracking-tight text-white flex items-center gap-4">
                                <span className="text-amber-500 text-lg bg-amber-500/10 px-3 py-1 rounded-lg font-mono">02</span>
                                Attachment Security
                            </h3>
                            <p className="text-[#aaa] text-lg leading-relaxed mb-8">
                                Most AI tools blindly read attachments, introducing significant attack vectors. SortMail enforces an air-gapped processing phase using a Go daemon. It involves MIME type verification, strict size limits, and ClamAV-based virus scanning prior to any LLM ingestion.
                            </p>
                            <div className="bg-[#110000] p-6 border border-red-900/50 rounded-xl font-mono text-sm text-red-500 overflow-x-auto">
                                <div>[SECURITY ALERT] Dropped malicious payload</div>
                                <div className="mt-2 text-[#aaa]">File: Invoice_Client_Oct2024.pdf.exe</div>
                                <div className="text-[#aaa]">Reason: MIME mismatch (application/x-dosexec)</div>
                            </div>
                        </article>

                        <article>
                            <h3 className="text-3xl font-bold mb-6 tracking-tight text-white flex items-center gap-4">
                                <span className="text-amber-500 text-lg bg-amber-500/10 px-3 py-1 rounded-lg font-mono">03</span>
                                Workflow Automation
                            </h3>
                            <p className="text-[#aaa] text-lg leading-relaxed mb-8">
                                Automatically convert emails into structured tasks (Reply, Review Document, Schedule Meeting). Priority scoring is calculated based on sender importance, urgency signals, and implicit deadlines ("end of week"). The system also features an anti-ghosting tracker for waiting-for-reply threads.
                            </p>
                            <Link href="/sortmail/architecture" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-400 transition-colors">
                                Read Architecture Details &rarr;
                            </Link>
                        </article>
                    </div>

                    {/* Right Column - Tech stack & Metrics */}
                    <div className="md:col-span-5 relative">
                        <div className="sticky top-32">
                            <div className="border border-[#222] p-8 bg-[#0a0a0a] rounded-xl">
                                <h4 className="text-white font-bold text-lg mb-8 pb-4 border-b border-[#222]">
                                    System Specification
                                </h4>
                                
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-xs font-semibold text-[#666] uppercase mb-3 tracking-wider">Core Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Go', 'Python', 'FastAPI', 'Docker', 'Claude LLM', 'OAuth2'].map(t => (
                                                <span key={t} className="px-3 py-1 bg-[#111] border border-[#222] text-sm text-[#ccc] rounded-md">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[#666] uppercase mb-3 tracking-wider">Observability</div>
                                        <div className="text-[#aaa] text-sm bg-[#111] p-3 border border-[#222] rounded-md">
                                            Sentry, Better Stack, AWS CloudWatch
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[#666] uppercase mb-3 tracking-wider">Security Posture</div>
                                        <div className="text-[#aaa] text-sm leading-relaxed">
                                            <span className="block mb-2 text-amber-500 font-medium">Strict Separation of Concerns</span>
                                            <ul className="space-y-1 ml-4 list-disc marker:text-[#444]">
                                                <li>SQL Injection Protection</li>
                                                <li>OAuth Based Architecture</li>
                                                <li>In-memory Processing</li>
                                                <li>Ephemeral Token Storage</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-[#222]">
                                        <Link href="/sortmail/docs" className="text-sm font-medium text-[#888] hover:text-white transition-colors">
                                            View Engineering Documentation &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 md:px-12 py-24 bg-[#080808] border-t border-[#222]">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-4xl">
                    {projectData.faq.map((q, i) => (
                        <div key={i} className="bg-[#0a0a0a] border border-[#222] p-6 rounded-xl hover:border-[#333] transition-colors">
                            <h3 className="text-white font-medium mb-3 text-lg">{q.question}</h3>
                            <p className="text-[#888] leading-relaxed">{q.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="px-6 md:px-12 pb-12 bg-[#080808]">
                <RelatedProjects links={[
                    { name: "Klarity (DevContext)", url: "/devcontext" },
                    { name: "Portfolio", url: "/" }
                ]} />
            </div>

            {/* Footer */}
            <footer className="border-t border-[#222] p-6 md:p-12 text-[#666] text-sm flex flex-col md:flex-row justify-between items-center bg-[#050505]">
                <div>&copy; {new Date().getFullYear()} SortMail. All rights reserved.</div>
            </footer>
        </main>
    );
}
