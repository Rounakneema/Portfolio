import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
    title: 'SortMail // API & Documentation',
    description: 'Engineering documentation, environment configuration, and webhook payload structures for SortMail.',
};

export default function SortMailDocsPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-amber-500/30 selection:text-black">
            {/* Header / Nav */}
            <ScrollReveal direction="up" delay={0.1}>
                <nav className="p-6 md:p-12 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-gray-50/90 backdrop-blur-md z-50">
                    <StaggerContainer>
                        <div className="flex gap-6 items-center">
                            <StaggerItem>
                                <Link href="/" className="text-gray-600 hover:text-amber-500 hover:-translate-y-1 transition-all duration-300 inline-block border border-transparent hover:border-amber-500 p-1 rounded">
                                    &larr; Back
                                </Link>
                            </StaggerItem>
                            <StaggerItem>
                                <span className="text-gray-300">|</span>
                            </StaggerItem>
                            <StaggerItem>
                                <Link href="/" className="text-gray-600 hover:text-black hover:-translate-y-1 transition-all duration-300 inline-block border border-transparent hover:border-amber-500 p-1 rounded">
                                    Overview
                                </Link>
                            </StaggerItem>
                            <StaggerItem>
                                <Link href="/architecture" className="text-gray-600 hover:text-black hover:-translate-y-1 transition-all duration-300 inline-block border border-transparent hover:border-amber-500 p-1 rounded">
                                    Architecture
                                </Link>
                            </StaggerItem>
                            <StaggerItem>
                                <Link href="/decisions" className="text-gray-600 hover:text-black hover:-translate-y-1 transition-all duration-300 inline-block border border-transparent hover:border-amber-500 p-1 rounded">
                                    Decisions
                                </Link>
                            </StaggerItem>
                            <StaggerItem>
                                <span className="text-black font-semibold p-1">
                                    Docs
                                </span>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </nav>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
                <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
                    <StaggerContainer>
                        <div className="space-y-16">
                            {/* Intro */}
                            <StaggerItem>
                                <div>
                                    <h1 className="text-2xl font-black uppercase tracking-tight mb-6 text-black border-b-4 border-amber-500 pb-4 inline-block">
                                        Engineering Docs
                                    </h1>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl border-l-2 border-gray-300 pl-4">
                                        Internal documentation for SortMail integration, deployment, and webhook ingestion. Maintain strict confidentiality.
                                    </p>
                                </div>
                            </StaggerItem>

                            {/* Env Vars */}
                            <StaggerItem>
                                <div>
                                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black flex items-center gap-3">
                                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 text-xs rounded">01</span>
                                        Environment Configuration
                                    </h2>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-6 text-xs md:text-sm text-gray-700 overflow-x-auto space-y-4">
                                        <div className="text-gray-500">// .env.production</div>
                                        <pre className="text-blue-600">
{`# OAuth Credentials
GOOGLE_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=gocspX-xxxxx_xxxxxxxxxxxxxxxxxxxxxx
MS_GRAPH_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
MS_GRAPH_TENANT_ID=common

# AI Pipeline
CLAUDE_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxx
DEFAULT_MODEL=claude-3-5-sonnet-20241022

# Infrastructure
DATABASE_URL=postgresql://sortmail_admin:XXXXXX@db.internal:5432/sortmail_prod
REDIS_URL=redis://cache.internal:6379/0

# Security
JWT_SECRET_KEY=xxxxxx_generate_with_openssl_rand_base64_32_xxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxx`}
                                        </pre>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Deployment */}
                            <StaggerItem>
                                <div>
                                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black flex items-center gap-3">
                                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 text-xs rounded">02</span>
                                        Deployment Pipeline
                                    </h2>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-6 font-mono text-xs md:text-sm text-green-700 overflow-x-auto space-y-2">
                                        <div className="text-gray-500 mb-2"># Terminal Trace: Staging Rollout</div>
                                        <div>$ git push origin staging</div>
                                        <div className="text-gray-500">Triggering GitHub Action: Deploy to Staging</div>
                                        <div>[1/4] Building Docker Image: sortmail/core:v0.9.2</div>
                                        <div>[2/4] Running Trivy Vulnerability Scan... <span className="text-blue-600">PASS (0 Critical)</span></div>
                                        <div>[3/4] Pushing to ECR... <span className="text-blue-600">OK</span></div>
                                        <div>[4/4] Applying Kubernetes Manifests...</div>
                                        <div className="text-yellow-600">kubectl apply -f k8s/staging/</div>
                                        <div>deployment.apps/sortmail-core configured</div>
                                        <div>service/sortmail-svc unchanged</div>
                                        <div className="text-black font-bold mt-2">&gt; DEPLOYMENT SUCCESSFUL. AWAITING HEALTH CHECKS.</div>
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Webhooks */}
                            <StaggerItem>
                                <div>
                                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black flex items-center gap-3">
                                        <span className="bg-amber-100 text-amber-900 px-2 py-0.5 text-xs rounded">03</span>
                                        Webhook Payloads
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        SortMail dispatches webhooks when significant email processing events occur. Below is the JSON structure for a <code className="bg-gray-200 text-black px-1 rounded">mail.processed</code> event.
                                    </p>
                                    <div className="bg-black/5 border border-black/10 backdrop-blur-md rounded-lg shadow-xl p-6 text-xs md:text-sm text-gray-700 overflow-x-auto">
                                        <div className="text-gray-500 mb-4">// POST /api/webhooks/ingest</div>
                                        <pre className="text-yellow-700">
{`{
  "event": "mail.processed",
  "timestamp": "2026-09-25T09:45:12Z",
  "data": {
    "thread_id": "thr_98x1023a",
    "message_id": "<XYZ.123@mail.gmail.com>",
    "sender": {
      "name": "Jane Doe",
      "email": "jane@megacorp.com",
      "priority_score": 0.92
    },
    "bluf_summary": "Client requires signed NDA by EOD Friday before releasing staging environment keys.",
    "tasks": [
      {
        "description": "Sign and return NDA",
        "deadline": "2026-09-27T17:00:00Z",
        "urgency": "HIGH"
      }
    ],
    "attachments": [
      {
        "filename": "Mutual_NDA_Draft.pdf",
        "mime_type": "application/pdf",
        "scan_status": "CLEAN",
        "size_bytes": 1048576
      }
    ]
  },
  "signature": "hmac_sha256_xxxxxxxxxxxxxx"
}`}
                                        </pre>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </section>
            </ScrollReveal>
        </main>
    );
}
