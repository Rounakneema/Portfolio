import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PipelineForge | DevSecOps Engineering Case Study',
  description: 'Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice built to demonstrate production-grade DevOps automation.',
};

export default function PipelineForgePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white selection:text-black">
      {/* Navigation / Header */}
      <header className="border-b-4 border-white p-6 flex justify-between items-center uppercase font-bold tracking-tighter">
        <div className="text-xl">
          <Link href="/" className="hover:bg-white hover:text-black transition-colors px-2 py-1">← INDEX</Link>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-white text-black px-2 py-1 text-sm font-black mb-1">DEVSECOPS</div>
          <div className="text-sm">PROJECT: PIPELINEFORGE</div>
        </div>
      </header>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden">
        {/* Hero Section */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-[10vw] lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              PIPELINE<br />FORGE
            </h1>
            <p className="text-xl md:text-3xl font-medium max-w-4xl leading-tight border-l-4 border-white pl-6">
              Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice demonstrating production-grade DevOps automation.
            </p>
          </div>
          <div className="lg:col-span-4 border-4 border-white p-6 bg-[#0a0a0a] shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <h3 className="font-black uppercase text-2xl border-b-4 border-white pb-2 mb-4 tracking-tight">Core Metrics</h3>
            <ul className="space-y-4 text-lg font-bold">
              <li className="flex justify-between border-b border-gray-600 pb-1">
                <span>SIZE REDUCTION</span>
                <span className="text-green-400">99.3%</span>
              </li>
              <li className="flex justify-between border-b border-gray-600 pb-1">
                <span>LATENCY</span>
                <span className="text-green-400">&lt;5ms</span>
              </li>
              <li className="flex justify-between border-b border-gray-600 pb-1">
                <span>LOAD TEST</span>
                <span className="text-green-400">500 VUs</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>ORCHESTRATION</span>
                <span className="text-green-400">K8s</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navigation to Sub-pages */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/pipelineforge/architecture" className="group border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 block">
            <h2 className="text-5xl font-black uppercase mb-4 tracking-tight group-hover:underline">Architecture →</h2>
            <p className="text-xl font-medium">Deep dive into the DevSecOps GitOps pipeline topology, cluster design, and data flows.</p>
          </Link>
          <Link href="/pipelineforge/decisions" className="group border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 block">
            <h2 className="text-5xl font-black uppercase mb-4 tracking-tight group-hover:underline">Decisions & Metrics →</h2>
            <p className="text-xl font-medium">Technical trade-offs, security gates (Trivy), and performance optimization breakdowns.</p>
          </Link>
        </section>

        {/* Challenge vs Solution */}
        <section className="mb-32 border-4 border-white p-8 md:p-16 relative shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2">The Challenge</h2>
              <p className="text-xl leading-relaxed">
                Manual deployments suffer from poor auditability, lack automated vulnerability scanning, missing rollbacks, and unrestricted network access.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2">The Solution</h2>
              <p className="text-xl leading-relaxed">
                A comprehensive DevSecOps pipeline orchestrating Docker builds, Trivy security gates, and Kubernetes GitOps deployments. Optimized container images from 1.1GB down to 8MB via multi-stage distroless builds.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee / Brutalist List */}
        <section className="mb-32 border-y-4 border-white py-12 bg-white text-black">
          <div className="flex flex-wrap gap-6 text-3xl uppercase font-black justify-center items-center px-4">
            <span>[ GITHUB ACTIONS ]</span>
            <span>[ DOCKER ]</span>
            <span>[ KUBERNETES ]</span>
            <span>[ HELM ]</span>
            <span>[ TRIVY ]</span>
            <span>[ K6 ]</span>
            <span>[ GO ]</span>
          </div>
        </section>

      </main>
    </div>
  );
}
