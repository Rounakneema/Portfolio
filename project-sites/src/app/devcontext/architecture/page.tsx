import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';

export const metadata = {
    title: 'Architecture Spec | DevContext.AI',
    description: 'Deep dive into the architecture of DevContext.AI',
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#1f6feb] selection:text-[#fff] overflow-x-hidden">
            {/* Header */}
            <header className="p-4 md:p-8 border-b border-[#1f6feb]/30 flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-[#58a6ff] bg-[#222] px-2 py-1">Ref: devcontext/architecture</span>
                </div>
                <nav className="flex gap-6 border-l border-[#1f6feb]/30 pl-6 text-sm">
                    <Link href="/" className="text-[#666] hover:text-[#58a6ff] transition-colors">Analysis Pipeline</Link>
                    <Link href="/architecture" className="text-[#666] hover:text-[#58a6ff] transition-colors">Architecture</Link>
                    <Link href="/decisions" className="text-[#666] hover:text-[#58a6ff] transition-colors">Interview Engine</Link>
                    <Link href="/docs" className="text-[#666] hover:text-[#58a6ff] transition-colors">Docs</Link>
                </nav>
            </header>

            <section className="p-4 md:p-8 lg:p-16 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-[#58a6ff] border-l-4 border-[#1f6feb] pl-6">
                    System Architecture
                </h1>

                <div className="prose prose-invert prose-p:text-[#aaa] prose-headings:text-[#58a6ff] prose-a:text-[#58a6ff] max-w-none">
                    <p className="text-xl mb-12">
                        DevContext.AI (Klarity) is built on a heavily optimized AWS Serverless architecture, leveraging Amazon Bedrock for multi-model AI routing, DynamoDB for state management, and a progressive streaming pipeline to deliver initial analysis results in under 30 seconds.
                    </p>

                    <h2 className="text-2xl uppercase tracking-widest border-b border-[#1f6feb]/30 pb-4 mb-8">Topology Overview</h2>

                    <div className="bg-[#050505] border border-[#222] p-4 md:p-8 overflow-x-auto mb-16">
                        <MermaidDiagram chart={`
flowchart TD
    subgraph API [API GATEWAY LAYER]
        AGW["Amazon API Gateway (REST + WebSocket)\n• CORS enabled\n• Cognito authorizer\n• Request throttling (10K req/sec)\n• WebSocket for real-time interview"]
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
            Clone[GitHub Clone] --> Parse[File Parser] --> Map[Context Map Gen] --> Cache[S3 Cache]
        end

        subgraph S1 [STAGE 1: Project Review]
            direction TB
            T1[Tech Found] --> Syn1[Synthesis Agent]
            A1[Architecture] --> Syn1
            R1[Risk & Sec] --> Syn1
        end

        subgraph S2 [STAGE 2: Intelligence Report]
            direction TB
            A2[Architecture] --> RB[Resume Builder]
            D2[Design Decisions] --> RB
            Tr2[Tradeoffs] --> RB
            Sc2[Scalability] --> RB
        end
    end

    Orch --> S0
    S0 --> S1
    S1 --> S2

    subgraph Bedrock [AI/ML LAYER (AWS Bedrock)]
        BR["Amazon Bedrock Runtime\n\nStage 1: Mistral Large 3 / Claude 3.5 Sonnet\nStage 2: Mistral Large 3 / Claude 3.5 Sonnet\nStage 3: Mistral Large 3 / Claude 3.5 Sonnet\nEvaluation: Mistral Large 3"]
    end

    ProcLayer --> Bedrock
                        `} />
                    </div>

                    <h2 className="text-2xl uppercase tracking-widest border-b border-[#1f6feb]/30 pb-4 mb-8">Component Breakdown</h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-[#58a6ff] mb-4">01 // The Ingestion Engine (Stage 0)</h3>
                            <p>
                                The pipeline begins with the Repository Ingestion Lambda. It handles the cloning, parsing, and normalization of the GitHub repository. To ensure we don't hallucinate context, we generate a highly structured <strong>Context Map</strong>. This map isolates user-written code from standard boilerplate (e.g., node_modules, framework defaults), creating an AST-like representation of the repository's semantic structure. This map is cached in S3 for rapid retrieval by subsequent stages.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#58a6ff] mb-4">02 // Parallel Agent Synthesis (Stage 1 & 2)</h3>
                            <p>
                                To achieve our latency SLA of 30 seconds for the initial review, we orchestrate parallel Lambda agents. Each agent assumes a specific persona (Architecture, Risk, Tech Foundation) and queries the AI models concurrently. The results are fed into a Synthesis Agent that acts as a MapReduce reducer, compiling conflicting signals into a cohesive JSON report stored in DynamoDB. Stage 2 repeats this pattern for the deep-dive intelligence report but runs asynchronously in the background.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#58a6ff] mb-4">03 // Real-Time WebSocket Interview (Stage 3)</h3>
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
                <Link href="/" className="hover:text-[#58a6ff] transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Back
                </Link>
            </footer>
        </main>
    );
}
