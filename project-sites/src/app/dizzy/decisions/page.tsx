import { Metadata } from 'next';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';

export const metadata: Metadata = {
  title: 'Dizzy Engineering Decisions — Voice Parsing & AST Buffering',
  description: 'Engineering decisions and trade-offs behind real-time voice parsing, debouncing, and semantic AST buffering.',
  alternates: {
    canonical: 'https://dizzy.rounakneema.in/decisions',
  },
};

export default function DizzyDecisionsPage() {
  return (
    <div className="w-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans min-h-screen">
      <ProjectJsonLd slug="dizzy" pageType="Decisions" />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 lg:pt-24 pb-32">
        
        {/* Header */}
        <header className="mb-20">
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono mb-4">
            ENGINEERING RATIONALE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Trade-offs &amp; Decisions
          </h1>
          <p className="text-lg lg:text-xl font-normal text-neutral-600 max-w-3xl leading-relaxed">
            Key trade-offs across streaming speech recognition, incremental AST mutation, and Figma plugin IPC.
          </p>
        </header>

        {/* Section 01: Streaming Intent */}
        <section className="mb-24">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Latency &amp; Debounce
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Streaming Intent Parsing vs. Batch Processing
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-neutral-600 text-base leading-relaxed">
              <p>
                Waiting for someone to stop speaking before transcribing adds 1.2 to 2 seconds of latency before any canvas feedback appears. For interactive layout editing, this delay interrupts creative work.
              </p>
              
              <div className="border-l-2 border-neutral-900 pl-6 py-1 space-y-2">
                <span className="text-neutral-900 font-semibold block text-sm">Streaming Execution</span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We feed 250ms partial audio chunks directly to the parser. When parsing confidence exceeds 0.85, the mutation executes immediately. If confidence falls below that threshold, the system buffers the intent until the next chunk clarifies it.
                </p>
              </div>

              <div className="border-l-2 border-neutral-300 pl-6 py-1 space-y-2">
                <span className="text-neutral-900 font-semibold block text-sm">Handling Mid-Sentence Corrections</span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Speakers often correct themselves mid-sentence (&quot;Make the card blue, no, dark slate&quot;). Because mutations pass through the in-memory buffer before dispatch, the engine overwrites pending properties before sending the final WebSocket packet to Figma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: AST Buffering vs Full Generation */}
        <section className="mb-24 border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Data Model
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              AST Buffering vs. Full-Screen Regeneration
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-4">
              <h4 className="text-lg font-bold text-neutral-900 tracking-tight">Full-Screen Regeneration</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Generating entire mockups from scratch works well for initial brainstorming, but fails during iterative design. A request to adjust button padding will frequently re-render the whole screen, changing unrelated typography and rearranging neighboring blocks.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-neutral-900 bg-white space-y-4 shadow-sm">
              <h4 className="text-lg font-bold text-neutral-900 tracking-tight">Semantic AST Buffering</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Dizzy keeps an in-memory JSON tree of the document. Spoken commands mutate only the targeted node&apos;s attributes (such as padding, layoutMode, or fill color). Neighboring layers, component instances, and manual tweaks stay preserved.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-neutral-950 p-6 sm:p-8 rounded-xl font-mono text-xs text-neutral-300 overflow-x-auto border border-neutral-800 shadow-inner">
            <div className="text-neutral-500 mb-4 uppercase tracking-widest font-bold text-[10px]">AST Property Delta Example</div>
            <pre className="leading-relaxed">
{`// 1. Initial Document State
{ id: "frame_hero", type: "FRAME", padding: 16, layout: "VERTICAL" }

// 2. Spoken instruction: "Increase padding to 32px"
// 3. Parser identifies target property delta:
{
  "op": "REPLACE",
  "target": "frame_hero",
  "path": "padding",
  "value": 32,
  "previous": 16
}

// 4. Figma Plugin updates the live node:
const node = await figma.getNodeByIdAsync("frame_hero");
node.paddingLeft = 32;
node.paddingRight = 32;
node.paddingTop = 32;
node.paddingBottom = 32;`}
            </pre>
          </div>
        </section>

        {/* Section 03: Figma Bridge Batching */}
        <section className="border-t border-neutral-200 pt-16">
          <div className="border-b border-neutral-200 pb-4 mb-10">
            <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest font-mono">
              Figma Plugin Bridge
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Batching Updates to Avoid UI Jitter
              </h3>
            </div>
            <div className="md:col-span-7 space-y-4 text-neutral-600 text-base leading-relaxed">
              <p>
                Figma&apos;s plugin sandbox runs on the main application thread. Executing fifty individual property assignments across multiple frames causes visible frame drops and canvas stuttering.
              </p>
              <p>
                Dizzy&apos;s diff engine coalesces multiple property updates into a single transaction per animation frame. The local WebSocket bridge sends one structured payload, and the plugin applies all mutations within a single synchronous pass before relinquishing thread control back to Figma.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
