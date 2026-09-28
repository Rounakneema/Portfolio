import { Metadata } from 'next';
import MermaidDiagram from '@/components/Mermaid';

export const metadata: Metadata = {
  title: 'Dizzy Architecture Spec',
  description: 'Deep dive into the voice-to-Figma JEV agent topology.',
};

export default function DizzyArchitecturePage() {
  return (
    <div className="w-full bg-black text-white selection:bg-[#ff3366] selection:text-white font-sans">
      
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 lg:pt-40 pb-32">
        
        <header className="mb-24 md:mb-32">
          <h1 className="text-[clamp(3rem,6vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-zinc-100 mb-8">
            ARCHITECTURE <br/>
            <span className="text-[#ff3366]">SPEC.</span>
          </h1>
          <div className="border-t border-zinc-900 pt-6">
            <p className="text-xl lg:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed tracking-tight">
              Voice-to-Figma JEV Agent Topology
            </p>
          </div>
        </header>

        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Topology Overview</h2>
          </div>
          
          <div className="bg-[#050505] border border-zinc-900 p-8 md:p-12 overflow-x-auto">
            <MermaidDiagram chart={`
flowchart TD
    User["[ USER CONTEXT ]"]
    
    Gateway["<b>VOICE GATEWAY (JEV)</b><br/>├─► VAD (Voice Activity Detection)<br/>├─► Streaming STT (Speech-to-Text)<br/>└─► Context Injection (Current Figma Canvas State)"]
    
    Orchestrator["<b>AGENTIC ORCHESTRATOR</b><br/>├─► Router: Maps intent to specific sub-agents<br/>│   ├─► Layout Agent (Flexbox/Grids)<br/>│   ├─► Typography Agent (Fonts, Weights)<br/>│   └─► Styling Agent (Colors, Shadows, Borders)<br/>├─► State Manager: Tracks semantic changes<br/>└─► TypeSafe Output Validator"]
    
    Buffer["<b>SEMANTIC BUFFER TO FIGMA MCP</b><br/>├─► Diff Engine: Calculates minimal updates<br/>├─► Figma Plugin Bridge (WebSocket/REST)<br/>└─► Native Object Generator (Frames, Text, Vectors)"]
    
    Figma["[ FIGMA NATIVE APPLICATION ]"]

    User -- "(Streaming Audio)" --> Gateway
    Gateway -- "(Transcribed Intents + Canvas State)" --> Orchestrator
    Orchestrator -- "(Structured Semantic Buffer)" --> Buffer
    Buffer -- "(RPC / IPC Commands)" --> Figma
`} />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-12 border-b border-zinc-800 pb-6">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Layer Definitions</h2>
          </div>

          <div className="md:col-span-4 group">
            <h3 className="text-3xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">1. JEV Voice Gateway</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              The entry point uses the JEV (Just Enough Voice) paradigm. Instead of waiting for a complete sentence, it streams audio and uses partial transcriptions. Crucially, it injects the current Figma canvas state (e.g., selected nodes, current theme) as context. This allows users to say &quot;make *this* darker&quot; and the system understands what *this* refers to.
            </p>
          </div>
          
          <div className="md:col-span-4 group">
            <h3 className="text-3xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">2. Agentic Orchestrator</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              A hierarchical multi-agent setup. A primary router parses the stream and decides which specialist agent should handle the modification. This avoids a single massive prompt context. The TypeSafe Output Validator ensures that the agents only emit JSON that conforms strictly to our internal Semantic Buffer schema.
            </p>
          </div>

          <div className="md:col-span-4 group">
            <h3 className="text-3xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">3. Semantic Buffer & MCP</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              Rather than directly executing raw UI commands, the system maintains a &quot;Semantic Buffer&quot; (an intermediate representation of the UI). When a new voice command arrives, it updates this buffer. A Diff Engine then calculates the delta between the buffer and the actual Figma canvas, pushing only the necessary changes via the Figma MCP plugin. This allows for native, non-destructive editing of Figma nodes.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
