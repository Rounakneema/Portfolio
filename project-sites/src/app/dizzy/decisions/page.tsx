import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Dizzy Trade-offs & Decisions',
  description: 'Deeply technical page covering engineering trade-offs, streaming intent parsing, and semantic buffering.',
};

export default function DizzyDecisionsPage() {
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

      <ScrollReveal direction="up" delay={0.1}>
<header className="mb-16 relative z-10">
        
        <h1 className="text-2xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-6 text-white mix-blend-difference tracking-tighter">
          TRADE-OFFS & DECISIONS
        </h1>
        <div className="border-b-4 border-[#333] pb-8">
          <p className="text-xl font-light uppercase tracking-widest text-gray-400 leading-relaxed">
            Engineering the Agentic Loop
          </p>
        </div>
      </header>
</ScrollReveal>

      <main className="relative z-10 space-y-24">
        
        <ScrollReveal direction="up" delay={0.1}>
<section className="brutalist-border p-8 bg-black">
          <h2 className="text-3xl font-bold mb-8 uppercase text-white border-b border-[#333] pb-4 tracking-tight">Streaming Intent Parsing vs. Batch Processing</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Traditional voice commands rely on a <code className="bg-[#111] text-[#ff3366] px-1 py-0.5">VAD (Voice Activity Detection) -&gt; Stop -&gt; Transcribe -&gt; Process</code> pipeline. For a real-time UI design tool, this latency is unacceptable.
            </p>
            <p>
              <strong>The Trade-off:</strong> By using streaming intent parsing, we feed partial transcripts into the LLM. The LLM attempts to deduce intent before the user finishes speaking. This significantly reduces apparent latency, making the tool feel like an extension of the designer&apos;s mind.
            </p>
            <p>
              <strong>The Cost:</strong> High token usage and potential hallucination on incomplete sentences. If the user says &quot;Make the background red... no, wait, blue,&quot; the streaming parser might eagerly execute the &quot;red&quot; command before the correction arrives.
            </p>
            <p>
              <strong>The Resolution:</strong> We implemented a debounce mechanism tied to confidence scores. If the LLM&apos;s confidence in the inferred semantic action is below a threshold, it buffers the intent. If it&apos;s high, it executes optimistically, relying on the Semantic Buffer&apos;s diff engine to easily revert or patch the state when the final transcript arrives.
            </p>
          </div>
        </section>
</ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
<section className="bg-[#111] p-8 border-l-8 border-green-500">
          <h2 className="text-3xl font-bold mb-8 uppercase text-white tracking-tight">Semantic Buffering vs. Pure UI Generation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Pure UI Gen (v0, Midjourney approach)</h3>
              <StaggerContainer>
<ul className="list-disc pl-5 space-y-2">
                <StaggerItem>
<li>Prompt generates a complete component or image from scratch.</li>
</StaggerItem>
                <StaggerItem>
<li>Stateless. No memory of previous specific pixel values.</li>
</StaggerItem>
                <StaggerItem>
<li>&quot;Change the padding&quot; requires regenerating the entire component, often changing unrelated details.</li>
</StaggerItem>
                <StaggerItem>
<li>Fast to implement, terrible UX for precise design.</li>
</StaggerItem>
              </ul>
</StaggerContainer>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Semantic Buffering (Dizzy approach)</h3>
              <StaggerContainer>
<ul className="list-disc pl-5 space-y-2">
                <StaggerItem>
<li>Maintains a JSON AST (Abstract Syntax Tree) of the Figma document state.</li>
</StaggerItem>
                <StaggerItem>
<li>Agents mutate specific nodes in the AST.</li>
</StaggerItem>
                <StaggerItem>
<li>Stateful. &quot;Change the padding&quot; only modifies the <code className="bg-black text-[#ff3366] px-1">padding</code> property of the target node AST.</li>
</StaggerItem>
                <StaggerItem>
<li>Complex to orchestrate, requires strict schema validation, but enables perfect precision and iterative design.</li>
</StaggerItem>
              </ul>
</StaggerContainer>
            </div>
          </div>
          
          <div className="mt-8 bg-black p-6 font-mono text-sm text-gray-400 overflow-x-auto brutalist-border">
            <h4 className="text-white mb-4 uppercase">AST Mutation Trace</h4>
            <pre className="text-green-400">
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
</ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
<section className="brutalist-border p-8 bg-black">
          <h2 className="text-3xl font-bold mb-8 uppercase text-white border-b border-[#333] pb-4 tracking-tight">The Figma MCP Bottleneck</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Interfacing with Figma&apos;s plugin API natively from an external agentic loop requires a bridge. We utilize the Model Context Protocol (MCP) to standardize this communication.
            </p>
            <p>
              A major challenge is rate limiting and the synchronous nature of Figma&apos;s API updates when touching many nodes. By batching operations through the Semantic Buffer&apos;s diff engine, we reduce 50 individual node property updates into a single atomic transaction sent over the MCP WebSocket connection, preventing UI freezing in the Figma client.
            </p>
          </div>
        </section>
</ScrollReveal>

      </main>
    </div>
  );
}
