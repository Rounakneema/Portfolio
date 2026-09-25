import { Metadata } from 'next';
import Link from 'next/link';
import MermaidDiagram from '@/components/Mermaid';

export const metadata: Metadata = {
    title: 'OSA - Architecture Spec',
    description: 'System topology and technical architecture of the Offline Security Auditor / LogShield.',
};

export default function OSAArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden pb-32">
            <style dangerouslySetInnerHTML={{ __html: `
                .brutalist-border { border: 2px solid #333; }
                .text-glitch { position: relative; }
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
                .ascii-art {
                    font-size: 10px;
                    line-height: 1.2;
                    white-space: pre;
                    overflow-x: auto;
                    color: #00fff9;
                }
                @media (min-width: 768px) {
                    .ascii-art { font-size: 14px; }
                }
            `}} />

            <header className="px-6 py-12 md:py-16 border-b-4 border-[#333] grid-bg">
                <div className="max-w-7xl mx-auto">
                    

                    <h1 className="text-2xl font-black uppercase tracking-tighter mb-4 text-[#fff]">
                        System Topology
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                        A deep dive into the Kubernetes-native data plane and multi-layered detection pipeline of the Offline Security Auditor (LogShield).
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                
                {/* Section 1: Control Plane & Sidecar Injection */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-[#333] pb-4 mb-8 text-[#fff]">
                        01. Control Plane & Sidecar Injection
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                The architecture operates natively within a Kubernetes cluster using a <strong>Mutating Admission Webhook</strong>. 
                                When a developer deploys a new Pod to a namespace labeled with <code className="bg-[#111] px-2 py-1 border border-[#333] text-[#00fff9]">logshield.io/enabled=true</code>, 
                                the control plane intercepts the request.
                            </p>
                            <p>
                                It dynamically injects the LogShield Sidecar container and required shared volumes (`shared-logs`, `sidecar-data`) directly into the Pod specification. 
                                This zero-config approach ensures that the primary application requires no code changes to have its logs securely audited and masked.
                            </p>
                        </div>
                        <div className="brutalist-border p-6 bg-[#050505] overflow-hidden">
<MermaidDiagram chart={`
flowchart TD
    KC["KUBERNETES CLUSTER (CONTROL PLANE)"]
    LSC["LogShield Controller<br>(Webhook)<br>MUTATING ADMISSION WEBHOOK"]
    KC --> LSC
    LSC -- "injects sidecar" --> POD

    subgraph POD["POD"]
        APP["Application"]
        SIDE["LogShield Sidecar<br>(LogMask)<br>(Data Plane)"]
        APP -- "writes logs<br>â–¼ /shared/app.log" --> SIDE
    end

    SIDE -- "emits sanitized logs" --> FBL["Fluent Bit / Loki"]
`} />
                        </div>
                    </div>
                </section>

                {/* Section 2: Data Plane (SCS Engine) */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-[#333] pb-4 mb-8 text-[#fff]">
                        02. Data Plane: Secret Confidence Score (SCS)
                    </h2>
                    
                    <div className="brutalist-border p-6 bg-[#050505] overflow-x-auto mb-12">
<MermaidDiagram chart={`
flowchart TD
    RLS["RAW LOG STREAM"] --> PRE["PREPROCESSOR<br>(Decodes JSON/Base64/URLs)"]
    PRE --> CF["CANDIDATE FINDER<br>(Aho-Corasick Automaton)"]
    CF --> CE["CONTEXT ENGINE<br>(Proximity Analysis)"]
    CE --> SC["SECRET CLASSIFIER<br>(600+ Regex Patterns)"]
    SC --> ML["ML SCORER<br>(Confidence 0-100)"]
    ML -- "â‰¥80" --> MASK["MASK<br>(Redacted)"]
    ML -- "<50" --> ALLOW["ALLOW<br>(Passed through)"]
`} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-lg leading-relaxed">
                        <div className="brutalist-border p-6">
                            <h3 className="text-xl font-bold text-[#fff] mb-4">High-Speed Filtration</h3>
                            <p>
                                The pipeline begins with a <strong>Preprocessor</strong> that recursively decodes nested JSON, URLs, and Base64 strings. 
                                To maintain extreme throughput (over 50k lines/sec), we implemented an <strong>Aho-Corasick automaton</strong>. 
                                This Candidate Finder rapidly filters out non-sensitive lines in linear time, preventing expensive regex evaluation on safe data.
                            </p>
                        </div>
                        <div className="brutalist-border p-6">
                            <h3 className="text-xl font-bold text-[#fff] mb-4">Contextual Proximity</h3>
                            <p>
                                The <strong>Context Engine</strong> performs proximity analysis on the text surrounding potential secrets. 
                                It weighs positive context (e.g., <code className="text-[#00fff9]">password=</code>, <code className="text-[#00fff9]">Authorization: Bearer</code>) against negative context 
                                (e.g., <code className="text-[#ff00c1]">trace_id=</code>, <code className="text-[#ff00c1]">request_hash=</code>) to feed feature vectors to the scoring model.
                            </p>
                        </div>
                        <div className="brutalist-border p-6 md:col-span-2">
                            <h3 className="text-xl font-bold text-[#fff] mb-4">ML Scorer & Vault Integration</h3>
                            <p>
                                The final stage uses a trained Machine Learning model evaluating features like Shannon entropy, token structure, regex matches (600+ patterns), and contextual proximity to generate a <strong>Secret Confidence Score (0-100)</strong>. 
                                Scores â‰¥80 trigger redaction. The original secret is sent to <strong>SecureReveal</strong>â€”an encrypted local SQLite vaultâ€”leaving behind a safe reference such as <code className="text-[#00fff9]">[REDACTED:SEC-1234:SCS=94]</code> for future auditing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Secret Lineage */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-[#333] pb-4 mb-8 text-[#fff]">
                        03. Secret Lineage & Tracking
                    </h2>
                    <div className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                        <p className="mb-6">
                            One of the hardest problems in distributed microservices is tracing where a secret originated without exposing the secret itself. 
                            LogShield solves this via <strong>SecretLineage</strong>. 
                        </p>
                        <p>
                            Upon detecting a secret, the sidecar generates a keyed HMAC fingerprint. This fingerprint acts as an immutable identifier for that exact secret string. 
                            As the secret traverses different services (and gets logged by them), LogShield masks the secret but emits the same fingerprint. 
                            This allows security teams to map the blast radius and sprawl of a leaked credential across the entire cluster without ever viewing the plaintext.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}

