import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SortMail // API & Documentation',
    description: 'Engineering documentation, environment configuration, and webhook payload structures for SortMail.',
};

export default function SortMailDocsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-amber-500/30 selection:text-white">
            {/* Header / Nav */}
            <nav className="p-6 md:p-12 border-b border-[#222] flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-medium gap-4 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50">
                <div className="flex gap-6 items-center">
                    <Link href="/" className="hover:text-amber-500 transition-colors text-[#888]">
                        &larr; Back
                    </Link>
                    <span className="text-[#333]">|</span>
                    <Link href="/sortmail" className="text-[#888] hover:text-white transition-colors">
                        Overview
                    </Link>
                    <Link href="/sortmail/architecture" className="text-[#888] hover:text-white transition-colors">
                        Architecture
                    </Link>
                    <Link href="/sortmail/decisions" className="text-[#888] hover:text-white transition-colors">
                        Decisions
                    </Link>
                    <span className="text-white font-semibold">
                        Docs
                    </span>
                </div>
            </nav>

            <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto space-y-16">
                
                {/* Intro */}
                <div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter mb-6 text-white border-b-4 border-amber-500 pb-4 inline-block">
                        Engineering Docs
                    </h1>
                    <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-3xl border-l-2 border-[#333] pl-4">
                        Internal documentation for SortMail integration, deployment, and webhook ingestion. Maintain strict confidentiality.
                    </p>
                </div>

                {/* Env Vars */}
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-4 text-white flex items-center gap-3">
                        <span className="bg-amber-900 text-white px-2 py-0.5 text-xs">01</span>
                        Environment Configuration
                    </h2>
                    <div className="bg-[#0a0a0a] border border-[#222] p-6 text-xs md:text-sm text-[#ccc] overflow-x-auto space-y-4">
                        <div className="text-[#555]">// .env.production</div>
                        <pre className="text-blue-400">
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

                {/* Deployment */}
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-4 text-white flex items-center gap-3">
                        <span className="bg-amber-900 text-white px-2 py-0.5 text-xs">02</span>
                        Deployment Pipeline
                    </h2>
                    <div className="bg-black border border-[#333] p-6 font-mono text-xs md:text-sm text-[#4af626] overflow-x-auto space-y-2">
                        <div className="text-[#666] mb-2"># Terminal Trace: Staging Rollout</div>
                        <div>$ git push origin staging</div>
                        <div className="text-gray-400">Triggering GitHub Action: Deploy to Staging</div>
                        <div>[1/4] Building Docker Image: sortmail/core:v0.9.2</div>
                        <div>[2/4] Running Trivy Vulnerability Scan... <span className="text-blue-400">PASS (0 Critical)</span></div>
                        <div>[3/4] Pushing to ECR... <span className="text-blue-400">OK</span></div>
                        <div>[4/4] Applying Kubernetes Manifests...</div>
                        <div className="text-yellow-400">kubectl apply -f k8s/staging/</div>
                        <div>deployment.apps/sortmail-core configured</div>
                        <div>service/sortmail-svc unchanged</div>
                        <div className="text-white font-bold mt-2">&gt; DEPLOYMENT SUCCESSFUL. AWAITING HEALTH CHECKS.</div>
                    </div>
                </div>

                {/* Webhooks */}
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-4 text-white flex items-center gap-3">
                        <span className="bg-amber-900 text-white px-2 py-0.5 text-xs">03</span>
                        Webhook Payloads
                    </h2>
                    <p className="text-[#888] text-sm mb-4">
                        SortMail dispatches webhooks when significant email processing events occur. Below is the JSON structure for a <code className="bg-[#222] text-white px-1">mail.processed</code> event.
                    </p>
                    <div className="bg-[#0a0a0a] border border-[#222] p-6 text-xs md:text-sm text-[#ccc] overflow-x-auto">
                        <div className="text-[#555] mb-4">// POST /api/webhooks/ingest</div>
                        <pre className="text-yellow-300">
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
            </section>
        </main>
    );
}
