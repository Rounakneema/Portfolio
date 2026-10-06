import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'Dizzy Trade-offs & Decisions',
  description: 'Deeply technical page covering engineering trade-offs, streaming intent parsing, and semantic buffering.',
};

export default function DizzyDecisionsPage() {
  return (
    <div className="w-full bg-black text-white selection:bg-[#ff3366] selection:text-white font-sans">
        <ProjectJsonLd slug="dizzy" pageType="Decisions" />
      
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 lg:pt-40 pb-32">
        
        <header className="mb-24 md:mb-32">
          <h1 className="text-[clamp(3rem,6vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-zinc-100 mb-8">
            TRADE-OFFS & <br/>
            <span className="text-[#ff3366]">DECISIONS.</span>
          </h1>
          <div className="border-t border-zinc-900 pt-6">
            <p className="text-xl lg:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed tracking-tight">
              Engineering the Agentic Loop
            </p>
          </div>
        </header>

        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Latency Optimization</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-black text-zinc-100 tracking-tighter">Streaming Intent Parsing vs. Batch Processing</h3>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                Traditional voice commands rely on a <code className="bg-zinc-900 text-[#ff3366] px-2 py-1 border border-zinc-800">VAD -> Stop -> Transcribe -> Process</code> pipeline. For a real-time UI design tool, this latency is unacceptable.
              </p>
              
              <div className="border-l border-[#ff3366] pl-6 py-2">
                <strong className="text-white block mb-2 font-medium">The Trade-off</strong>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  By using streaming intent parsing, we feed partial transcripts into the LLM. The LLM attempts to deduce intent before the user finishes speaking. This significantly reduces apparent latency, making the tool feel like an extension of the designer&apos;s mind.
                </p>
              </div>

              <div className="border-l border-zinc-800 pl-6 py-2">
                <strong className="text-white block mb-2 font-medium">The Cost</strong>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  High token usage and potential hallucination on incomplete sentences. If the user says &quot;Make the background red... no, wait, blue,&quot; the streaming parser might eagerly execute the &quot;red&quot; command before the correction arrives.
                </p>
              </div>

              <div className="border-l border-zinc-800 pl-6 py-2">
                <strong className="text-white block mb-2 font-medium">The Resolution</strong>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We implemented a debounce mechanism tied to confidence scores. If the LLM&apos;s confidence in the inferred semantic action is below a threshold, it buffers the intent. If it&apos;s high, it executes optimistically, relying on the Semantic Buffer&apos;s diff engine to easily revert or patch the state when the final transcript arrives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Data Structure</h2>
            <h3 className="text-3xl font-black text-zinc-100 tracking-tighter mt-6">SEMANTIC BUFFERING VS. PURE UI GENERATION</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-6 tracking-tight">Pure UI Gen (v0, Image approach)</h4>
              <ul className="space-y-4 text-zinc-400 font-light border-l border-zinc-900 pl-6">
                <li>Prompt generates a complete component or image from scratch.</li>
                <li>Stateless. No memory of previous specific pixel values.</li>
                <li>&quot;Change the padding&quot; requires regenerating the entire component, often changing unrelated details.</li>
                <li>Fast to implement, terrible UX for precise design.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-[#ff3366] mb-6 tracking-tight">Semantic Buffering (Dizzy approach)</h4>
              <ul className="space-y-4 text-zinc-400 font-light border-l border-[#ff3366] pl-6">
                <li>Maintains a JSON AST (Abstract Syntax Tree) of the Figma document state.</li>
                <li>Agents mutate specific nodes in the AST.</li>
                <li>Stateful. &quot;Change the padding&quot; only modifies the padding property of the target node AST.</li>
                <li>Complex to orchestrate, requires strict schema validation, but enables perfect precision and iterative design.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 bg-[#050505] p-8 md:p-12 font-mono text-xs md:text-sm text-zinc-500 overflow-x-auto border border-zinc-900 leading-loose">
            <div className="text-white mb-6 uppercase tracking-widest font-bold text-[10px]">AST Mutation Trace</div>
            <pre>
{`// 1. Initial State
{ id: "node_1", type: "FRAME", padding: 16, children: [...] }

// 2. Voice Input: "Make it roomier"
// 3. Agent parses intent -> INCREASE_PADDING
// 4. Mutation Applied to Buffer
{
  "op": "UPDATE",
  "target": "node_1",
  "path": ["padding"],
  "value": 32, // calculated based on context
  "previousValue": 16
}

// 5. Diff Engine pushes to Figma via MCP
Figma.getNodeById("node_1").padding = 32;`}
            </pre>
          </div>
        </section>

        <section className="mb-16">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Protocol Limits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-black text-zinc-100 tracking-tighter">The Figma MCP Bottleneck</h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
              <p>
                Interfacing with Figma&apos;s plugin API natively from an external agentic loop requires a bridge. We utilize the Model Context Protocol (MCP) to standardize this communication.
              </p>
              <p>
                A major challenge is rate limiting and the synchronous nature of Figma&apos;s API updates when touching many nodes. By batching operations through the Semantic Buffer&apos;s diff engine, we reduce 50 individual node property updates into a single atomic transaction sent over the MCP WebSocket connection, preventing UI freezing in the Figma client.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
