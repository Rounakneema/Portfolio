import { Metadata } from 'next';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { PipelineSteps } from '@/components/shared/PipelineSteps';
import { AnimatedStat } from '@/components/shared/AnimatedStat';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

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
      <ScrollReveal direction="up" delay={0.1}>
        <header className="border-b-4 border-white p-6 flex justify-between items-center uppercase font-bold tracking-tighter">
          <div className="text-xl">
            <Link href="/" className="hover:-translate-y-1 hover:border-[#f97316] transition-all duration-300 hover:bg-white hover:text-black px-2 py-1 rounded">← INDEX</Link>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="bg-white text-black px-2 py-1 text-sm font-black mb-1">DEVSECOPS</div>
            <div className="text-sm">PROJECT: PIPELINEFORGE</div>
          </div>
        </header>
      </ScrollReveal>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden">
        {/* Hero Section - Interactive Pipeline */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-24 flex flex-col items-center border-4 border-[#30363d] p-8 md:p-16 relative bg-white/5 backdrop-blur-md rounded-lg shadow-xl">
            <div className="absolute top-0 left-0 bg-[#30363d] text-white px-3 py-1 text-xs font-bold uppercase rounded-tl-lg rounded-br-lg">
              Control Plane
            </div>
            <PipelineSteps 
              steps={pipelineSteps} 
              stepDurationMs={700} 
              successColor="#3fb950" 
              className="w-full flex justify-center mb-16 overflow-x-auto" 
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl text-center border-t border-[#30363d] pt-12">
               <StaggerItem><AnimatedStat value={99} suffix=".3%" label="IMAGE REDUCTION" className="items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl" /></StaggerItem>
               <StaggerItem><AnimatedStat prefix="<" value={5} suffix="ms" label="LATENCY" className="items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl" /></StaggerItem>
               <StaggerItem><AnimatedStat value={500} suffix=" VU" label="LOAD TESTED" className="items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl" /></StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Navigation to Sub-pages */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <Link href="/architecture" className="group border-4 border-white p-8 hover:bg-white hover:text-black hover:-translate-y-1 hover:border-[#f97316] transition-all duration-300 block bg-white/5 backdrop-blur-md rounded-lg shadow-xl">
                  <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Architecture →</h2>
                  <p className="text-xl font-medium leading-relaxed">Deep dive into the DevSecOps GitOps pipeline topology, cluster design, and data flows.</p>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="/decisions" className="group border-4 border-white p-8 hover:bg-white hover:text-black hover:-translate-y-1 hover:border-[#f97316] transition-all duration-300 block bg-white/5 backdrop-blur-md rounded-lg shadow-xl">
                  <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Decisions & Metrics →</h2>
                  <p className="text-xl font-medium leading-relaxed">Technical trade-offs, security gates (Trivy), and performance optimization breakdowns.</p>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="/docs" className="group border-4 border-white p-8 hover:bg-white hover:text-black hover:-translate-y-1 hover:border-[#f97316] transition-all duration-300 block bg-white/5 backdrop-blur-md rounded-lg shadow-xl">
                  <h2 className="text-2xl xl:text-2xl font-black uppercase mb-4 tracking-tight group-hover:underline">Docs & Code →</h2>
                  <p className="text-xl font-medium leading-relaxed">Raw engineering documentation, YAML manifests, CI/CD scripts, and terminal traces.</p>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </section>
        </ScrollReveal>

        {/* Challenge vs Solution */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32 border-4 border-white p-8 md:p-16 relative shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] bg-white/5 backdrop-blur-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2 tracking-tighter">The Challenge</h2>
                <p className="text-xl leading-relaxed">
                  Manual deployments suffer from poor auditability, lack automated vulnerability scanning, missing rollbacks, and unrestricted network access.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2 tracking-tighter">The Solution</h2>
                <p className="text-xl leading-relaxed">
                  A comprehensive DevSecOps pipeline orchestrating Docker builds, Trivy security gates, and Kubernetes GitOps deployments. Optimized container images from 1.1GB down to 8MB via multi-stage distroless builds.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Tech Stack Marquee / Brutalist List */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32 border-y-4 border-white py-12 bg-white text-black shadow-xl">
            <StaggerContainer className="flex flex-wrap gap-6 text-3xl uppercase font-black justify-center items-center px-4">
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ GITHUB ACTIONS ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ DOCKER ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ KUBERNETES ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ HELM ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ TRIVY ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ K6 ]</span></StaggerItem>
              <StaggerItem><span className="hover:-translate-y-1 hover:text-[#f97316] transition-all duration-300 inline-block">[ GO ]</span></StaggerItem>
            </StaggerContainer>
          </section>
        </ScrollReveal>
      
        {/* SEO/AEO FAQ Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32 border-4 border-white p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] bg-white/5 backdrop-blur-md rounded-lg">
            <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-white inline-block pb-2 tracking-tighter">Frequently Asked Questions</h2>
            <StaggerContainer className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "What is PipelineForge?", a: "PipelineForge is a GitOps DevSecOps CI/CD Pipeline Automation framework demonstrating production-grade DevOps." },
                { q: "How does PipelineForge secure CI/CD pipelines?", a: "It utilizes Trivy security gates for automated vulnerability scanning during the deployment process." },
                { q: "How was the Docker image size reduced?", a: "Container images were optimized from 1.1GB down to 8MB (99.3% reduction) via multi-stage distroless builds." },
                { q: "What orchestration platform is used?", a: "The deployment environment and GitOps pipeline are orchestrated using Kubernetes and Helm." },
                { q: "What role does GitHub Actions play?", a: "GitHub Actions serves as the CI runner to build, test, and push the application before GitOps syncs." },
                { q: "How is performance tested?", a: "Load testing is conducted using K6 to simulate 500 VUs and ensure latency remains under 5ms." },
                { q: "Who built PipelineForge?", a: "PipelineForge was architected and engineered by Rounak Neema." }
              ].map((faq, idx) => (
                <StaggerItem key={idx}>
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl hover:-translate-y-1 hover:border-[#f97316] transition-all duration-300">
                    <h3 className="text-xl font-bold uppercase tracking-tight" itemProp="name">{faq.q}</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-lg mt-2 leading-relaxed" itemProp="text">{faq.a}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </ScrollReveal>
        </main>
    </div>
  );
}
