import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'OSA - Engineering Decisions',
    description: 'Deep dive into the technical trade-offs, offline-first design choices, and performance metrics.',
};

export default function OSADecisionsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden pb-32">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .grid-bg {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, #111 1px, transparent 1px),
                                      linear-gradient(to bottom, #111 1px, transparent 1px);
                }
                .nav-link {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border: 1px solid #333;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }
                .nav-link:hover, .nav-link.active {
                    background: #fff;
                    color: #000;
                    border-color: #fff;
                }
                .code-trace {
                    border-left: 4px solid #ff00c1;
                    padding-left: 1rem;
                    background: #111;
                    font-size: 0.875rem;
                    overflow-x: auto;
                }
            `}} />

            <header className="px-6 py-12 md:py-16 border-b-4 border-[#333] grid-bg">
                <div className="max-w-7xl mx-auto">
                    <nav className="mb-12 flex flex-wrap gap-4 border-b border-[#333] pb-6">
                        <Link href="/" className="nav-link">← Index</Link>
                        <Link href="/osa" className="nav-link">Overview</Link>
                        <Link href="/osa/architecture" className="nav-link">Architecture</Link>
                        <Link href="/osa/decisions" className="nav-link active">Decisions</Link>
                    </nav>

                    <h1 className="text-2xl font-black uppercase tracking-tighter mb-4 text-[#fff]">
                        Engineering Decisions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                        Strict constraints breed creative architectures. Here are the core trade-offs and offline-first design choices that shape the system.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                
                {/* Decision 1 */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-xl font-bold uppercase tracking-widest text-[#00fff9] mb-4">
                            01. Zero Dependencies & Offline-First
                        </h2>
                        <div className="text-sm uppercase tracking-widest text-gray-500 mb-2 border-b border-[#333] pb-2">Context & Trade-off</div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Deploying in air-gapped or high-security Kubernetes environments means we cannot rely on external APIs (like AWS Macie or external ML APIs). Everything must run entirely on-cluster.
                        </p>
                    </div>
                    <div className="lg:col-span-8 brutalist-border p-8 bg-[#050505]">
                        <h3 className="text-lg font-bold text-[#fff] mb-4">The Single Binary / Sidecar Model</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Instead of deploying a centralized secret-scanning service that requires log forwarding (and potential leak in transit), we chose a decentralized sidecar model. The LogShield engine is compiled down to a highly optimized artifact that intercepts logs via shared volumes.
                        </p>
                        <div className="code-trace p-4 text-[#e0e0e0]">
<pre>
{`// TLS Certificates for the Webhook are self-signed internally 
// using a Go-based cert generator on startup.
// We DO NOT require cert-manager.

func GenerateSelfSignedCerts() error {
    log.Println("[BOOT] Generating ephemeral Webhook TLS...")
    // In-memory generation avoids relying on PKI infrastructure
}`}
</pre>
                        </div>
                    </div>
                </section>

                {/* Decision 2 */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-xl font-bold uppercase tracking-widest text-[#ff00c1] mb-4">
                            02. Aho-Corasick over Raw Regex
                        </h2>
                        <div className="text-sm uppercase tracking-widest text-gray-500 mb-2 border-b border-[#333] pb-2">Performance Critical</div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Running 600+ complex regular expressions on every single log line in a high-throughput microservice would cause severe CPU throttling and latency.
                        </p>
                    </div>
                    <div className="lg:col-span-8 brutalist-border p-8 bg-[#050505]">
                        <h3 className="text-lg font-bold text-[#fff] mb-4">Algorithmic Fast-Path</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            We implemented a fast-path filter using the Aho-Corasick string matching algorithm. This automaton searches for a large dictionary of high-entropy prefixes (e.g., `sk_live_`, `xoxb-`, `BEGIN RSA`) in a single pass over the log line. Time complexity drops to <code>O(N + M + Z)</code> where N is text length.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Only if the automaton triggers a match does the line advance to the expensive Regex Engine and Context Scorer. This reduces CPU load by ~92% on typical application logs.
                        </p>
                    </div>
                </section>

                {/* Decision 3 */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-xl font-bold uppercase tracking-widest text-[#e0e0e0] mb-4">
                            03. Deterministic Over Generative AI
                        </h2>
                        <div className="text-sm uppercase tracking-widest text-gray-500 mb-2 border-b border-[#333] pb-2">Accuracy vs Hype</div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            While LLMs are excellent at semantic understanding, they are non-deterministic, slow, and computationally expensive for per-line log analysis.
                        </p>
                    </div>
                    <div className="lg:col-span-8 brutalist-border p-8 bg-[#050505]">
                        <h3 className="text-lg font-bold text-[#fff] mb-4">Statistical Machine Learning</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            We opted for a lightweight, deterministic ML model (utilizing Random Forests / Gradient Boosting trained on SecretBench). It runs inference in &lt;1ms per line. The model calculates the Secret Confidence Score (SCS) based on hard features:
                        </p>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6 marker:text-[#ff00c1]">
                            <li>Shannon Entropy Density</li>
                            <li>Character Set Distribution (Z-Score outliers)</li>
                            <li>Contextual keywords (e.g., proximity to "Bearer")</li>
                        </ul>
                        <div className="code-trace p-4 text-[#e0e0e0]">
<pre>
{`def calculate_scs(log_line):
    features = [
        shannon_entropy(log_line),
        distance_to_keyword(log_line, "password"),
        regex_tier_weight(log_line)
    ]
    return rf_model.predict_proba(features)[0] * 100`}
</pre>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
