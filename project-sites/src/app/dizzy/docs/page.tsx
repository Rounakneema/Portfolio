import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'Dizzy Protocol Specs — Semantic Buffer & Figma Bridge',
  description: 'Technical specifications for the Dizzy voice-to-Figma semantic buffer, WebSocket protocol, and plugin API bridge.',
  alternates: {
    canonical: 'https://dizzy.rounakneema.in/docs',
  },
};

export default function DizzyDocsPage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="dizzy" pageType="Docs" />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            TECHNICAL DOCUMENTATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Protocol Specifications
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            Data models, streaming WebSocket packets, and plugin execution primitives for the Dizzy engine.
          </p>
        </header>

        {/* Section 01: AST Definition */}
        <section className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              AST Schema
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Semantic Buffer Tree
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                The semantic buffer is a typed tree representing your Figma canvas. The schema validator enforces valid node types, layout modes, and numeric ranges before sending any command to the plugin bridge.
              </p>
              <p>
                Every node retains its corresponding native Figma object ID in <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-800 font-mono text-xs">_figma_ref</code> so future voice commands update existing elements instead of creating duplicates.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  Schema: BufferNode (TypeScript)
                </div>
                <pre className="leading-relaxed">
{`interface BufferNode {
  id: string;               // UUID-v4 identifier
  type: 'FRAME' | 'TEXT' | 'BUTTON' | 'IMAGE';
  intent: string;           // Transcribed voice command
  properties: {
    layout: 'HORIZONTAL' | 'VERTICAL' | 'NONE';
    padding?: [number, number, number, number];
    gap?: number;
    fill?: string;          // Hex color or token key
    cornerRadius?: number;
    width?: number | 'HUG' | 'FILL';
    height?: number | 'HUG' | 'FILL';
  };
  children: BufferNode[];
  _figma_ref?: string;      // Figma native node ID
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Streaming Protocol */}
        <section className="mb-24 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Network Protocol
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              WebSocket Event Loop (Port 4040)
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                The client chunks microphone input into 250ms audio frames and streams them to the transcription worker over WebSocket.
              </p>
              <p>
                When a partial transcript contains an explicit property keyword (like &quot;padding&quot;, &quot;darker&quot;, or &quot;blue&quot;), the engine calculates an immediate preview diff and sends it to the Figma plugin.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  Live Session Stream
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="text-neutral-500">[15:42:01.102] connect: client=local_designer_1</div>
                  <div className="text-neutral-500">[15:42:01.350] audio: 4096 bytes chunk received</div>
                  <div className="text-amber-400">[15:42:01.420] transcript: &quot;add a primary button&quot; (conf: 0.91)</div>
                  <div className="text-blue-400">[15:42:01.440] patch: +Node(type: &quot;BUTTON&quot;, text: &quot;Submit&quot;, fill: &quot;#111827&quot;)</div>
                  <div className="text-emerald-400">[15:42:01.455] figma_sync: 1 node created in 15ms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Plugin Execution */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Plugin Runtime
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Figma Plugin API Bridge
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5 text-neutral-600 text-base leading-relaxed space-y-4">
              <p>
                The Figma plugin listens for local mutation messages. It reads the targeted node from Figma&apos;s current selection and applies Auto-Layout dimensions directly through the official Plugin API.
              </p>
              <p>
                Because changes use native Figma frame properties, the result is completely editable with standard keyboard shortcuts and mouse clicks.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
                <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px] border-b border-neutral-800 pb-3">
                  plugin/mutator.ts
                </div>
                <pre className="leading-relaxed">
{`async function applyNodeMutation(node: BufferNode) {
  if (node._figma_ref) {
    const frame = await figma.getNodeByIdAsync(node._figma_ref);
    if (frame && frame.type === 'FRAME') {
      if (node.properties.fill) {
        frame.fills = [{ type: 'SOLID', color: hexToRgb(node.properties.fill) }];
      }
      if (node.properties.padding) {
        frame.paddingTop = node.properties.padding[0];
        frame.paddingRight = node.properties.padding[1];
        frame.paddingBottom = node.properties.padding[2];
        frame.paddingLeft = node.properties.padding[3];
      }
    }
    return;
  }

  // Create new Auto-Layout frame
  const frame = figma.createFrame();
  frame.layoutMode = node.properties.layout === 'VERTICAL' ? 'VERTICAL' : 'HORIZONTAL';
  frame.itemSpacing = node.properties.gap || 12;
  node._figma_ref = frame.id;
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
