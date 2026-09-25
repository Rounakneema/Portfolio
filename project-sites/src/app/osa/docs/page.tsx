import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'OSA - Documentation & Manifests',
    description: 'Raw engineering documentation, Kubernetes manifests, and sidecar injection YAMLs for OSA.',
};

export default function OSADocsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#fff] selection:text-[#000] overflow-x-hidden pb-32">
            <style dangerouslySetInnerHTML={{ __html: `
                .crt-flicker { animation: flicker 0.15s infinite; }
                @keyframes flicker {
                    0% { opacity: 0.95; }
                    50% { opacity: 0.85; }
                    100% { opacity: 0.95; }
                }
                .brutalist-border { border: 2px solid #333; }
                .text-glitch { position: relative; }
                .text-glitch::before, .text-glitch::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0.8;
                }
                .text-glitch::before {
                    left: 2px;
                    text-shadow: -2px 0 #ff00c1;
                    animation: glitch-anim 2s infinite linear alternate-reverse;
                }
                .text-glitch::after {
                    left: -2px;
                    text-shadow: -2px 0 #00fff9;
                    animation: glitch-anim 3s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim {
                    0% { clip: rect(24px, 9999px, 9px, 0); }
                    100% { clip: rect(85px, 9999px, 140px, 0); }
                }
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
                .code-block {
                    background: #050505;
                    border: 1px solid #333;
                    padding: 1.5rem;
                    overflow-x: auto;
                    color: #a3a3a3;
                    font-size: 0.875rem;
                }
                .keyword { color: #ff00c1; }
                .string { color: #00fff9; }
                .comment { color: #666; }
            `}} />

            <header className="px-6 py-12 border-b-4 border-[#333] grid-bg">
                <div className="max-w-7xl mx-auto">
                    <nav className="mb-12 flex flex-wrap gap-4 border-b border-[#333] pb-6">
                        <Link href="/" className="nav-link">← Index</Link>
                        <Link href="/osa" className="nav-link">Overview</Link>
                        <Link href="/osa/architecture" className="nav-link">Architecture</Link>
                        <Link href="/osa/decisions" className="nav-link">Decisions</Link>
                        <Link href="/osa/docs" className="nav-link active">Docs</Link>
                    </nav>

                    <h1 className="text-2xl font-black uppercase tracking-tighter text-glitch text-[#fff] mb-6" data-text="ENGINEERING_DOCS">
                        ENGINEERING_DOCS
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        Raw technical specifications, Kubernetes manifests, and operational playbooks for the Offline Security Auditor (OSA).
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                
                {/* SECTION 1: CRD */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00fff9] mb-8 border-b border-[#333] pb-4">
                        01. Custom Resource Definition (CRD)
                    </h2>
                    <p className="mb-6 text-gray-400">
                        The <code className="bg-[#111] px-2 py-1 text-[#fff]">OSAPolicy</code> CRD defines how logs are ingested and which anomaly detection engines (Z-Score, Markov) are applied to the workload.
                    </p>
                    <div className="code-block crt-flicker">
                        <pre><code>
<span className="comment"># osa-policy-crd.yaml</span>{'\n'}
<span className="keyword">apiVersion</span>: apiextensions.k8s.io/v1{'\n'}
<span className="keyword">kind</span>: CustomResourceDefinition{'\n'}
<span className="keyword">metadata</span>:{'\n'}
  <span className="keyword">name</span>: osapolicies.security.osa.dev{'\n'}
<span className="keyword">spec</span>:{'\n'}
  <span className="keyword">group</span>: security.osa.dev{'\n'}
  <span className="keyword">versions</span>:{'\n'}
    - <span className="keyword">name</span>: v1alpha1{'\n'}
      <span className="keyword">served</span>: true{'\n'}
      <span className="keyword">storage</span>: true{'\n'}
      <span className="keyword">schema</span>:{'\n'}
        <span className="keyword">openAPIV3Schema</span>:{'\n'}
          <span className="keyword">type</span>: object{'\n'}
          <span className="keyword">properties</span>:{'\n'}
            <span className="keyword">spec</span>:{'\n'}
              <span className="keyword">type</span>: object{'\n'}
              <span className="keyword">properties</span>:{'\n'}
                <span className="keyword">engines</span>:{'\n'}
                  <span className="keyword">type</span>: array{'\n'}
                  <span className="keyword">items</span>:{'\n'}
                    <span className="keyword">type</span>: string{'\n'}
                    <span className="keyword">enum</span>: [<span className="string">"z-score"</span>, <span className="string">"markov"</span>]{'\n'}
                <span className="keyword">logFormat</span>:{'\n'}
                  <span className="keyword">type</span>: string{'\n'}
                <span className="keyword">threshold</span>:{'\n'}
                  <span className="keyword">type</span>: number{'\n'}
  <span className="keyword">scope</span>: Namespaced{'\n'}
  <span className="keyword">names</span>:{'\n'}
    <span className="keyword">plural</span>: osapolicies{'\n'}
    <span className="keyword">singular</span>: osapolicy{'\n'}
    <span className="keyword">kind</span>: OSAPolicy{'\n'}
    <span className="keyword">shortNames</span>:{'\n'}
      - osap{'\n'}
                        </code></pre>
                    </div>
                </section>

                {/* SECTION 2: Mutating Webhook / Sidecar Injection */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-[#ff00c1] mb-8 border-b border-[#333] pb-4">
                        02. Sidecar Injection Webhook
                    </h2>
                    <p className="mb-6 text-gray-400">
                        OSA operates as a zero-dependency Go binary injected as a sidecar. The mutating admission webhook automatically intercepts pod creation if the <code className="bg-[#111] px-2 py-1 text-[#fff]">osa-injection=enabled</code> label is present.
                    </p>
                    <div className="code-block crt-flicker">
                        <pre><code>
<span className="comment"># mutating-webhook-config.yaml</span>{'\n'}
<span className="keyword">apiVersion</span>: admissionregistration.k8s.io/v1{'\n'}
<span className="keyword">kind</span>: MutatingWebhookConfiguration{'\n'}
<span className="keyword">metadata</span>:{'\n'}
  <span className="keyword">name</span>: osa-sidecar-injector{'\n'}
<span className="keyword">webhooks</span>:{'\n'}
  - <span className="keyword">name</span>: inject.osa.dev{'\n'}
    <span className="keyword">clientConfig</span>:{'\n'}
      <span className="keyword">service</span>:{'\n'}
        <span className="keyword">name</span>: osa-injector-svc{'\n'}
        <span className="keyword">namespace</span>: osa-system{'\n'}
        <span className="keyword">path</span>: <span className="string">"/mutate"</span>{'\n'}
      <span className="keyword">caBundle</span>: <span className="string">"Cg=="</span> <span className="comment"># Injected by cert-manager</span>{'\n'}
    <span className="keyword">rules</span>:{'\n'}
      - <span className="keyword">operations</span>: [ <span className="string">"CREATE"</span> ]{'\n'}
        <span className="keyword">apiGroups</span>: [<span className="string">""</span>]{'\n'}
        <span className="keyword">apiVersions</span>: [<span className="string">"v1"</span>]{'\n'}
        <span className="keyword">resources</span>: [<span className="string">"pods"</span>]{'\n'}
    <span className="keyword">namespaceSelector</span>:{'\n'}
      <span className="keyword">matchLabels</span>:{'\n'}
        <span className="keyword">osa-injection</span>: enabled{'\n'}
    <span className="keyword">admissionReviewVersions</span>: [<span className="string">"v1"</span>]{'\n'}
    <span className="keyword">sideEffects</span>: None{'\n'}
                        </code></pre>
                    </div>
                </section>

                {/* SECTION 3: Terminal Trace */}
                <section>
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-300 mb-8 border-b border-[#333] pb-4">
                        03. Daemon Boot Trace
                    </h2>
                    <p className="mb-6 text-gray-400">
                        Raw terminal output from the OSA sidecar initializing within an air-gapped pod environment.
                    </p>
                    <div className="brutalist-border bg-black p-1">
                        <div className="bg-[#111] p-2 flex gap-2 border-b border-[#333]">
                            <div className="w-3 h-3 bg-[#ff00c1] rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-[#00fff9] rounded-full"></div>
                        </div>
                        <div className="p-6 font-mono text-sm overflow-x-auto crt-flicker">
                            <div className="text-gray-500 mb-2">$ osa-daemon --config /etc/osa/policy.yaml</div>
                            <div className="text-gray-300">[15:23:01.002] INFO: Booting OSA (Offline Security Auditor) v1.4.2</div>
                            <div className="text-gray-300">[15:23:01.005] INFO: Detected air-gapped environment. Network outbound disabled.</div>
                            <div className="text-blue-400">[15:23:01.015] INIT: Loading Z-Score anomaly engine...</div>
                            <div className="text-blue-400">[15:23:01.028] INIT: Compiling Markov Chain probability matrices...</div>
                            <div className="text-green-400">[15:23:01.045] SUCCESS: Log ingestion pipeline attached to /var/log/app/*.log</div>
                            <div className="text-yellow-400 mt-4">[15:24:12.881] WARN: [Z-Score 3.8] Suspicious frequency of 401 Unauthorized from internal IP.</div>
                            <div className="text-red-500 font-bold">[15:24:15.002] CRIT: [Markov] Sequence deviation threshold exceeded (0.92). Possible lateral movement.</div>
                            <div className="text-gray-500">[15:24:15.005] ACTN: Writing local audit event to /var/log/osa/audit.json</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
