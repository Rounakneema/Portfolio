import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Architecture — MetroMind',
    description: 'Deep-dive into MetroMind\'s 12+ microservices, RabbitMQ async messaging pipeline, and Vector DB integration.',
    alternates: { canonical: 'https://metromind.rounakneema.in/architecture' },
};

export default function MetroMindArchitecture() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500/30 selection:text-purple-200 pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <div className="text-xs text-purple-400 uppercase tracking-widest mb-4">// System Architecture</div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Microservices & Message Queues</h1>
                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        MetroMind uses a heavily decoupled architecture consisting of over 12 independent containerized services to handle document ingestion, OCR extraction, and semantic search without bottlenecking the API layer.
                    </p>
                </div>

                {/* High-Level Architecture Diagram (ASCII) */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mb-16 overflow-x-auto">
                    <div className="text-xs text-zinc-500 mb-6">// Component Overview</div>
                    <pre className="text-sm text-zinc-300 leading-loose whitespace-pre">{`
  Frontend Client (React)
        │ (REST / JSON)
        ▼
  ┌───────────────────────────┐
  │      API Gateway (Go)     │ ───► Auth / RBAC DB (Postgres)
  └─────────────┬─────────────┘
                │ (Publish Event: document.uploaded)
                ▼
  ┌───────────────────────────┐
  │   RabbitMQ Message Bus    │
  └─────────────┬─────────────┘
                │ (Subscribe)
                ▼
  ┌───────────────────────────┐
  │   OCR Worker (Python)     │ ───► Object Storage (MinIO)
  └─────────────┬─────────────┘
                │ (Publish Event: text.extracted)
                ▼
  ┌───────────────────────────┐
  │ Embedding Engine (Python) │ 
  └─────────────┬─────────────┘
                │
                ▼
  ┌───────────────────────────┐
  │ Vector Database (Milvus)  │
  └───────────────────────────┘
`}</pre>
                </div>

                {/* Next */}
                <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">
                    <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">← Overview</Link>
                </div>
            </div>
        </div>
    );
}
