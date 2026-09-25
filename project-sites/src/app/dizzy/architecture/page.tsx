import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dizzy Architecture Spec',
  description: 'Deep dive into the voice-to-Figma JEV agent topology.',
};

export default function DizzyArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#ff3366] selection:text-white p-4 md:p-12 lg:p-24 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .brutalist-border { border: 2px solid #333; }
        .grid-bg {
          background-image: linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}} />

      <div className="grid-bg fixed inset-0 z-0 opacity-50 pointer-events-none"></div>

      <header className="mb-16 relative z-10">
        <Link href="/dizzy" className="text-[#ff3366] hover:text-white uppercase tracking-widest text-sm mb-8 inline-block border-b border-[#ff3366] hover:border-white transition-colors">
          &lt; Back to Dizzy
        </Link>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-6 text-white mix-blend-difference">
          ARCHITECTURE SPEC
        </h1>
        <div className="border-b-4 border-[#333] pb-8">
          <p className="text-xl font-light uppercase tracking-widest text-gray-400">
            Voice-to-Figma JEV Agent Topology
          </p>
        </div>
      </header>

      <main className="relative z-10 space-y-24">
        
        <section>
          <h2 className="text-3xl font-bold mb-8 uppercase text-white border-l-4 border-[#ff3366] pl-4">Topology Overview</h2>
          <div className="bg-black p-8 brutalist-border font-mono text-xs md:text-sm overflow-x-auto text-green-400 leading-relaxed shadow-lg">
            <pre>
{`[ USER CONTEXT ]
      │ (Streaming Audio)
      ▼
┌────────────────────────────────────────────────────────┐
│ VOICE GATEWAY (JEV)                                    │
│ ├─ VAD (Voice Activity Detection)                      │
│ ├─ Streaming STT (Speech-to-Text)                      │
│ └─ Context Injection (Current Figma Canvas State)      │
└───────────────────────┬────────────────────────────────┘
                        │ (Transcribed Intents + Canvas State)
                        ▼
┌────────────────────────────────────────────────────────┐
│ AGENTIC ORCHESTRATOR                                   │
│ ├─ Router: Maps intent to specific sub-agents          │
│ │    ├─> Layout Agent (Flexbox/Grids)                  │
│ │    ├─> Typography Agent (Fonts, Weights)             │
│ │    └─> Styling Agent (Colors, Shadows, Borders)      │
│ ├─ State Manager: Tracks semantic changes              │
│ └─ TypeSafe Output Validator                           │
└───────────────────────┬────────────────────────────────┘
                        │ (Structured Semantic Buffer)
                        ▼
┌────────────────────────────────────────────────────────┐
│ SEMANTIC BUFFER TO FIGMA MCP                           │
│ ├─ Diff Engine: Calculates minimal updates             │
│ ├─ Figma Plugin Bridge (WebSocket/REST)                │
│ └─ Native Object Generator (Frames, Text, Vectors)     │
└───────────────────────┬────────────────────────────────┘
                        │ (RPC / IPC Commands)
                        ▼
[ FIGMA NATIVE APPLICATION ]`}
            </pre>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">1. JEV Voice Gateway</h3>
            <p className="text-gray-400 leading-relaxed">
              The entry point uses the JEV (Just Enough Voice) paradigm. Instead of waiting for a complete sentence, it streams audio and uses partial transcriptions. Crucially, it injects the current Figma canvas state (e.g., selected nodes, current theme) as context. This allows users to say &quot;make *this* darker&quot; and the system understands what *this* refers to.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">2. Agentic Orchestrator</h3>
            <p className="text-gray-400 leading-relaxed">
              A hierarchical multi-agent setup. A primary router parses the stream and decides which specialist agent should handle the modification. This avoids a single massive prompt context. The TypeSafe Output Validator ensures that the agents only emit JSON that conforms strictly to our internal Semantic Buffer schema.
            </p>
          </div>

          <div className="space-y-6 md:col-span-2">
            <h3 className="text-2xl font-bold text-white">3. Semantic Buffer & MCP</h3>
            <p className="text-gray-400 leading-relaxed">
              Rather than directly executing raw UI commands, the system maintains a &quot;Semantic Buffer&quot; — an intermediate representation of the UI. When a new voice command arrives, it updates this buffer. A Diff Engine then calculates the delta between the buffer and the actual Figma canvas, pushing only the necessary changes via the Figma MCP (Model Context Protocol) plugin. This allows for native, non-destructive editing of Figma nodes.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
