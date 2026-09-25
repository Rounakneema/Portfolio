import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dizzy Protocol Specs - Semantic Buffer & MCP',
  description: 'Technical documentation for the Dizzy Voice-to-Figma system.',
};

export default function DizzyDocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#ff3366] selection:text-white p-4 md:p-12 lg:p-24 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .brutalist-border { border: 2px solid #333; }
        .brutalist-shadow { box-shadow: 8px 8px 0px #333; }
        .neon-accent { color: #ff3366; }
        pre { scrollbar-width: none; }
        pre::-webkit-scrollbar { display: none; }
        .grid-bg {
          background-image: linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}} />

      {/* Grid background container */}
      <div className="grid-bg fixed inset-0 z-0 opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="mb-16 border-b-4 border-[#333] pb-8 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          
        </div>
        <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
          ENGINEERING <span className="neon-accent">DOCS</span>
        </h1>
        <p className="text-xl max-w-2xl font-light uppercase tracking-widest text-gray-400">
          v1.0.4-alpha / Protocol Specifications
        </p>
      </header>

      <main className="space-y-24 relative z-10">
        
        {/* Section 1: Semantic Buffer AST */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase border-l-8 border-[#ff3366] pl-4 text-white">1. Semantic Buffer AST</h2>
          <p className="text-gray-400 max-w-4xl leading-relaxed">
            The Semantic Buffer is a stateful tree that receives intention-based nodes from the Voice-to-JSON stream.
            Unlike raw LLM outputs (which frequently hallucinate unstructured JSON), this component guarantees structural type safety before execution via the Figma MCP.
          </p>
          
          <div className="bg-black brutalist-border brutalist-shadow p-6 overflow-x-auto">
            <h3 className="text-sm text-gray-500 uppercase mb-4 border-b border-[#333] pb-2">Schema definition: BufferNode (TypeScript)</h3>
            <pre className="text-green-500 text-sm">
{`interface BufferNode {
  id: string;               // UUID-v4
  type: ElementType;        // 'FRAME' | 'TEXT' | 'BUTTON' | 'INPUT'
  intent: string;           // Original JEV transcript snippet
  properties: {
    layout: 'FLEX' | 'GRID' | 'ABSOLUTE';
    direction?: 'HORIZONTAL' | 'VERTICAL';
    padding?: [number, number, number, number];
    gap?: number;
    fill?: HexColor | 'TRANSPARENT';
    stroke?: HexColor;
    cornerRadius?: number;
  };
  children: BufferNode[];
  _mcp_ref?: string;        // Native Figma node ID after MCP realization
}`}
            </pre>
          </div>
        </section>

        {/* Section 2: Voice-to-JSON Protocol */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase border-l-8 border-yellow-400 pl-4 text-white">2. Voice Streaming Protocol</h2>
          <p className="text-gray-400 max-w-4xl leading-relaxed">
            Voice streams are chunked via WebRTC and piped to the JEV endpoint. 
            Partial transcripts are eagerly resolved into diffs against the Semantic Buffer to provide real-time UI feedback while the user is still speaking.
          </p>

          <div className="bg-black brutalist-border p-6 font-mono text-sm brutalist-shadow">
            <h3 className="text-sm text-gray-500 uppercase mb-4 border-b border-[#333] pb-2">Terminal trace: WebSocket Engine (Port 8080)</h3>
            <div className="space-y-2">
              <div className="text-blue-400">[15:42:01.102] INFO: ws_connect client=v_designer_99</div>
              <div className="text-gray-400">{"<"} AUDIO_CHUNK [4096 bytes]</div>
              <div className="text-gray-400">{"<"} AUDIO_CHUNK [4096 bytes]</div>
              <div className="text-yellow-400">{">"} PARTIAL_JSON: {`{"transcript": "add a red button", "confidence": 0.89}`}</div>
              <div className="text-gray-400">{"<"} AUDIO_CHUNK [4096 bytes]</div>
              <div className="text-green-400">{">"} COMMIT_JSON: {`{"transcript": "add a red button that says submit", "intent_parsed": true}`}</div>
              <div className="text-purple-400">{"*"} BUFFER_DIFF: +Node(type=BUTTON, fill=#FF0000, text="Submit")</div>
            </div>
          </div>
        </section>

        {/* Section 3: Figma MCP Execution */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold uppercase border-l-8 border-blue-500 pl-4 text-white">3. Figma MCP Operations</h2>
          <p className="text-gray-400 max-w-4xl leading-relaxed">
            The MCP server polls the Semantic Buffer and executes atomic design operations via Figma's native Plugin API.
            By maintaining the <code>_mcp_ref</code>, future edits target existing nodes rather than re-generating elements from scratch.
          </p>

          <div className="bg-black brutalist-border p-6 overflow-x-auto relative brutalist-shadow">
            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500 text-black text-xs font-bold uppercase">operation.ts</div>
            <pre className="text-gray-300 text-sm mt-8">
{`async function executeMcpCommand(node: BufferNode) {
  if (node._mcp_ref) {
    // Node exists, apply mutation (progressive editing)
    const figmaNode = await figma.getNodeByIdAsync(node._mcp_ref);
    if (figmaNode && figmaNode.type === 'FRAME') {
      figmaNode.fills = [{ type: 'SOLID', color: hexToFigmaRgb(node.properties.fill) }];
    }
    return;
  }

  // Create new native Figma node
  const frame = figma.createFrame();
  frame.name = \`\${node.type}_\${node.id.substring(0, 4)}\`;
  
  // Apply Auto-Layout semantics
  if (node.properties.layout === 'FLEX') {
    frame.layoutMode = node.properties.direction || 'HORIZONTAL';
    frame.itemSpacing = node.properties.gap || 0;
  }
  
  // Persist reference back to buffer for future modifications
  node._mcp_ref = frame.id;
  figma.currentPage.appendChild(frame);
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
