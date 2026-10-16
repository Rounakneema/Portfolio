import React from 'react';
import Link from 'next/link';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TerminalTabs } from '@/components/pipelineforge/TerminalTabs';
import { PipelineDiagram } from '@/components/pipelineforge/PipelineDiagram';
import { ProjectEmailIntake } from '@/components/ProjectEmailIntake';
import { SearchableFaq } from '@/components/shared/SearchableFaq';
import { projectFaqs } from '@/lib/projectFaqs';

export const metadata = {
  title: 'PipelineForge - Production GitOps DevSecOps Pipeline',
  description: 'A production-ready DevSecOps pipeline with Distroless container optimization, automated Trivy security gates, and Kubernetes GitOps deployment.',
  alternates: {
    canonical: 'https://pipelineforge.rounakneema.in',
  },
};

export default function PipelineForgePage() {
  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <ProjectJsonLd slug="pipelineforge" />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-14 lg:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono">
              GITOPS · SECURE · REPRODUCIBLE
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-8">
              A production-ready<br />
              CI/CD pipeline<br />
              you can inspect<span className="text-[#f97316]">.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
              PipelineForge is a DevSecOps project that automates build, security scanning, and Kubernetes deployment using GitHub Actions, Docker, Trivy, Helm and GitOps principles.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href="/architecture"
                className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95 text-center flex items-center justify-center gap-2 flex-1 sm:flex-none"
              >
                <span>Explore Architecture</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <a
                href="https://github.com/Rounakneema"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-medium text-sm rounded-xl transition-all text-center flex items-center justify-center gap-2.5 flex-1 sm:flex-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View Source Code</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Window Mockup */}
          <div className="lg:col-span-6">
            <TerminalTabs />
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS BAR (4 METRICS)                                     */}
      {/* ========================================================= */}
      <section className="border-y border-neutral-200/90 py-12 bg-neutral-50/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Metric 01 */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
                IMAGE SIZE REDUCED
              </span>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                1.1 GB → 8 MB
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                99.3% reduction using multi-stage distroless builds.
              </p>
            </div>

            {/* Metric 02 */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
                LATENCY (P95)
              </span>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                &lt; 5 ms
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                Under real load in production-like environment.
              </p>
            </div>

            {/* Metric 03 */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
                LOAD TESTED
              </span>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                500 VUs
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                Stable performance with k6.
              </p>
            </div>

            {/* Metric 04 */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
                DEPLOYMENT
              </span>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                Kubernetes
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                Automated using Helm and GitOps.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 01: PIPELINE OVERVIEW                             */}
      {/* ========================================================= */}
      <section id="pipeline" className="py-20 lg:py-28 border-b border-neutral-200/90">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>01</span>
            <span className="uppercase tracking-[0.2em]">PIPELINE OVERVIEW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
                From commit to cluster.
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                A modular CI/CD pipeline with strict security gates, Distroless containerization, and automated Kubernetes GitOps deployment.
              </p>
              <div>
                <Link
                  href="/architecture"
                  className="px-5 py-3 border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-medium text-sm rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <span>View full architecture</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column: 5-Step Pipeline Graphic */}
            <div className="lg:col-span-7">
              <PipelineDiagram />
            </div>

          </div>

          {/* 5 Deep Execution Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-10 border-t border-neutral-200/70">
            
            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f97316]">01 / LINT &amp; TEST</span>
                <span className="text-[10px] font-mono text-neutral-400">GitHub Actions</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">Code Verification</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Runs golangci-lint with 40+ enabled linters, govet, and race-detector tests. Fails build if unit test coverage falls below 85%.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-neutral-200/70 font-mono text-[10px] text-neutral-700">
                go test -race -v ./...
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f97316]">02 / COMPILE</span>
                <span className="text-[10px] font-mono text-neutral-400">Multi-Stage</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">Distroless Packaging</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Compiles static Go binary with stripped debug symbols. Copies binary to gcr.io/distroless/static-debian11 with zero shells or package managers.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-neutral-200/70 font-mono text-[10px] text-neutral-700">
                1.1 GB &rarr; 8.4 MB (99.3%)
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f97316]">03 / TRIVY GATE</span>
                <span className="text-[10px] font-mono text-neutral-400">Exit Code 1</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">CVE Gate Enforcement</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Scans image layers for OS and dependency CVEs. Workflow halts with exit code 1 if any HIGH or CRITICAL issues exist, exporting a SARIF report.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-neutral-200/70 font-mono text-[10px] text-neutral-700">
                0 High / 0 Critical CVEs
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f97316]">04 / PACKAGE</span>
                <span className="text-[10px] font-mono text-neutral-400">Helm 3</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">Helm Templating</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Templates Kubernetes Deployments, Services, HorizontalPodAutoscalers (CPU 70%), NetworkPolicies, and encrypted Secret bindings per environment.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-neutral-200/70 font-mono text-[10px] text-neutral-700">
                helm template ./chart
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f97316]">05 / DEPLOY</span>
                <span className="text-[10px] font-mono text-neutral-400">Rolling Update</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">GitOps Health Check</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Deploys with maxSurge 25% and maxUnavailable 0. Queries /healthz and /ready probes before terminating old replica sets.
              </p>
              <div className="p-2.5 bg-white rounded-lg border border-neutral-200/70 font-mono text-[10px] text-neutral-700">
                Rollout status: complete
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: REAL-WORLD ENGINEERING (DARK SECTION)         */}
      {/* ========================================================= */}
      <section className="bg-[#111215] text-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-400 tracking-wider font-mono">
            <span>02</span>
            <span className="uppercase tracking-[0.2em]">REAL-WORLD ENGINEERING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                Designed for real-world production.
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Built with strict security guardrails, deep observability, reproducible GitOps workflows, and Kubernetes reliability patterns. Every technical decision is grounded in verified benchmarks.
              </p>
              <div>
                <Link
                  href="/decisions"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 font-medium text-sm rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Read design decisions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Security First */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 text-[#f97316] flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Security First</h3>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-mono mt-0.5">&gt;</span>
                    <span>Trivy scans container images on every PR; blocks build on High/Critical vulnerabilities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-mono mt-0.5">&gt;</span>
                    <span>Distroless runtime eliminates shells, package managers, and root user execution (UID 65532).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f97316] font-mono mt-0.5">&gt;</span>
                    <span>NetworkPolicies enforce default-deny ingress, permitting only authenticated ingress controller traffic.</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Observability */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 text-blue-400 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Deep Observability</h3>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono mt-0.5">&gt;</span>
                    <span>Structured JSON logging with Zerolog for zero-allocation telemetry parsing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono mt-0.5">&gt;</span>
                    <span>Prometheus endpoint scrapes HTTP request durations, error rates, and CPU/memory utilization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-mono mt-0.5">&gt;</span>
                    <span>Automated k6 load tests assert P95 latency &lt;5ms and error rates &lt;0.01% under 500 VUs.</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Modular and Extensible */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 text-purple-400 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Modular GitOps Workflows</h3>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono mt-0.5">&gt;</span>
                    <span>Reusable GitHub Actions composite workflows shared cleanly across microservice repositories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono mt-0.5">&gt;</span>
                    <span>Immutable semantic versioning with cryptographic Git tag triggers and OCI image digest pinning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono mt-0.5">&gt;</span>
                    <span>Environment separation via values-staging.yaml and values-prod.yaml overrides.</span>
                  </li>
                </ul>
              </div>

              {/* Card 4: Kubernetes Native */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25L4.5 6.58v8.67L12 19.58l7.5-4.33V6.58L12 2.25z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Kubernetes Native</h3>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                    <span>Helm 3 charts with dynamic HorizontalPodAutoscaler scaling pods from 2 to 8 on load spikes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                    <span>PodDisruptionBudgets (minAvailable: 1) prevent outages during node upgrades and drain events.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                    <span>Dual liveness and readiness probes guarantee traffic routes only to initialized pods.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: OPERATIONAL USE CASES                         */}
      {/* ========================================================= */}
      <section id="use-cases" className="py-20 lg:py-28 border-b border-neutral-200/90 bg-[#faf9f6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>03</span>
            <span className="uppercase tracking-[0.2em]">OPERATIONAL SCENARIOS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.08]">
                Where PipelineForge delivers<br />
                measurable impact.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                Engineered for teams that require reproducible, auditable, and automated cloud-native delivery pipelines without managing brittle custom scripts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Scenario 01: High-Compliance Infrastructure */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-wider">01 / REGULATED CLOUD</span>
                  <span className="text-[10px] font-mono text-neutral-400">SOC 2 &amp; HIPAA</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">High-Compliance Environments</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Fintech, banking, and healthcare infrastructures with strict regulatory mandates that prohibit containers containing vulnerable OS packages or debug shells.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Operational Value:</div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  Distroless Debian-11 base eliminates 99.3% of attack surface.<br />
                  &rarr; Trivy gates produce audit-ready SARIF logs directly into the security dashboard.
                </div>
              </div>
            </div>

            {/* Scenario 02: Platform Engineering */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-wider">02 / PLATFORM GOLDEN PATH</span>
                  <span className="text-[10px] font-mono text-neutral-400">20+ Squads</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Platform Engineering Teams</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Internal Developer Platform (IDP) teams providing standardized CI/CD blueprints across multiple squads, eliminating fragile snowflake deployment scripts.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Operational Value:</div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  Shared composite GitHub Actions workflows and Helm charts.<br />
                  &rarr; New microservices onboard in under 15 minutes with standardized security and autoscaling.
                </div>
              </div>
            </div>

            {/* Scenario 03: High-Throughput Microservices */}
            <div className="p-8 rounded-2xl border border-neutral-200/80 bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-wider">03 / HIGH CONCURRENCY</span>
                  <span className="text-[10px] font-mono text-neutral-400">P95 &lt; 5ms</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">High-Throughput Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Real-time APIs and ingestion pipelines requiring automated load validation on every build before traffic shifting occurs.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-200/60 text-xs">
                <div className="font-semibold text-neutral-900">Operational Value:</div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70 font-mono text-neutral-700">
                  k6 stress suite simulates 500 virtual users during CI.<br />
                  &rarr; HPA scales pods from 2 to 8 dynamically; builds fail if P95 latency exceeds 5ms.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: DOCUMENTATION & CODE                          */}
      {/* ========================================================= */}
      <section id="docs" className="py-20 lg:py-28 border-b border-neutral-200/90 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>03</span>
            <span className="uppercase tracking-[0.2em]">DOCUMENTATION &amp; CODE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
                Everything is open.
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Explore the full architecture, setup guide, configuration files and source code.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/docs"
                  className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  <span>View Documentation</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a
                  href="https://github.com/Rounakneema"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-medium text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Open on GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3x2 Grid of 6 Resource Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <Link href="/architecture" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">Architecture</h3>
                  <p className="text-xs text-neutral-500">System design and component overview.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link href="/decisions" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">Decisions &amp; Metrics</h3>
                  <p className="text-xs text-neutral-500">Technical choices and performance results.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link href="/docs#setup" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">Setup Guide</h3>
                  <p className="text-xs text-neutral-500">Run it locally or on cloud.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link href="/docs#cicd" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">CI/CD Workflows</h3>
                  <p className="text-xs text-neutral-500">GitHub Actions configuration.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <Link href="/docs#helm" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.78 0 3.42.58 4.75 1.57L14.41 8H9.59L7.25 5.57A7.96 7.96 0 0112 4zm-6.43 3.25L7.7 9.4A7.95 7.95 0 004 12c0 .7.09 1.38.25 2.03L7.7 14.6l-2.13 2.15A7.97 7.97 0 014 12c0-1.78.58-3.42 1.57-4.75zM12 20a7.96 7.96 0 01-4.75-1.57L9.59 16h4.82l2.34 2.43A7.96 7.96 0 0112 20zm6.43-3.25L16.3 14.6c.16-.65.25-1.33.25-2.03 0-.7-.09-1.38-.25-2.03l2.13-.57A7.97 7.97 0 0120 12c0 1.78-.58 3.42-1.57 4.75zM10.8 10h2.4l1.4 1.4-1.4 1.4h-2.4l-1.4-1.4 1.4-1.4z" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">Helm Charts</h3>
                  <p className="text-xs text-neutral-500">Kubernetes deployment files.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <a href="https://github.com/Rounakneema" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 bg-white shadow-xs transition-all group flex items-start justify-between">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">Source Code</h3>
                  <p className="text-xs text-neutral-500">Complete project repository.</p>
                </div>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05: ARCHITECTURE SPECS & SEARCHABLE FAQ            */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-neutral-50/50 border-t border-neutral-200/90">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          {/* Architecture Banner Card */}
          <div className="mb-16 p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono block">
                ENGINEERING SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                Inspect DevSecOps Pipeline &amp; Cluster Topology
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xl">
                Explore the complete technical breakdown including multi-stage Distroless packaging, Trivy CVE gate automation, and Kubernetes rolling update configurations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/architecture"
                className="px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Pipeline Architecture</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/decisions"
                className="px-5 py-3 border border-neutral-300 hover:border-neutral-900 text-neutral-800 font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-all bg-white flex items-center gap-2"
              >
                <span>Decisions &amp; Trade-offs</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Searchable FAQ Component for SEO */}
          <SearchableFaq
            items={projectFaqs.pipelineforge}
            theme="light"
            accentColor="text-[#f97316]"
            title="Frequently Asked Questions"
            eyebrow="SEO &amp; KNOWLEDGE BASE"
            projectName="PipelineForge"
          />

          {/* Email Intake & Custom Pipeline Engineering */}
          <div className="mt-16">
            <ProjectEmailIntake
              slug="pipelineforge"
              projectName="PipelineForge"
              isLight={true}
            />
          </div>

        </div>
      </section>

    </div>
  );
}
