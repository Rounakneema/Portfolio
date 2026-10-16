import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Layers, ShieldCheck, Terminal, Cpu, GitBranch } from 'lucide-react';
import MermaidDiagram from '@/components/Mermaid';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata = {
  title: 'Architecture Spec · DevContext',
  description: 'Deep dive into DevContext AST parsing pipeline, serverless agents, and evidence grounding engine.',
  alternates: {
    canonical: 'https://devcontext.rounakneema.in/architecture',
  },
};

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ee] text-[#18181b] font-sans selection:bg-[#1d4ed8] selection:text-white pb-32">
      <ProjectJsonLd slug="devcontext" pageType="Architecture" />

      {/* Sticky Top Navigation */}
      <nav className="border-b border-[#e5ded2] bg-[#f7f5ee]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3">
            <Link
              href="/devcontext"
              className="text-[#52525b] hover:text-[#1d4ed8] font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to DevContext</span>
            </Link>
            <span className="text-[#d4cebf]">/</span>
            <span className="text-[#1d4ed8] font-mono font-bold tracking-widest uppercase text-[11px]">
              Architecture Spec
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              href="/devcontext/decisions"
              className="text-[#52525b] hover:text-[#1d4ed8] transition-colors hidden sm:block"
            >
              Decisions &rarr;
            </Link>
            <Link
              href="/devcontext/docs"
              className="text-[#52525b] hover:text-[#1d4ed8] transition-colors hidden sm:block"
            >
              Docs &rarr;
            </Link>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dce6fa] border border-[#bfdbfe] text-[#1d4ed8] text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
              AST Evidence Grounded
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 space-y-16">
        
        {/* Subpage Header */}
        <div>
          <div className="inline-block px-3 py-1 rounded-sm bg-[#dce6fa] border border-[#bfdbfe] text-[#1d4ed8] font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
            SYSTEM SPECIFICATION
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight font-sans">
            Serverless AST Intelligence &amp; Multi-Model Pipeline
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525b] leading-relaxed max-w-3xl">
            DevContext leverages a serverless architecture combining Tree-sitter AST parsing, multi-model AI routing, and progressive streaming to deliver verified codebase intelligence in under 30 seconds.
          </p>
        </div>

        {/* Topology Diagram Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#e5ded2] pb-3">
            <h2 className="text-lg font-bold font-sans text-[#18181b] uppercase tracking-wide">
              Topology Overview
            </h2>
            <span className="text-xs font-mono text-[#71717a]">AWS Serverless / Bedrock</span>
          </div>

          <div className="bg-white border border-[#ded7c8] rounded-2xl p-6 sm:p-8 shadow-sm overflow-x-auto">
            <MermaidDiagram chart={`
flowchart TD
    subgraph API [API GATEWAY LAYER]
        AGW["Amazon API Gateway (REST + WebSocket)\n• CORS enabled\n• Request throttling (10K req/sec)\n• WebSocket for real-time interview"]
    end

    Auth["Authentication\nService (Cognito)"]
    Orch["Repository\nProcess Orchestrator"]
    WSS["Interview\nService (WSS)"]

    AGW --> Auth
    AGW --> Orch
    AGW --> WSS

    subgraph ProcLayer [PROCESSING LAYER (AWS Lambda)]
        subgraph S0 [STAGE 0: Repository Ingestion]
            direction LR
            Clone[GitHub Clone] --> Parse[Tree-sitter Parser] --> Map[AST Context Map] --> Cache[S3 Cache]
        end

        subgraph S1 [STAGE 1: Project Review]
            direction TB
            T1[Tech Stack] --> Syn1[Synthesis Agent]
            A1[Architecture] --> Syn1
            R1[Risk & Concurrency] --> Syn1
        end

        subgraph S2 [STAGE 2: Intelligence Report]
            direction TB
            A2[Topology] --> RB[Question Generator]
            D2[Tradeoffs] --> RB
            Tr2[Failure Modes] --> RB
            Sc2[Scalability] --> RB
        end
    end

    Orch --> S0
    S0 --> S1
    S1 --> S2

    subgraph Bedrock [AI/ML LAYER (AWS Bedrock)]
        BR["Amazon Bedrock Runtime\n\nStage 1: Claude 3.5 Sonnet / Mistral Large\nStage 2: Claude 3.5 Sonnet / Mistral Large\nEvaluation: Fast-Inference Agent"]
    end

    ProcLayer --> Bedrock
            `} />
          </div>
        </section>

        {/* Component Breakdown */}
        <section className="space-y-6">
          <div className="border-b border-[#e5ded2] pb-3">
            <h2 className="text-lg font-bold font-sans text-[#18181b] uppercase tracking-wide">
              Component Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#ded7c8] rounded-2xl p-6 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#1d4ed8]">STAGE 0</span>
              <h3 className="text-base font-bold text-[#18181b]">Ingestion &amp; AST Mapping</h3>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                Clones and normalizes the target GitHub repository. Tree-sitter isolates developer-authored code from vendor dependencies (such as node_modules or standard framework templates), producing a clean AST context map cached in S3.
              </p>
            </div>

            <div className="bg-white border border-[#ded7c8] rounded-2xl p-6 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#1d4ed8]">STAGE 1 &amp; 2</span>
              <h3 className="text-base font-bold text-[#18181b]">Parallel Agent Synthesis</h3>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                To achieve a sub-30 second latency SLA, specialized Lambda workers inspect architecture, concurrency patterns, and storage bottlenecks in parallel. A reducer agent verifies citations before saving state to DynamoDB.
              </p>
            </div>

            <div className="bg-white border border-[#ded7c8] rounded-2xl p-6 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#1d4ed8]">STAGE 3</span>
              <h3 className="text-base font-bold text-[#18181b]">Real-Time Mock Interview</h3>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                WebSocket connection tracks live interview sessions. Questions adapt to the candidate responses, scoring clarity, depth, and communication against verified code call graphs in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Trace Evidence */}
        <section className="space-y-6">
          <div className="border-b border-[#e5ded2] pb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold font-sans text-[#18181b] uppercase tracking-wide">
              Verification &amp; Grounding Evidence
            </h2>
            <span className="text-xs font-mono text-emerald-700 font-bold">Verified Trace</span>
          </div>

          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 shadow-sm overflow-hidden text-[#f4efe4]">
            <div className="flex items-center justify-between border-b border-[#27272a] pb-3 mb-4 font-mono text-xs text-[#a1a1aa]">
              <span>Claim: Zero Hallucination Line Referencing</span>
              <span className="text-emerald-400">AST Match: 100%</span>
            </div>
            <pre className="font-mono text-xs leading-relaxed text-[#d4d4d8] overflow-x-auto whitespace-pre-wrap">
{`$ devcontext query --repo /src/auth --question "Does it use bcrypt?"
[+] Searching abstract syntax trees across 142 repository files...
[+] AST isolation: excluded 12,400 vendor files (node_modules, /dist)
[+] Grounding engine verified lines 45-89 in auth/hash.go
[✓] ANSWER: Yes. Evidence: \`bcrypt.GenerateFromPassword()\`
[✓] CONFIDENCE: 100% (Direct AST reference matched)`}
            </pre>
          </div>
        </section>

      </div>
    </main>
  );
}
