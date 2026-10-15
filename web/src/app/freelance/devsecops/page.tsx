import { Navbar } from '@/components/portfolio/layout/Navbar';
import { Footer } from '@/components/portfolio/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, GitBranch, CheckCircle2, ArrowRight, ArrowUpRight, Box, ShieldCheck, Cpu, Terminal } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: 'Freelance DevSecOps & CI/CD Cloud Engineer // Rounak Neema',
    description: 'Hire a freelance DevSecOps engineer for GitHub Actions CI/CD automation, Google Distroless Docker packaging, Kubernetes hardening, and automated Trivy vulnerability gates.',
    alternates: { canonical: 'https://rounakneema.in/freelance/devsecops' },
    openGraph: {
        title: 'Freelance DevSecOps & Cloud Engineering // Rounak Neema',
        description: 'GitOps deployment automation, 99.3% Docker container image reduction via Distroless, Trivy security pipeline gates, and hardened Kubernetes infrastructure.',
        url: 'https://rounakneema.in/freelance/devsecops',
        siteName: 'Rounak Neema',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function DevSecOpsServicesPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 bg-orange-50 border border-orange-200">
                        <GitBranch className="w-3.5 h-3.5 text-orange-600" />
                        <span className="font-mono text-xs font-bold tracking-widest text-orange-800 uppercase">
                            GitOps, Containers &amp; Pipeline Security
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-tight mb-6">
                        FREELANCE DEVSECOPS &amp; CI/CD AUTOMATION.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mb-8">
                        I automate reliable deployment pipelines and eliminate container attack surfaces.
                        Specializing in GitHub Actions workflows, multi-stage Google Distroless Docker builds, Kubernetes RBAC hardening, and automated vulnerability gates.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact?service=devsecops"
                            className="bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2 group"
                        >
                            HIRE FOR DEVSECOPS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://pipelineforge.rounakneema.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                        >
                            SEE PROOF: PIPELINEFORGE <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </header>

                {/* What I Deliver */}
                <section className="mb-16">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">DevSecOps Pillars</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-8">Automated Infrastructure Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-orange-100 text-orange-700 rounded-lg inline-block mb-4">
                                <Box className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Distroless Docker Packaging (99% Reduction)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Convert bloated Ubuntu/Debian container images into minimal Google Distroless or scratch artifacts. Removing package managers, shells, and unused binaries strips away 100% of OS-level CVEs and slashes download and deployment latency.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Multi-stage build optimization for Go, Python, and Node.js</li>
                                <li>· Non-root execution by default (UID 65532)</li>
                                <li>· Read-only root filesystem compatibility</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-orange-100 text-orange-700 rounded-lg inline-block mb-4">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Automated Trivy &amp; Secret Scanning Gates</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Integrate security testing directly into pull requests. Automated gates block deployments containing critical vulnerabilities or hardcoded credentials before they reach production.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Trivy container image scanning with fail-on-critical policies</li>
                                <li>· Gitleaks &amp; Trufflehog secret detection hooks</li>
                                <li>· Dependency software bill of materials (SBOM) generation</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-orange-100 text-orange-700 rounded-lg inline-block mb-4">
                                <GitBranch className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">GitHub Actions CI/CD Pipeline Engineering</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Fast, deterministic GitHub Actions workflows with intelligent layer caching, parallelized test suites, semantic release tagging, and automated cloud deployments.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Reusable, parameterized composite workflow actions</li>
                                <li>· BuildKit cache mounts reducing build times by 70%+</li>
                                <li>· Zero-downtime blue/green or rolling release strategies</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
                            <div className="p-2.5 bg-orange-100 text-orange-700 rounded-lg inline-block mb-4">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Kubernetes Hardening &amp; GitOps</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Hardening Kubernetes workloads against cluster breakout. Writing strict NetworkPolicies, resource quotas, and RBAC least-privilege role bindings.
                            </p>
                            <ul className="space-y-1.5 font-mono text-xs text-gray-600">
                                <li>· Pod Security Standards (Restricted profile)</li>
                                <li>· Ingress TLS configuration and automated cert-manager</li>
                                <li>· Helm chart templating with health probes and resource limits</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Evidence & Case Study Anchor */}
                <section className="mb-16 border-2 border-black rounded-xl p-8 bg-zinc-50">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">Featured Evidence</span>
                    <h2 className="text-2xl font-black text-black mb-4">PipelineForge: 99.3% Image Reduction (1.1GB &rarr; 8.4MB)</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-3xl">
                        PipelineForge demonstrates production GitOps DevSecOps automation. By migrating standard images to multi-stage distroless containers, image size dropped from 1.1GB to 8.4MB with 0 critical or high CVEs detected by Trivy.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Original Size</span>
                            <span className="font-bold text-base text-gray-400">1.1 GB (Before)</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Distroless Size</span>
                            <span className="font-bold text-base text-emerald-600">8.4 MB (After)</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">Trivy CVEs</span>
                            <span className="font-bold text-base text-emerald-600">0 Critical / High</span>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <span className="font-mono text-xs text-gray-500 block">CI Run Time</span>
                            <span className="font-bold text-base text-black">&lt;60 Seconds</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/projects/pipelineforge" className="text-xs font-bold font-mono text-black hover:text-orange-600 flex items-center gap-1">
                            READ PIPELINEFORGE CASE STUDY &rarr;
                        </Link>
                        <a href="https://github.com/rounakneema/pipelineforge" target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-gray-600 hover:text-black flex items-center gap-1">
                            VIEW WORKFLOW TEMPLATES ON GITHUB &rarr;
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black text-black mb-6">DevSecOps FAQ</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">How does distroless packaging improve security?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Traditional Linux container images contain package managers (apt, apk), shells (bash, sh), and hundreds of OS utilities that attackers exploit after a code injection flaw. Google Distroless containers contain only your application binary and its immediate runtime dependencies. If an attacker cannot spawn a shell, arbitrary code execution becomes drastically harder.
                            </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-base text-black mb-2">Can you audit our existing GitHub Actions workflows?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Yes. I review workflow permissions (`GITHUB_TOKEN` least-privilege), pinned SHA action hashes (preventing supply-chain attacks), secret exfiltration risks, and caching inefficiencies to speed up builds and cut GitHub Actions billing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conversion Bar */}
                <section className="mb-20 text-center py-12 px-6 bg-black text-white rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Modernize Your CI/CD &amp; Container Security</h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mb-8">
                        Automate your deployments with fast, secure, distroless pipelines.
                    </p>
                    <Link
                        href="/contact?service=devsecops"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-lg"
                    >
                        START DEVSECOPS INTAKE <ArrowRight className="w-4 h-4" />
                    </Link>
                </section>
            </div>

            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20">
                <Footer />
            </div>
        </main>
    );
}
