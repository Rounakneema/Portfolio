import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Terminal, Code2, Server } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata = {
  title: 'Technical Docs & Schemas · DevContext',
  description: 'API specifications, WebSocket streaming schemas, SAM templates, and deployment traces for DevContext.',
  alternates: {
    canonical: 'https://devcontext.rounakneema.in/docs',
  },
};

export default function DevContextDocsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ee] text-[#18181b] font-sans selection:bg-[#1d4ed8] selection:text-white pb-32">
      <ProjectJsonLd slug="devcontext" pageType="Docs" />

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
              Docs &amp; Schemas
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              href="/devcontext/architecture"
              className="text-[#52525b] hover:text-[#1d4ed8] transition-colors hidden sm:block"
            >
              Architecture &rarr;
            </Link>
            <Link
              href="/devcontext/decisions"
              className="text-[#52525b] hover:text-[#1d4ed8] transition-colors hidden sm:block"
            >
              Decisions &rarr;
            </Link>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dce6fa] border border-[#bfdbfe] text-[#1d4ed8] text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
              API Specs
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 space-y-12">
        
        {/* Header */}
        <div>
          <div className="inline-block px-3 py-1 rounded-sm bg-[#dce6fa] border border-[#bfdbfe] text-[#1d4ed8] font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
            ENGINEERING SCHEMAS &amp; INTERFACES
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight font-sans">
            API &amp; WebSocket Specifications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#52525b] leading-relaxed max-w-3xl">
            Internal contract references, event payload schemas, and AWS SAM deployment blueprints for the DevContext intelligence engine.
          </p>
        </div>

        {/* Content Layout with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar TOC */}
          <aside className="lg:col-span-3">
            <div className="bg-white border border-[#ded7c8] rounded-2xl p-5 shadow-xs sticky top-20 space-y-3 font-mono text-xs">
              <div className="text-[10px] uppercase font-bold text-[#71717a] tracking-wider pb-2 border-b border-[#f0ebe0]">
                Table of Contents
              </div>
              <ul className="space-y-2 text-[#52525b]">
                <li>
                  <a href="#rest-api" className="hover:text-[#1d4ed8] transition-colors block py-0.5">
                    01. REST API Ingestion
                  </a>
                </li>
                <li>
                  <a href="#websocket" className="hover:text-[#1d4ed8] transition-colors block py-0.5">
                    02. WebSocket Streaming
                  </a>
                </li>
                <li>
                  <a href="#aws-sam" className="hover:text-[#1d4ed8] transition-colors block py-0.5">
                    03. AWS SAM Template
                  </a>
                </li>
                <li>
                  <a href="#deployment" className="hover:text-[#1d4ed8] transition-colors block py-0.5">
                    04. Deployment Trace
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Section 1: REST API */}
            <section id="rest-api" className="bg-white border border-[#ded7c8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#e5ded2] pb-3">
                <span className="text-xs font-mono font-bold text-[#1d4ed8]">01 // REST INTERFACE</span>
                <h2 className="text-xl font-bold text-[#18181b] tracking-tight mt-1">
                  POST /api/v1/analyze
                </h2>
                <p className="text-xs text-[#52525b] mt-1">
                  Triggers asynchronous cloning, AST mapping, and 3-stage synthesis for a public GitHub repository.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#71717a] font-bold block mb-2">Request Payload (JSON)</span>
                  <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-[#f4efe4] overflow-x-auto">
                    <pre className="text-xs font-mono leading-relaxed text-emerald-400">
{`{
  "repository_url": "https://github.com/rounakneema/Revealr",
  "branch": "main",
  "depth": 2,
  "options": {
    "skip_tests": true,
    "focus_areas": ["security", "architecture"]
  },
  "callback_url": "https://webhook.site/..."
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#71717a] font-bold block mb-2">Response Payload (202 Accepted)</span>
                  <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-[#f4efe4] overflow-x-auto">
                    <pre className="text-xs font-mono leading-relaxed text-blue-300">
{`{
  "job_id": "dcx_9f8b2c1a4e",
  "status": "queued",
  "estimated_completion": "30s",
  "websocket_ticket": "ws_ticket_7b9211aa",
  "links": {
    "status": "/api/v1/analyze/dcx_9f8b2c1a4e/status"
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: WebSocket Events */}
            <section id="websocket" className="bg-white border border-[#ded7c8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#e5ded2] pb-3">
                <span className="text-xs font-mono font-bold text-[#1d4ed8]">02 // WEBSOCKET STREAMING</span>
                <h2 className="text-xl font-bold text-[#18181b] tracking-tight mt-1">
                  Real-Time Mock Interview Event Loop
                </h2>
                <p className="text-xs text-[#52525b] mt-1">
                  Streams incremental AST parsing progress and interactive interview Q&amp;A sessions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#faf8f3] border border-[#e4ded2] rounded-xl p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#18181b] block">Event: ANALYSIS_PROGRESS</span>
                  <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 text-[#d4d4d8] font-mono text-xs overflow-x-auto">
{`{
  "type": "ANALYSIS_PROGRESS",
  "payload": {
    "stage": "AST_PARSING",
    "files_processed": 42,
    "total_files": 128,
    "current_file": "src/core/engine.go"
  }
}`}
                  </div>
                </div>

                <div className="bg-[#faf8f3] border border-[#e4ded2] rounded-xl p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#18181b] block">Event: INTERVIEW_CHUNK</span>
                  <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 text-[#d4d4d8] font-mono text-xs overflow-x-auto">
{`{
  "type": "INTERVIEW_CHUNK",
  "payload": {
    "chunk_id": "chk_001",
    "role": "interviewer",
    "text": "Why did you choose raw sockets in Revealr instead of net.Dial?",
    "grounding": {
      "file": "scanner/network.go",
      "lines": [45, 89]
    }
  }
}`}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: SAM Template */}
            <section id="aws-sam" className="bg-white border border-[#ded7c8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="border-b border-[#e5ded2] pb-3">
                <span className="text-xs font-mono font-bold text-[#1d4ed8]">03 // INFRASTRUCTURE AS CODE</span>
                <h2 className="text-xl font-bold text-[#18181b] tracking-tight mt-1">
                  AWS SAM Definition (template.yaml)
                </h2>
              </div>

              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-[#f4efe4] overflow-x-auto">
                <pre className="text-xs font-mono leading-relaxed text-amber-200">
{`Resources:
  AnalyzeRepoFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/analyze/
      Handler: app.lambda_handler
      Runtime: python3.11
      Timeout: 900
      MemorySize: 2048
      Environment:
        Variables:
          DDB_TABLE: !Ref AnalysisTable
          BEDROCK_MODEL_ID: anthropic.claude-3-sonnet-20240229-v1:0
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref AnalysisTable
        - Statement:
            - Effect: Allow
              Action:
                - bedrock:InvokeModel
                - bedrock:InvokeModelWithResponseStream
              Resource: "*"`}
                </pre>
              </div>
            </section>

            {/* Section 4: Deployment Trace */}
            <section id="deployment" className="bg-white border border-[#ded7c8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="border-b border-[#e5ded2] pb-3">
                <span className="text-xs font-mono font-bold text-[#1d4ed8]">04 // DEPLOYMENT VERIFICATION</span>
                <h2 className="text-xl font-bold text-[#18181b] tracking-tight mt-1">
                  Pipeline CloudFormation Trace
                </h2>
              </div>

              <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-5 text-[#f4efe4] font-mono text-xs leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#27272a] text-[#71717a]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px]">sam deploy --config-env prod</span>
                </div>
                <div className="text-[#a1a1aa]">$ sam deploy --config-env prod --no-confirm-changeset</div>
                <div className="text-emerald-400 mt-1">Initiating deployment to devcontext-prod (us-east-1)...</div>
                <div className="text-[#d4d4d8] mt-2">
                  UPDATE_IN_PROGRESS &nbsp; AWS::Lambda::Function &nbsp; AnalyzeRepoFunction<br />
                  UPDATE_COMPLETE &nbsp;&nbsp;&nbsp;&nbsp; AWS::Lambda::Function &nbsp; AnalyzeRepoFunction<br />
                  UPDATE_IN_PROGRESS &nbsp; AWS::CloudFormation::Stack &nbsp; devcontext-prod<br />
                  UPDATE_COMPLETE &nbsp;&nbsp;&nbsp;&nbsp; AWS::CloudFormation::Stack &nbsp; devcontext-prod
                </div>
                <div className="text-blue-400 font-bold mt-3">
                  Stack devcontext-prod successfully updated. Zero errors detected.
                </div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}
