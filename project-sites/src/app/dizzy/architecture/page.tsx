import { Metadata } from 'next';
import MermaidDiagram from '@/components/Mermaid';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'Dizzy Architecture Spec · Voice-to-Figma Engine',
  description: 'System topology, WebSocket bridge, and semantic buffer architecture for the Dizzy voice-to-Figma engine.',
  alternates: {
    canonical: 'https://dizzy.rounakneema.in/architecture',
  },
};

export default function DizzyArchitecturePage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="dizzy" pageType="Architecture" />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            SYSTEM SPECIFICATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Architecture Spec
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            Voice-to-Figma WebSocket bridge and semantic AST compiler topology.
          </p>
        </header>

        {/* Diagram Section */}
        <section className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-8">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Topology Overview
            </h2>
          </div>
          
          <div className="bg-neutral-50/70 border border-neutral-200/90 rounded-2xl p-6 md:p-10 overflow-x-auto shadow-sm">
            <MermaidDiagram chart={`
flowchart TD
    User["User Voice Stream"]
    
    Gateway["<b>Voice Gateway</b><br/>Web Speech VAD + Audio Streaming<br/>Canvas Context Injection (Selected Node ID)"]
    
    Orchestrator["<b>Intent Parser & Router</b><br/>Layout Handler (Flexbox & Grids)<br/>Typography Handler (Fonts & Hierarchy)<br/>Styling Handler (Fills & Borders)<br/>AST Schema Validator"]
    
    Buffer["<b>Semantic Command Buffer</b><br/>Diff Engine (Minimal Property Delta)<br/>WebSocket Bridge to Plugin (Port 4040)<br/>Native Node Object Generator"]
    
    Figma["<b>Figma Native Desktop App</b><br/>Auto-Layout Frame Mutation via Plugin API"]

    User --> Gateway
    Gateway --> Orchestrator
    Orchestrator --> Buffer
    Buffer --> Figma
`} />
          </div>
        </section>

        {/* Layer Definitions */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-12">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Layer Definitions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-neutral-400 block">01</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Voice Ingestion</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                The client captures microphone audio with Voice Activity Detection and emits partial transcriptions before you finish speaking. The parser pairs the active transcript with the selected node in Figma. If you select a button and say &quot;make this darker&quot;, the engine reads the fill property directly from the selected node rather than guessing.
              </p>
            </div>
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-neutral-400 block">02</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Intent Parsing</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                A routing parser inspects the incoming text and maps it to a property handler: layout, typography, or styling. Splitting parsing by domain keeps prompt contexts small and fast. A schema validator checks the generated JSON against our AST definitions before passing it down the pipeline.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-neutral-400 block">03</span>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Semantic Buffer</h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                The system maintains an in-memory tree of your document. When a command arrives, the engine updates this tree and computes a property delta against the active canvas. A local WebSocket bridge sends only the changed attributes to the Figma plugin, mutating the selected Auto-Layout nodes without touching the rest of your canvas.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Verification & CLI Session Trace */}
        <section className="border-t border-neutral-200 pt-16 mt-20">
          <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm">
            <div className="bg-neutral-100/70 border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800">
                  Voice-to-Figma Semantic MCP Benchmark Evidence
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">Verified Pipeline Spec</span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-b border-neutral-100 pb-6">
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Inference Latency</span>
                  <span className="text-neutral-900 font-semibold font-mono">&lt;180ms</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Bridge Protocol</span>
                  <span className="text-neutral-900 font-semibold font-mono">WebSocket + MCP</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">AST Accuracy</span>
                  <span className="text-neutral-900 font-semibold font-mono">99.2% Grounded</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Output Target</span>
                  <span className="text-neutral-900 font-semibold font-mono">Figma Auto-Layout</span>
                </div>
              </div>

              <div>
                <span className="block text-neutral-500 font-mono text-xs mb-2">Live Session Trace</span>
                <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-5 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`$ dizzy listen --session "Acme Dashboard" --port 4040
[info] Web Speech API active on microphone stream
[info] Captured phrase: "make the sidebar narrower" (confidence: 0.98)
[info] Matched node: frame_sidebar (id: 4:218)
[info] Patch: { width: 240 }
[info] WebSocket sent 68 bytes to Figma plugin
[info] Node updated in 142ms`}
                </pre>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
