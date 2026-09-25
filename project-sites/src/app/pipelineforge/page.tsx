import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PipelineForge | DevSecOps Engineering Case Study',
  description: 'Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice built to demonstrate production-grade DevOps automation.',
};

export default function PipelineForgePage() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation / Header */}
      <header className="border-b-8 border-black p-6 flex justify-between items-center uppercase font-bold tracking-tighter">
        <div className="text-2xl">
          <Link href="/" className="hover:underline">← Back to Index</Link>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-black text-white px-2 py-1 text-sm mb-1">DEVSECOPS</div>
          <div className="font-mono text-sm">PROJECT: PIPELINEFORGE</div>
        </div>
      </header>

      <main className="p-6 md:p-12 lg:p-24 overflow-hidden">
        {/* Hero Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative">
          <div className="lg:col-span-8 relative z-10">
            <h1 className="text-[12vw] lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 mix-blend-difference">
              Pipeline<br />Forge
            </h1>
            <p className="text-2xl md:text-4xl font-medium max-w-3xl leading-tight border-l-8 border-black pl-6 bg-[#e5e5e5]">
              Zero-touch GitOps CI/CD pipeline and cloud-native Go microservice demonstrating production-grade DevOps automation.
            </p>
          </div>
          <div className="lg:col-span-4 border-4 border-black p-6 bg-white transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-20">
            <h3 className="font-black uppercase text-2xl border-b-4 border-black pb-2 mb-4 tracking-tight">Core Metrics</h3>
            <ul className="space-y-4 font-mono text-lg font-bold">
              <li className="flex justify-between border-b-2 border-gray-200 pb-1 hover:bg-yellow-200">
                <span>SIZE REDUCTION</span>
                <span>99.3%</span>
              </li>
              <li className="flex justify-between border-b-2 border-gray-200 pb-1 hover:bg-yellow-200">
                <span>LATENCY</span>
                <span>&lt;5ms</span>
              </li>
              <li className="flex justify-between border-b-2 border-gray-200 pb-1 hover:bg-yellow-200">
                <span>LOAD TEST</span>
                <span>500 VUs</span>
              </li>
              <li className="flex justify-between pb-1 hover:bg-yellow-200">
                <span>ORCHESTRATION</span>
                <span>K8s</span>
              </li>
            </ul>
          </div>
          {/* Decorative brutalist element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full mix-blend-overlay opacity-10 pointer-events-none blur-xl"></div>
        </section>

        {/* Challenge vs Solution Asymmetry */}
        <section className="mb-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-0">
            <div className="md:col-span-7 bg-black text-white p-8 md:p-16 transform -skew-x-2 shadow-2xl z-10">
              <h2 className="text-5xl font-black uppercase mb-8 tracking-tight">The Challenge</h2>
              <p className="text-xl md:text-3xl leading-snug font-medium">
                Manual deployments suffer from poor auditability, lack automated vulnerability scanning, missing rollbacks, and unrestricted network access.
              </p>
            </div>
            <div className="md:col-span-6 md:-ml-12 md:mt-24 bg-white border-8 border-black p-8 md:p-16 z-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-5xl font-black uppercase mb-8 tracking-tight border-b-8 border-black inline-block">The Solution</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-bold">
                A comprehensive DevSecOps pipeline orchestrating Docker builds, Trivy security gates, and Kubernetes GitOps deployments. Optimized container images from 1.1GB down to 8MB via multi-stage distroless builds.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee / Brutalist List */}
        <section className="mb-32 border-y-8 border-black py-12 bg-white transform -rotate-1">
          <div className="flex flex-wrap gap-4 font-mono text-3xl uppercase font-black text-center justify-center">
            <span className="bg-yellow-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">GitHub Actions</span>
            <span className="bg-blue-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Docker</span>
            <span className="bg-indigo-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Kubernetes</span>
            <span className="bg-green-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Helm</span>
            <span className="bg-red-400 text-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Trivy</span>
            <span className="bg-purple-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">k6</span>
            <span className="bg-cyan-300 px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Go</span>
          </div>
        </section>

        {/* Terminal Trace / Engineering Details */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
              System<br/>Architecture
            </h2>
            <div className="space-y-8 border-l-4 border-black pl-6">
              <div>
                <h4 className="text-3xl font-black uppercase mb-3 bg-black text-white inline-block px-2">1. Cloud-Native Go</h4>
                <p className="text-xl font-medium">High-performance HTTP server exposing /health, /ready, /work (simulated load), and Prometheus /metrics.</p>
              </div>
              <div>
                <h4 className="text-3xl font-black uppercase mb-3 bg-black text-white inline-block px-2">2. Distroless Docker</h4>
                <p className="text-xl font-medium">Multi-stage build packaging into a gcr.io/distroless/static:nonroot image, slashing attack surface and sizing.</p>
              </div>
              <div>
                <h4 className="text-3xl font-black uppercase mb-3 bg-black text-white inline-block px-2">3. Helm & K8s</h4>
                <p className="text-xl font-medium">Complete Helm chart orchestration with HPA, NetworkPolicies, and ResourceQuotas.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-[#111] text-[#0f0] font-mono p-6 md:p-8 rounded-none border-8 border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[32px_32px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300">
            <div className="flex gap-3 mb-6 border-b-2 border-[#333] pb-4">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="ml-auto text-xs text-[#666] uppercase">pipelineforge/k6-load-test</div>
            </div>
            <pre className="whitespace-pre-wrap overflow-x-auto text-sm md:text-base leading-relaxed">
{`$ k6 run load-test/script.js

          /\\      |‾‾| /‾‾/   /‾‾/   
     /\\  /  \\     |  |/  /   /  /    
    /  \\/    \\    |     (   /   ‾‾\\  
   /          \\   |  |\\  \\ |  (‾)  | 
  / __________ \\  |__| \\__\\ \\_____/ .io

  execution: local
     script: load-test/script.js
     output: -

  scenarios: (100.00%) 1 scenario, 500 max VUs, 1m30s max duration:
           * default: 500 looping VUs for 1m0s

running (1m00.1s), 500/500 VUs, 120531 complete iterations
default ✓ [======================================] 500 VUs  1m0s

     ✓ status was 200

     checks.........................: 100.00% ✓ 120531      ✗ 0
     http_req_duration..............: 4.12ms  avg=4.12ms max=45.12ms
     vus............................: 500     min=500       max=500
     
[SYSTEM] Horizontal Pod Autoscaler triggered
[SYSTEM] Replicas scaled from 1 -> 8 (CPU > 70%)`}
            </pre>
          </div>
        </section>

        {/* Outcomes & End */}
        <section className="border-t-8 border-black pt-16">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-16 text-center text-transparent bg-clip-text bg-black" style={{ WebkitTextStroke: '3px black', color: 'transparent' }}>
            OUTCOMES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black uppercase mb-4 border-b-4 border-current pb-2">Security</h3>
              <p className="text-xl font-medium">Trivy vulnerability scanning blocked deployment of compromised images. Distroless images eliminated shell access entirely.</p>
            </div>
            <div className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black uppercase mb-4 border-b-4 border-current pb-2">Reliability</h3>
              <p className="text-xl font-medium">Zero-downtime deployments proven via Kubernetes Readiness/Liveness probes and Helm rollbacks on failure.</p>
            </div>
            <div className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-4xl font-black uppercase mb-4 border-b-4 border-current pb-2">Scalability</h3>
              <p className="text-xl font-medium">HPA dynamically scaled replicas from 1 to 8 during synthetic load tests simulating 500 concurrent virtual users.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
