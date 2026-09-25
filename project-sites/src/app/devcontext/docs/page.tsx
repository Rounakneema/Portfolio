import Link from 'next/link';

export const metadata = {
    title: 'DevContext.AI | Engineering Documentation',
    description: 'Raw API Specs, Payloads, and WebSocket Schemas',
};

export default function DevContextDocsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden">
            {/* Header */}
            <header className="p-4 md:p-8 border-b border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-widest gap-4">
                <div className="flex gap-4">
                    <span className="text-white bg-[#222] px-2 py-1">Project Ref: devcontext</span>
                    <span className="text-white bg-[#222] px-2 py-1">Document: API_SPECS</span>
                </div>
                <nav className="flex gap-6 border-l border-[#333] pl-6">
                    <Link href="/devcontext" className="text-[#666] hover:text-white transition-colors">Overview</Link>
                    <Link href="/devcontext/architecture" className="text-[#666] hover:text-white transition-colors">Architecture</Link>
                    <Link href="/devcontext/decisions" className="text-[#666] hover:text-white transition-colors">Decisions</Link>
                    <Link href="/devcontext/docs" className="text-white border-b border-white hover:text-white transition-colors">Docs</Link>
                </nav>
            </header>

            <section className="p-4 md:p-8 lg:p-16 border-b border-[#333]">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-white">
                    API & Schema Documentation
                </h1>
                <p className="text-[#888] max-w-2xl border-l-4 border-white pl-4">
                    Internal technical references, payload schemas, and SAM template configurations for DevContext.AI.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-[#333]">
                {/* Sidebar Navigation */}
                <aside className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[#333] p-4 md:p-8 bg-[#050505]">
                    <div className="text-xs text-[#555] uppercase tracking-widest mb-6">Table of Contents</div>
                    <ul className="space-y-4 text-sm text-[#888]">
                        <li><a href="#rest-api" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-2 h-[1px] bg-current"></span> REST API</a></li>
                        <li><a href="#websocket" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-2 h-[1px] bg-current"></span> WebSocket Events</a></li>
                        <li><a href="#aws-sam" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-2 h-[1px] bg-current"></span> AWS SAM Config</a></li>
                        <li><a href="#terminal" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-2 h-[1px] bg-current"></span> Deployment Trace</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-3 p-4 md:p-8 lg:p-16 space-y-24">
                    
                    {/* REST API Section */}
                    <section id="rest-api" className="scroll-mt-16">
                        <h2 className="text-2xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-4 flex items-center gap-4">
                            <span className="text-[#555]">01.</span> API Gateway REST Integration
                        </h2>
                        
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-[#aaa] mb-4">POST /api/v1/analyze</h3>
                            <p className="text-sm text-[#777] mb-6">Triggers an asynchronous analysis of a GitHub repository via the Bedrock 3-stage pipeline.</p>
                            
                            <div className="bg-[#111] border border-[#333] p-4 md:p-6 mb-6">
                                <div className="text-xs text-[#555] uppercase mb-4 border-b border-[#222] pb-2">Request Payload (application/json)</div>
                                <pre className="text-xs md:text-sm text-[#a8ff60] overflow-x-auto">
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

                            <div className="bg-[#111] border border-[#333] p-4 md:p-6">
                                <div className="text-xs text-[#555] uppercase mb-4 border-b border-[#222] pb-2">Response Payload (202 Accepted)</div>
                                <pre className="text-xs md:text-sm text-[#96cbfe] overflow-x-auto">
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
                    </section>

                    {/* WebSocket Section */}
                    <section id="websocket" className="scroll-mt-16">
                        <h2 className="text-2xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-4 flex items-center gap-4">
                            <span className="text-[#555]">02.</span> WebSocket Streaming Protocol
                        </h2>
                        
                        <p className="text-sm text-[#777] mb-8">
                            Used for streaming the simulated interview session and real-time intelligence report generation. Connections authenticated via <code>websocket_ticket</code>.
                        </p>

                        <div className="space-y-6">
                            <div className="border-l border-[#333] pl-6">
                                <h4 className="text-white font-bold text-sm uppercase mb-2">Event: ANALYSIS_PROGRESS</h4>
                                <div className="bg-[#050505] border border-[#222] p-4 text-xs text-[#d3d0c8] overflow-x-auto">
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
                            
                            <div className="border-l border-[#333] pl-6">
                                <h4 className="text-white font-bold text-sm uppercase mb-2">Event: INTERVIEW_CHUNK</h4>
                                <div className="bg-[#050505] border border-[#222] p-4 text-xs text-[#d3d0c8] overflow-x-auto">
{`{
  "type": "INTERVIEW_CHUNK",
  "payload": {
    "chunk_id": "chk_001",
    "role": "interviewer",
    "text": "I noticed you used raw sockets in Revealr instead of...",
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

                    {/* AWS SAM Section */}
                    <section id="aws-sam" className="scroll-mt-16">
                        <h2 className="text-2xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-4 flex items-center gap-4">
                            <span className="text-[#555]">03.</span> Infrastructure as Code (SAM)
                        </h2>
                        
                        <div className="bg-[#111] border border-[#333] p-4 md:p-6">
                            <div className="text-xs text-[#555] uppercase mb-4 border-b border-[#222] pb-2">template.yaml (Snippet)</div>
                            <pre className="text-xs md:text-sm text-[#e6d07d] overflow-x-auto">
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
              Resource: "*"

  WebSocketApi:
    Type: AWS::ApiGatewayV2::Api
    Properties:
      Name: DevContextWS
      ProtocolType: WEBSOCKET
      RouteSelectionExpression: "$request.body.action"`}
                            </pre>
                        </div>
                    </section>

                    {/* Terminal Trace */}
                    <section id="terminal" className="scroll-mt-16">
                        <h2 className="text-2xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-4 flex items-center gap-4">
                            <span className="text-[#555]">04.</span> Pipeline Deployment Trace
                        </h2>

                        <div className="bg-[#000] border border-[#333] rounded-sm overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-[#333]">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                <div className="ml-4 text-xs text-[#555]">deploy_production.sh</div>
                            </div>
                            <div className="p-4 md:p-6 text-xs md:text-sm text-[#ccc] font-mono leading-relaxed overflow-x-auto">
                                <div className="text-[#888] mb-2">$ sam build --use-container</div>
                                <div>Starting Build inside a container...</div>
                                <div>Building codeuri: /workspace/src/analyze runtime: python3.11</div>
                                <div className="text-[#a8ff60] mb-4">Build Succeeded</div>
                                
                                <div className="text-[#888] mb-2">$ sam deploy --config-env prod --no-confirm-changeset</div>
                                <div>Deploying with following values:</div>
                                <div>===============================</div>
                                <div>Stack name                   : devcontext-prod</div>
                                <div>Region                         : us-east-1</div>
                                <div>Confirm changeset              : False</div>
                                <div className="mb-4">Deployment s3 bucket         : aws-sam-cli-managed-default-samclisourcebucket</div>
                                
                                <div>Initiating deployment</div>
                                <div>===============================</div>
                                <div className="text-[#ffffb6] mb-2">Waiting for changeset to be created..</div>
                                
                                <div className="grid grid-cols-4 gap-4 text-[#888] border-b border-[#333] pb-1 mb-2">
                                    <div className="col-span-1">Operation</div>
                                    <div className="col-span-2">LogicalResourceId</div>
                                    <div className="col-span-1">ResourceType</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 mb-1">
                                    <div className="col-span-1 text-[#a8ff60]">* Modify</div>
                                    <div className="col-span-2">AnalyzeRepoFunction</div>
                                    <div className="col-span-1">AWS::Lambda::Function</div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 mb-4">
                                    <div className="col-span-1 text-[#a8ff60]">* Modify</div>
                                    <div className="col-span-2">WebSocketApi</div>
                                    <div className="col-span-1">AWS::ApiGatewayV2::Api</div>
                                </div>

                                <div className="text-[#96cbfe]">CloudFormation events from stack operations (lineage: ...):</div>
                                <div>UPDATE_IN_PROGRESS   AWS::Lambda::Function  AnalyzeRepoFunction</div>
                                <div className="text-[#a8ff60]">UPDATE_COMPLETE      AWS::Lambda::Function  AnalyzeRepoFunction</div>
                                <div>UPDATE_IN_PROGRESS   AWS::CloudFormation::Stack  devcontext-prod</div>
                                <div className="text-[#a8ff60] mb-4">UPDATE_COMPLETE      AWS::CloudFormation::Stack  devcontext-prod</div>
                                
                                <div className="text-white font-bold">Successfully created/updated stack - devcontext-prod in us-east-1</div>
                                <div className="text-white animate-pulse mt-2">_</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="p-8 border-t border-[#333] flex justify-between items-center text-xs uppercase text-[#555]">
                <div>DevContext.AI // Documentation</div>
                <Link href="/devcontext" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-current"></span>
                    Back to Project
                </Link>
            </footer>
        </main>
    );
}
