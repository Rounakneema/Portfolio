import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Github, Linkedin, FileText, Send, Sparkles } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
    title: 'Contact & Hire // Rounak Neema',
    description: 'Direct inquiry channel and project intake for freelance software development, cybersecurity assessments, and DevSecOps engineering with Rounak Neema.',
    alternates: { canonical: 'https://rounakneema.in/contact' },
    openGraph: {
        title: 'Contact & Project Intake // Rounak Neema',
        description: 'Start a freelance project, schedule an authorized security audit, or commission a backend MVP with Rounak Neema. Guaranteed response within 24 hours.',
        url: 'https://rounakneema.in/contact',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <JsonLd type="home" />
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1200px] mx-auto pt-28">
                {/* Header */}
                <header className="mb-14 pb-8 border-b border-gray-200">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-emerald-50 border border-emerald-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-xs font-bold tracking-widest text-emerald-800 uppercase">
                            Guaranteed Response Within 24 Hours
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
                        START A PROJECT OR INQUIRY.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
                        Whether you need a high-performance backend built, an authorized security audit performed, or a CI/CD pipeline automated, let's discuss your scope and timeline.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    {/* Left: Contact Information & Direct Channels */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Direct Communication</span>
                            <h2 className="text-2xl font-black text-black mb-4">Direct Channels</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Reach out directly via email or connect on LinkedIn and GitHub. I respond to all serious project inquiries and technical consulting requests within one business day.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:rounakneema414@gmail.com"
                                    className="p-4 border border-gray-200 rounded-xl hover:border-black transition-all flex items-center gap-4 bg-gray-50/50 group"
                                >
                                    <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono text-gray-500 uppercase">Primary Email</span>
                                        <span className="font-bold text-sm text-black">rounakneema414@gmail.com</span>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/Rnks23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-gray-200 rounded-xl hover:border-[#0077b5] transition-all flex items-center gap-4 bg-gray-50/50 group"
                                >
                                    <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono text-gray-500 uppercase">Professional Network</span>
                                        <span className="font-bold text-sm text-black">linkedin.com/in/Rnks23</span>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/rounakneema"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-gray-200 rounded-xl hover:border-black transition-all flex items-center gap-4 bg-gray-50/50 group"
                                >
                                    <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono text-gray-500 uppercase">Open Source &amp; Code</span>
                                        <span className="font-bold text-sm text-black">github.com/rounakneema</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* What to Expect */}
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                            <h3 className="font-bold text-base text-black mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" /> What to Expect
                            </h3>
                            <ul className="space-y-2 text-xs font-mono text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Mutual NDA signed prior to code/infra review
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Detailed written scope &amp; acceptance milestones
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Fixed-price quotes or weekly sprint retainers
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Daily/weekly asynchronous status checkpoints
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Interactive Project Intake Form */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
                            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Project Intake Form</span>
                            <h2 className="text-2xl font-black text-black mb-2">Submit Scope &amp; Requirements</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Fill in your parameters below to generate a detailed project briefing. I will evaluate your stack and respond with a technical assessment and timeline within 24 hours.
                            </p>

                            <ContactForm />
                        </div>

                        {/* Secondary: Quick Templates */}
                        <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50/50">
                            <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Alternative: One-Click Email Templates</span>
                            <h3 className="text-base font-bold text-black mb-4">Launch Pre-formatted Email Scope</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href="mailto:rounakneema414@gmail.com?subject=Project%20Inquiry%3A%20Backend%20Engineering%20%2F%20MVP%20Development&body=Hello%20Rounak%2C%0A%0AI%20would%20like%20to%20discuss%20a%20backend%20software%20project.%0A%0A1.%20Project%20Overview%3A%20%0A2.%20Technical%20Stack%20(Go%2C%20Python%2C%20API%2C%20DB)%3A%20%0A3.%20Desired%20Timeline%3A%20%0A4.%20Budget%20Range%20%2F%20Engagement%20Model%3A%20%0A%0ABest%20regards%2C"
                                    className="p-4 border border-gray-200 rounded-xl bg-white hover:border-black transition-all block group"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-[10px] font-bold text-blue-600 uppercase">Option A</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <div className="font-bold text-xs text-black mb-0.5">Backend &amp; MVP Dev</div>
                                    <div className="text-[11px] text-gray-500">Go/Python services, APIs, databases.</div>
                                </a>

                                <a
                                    href="mailto:rounakneema414@gmail.com?subject=Inquiry%3A%20Authorized%20Cybersecurity%20Assessment&body=Hello%20Rounak%2C%0A%0AWe%20are%20looking%20to%20schedule%20an%20authorized%20security%20assessment.%0A%0A1.%20Application%20%2F%20Target%20Scope%3A%20%0A2.%20Assessment%20Type%20(Web%20App%2C%20API%2C%20AWS%20IAM)%3A%20%0A3.%20Target%20Start%20Date%3A%20%0A4.%20Compliance%20or%20Security%20Objectives%3A%20%0A%0ABest%20regards%2C"
                                    className="p-4 border border-gray-200 rounded-xl bg-white hover:border-black transition-all block group"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-[10px] font-bold text-red-600 uppercase">Option B</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <div className="font-bold text-xs text-black mb-0.5">Cybersecurity Audit</div>
                                    <div className="text-[11px] text-gray-500">Web apps, APIs, IAM assessments.</div>
                                </a>

                                <a
                                    href="mailto:rounakneema414@gmail.com?subject=Inquiry%3A%20DevSecOps%20%26%20CI%2FCD%20Automation&body=Hello%20Rounak%2C%0A%0AWe%20would%20like%20assistance%20with%20our%20DevSecOps%20and%20deployment%20pipelines.%0A%0A1.%20Current%20Infrastructure%20(GitHub%20Actions%2C%20Docker%2C%20Kubernetes)%3A%20%0A2.%20Key%20Objectives%20(Distroless%20packaging%2C%20Trivy%20gates%2C%20CI%20speed)%3A%20%0A3.%20Target%20Timeline%3A%20%0A%0ABest%20regards%2C"
                                    className="p-4 border border-gray-200 rounded-xl bg-white hover:border-black transition-all block group"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-[10px] font-bold text-orange-600 uppercase">Option C</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <div className="font-bold text-xs text-black mb-0.5">DevSecOps &amp; CI/CD</div>
                                    <div className="text-[11px] text-gray-500">Distroless Docker, Trivy gates.</div>
                                </a>

                                <a
                                    href="mailto:rounakneema414@gmail.com?subject=Inquiry%3A%20AI%20Engineering%20%26%20Document%20Automation&body=Hello%20Rounak%2C%0A%0AWe%20have%20an%20AI%20%2F%20document%20intelligence%20project%20to%20discuss.%0A%0A1.%20Use%20Case%20(OCR%2C%20Contract%20Intelligence%2C%20RAG%2C%20Local%20Ollama)%3A%20%0A2.%20Document%20Volume%20%2F%20Scale%3A%20%0A3.%20Privacy%20Requirements%20(Cloud%20vs%20On-Prem)%3A%20%0A4.%20Target%20Completion%20Date%3A%20%0A%0ABest%20regards%2C"
                                    className="p-4 border border-gray-200 rounded-xl bg-white hover:border-black transition-all block group"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-mono text-[10px] font-bold text-purple-600 uppercase">Option D</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <div className="font-bold text-xs text-black mb-0.5">AI &amp; Document Ingest</div>
                                    <div className="text-[11px] text-gray-500">OCR pipelines, Milvus vector RAG.</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-12 max-w-[1200px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
