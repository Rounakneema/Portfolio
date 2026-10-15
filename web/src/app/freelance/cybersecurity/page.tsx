import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle2, ArrowRight, ArrowUpRight, Lock, AlertTriangle, FileCode, Search } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: 'Freelance Cybersecurity & Vulnerability Assessment // Rounak Neema',
    description: 'Authorized freelance cybersecurity consulting: Web application vulnerability assessments, API penetration testing, AWS IAM policy reviews, and security remediation.',
    alternates: { canonical: 'https://rounakneema.in/freelance/cybersecurity' },
    openGraph: {
        title: 'Freelance Cybersecurity Consultant // Rounak Neema',
        description: 'Defensive cybersecurity consulting. OWASP Top 10 web assessments, API security testing, cloud IAM audits, and air-gapped forensic log analysis.',
        url: 'https://rounakneema.in/freelance/cybersecurity',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CybersecurityServicesPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <JsonLd type="freelance" />
            <Navbar />

            <div className="px-6 md:px-12 max-w-[1200px] mx-auto pt-28">
                {/* Back navigation */}
                <div className="mb-6">
                    <Link
                        href="/freelance"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-500 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL SERVICES
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-14 pb-8 border-b border-gray-200">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-red-50 border border-red-200">
                        <Shield className="w-3.5 h-3.5 text-red-600" />
                        <span className="font-mono text-xs font-bold tracking-widest text-red-800 uppercase">
                            Authorized Defensive Security
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
                        FREELANCE CYBERSECURITY &amp; VULNERABILITY ASSESSMENTS.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mb-8">
                        I identify security weaknesses before malicious actors can exploit them.
                        Providing structured, authorized vulnerability assessments for web applications, APIs, cloud IAM access boundaries, and offline security infrastructure.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact?service=security"
                            className="bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2 group"
                        >
                            REQUEST SECURITY ASSESSMENT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://osa.rounakneema.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                        >
                            SEE PROOF: OSA AUDITOR <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </header>

                {/* Ethical Guardrails Callout */}
                <div className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                        <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-black mb-1">Ethical &amp; Authorized Scope of Work</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            All testing is strictly defensive and authorized. I require documented authorization (Rules of Engagement and written client consent) prior to commencing any assessment. Non-destructive methodologies are strictly enforced to protect production data and system uptime.
                        </p>
                    </div>
                </div>

                {/* What I Assess */}
                <section className="mb-16">
                    <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">Assessment Scope</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-8">Areas of Evaluation</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-red-100 text-red-700 rounded-lg inline-block mb-4">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Web Application Vulnerability Testing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Deep manual inspection combined with custom automated fuzzing across the OWASP Top 10 vulnerabilities, session hijacking, broken object-level authorization (BOLA/IDOR), and cross-site scripting.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Authentication bypass &amp; token validation flaws</li>
                                <li>· Insecure Direct Object References (IDOR/BOLA)</li>
                                <li>· Server-Side Request Forgery (SSRF) &amp; injection vectors</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-red-100 text-red-700 rounded-lg inline-block mb-4">
                                <Search className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">API Security Audits</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Focused testing of RESTful and GraphQL endpoints for data exposure, rate-limit bypassing, improper authorization boundaries, and mass assignment vulnerabilities.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· GraphQL introspection &amp; query depth exhaustion</li>
                                <li>· Missing rate limits and brute-force resilience</li>
                                <li>· Secret leakages in error messages &amp; stack traces</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-red-100 text-red-700 rounded-lg inline-block mb-4">
                                <FileCode className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">AWS &amp; Cloud IAM Policy Reviews</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Least-privilege validation across AWS IAM roles, policies, S3 bucket permissions, and security groups to identify privilege escalation paths and over-permissive service accounts.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· IAM policy wildcard reduction &amp; privilege escalation analysis</li>
                                <li>· Publicly accessible resource audit (S3, RDS, EC2)</li>
                                <li>· Security group ingress/egress restriction</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-red-100 text-red-700 rounded-lg inline-block mb-4">
                                <Shield className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Offline &amp; Air-Gapped Log Forensics</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Statistical anomaly detection (Z-score and Markov chain behavioral transition models) designed for disconnected environments where telemetry cannot leave the local network.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Syslog, auth.log, and Windows Event Log parsing</li>
                                <li>· Baseline behavioral drift analysis without cloud APIs</li>
                                <li>· Zero external network dependencies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Evidence & Case Study Anchor */}
                <section className="mb-16 border-2 border-black rounded-xl p-8 bg-zinc-50">
                    <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">Featured Evidence</span>
                    <h2 className="text-2xl font-black text-black mb-4">OSA: Offline Security Auditor for Air-Gapped Networks</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-3xl">
                        OSA is a single-binary security auditing engine built in Go. It performs statistical anomaly detection on local authentication and syslog records without sending telemetry over the internet, demonstrating deep systems-level security engineering.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Ingestion Rate</span>
                            <span className="font-bold text-base text-black">&lt;200ms Pipeline</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Detection</span>
                            <span className="font-bold text-base text-black">Z-Score + Markov</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">CTF Record</span>
                            <span className="font-bold text-base text-black">100+ Solved</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Competition</span>
                            <span className="font-bold text-base text-emerald-600">1st Place CTF</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/projects/osa" className="text-xs font-bold font-mono text-black hover:text-red-600 flex items-center gap-1">
                            READ OSA CASE STUDY &rarr;
                        </Link>
                        <a href="https://github.com/rounakneema/osa" target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-gray-600 hover:text-black flex items-center gap-1">
                            VIEW SOURCE ON GITHUB &rarr;
                        </a>
                    </div>
                </section>

                {/* Audit Deliverables */}
                <section className="mb-16">
                    <h2 className="text-2xl font-black text-black mb-6">What You Receive in the Security Report</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-5 bg-white">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-red-100 text-red-800 rounded">01</span>
                                <h3 className="font-bold text-base text-black">Executive Summary &amp; Risk Ranking</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A high-level overview formatted for founders and engineering leadership, prioritizing discovered issues by real-world business impact and CVSS 3.1 severity scores.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5 bg-white">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-red-100 text-red-800 rounded">02</span>
                                <h3 className="font-bold text-base text-black">Exact Reproduction Proof (PoC)</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every finding includes raw HTTP requests, responses, cURL commands, or reproduction scripts so your developers can immediately verify the vulnerability without guessing.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5 bg-white">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-red-100 text-red-800 rounded">03</span>
                                <h3 className="font-bold text-base text-black">Actionable Remediation Code</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Precise code fixes, framework-specific defense patterns, and re-testing verification criteria to ensure the flaw is permanently resolved.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conversion Bar */}
                <section className="mb-20 text-center py-12 px-6 bg-black text-white rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Schedule an Authorized Security Review</h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mb-8">
                        Protect your users and infrastructure with an independent, evidence-based security audit.
                    </p>
                    <Link
                        href="/contact?service=security"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-lg"
                    >
                        REQUEST SECURITY AUDIT <ArrowRight className="w-4 h-4" />
                    </Link>
                </section>
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
