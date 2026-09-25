import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { PipelineSteps } from '@/components/shared/PipelineSteps';
import { AnimatedStat } from '@/components/shared/AnimatedStat';

export const metadata: Metadata = {
  title: 'PipelineForge — GitOps DevSecOps CI/CD Pipeline Automation',
  description: 'Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice built to demonstrate production-grade DevOps automation.',
  alternates: { canonical: 'https://pipelineforge.rounakneema.in' },
};

const pipelineSteps = [
  { label: 'CODE', sublabel: 'GitHub Actions' },
  { label: 'BUILD', sublabel: 'Docker Build' },
  { label: 'SCAN', sublabel: 'Trivy Scan' },
  { label: 'PACKAGE', sublabel: 'Helm Chart' },
  { label: 'DEPLOY', sublabel: 'K8s Rollout' },
  { label: 'VERIFY', sublabel: 'Health Check' },
  { label: 'DONE', sublabel: '✓' },
];

export default function PipelineForgePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-white selection:text-black">
      <ProjectJsonLd slug="pipelineforge" />
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
        {/* Hero Section - Interactive Pipeline */}
        <div className="mb-24 flex flex-col items-center border-4 border-[#30363d] p-8 md:p-16 relative">
          <div className="absolute top-0 left-0 bg-[#30363d] text-white px-3 py-1 text-xs font-bold uppercase">
            Control Plane
          </div>
          <PipelineSteps 
            steps={pipelineSteps} 
            stepDurationMs={700} 
            successColor="#3fb950" 
            className="w-full flex justify-center mb-16 overflow-x-auto" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl text-center border-t border-[#30363d] pt-12">
             <AnimatedStat value={99} suffix=".3%" label="IMAGE REDUCTION" className="items-center" />
             <AnimatedStat prefix="<" value={5} suffix="ms" label="LATENCY" className="items-center" />
             <AnimatedStat value={500} suffix=" VU" label="LOAD TESTED" className="items-center" />
          </div>
        </div>

        {/* Entity Header & Facts */}
        <EntityHeader title="PipelineForge" subtitle="GitOps DevSecOps CI/CD Pipeline Automation" />
        <div className="mb-24">
          <ProjectFacts facts={[
            { label: 'Built by', value: 'Rounak Neema' },
            { label: 'Architecture', value: 'Kubernetes & GitHub Actions' },
            { label: 'Image Reduction', value: '~1.1GB to 8MB (99.3%)' },
            { label: 'Security', value: 'Trivy' }
          ]} />
        </div>

        {/* Navigation to Sub-pages */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/pipelineforge/architecture" className="group border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 block">
            <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Architecture →</h2>
            <p className="text-xl font-medium">Deep dive into the DevSecOps GitOps pipeline topology, cluster design, and data flows.</p>
          </Link>
          <Link href="/pipelineforge/decisions" className="group border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 block">
            <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Decisions & Metrics →</h2>
            <p className="text-xl font-medium">Technical trade-offs, security gates (Trivy), and performance optimization breakdowns.</p>
          </Link>
          <Link href="/pipelineforge/docs" className="group border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 block">
            <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Docs & Code →</h2>
            <p className="text-xl font-medium">Raw engineering documentation, YAML manifests, CI/CD scripts, and terminal traces.</p>
          </Link>
        </section>

        {/* Challenge vs Solution */}
        <section className="mb-32 border-4 border-white p-8 md:p-16 relative shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2">The Challenge</h2>
              <p className="text-xl leading-relaxed">
                Manual deployments suffer from poor auditability, lack automated vulnerability scanning, missing rollbacks, and unrestricted network access.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2">The Solution</h2>
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

      
        {/* SEO/AEO FAQ Section */}
        <section className="mb-32 border-4 border-white p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
          <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2">Frequently Asked Questions</h2>
          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            {[
              { q: "What is PipelineForge?", a: "PipelineForge is a GitOps DevSecOps CI/CD Pipeline Automation framework demonstrating production-grade DevOps." },
              { q: "How does PipelineForge secure CI/CD pipelines?", a: "It utilizes Trivy security gates for automated vulnerability scanning during the deployment process." },
              { q: "How was the Docker image size reduced?", a: "Container images were optimized from 1.1GB down to 8MB (99.3% reduction) via multi-stage distroless builds." },
              { q: "What orchestration platform is used?", a: "The deployment environment and GitOps pipeline are orchestrated using Kubernetes and Helm." },
              { q: "What role does GitHub Actions play?", a: "GitHub Actions serves as the CI runner to build, test, and push the application before GitOps syncs." },
              { q: "How is performance tested?", a: "Load testing is conducted using K6 to simulate 500 VUs and ensure latency remains under 5ms." },
              { q: "Who built PipelineForge?", a: "PipelineForge was architected and engineered by Rounak Neema." }
            ].map((faq, idx) => (
              <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold uppercase" itemProp="name">{faq.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-lg mt-2" itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <RelatedProjects />

      </main>
    </div>
  );
}
