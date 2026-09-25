import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

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
        <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-amber-500/30 selection:text-black">
            <ProjectJsonLd slug="sortmail" />
            
            {/* Header / Nav */}
            <ScrollReveal direction="up" delay={0.1}>
                <nav className="p-6 md:p-12 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-gray-50/90 backdrop-blur-md z-50">
                    <div className="flex gap-6 items-center">
                        <Link href="/" className="hover:text-amber-500 hover:-translate-y-1 transition-all duration-300 text-gray-500">
                            &larr; Back
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-900 font-semibold">
                            Overview
                        </span>
                        <Link href="#intelligence" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300">
                            Intelligence
                        </Link>
                        <Link href="#security" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300">
                            Security
                        </Link>
                        <Link href="/architecture" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300">
                            Architecture
                        </Link>
                        <Link href="/docs" className="text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300">
                            Docs
                        </Link>
                    </div>
                </nav>
            </ScrollReveal>

            {/* Hero Section */}
            <ScrollReveal direction="up" delay={0.1}>
                <section className="px-6 md:px-12 pt-24 pb-20 border-b border-gray-200 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                        YOUR INBOX IS NOT <br/><span className="text-amber-500">YOUR WORKFLOW.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-16">
                        Professionals receiving 30-100+ emails daily struggle with prioritization, actionable task extraction, and secure attachment analysis. SortMail acts as an intelligent layer over existing inboxes.
                    </p>

                    {/* Animated Mock Inbox Card */}
                    <div className="w-full max-w-2xl text-left bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl overflow-hidden font-mono text-sm mb-6 hover:-translate-y-1 transition-all duration-300 hover:border-amber-500">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/50">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                <span className="font-semibold text-gray-900 tracking-tight">Acme Corp</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="text-amber-600 bg-amber-500/10 px-2 py-1 rounded">HIGH PRIORITY</span>
                                <span className="text-gray-500">2m ago</span>
                            </div>
                        </div>
                        <div className="p-4 border-b border-gray-200 bg-white">
                            <div className="text-gray-900 font-medium mb-2 tracking-tight">Contract approval needed</div>
                        </div>
                        <div className="p-4 bg-amber-50 border-b border-amber-100">
                            <div className="text-amber-600 text-xs font-bold mb-2 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                AI SUMMARY
                            </div>
                            <div className="text-gray-700 leading-relaxed mb-2">Client needs signed NDA by Friday.</div>
                            <div className="text-gray-600 text-xs flex items-center gap-2">
                                Attachment: NDA_v3.pdf <span className="text-emerald-600">(verified ✓)</span>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-white/50">
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
                                    &rarr; Reply
                                </button>
                                <button className="px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded hover:bg-gray-50 border border-gray-200 hover:-translate-y-1 transition-all duration-300">
                                    &rarr; Review NDA
                                </button>
                            </div>
                            <div className="text-amber-600 text-xs font-medium tracking-tight">
                                Deadline: Friday 5 PM
                            </div>
                        </div>
                    </div>

                    {/* Threat Block */}
                    <div className="w-full max-w-2xl text-left bg-red-50 border border-red-200 rounded-lg shadow-xl overflow-hidden font-mono text-sm p-4 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300 hover:border-red-400">
                        <div className="mt-0.5 text-red-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <div>
                            <div className="text-red-600 font-bold mb-1 tracking-tight">⛔ ATTACHMENT THREAT BLOCKED</div>
                            <div className="text-gray-600 text-xs leading-relaxed">Invoice.pdf.exe <span className="mx-2">|</span> MIME mismatch <span className="mx-2">|</span> application/x-dosexec</div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="px-6 md:px-12 pt-12 pb-12 border-b border-gray-200">
            </div>

            {/* Main Features */}
            <ScrollReveal direction="up" delay={0.1}>
                <section className="px-6 md:px-12 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                        
                        {/* Left Column */}
                        <div className="md:col-span-7 space-y-24">
                            <ScrollReveal direction="up" delay={0.1}>
                                <article id="intelligence">
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 flex items-center gap-4">
                                        <span className="text-amber-600 text-lg bg-amber-50 px-3 py-1 rounded-lg font-mono">01</span>
                                        Email Intelligence
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        SortMail bypasses standard thread bloat by deploying a Bottom Line Up Front (BLUF) strategy. Utilizing Claude family LLMs, the engine parses entire conversational graphs, filtering out pleasantries and redundant context, outputting strictly actionable synopses.
                                    </p>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-6 font-mono text-sm text-gray-800 overflow-x-auto hover:-translate-y-1 transition-all duration-300 hover:border-amber-500">
                                        <div className="text-gray-500 mb-3">// Sample Processing Output</div>
                                        <div>&gt; INGEST: thread_id_948x21</div>
                                        <div>&gt; ANALYZING CONTEXT... <span className="text-emerald-600">[OK]</span></div>
                                        <div>&gt; EXTRACTING: tasks (2), deadlines (1)</div>
                                        <div className="mt-4 text-amber-600 font-medium">&gt; BLUF: Client requires signed NDA by EOD Friday before releasing staging environment keys.</div>
                                    </div>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.1}>
                                <article id="security">
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 flex items-center gap-4">
                                        <span className="text-amber-600 text-lg bg-amber-50 px-3 py-1 rounded-lg font-mono">02</span>
                                        Attachment Security
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Most AI tools blindly read attachments, introducing significant attack vectors. SortMail enforces an air-gapped processing phase using a Go daemon. It involves MIME type verification, strict size limits, and ClamAV-based virus scanning prior to any LLM ingestion.
                                    </p>
                                    <div className="bg-red-50 border border-red-200 rounded-lg shadow-xl p-6 font-mono text-sm text-red-600 overflow-x-auto hover:-translate-y-1 transition-all duration-300 hover:border-red-400">
                                        <div>[SECURITY ALERT] Dropped malicious payload</div>
                                        <div className="mt-2 text-gray-600">File: Invoice_Client_Oct2024.pdf.exe</div>
                                        <div className="text-gray-600">Reason: MIME mismatch (application/x-dosexec)</div>
                                    </div>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={0.1}>
                                <article>
                                    <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 flex items-center gap-4">
                                        <span className="text-amber-600 text-lg bg-amber-50 px-3 py-1 rounded-lg font-mono">03</span>
                                        Workflow Automation
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Automatically convert emails into structured tasks (Reply, Review Document, Schedule Meeting). Priority scoring is calculated based on sender importance, urgency signals, and implicit deadlines ("end of week"). The system also features an anti-ghosting tracker for waiting-for-reply threads.
                                    </p>
                                    <Link href="/architecture" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-500 hover:-translate-y-1 transition-all duration-300">
                                        Read Architecture Details &rarr;
                                    </Link>
                                </article>
                            </ScrollReveal>
                        </div>

                        {/* Right Column - Tech stack & Metrics */}
                        <div className="md:col-span-5 relative">
                            <div className="sticky top-32">
                                <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-8 hover:-translate-y-1 transition-all duration-300 hover:border-amber-500">
                                    <h4 className="text-gray-900 font-bold text-lg mb-8 pb-4 border-b border-gray-200 tracking-tight">
                                        System Specification
                                    </h4>
                                    
                                    <div className="space-y-8">
                                        <div>
                                            <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Core Stack</div>
                                            <StaggerContainer>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Go', 'Python', 'FastAPI', 'Docker', 'Claude LLM', 'OAuth2'].map(t => (
                                                        <StaggerItem key={t}>
                                                            <span className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700 rounded-md shadow-sm block">
                                                                {t}
                                                            </span>
                                                        </StaggerItem>
                                                    ))}
                                                </div>
                                            </StaggerContainer>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Observability</div>
                                            <div className="text-gray-700 text-sm bg-white p-3 border border-gray-200 rounded-md shadow-sm leading-relaxed">
                                                Sentry, Better Stack, AWS CloudWatch
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Security Posture</div>
                                            <div className="text-gray-700 text-sm leading-relaxed">
                                                <span className="block mb-2 text-amber-600 font-medium tracking-tight">Strict Separation of Concerns</span>
                                                <StaggerContainer>
                                                    <ul className="space-y-1 ml-4 list-disc marker:text-gray-400">
                                                        {['SQL Injection Protection', 'OAuth Based Architecture', 'In-memory Processing', 'Ephemeral Token Storage'].map((item) => (
                                                            <StaggerItem key={item}>
                                                                <li>{item}</li>
                                                            </StaggerItem>
                                                        ))}
                                                    </ul>
                                                </StaggerContainer>
                                            </div>
                                        </div>
                                        
                                        <div className="pt-6 border-t border-gray-200">
                                            <Link href="/docs" className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 block">
                                                View Engineering Documentation &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* FAQ Section */}
            <ScrollReveal direction="up" delay={0.1}>
                <section className="px-6 md:px-12 py-24 bg-gray-50 border-t border-gray-200">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Frequently Asked Questions</h2>
                    <StaggerContainer>
                        <div className="space-y-4 max-w-4xl">
                            {projectData.faq.map((q, i) => (
                                <StaggerItem key={i}>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:border-amber-500">
                                        <h3 className="text-gray-900 font-medium mb-3 text-lg tracking-tight">{q.question}</h3>
                                        <p className="text-gray-600 leading-relaxed">{q.answer}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </section>
            </ScrollReveal>

            <div className="px-6 md:px-12 pb-12 bg-gray-50">
            </div>

            {/* Footer */}
            <ScrollReveal direction="up" delay={0.1}>
                <footer className="border-t border-gray-200 p-6 md:p-12 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center bg-gray-50">
                    <div>&copy; {new Date().getFullYear()} SortMail. All rights reserved.</div>
                </footer>
            </ScrollReveal>
        </main>
    );
}
