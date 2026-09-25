import Link from 'next/link';

export const metadata = {
    title: 'Architecture Spec | DevContext.AI',
    description: 'Deep dive into the architecture of DevContext.AI',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden">
            {/* Header */}
            <header className="p-4 md:p-8 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-white bg-[#222] px-2 py-1">Ref: devcontext/architecture</span>
                </div>
                <nav className="flex gap-6 border-l border-[#333] pl-6">
                    <Link href="/devcontext" className="text-[#666] hover:text-white transition-colors">Overview</Link>
                    <Link href="/devcontext/architecture" className="text-white border-b border-white hover:text-white transition-colors">Architecture</Link>
                    <Link href="/devcontext/decisions" className="text-[#666] hover:text-white transition-colors">Decisions</Link>
                </nav>
            </header>

            <section className="p-4 md:p-8 lg:p-16 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-white border-l-4 border-white pl-6">
                    System Architecture
                </h1>

                <div className="prose prose-invert prose-p:text-[#aaa] prose-headings:text-white prose-a:text-white max-w-none">
                    <p className="text-xl mb-12">
                        DevContext.AI (Klarity) is built on a heavily optimized AWS Serverless architecture, leveraging Amazon Bedrock for multi-model AI routing, DynamoDB for state management, and a progressive streaming pipeline to deliver initial analysis results in under 30 seconds.
                    </p>

                    <h2 className="text-2xl uppercase tracking-widest border-b border-[#333] pb-4 mb-8">Topology Overview</h2>

                    <div className="bg-[#050505] border border-[#222] p-4 md:p-8 overflow-x-auto mb-16">
                        <pre className="text-[10px] md:text-xs text-[#888] leading-tight">
{`┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              API GATEWAY LAYER                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────────────────────┐   │
│  │                     Amazon API Gateway (REST + WebSocket)                    │   │
│  │  • CORS enabled                                                              │   │
│  │  • Cognito authorizer                                                        │   │
│  │  • Request throttling (10K req/sec)                                          │   │
│  │  • WebSocket for real-time interview                                         │   │
│  └──────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────┬──────────────────────────────────────────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
            ↓                      ↓                      ↓
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│  Authentication     │ │  Repository         │ │  Interview          │
│  Service (Cognito)  │ │  Process Orchestrator│ │  Service (WSS)      │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
                                   │
                                   ↓
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            PROCESSING LAYER (AWS Lambda)                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────────────────────┐     │
│  │                         STAGE 0: Repository Ingestion                      │     │
│  ├────────────────────────────────────────────────────────────────────────────┤     │
│  │  [GitHub Clone] → [File Parser] → [Context Map Gen] → [S3 Cache]           │     │
│  └────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────┐     │
│  │                    STAGE 1: Project Review (Parallel Agents)               │     │
│  ├────────────────────────────────────────────────────────────────────────────┤     │
│  │  [Tech Found]   [Architecture]   [Risk & Sec]                              │     │
│  │         \\            |             /                                        │     │
│  │          ───> [Synthesis Agent] <───                                       │     │
│  └────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────┐     │
│  │                 STAGE 2: Intelligence Report (Parallel Agents)             │     │
│  ├────────────────────────────────────────────────────────────────────────────┤     │
│  │  [Architecture] [Design Decisions] [Tradeoffs] [Scalability]               │     │
│  │         \\            |                |            /                        │     │
│  │          ─────> [Resume Builder] <──────────────────                         │     │
│  └────────────────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ↓
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              AI/ML LAYER (AWS Bedrock)                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────────────────────┐     │
│  │                         Amazon Bedrock Runtime                             │     │
│  ├────────────────────────────────────────────────────────────────────────────┤     │
│  │  Stage 1 (Code Review):    Mistral Large 3 / Claude 3.5 Sonnet             │     │
│  │  Stage 2 (Intelligence):   Mistral Large 3 / Claude 3.5 Sonnet             │     │
│  │  Stage 3 (Questions):      Mistral Large 3 / Claude 3.5 Sonnet             │     │
│  │  Interview Evaluation:     Mistral Large 3 (fast inference)                │     │
│  └────────────────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────────────┘`}
                        </pre>
                    </div>

                    <h2 className="text-2xl uppercase tracking-widest border-b border-[#333] pb-4 mb-8">Component Breakdown</h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">01 // The Ingestion Engine (Stage 0)</h3>
                            <p>
                                The pipeline begins with the Repository Ingestion Lambda. It handles the cloning, parsing, and normalization of the GitHub repository. To ensure we don't hallucinate context, we generate a highly structured <strong>Context Map</strong>. This map isolates user-written code from standard boilerplate (e.g., node_modules, framework defaults), creating an AST-like representation of the repository's semantic structure. This map is cached in S3 for rapid retrieval by subsequent stages.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">02 // Parallel Agent Synthesis (Stage 1 & 2)</h3>
                            <p>
                                To achieve our latency SLA of 30 seconds for the initial review, we orchestrate parallel Lambda agents. Each agent assumes a specific persona (Architecture, Risk, Tech Foundation) and queries the AI models concurrently. The results are fed into a Synthesis Agent that acts as a MapReduce reducer, compiling conflicting signals into a cohesive JSON report stored in DynamoDB. Stage 2 repeats this pattern for the deep-dive intelligence report but runs asynchronously in the background.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">03 // Real-Time WebSocket Interview (Stage 3)</h3>
                            <p>
                                The interview system utilizes AWS API Gateway WebSockets linked to a stateful DynamoDB session tracker. It runs a dynamic loop: extracting topics from the Stage 2 report, generating grounded questions, evaluating candidate answers in real-time, and updating signals. The use of fast-inference models for the evaluation loop ensures conversational latency remains low.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                <div>DevContext.AI // {new Date().getFullYear()}</div>
                <Link href="/devcontext" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Back
                </Link>
            </footer>
        </main>
    );
}
