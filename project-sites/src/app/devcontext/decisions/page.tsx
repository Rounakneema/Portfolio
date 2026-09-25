import Link from 'next/link';

export const metadata = {
    title: 'Engineering Decisions | DevContext.AI',
    description: 'Engineering trade-offs, AI routing, and grounding logic.',
};

export default function DecisionsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#1f6feb] selection:text-[#fff] overflow-x-hidden">
            {/* Header */}
            <header className="p-4 md:p-8 border-b border-[#1f6feb]/30 flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-[#58a6ff] bg-[#222] px-2 py-1">Ref: devcontext/decisions</span>
                </div>
                <nav className="flex gap-6 border-l border-[#1f6feb]/30 pl-6 text-sm">
                    <Link href="/devcontext" className="text-[#666] hover:text-[#58a6ff] transition-colors">Analysis Pipeline</Link>
                    <Link href="/devcontext/architecture" className="text-[#666] hover:text-[#58a6ff] transition-colors">Architecture</Link>
                    <Link href="/devcontext/decisions" className="text-[#666] hover:text-[#58a6ff] transition-colors">Interview Engine</Link>
                    <Link href="/devcontext/docs" className="text-[#666] hover:text-[#58a6ff] transition-colors">Docs</Link>
                </nav>
            </header>

            <section className="p-4 md:p-8 lg:p-16 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-[#58a6ff] border-l-4 border-[#1f6feb] pl-6">
                    Engineering Trade-offs & Decisions
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 prose prose-invert prose-p:text-[#aaa] prose-headings:text-[#58a6ff] prose-a:text-[#58a6ff] max-w-none">
                        <p className="text-xl mb-12">
                            Building an AI-driven code intelligence platform at scale requires strict trade-offs between latency, cost, and analytical depth. We opted for a "Progressive Delivery" model powered by a multi-model routing strategy on Amazon Bedrock.
                        </p>

                        <h2 className="text-2xl uppercase tracking-widest border-b border-[#1f6feb]/30 pb-4 mb-8">AI Grounding Logic</h2>
                        <p>
                            LLMs have a tendency to hallucinate architectural complexity when reading code. To counter this, we implemented strict <strong>Grounding Assertions</strong>. The system is programmed to distinguish between user-written code and boilerplate framework code (e.g., standard React setup, Express middleware defaults).
                        </p>
                        <p>
                            Every architectural claim made by the Synthesis Agent MUST reference a specific file path and line number. If the assertion engine detects a claim without verifiable origin in the Context Map, the claim is stripped. This ensures recruiters get an honest, factual representation of the candidate's actual work.
                        </p>

                        <h2 className="text-2xl uppercase tracking-widest border-b border-[#1f6feb]/30 pb-4 mb-8 mt-16">Multi-Model AI Routing</h2>
                        <p>
                            Cost optimization is critical when processing 50K+ tokens per repository. We use a dynamic routing strategy via Amazon Bedrock:
                        </p>
                        <ul className="space-y-4 my-8 list-none pl-0">
                            <li className="bg-[#111] p-4 border-l-2 border-[#555]">
                                <strong className="text-[#58a6ff] block mb-2">Stage 1 (Code Review) & Stage 2 (Intelligence)</strong>
                                <span className="text-sm">We route to Claude 3.5 Sonnet / Mistral Large 3 for high-reasoning tasks. These models excel at synthesizing architectural trade-offs from raw code but are expensive. We offset costs by parallelizing narrow queries rather than asking one massive question.</span>
                            </li>
                            <li className="bg-[#111] p-4 border-l-2 border-[#555]">
                                <strong className="text-[#58a6ff] block mb-2">Stage 3 (Interview Real-Time Evaluation)</strong>
                                <span className="text-sm">We step down to faster inference models for the interactive websocket loop. The context window is small (just the current question and answer), requiring low latency rather than deep code synthesis.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl uppercase tracking-widest border-b border-[#1f6feb]/30 pb-4 mb-8 mt-16">Trade-off: Serverless Cold Starts vs Idle Costs</h2>
                        <p>
                            Running this on provisioned containers (ECS/EKS) would solve cold starts but incur massive idle costs given the bursty nature of resume processing. We chose AWS Lambda for scale-to-zero capabilities. The trade-off is a potential 1-3 second cold start penalty on the initial repository clone. We mask this latency from the user using an optimistic UI loading sequence on the frontend.
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-[#050505] border border-[#222] p-6">
                            <div className="text-xs text-[#666] uppercase mb-4 border-b border-[#1f6feb]/30 pb-2">Cost Metrics</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-[#888] text-sm">Avg Tokens / Repo</div>
                                    <div className="text-[#58a6ff] text-xl font-bold">~55,000</div>
                                </div>
                                <div>
                                    <div className="text-[#888] text-sm">Cost / Analysis</div>
                                    <div className="text-[#58a6ff] text-xl font-bold">~$1.42</div>
                                </div>
                                <div>
                                    <div className="text-[#888] text-sm">SLA Time-to-First-Byte</div>
                                    <div className="text-[#58a6ff] text-xl font-bold">&lt; 30s</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#050505] border border-[#222] p-6 font-mono text-[10px] text-[#888]">
                            <div className="text-[#58a6ff] mb-2">// Grounding Assertion Snippet</div>
                            <pre className="overflow-x-auto">
{`function validateClaim(claim) {
  if (!claim.filePath || !claim.lineRefs) {
    return { valid: false, reason: 'unverifiable' }
  }
  
  const mapNode = contextMap.get(claim.filePath);
  if (mapNode.isBoilerplate) {
    return { valid: false, reason: 'framework_code' }
  }
  
  return { valid: true };
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                <div>DevContext.AI // {new Date().getFullYear()}</div>
                <Link href="/devcontext" className="hover:text-[#58a6ff] transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Back
                </Link>
            </footer>
        </main>
    );
}
