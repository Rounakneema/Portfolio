import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dizzy Protocol Specs - Semantic Buffer & MCP',
  description: 'Technical documentation for the Dizzy Voice-to-Figma system.',
};

export default function DizzyDocsPage() {
  return (
    <div className="w-full bg-black text-white selection:bg-[#ff3366] selection:text-white font-sans">
      
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 lg:pt-40 pb-32">
        
        <header className="mb-24 md:mb-32">
          <h1 className="text-[clamp(3rem,6vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-zinc-100 mb-8">
            ENGINEERING <br/>
            <span className="text-[#ff3366]">DOCS.</span>
          </h1>
          <div className="border-t border-zinc-900 pt-6">
            <p className="text-xl lg:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed tracking-tight">
              v1.0.4-alpha / Protocol Specifications
            </p>
          </div>
        </header>

        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">01 // AST DEFINITION</h2>
            <h3 className="text-3xl font-black text-zinc-100 tracking-tighter mt-6">SEMANTIC BUFFER AST</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5 text-zinc-400 font-light text-lg leading-relaxed space-y-6">
              <p>
                The Semantic Buffer is a stateful tree that receives intention-based nodes from the Voice-to-JSON stream.
              </p>
              <p>
                Unlike raw LLM outputs (which frequently hallucinate unstructured JSON), this component guarantees structural type safety before execution via the Figma MCP.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-[#050505] p-8 font-mono text-xs md:text-sm text-zinc-400 overflow-x-auto border border-zinc-900">
                <div className="text-zinc-600 mb-6 uppercase tracking-widest font-bold text-[10px] border-b border-zinc-800 pb-4">Schema definition: BufferNode (TypeScript)</div>
                <pre className="text-[#ff3366]">
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
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">02 // DATA STREAMING</h2>
            <h3 className="text-3xl font-black text-zinc-100 tracking-tighter mt-6">VOICE STREAMING PROTOCOL</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5 text-zinc-400 font-light text-lg leading-relaxed space-y-6">
              <p>
                Voice streams are chunked via WebRTC and piped to the JEV endpoint.
              </p>
              <p>
                Partial transcripts are eagerly resolved into diffs against the Semantic Buffer to provide real-time UI feedback while the user is still speaking.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-[#050505] p-8 font-mono text-xs md:text-sm text-zinc-400 overflow-x-auto border border-zinc-900">
                <div className="text-zinc-600 mb-6 uppercase tracking-widest font-bold text-[10px] border-b border-zinc-800 pb-4">Terminal trace: WebSocket Engine (Port 8080)</div>
                <div className="space-y-2">
                  <div className="text-zinc-300">[15:42:01.102] INFO: ws_connect client=v_designer_99</div>
                  <div className="text-zinc-600">{"<"} AUDIO_CHUNK [4096 bytes]</div>
                  <div className="text-zinc-600">{"<"} AUDIO_CHUNK [4096 bytes]</div>
                  <div className="text-amber-500">{">"} PARTIAL_JSON: {`{"transcript": "add a red button", "confidence": 0.89}`}</div>
                  <div className="text-zinc-600">{"<"} AUDIO_CHUNK [4096 bytes]</div>
                  <div className="text-green-500">{">"} COMMIT_JSON: {`{"transcript": "add a red button that says submit", "intent_parsed": true}`}</div>
                  <div className="text-[#ff3366]">{"*"} BUFFER_DIFF: +Node(type=BUTTON, fill=#FF0000, text="Submit")</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">03 // PLUGIN EXECUTION</h2>
            <h3 className="text-3xl font-black text-zinc-100 tracking-tighter mt-6">FIGMA MCP OPERATIONS</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5 text-zinc-400 font-light text-lg leading-relaxed space-y-6">
              <p>
                The MCP server polls the Semantic Buffer and executes atomic design operations via Figma's native Plugin API.
              </p>
              <p>
                By maintaining the <code className="bg-zinc-900 text-[#ff3366] px-2 py-1 border border-zinc-800">_mcp_ref</code>, future edits target existing nodes rather than re-generating elements from scratch.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-[#050505] p-8 font-mono text-xs md:text-sm text-zinc-400 overflow-x-auto border border-zinc-900 relative">
                <div className="absolute top-0 right-0 px-4 py-2 bg-zinc-900 text-zinc-300 text-xs font-bold uppercase border-b border-l border-zinc-800">operation.ts</div>
                <pre className="text-zinc-300 mt-6">
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
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
