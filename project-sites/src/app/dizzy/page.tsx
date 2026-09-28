import React from 'react';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TypeWriter } from '@/components/shared/TypeWriter';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata = {
  title: 'Dizzy — Voice-to-Figma AI Interface Builder',
  description: 'A context-aware, generative AI co-pilot that lives natively inside Figma. Translates voice commands into fully editable Auto-Layout Figma components.',
  alternates: {
    canonical: 'https://dizzy.rounakneema.in',
  },
};

const dizzyJsonLd = {
    faq: [
        { question: "What is Dizzy?", answer: "Dizzy is a context-aware voice-to-design agent that lives directly inside Figma. It generates real, editable Auto-Layout components rather than static images." },
        { question: "How does voice-controlled UI generation work?", answer: "We use a Web Speech API client with Voice Activity Detection to accumulate speech, which is then parsed by a two-pass NLP architecture to extract strict design intent. This intent is sent to Figma as a JSON Blueprint." },
        { question: "How does Dizzy interact with Figma?", answer: "It operates via a bidirectional WebSocket bridge. The Figma plugin streams the current selection context up to the edge orchestrator, and receives geometric mutations and blueprints back to draw natively." },
        { question: "What is the semantic command buffer?", answer: "It is the intermediate state where unstructured human intent ('make this blue') is resolved against the current Figma selection context into a strict geometric mutation payload." }
    ]
};

export default function DizzyPage() {
  const project = projects.find((p) => p.slug === 'dizzy');
  if (!project) return notFound();

  const blueprintJson = `{
  "type": "EXECUTE_INTENT",
  "payload": {
    "operation": "GENERATE_DASHBOARD",
    "blueprint": {
      "frame": { "width": 1440, "height": 900, "name": "GPU Cloud" },
      "colors": {
        "bg_primary": { "r": 0.05, "g": 0.06, "b": 0.09 },
        "accent": { "r": 0.05, "g": 0.64, "b": 0.91 }
      },
      "sidebar": {
        "width": 240,
        "items": ["Overview", "Instances", "Billing"]
      },
      "kpi_cards": [
        { "label": "GPU Utilization", "value": "87.3%", "up": true }
      ]
    }
  }
}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff3366] selection:text-white px-4 md:px-12 py-24 pb-32 max-w-7xl mx-auto overflow-hidden font-sans">
      <ProjectJsonLd slug="dizzy" />
      
      {/* Abstract background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ff3366] opacity-5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-500 opacity-5 blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* NEW HERO SEQUENCE */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] mb-12 text-center" id="voice-design">
        <h1 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Speak Your Interface<br/><span className="text-[#ff3366]">Into Existence.</span>
        </h1>
        
        {/* Fake voice input with typewriter */}
        <div className="w-full max-w-3xl bg-[#111] border-2 border-[#ff3366] p-6 mb-8 brutalist-shadow rounded-2xl relative">
          <div className="absolute -top-3 left-6 bg-[#ff3366] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Listening...
          </div>
          <p className="text-2xl md:text-3xl font-medium text-white italic">
            "<TypeWriter text="Create a dark SaaS dashboard with sidebar, analytics cards and a live revenue graph." delay={40} />"
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            <div className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse delay-150"></div>
          </div>
        </div>

        <div className="text-[#ff3366] font-bold text-xl mb-8 animate-bounce">
          ↓ DESIGNING...
        </div>

        {/* Mock generated UI frame */}
        <div className="w-full max-w-4xl text-left bg-[#f5f5f5] text-black border border-[#333] rounded-xl overflow-hidden shadow-2xl" id="semantic-state">
          {/* Top Bar */}
          <div className="bg-[#e5e5e5] px-4 py-3 flex items-center gap-2 border-b border-[#d5d5d5]">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-4 font-mono text-sm font-bold text-gray-500">Auto-Layout Active</span>
          </div>
          
          <div className="p-8 font-mono text-lg flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-300 pr-6 mr-6 flex flex-col gap-4">
              <div className="font-black text-xl mb-4">▌ Dashboard</div>
              <div className="bg-gray-200 p-2 rounded">Overview</div>
              <div className="text-gray-500 p-2">Analytics</div>
              <div className="text-gray-500 p-2">Settings</div>
            </div>
            {/* Main Content */}
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Total Revenue</div>
              <div className="text-5xl font-black mb-8 flex items-baseline gap-4">
                $48,920
                <span className="text-green-500 text-lg font-bold">↑ +18.4%</span>
              </div>
              <div className="h-48 w-full border-b-2 border-l-2 border-gray-300 relative">
                <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,10" fill="none" stroke="#ff3366" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic update demo */}
        <div className="w-full max-w-4xl text-left bg-black border border-[#333] p-8 mt-12 text-lg font-mono rounded-xl">
          <div className="mb-6 flex items-start gap-4">
            <span className="text-[#ff3366] font-black mt-1">USER:</span> 
            <span className="text-white">"Make the sidebar narrower."</span>
          </div>
          
          <div className="text-gray-500 mb-2 text-sm tracking-widest font-bold">↓ SEMANTIC UPDATE</div>
          <div className="text-[#e0e0e0] mb-8 bg-white/5 p-4 border-l-2 border-[#ff3366] inline-block font-bold rounded">
            sidebar.width: <span className="line-through text-gray-500">320</span> → <span className="text-[#ff3366]">240</span>
          </div>
          
          <div className="text-gray-500 mb-2 text-sm tracking-widest font-bold">↓ FIGMA MCP CALL</div>
          <div className="text-green-500 font-black animate-pulse bg-green-500/10 inline-block px-4 py-2 border border-green-500/30 rounded">
            FRAME UPDATED ✓
          </div>
        </div>
      </div>

      <ScrollReveal direction="up" delay={0.1}>
        <EntityHeader 
            title={project.title}
            subtitle="Design at the Speed of Thought."
            category={project.category}
            status={project.status}
            language="TypeScript, Node.js, WebSockets"
            github={project.github}
        />
        <ProjectFacts facts={[
            { label: 'Role', value: 'Architect & Developer' },
            { label: 'Domain', value: 'Generative UI' },
            { label: 'Integrations', value: 'Figma MCP, TypeSafe' }
        ]} />
      </ScrollReveal>

      {/* DEEP DIVE CONTENT */}
      <main className="relative z-10 mt-24 space-y-32">
        
        {/* Section 1 & 2: Exec Summary & Challenges */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-black mb-6 tracking-tight">The Core Engineering Challenges</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Building a voice-to-UI agent requires solving complex engineering problems that generic LLM wrappers fail to address. We needed native context awareness.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 hover:border-[#ff3366]/50 transition-colors">
                <h3 className="text-xl font-bold text-[#ff3366] mb-3 uppercase tracking-wider">A. The "This" Problem (Context)</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Problem:</strong> If a user says, <em>"Make this dark mode"</em>, the backend is blind.
                  <br/><br/>
                  <strong className="text-white">Solution:</strong> A continuous state-sync mechanism. The Figma plugin listens to <code>figma.on('selectionchange')</code> and silently streams the ID, Node Type, and Dimensions of the active selection over a WebSocket to the Node.js backend. This context resolves pronouns perfectly.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 hover:border-[#ff3366]/50 transition-colors">
                <h3 className="text-xl font-bold text-[#ff3366] mb-3 uppercase tracking-wider">B. VAD & The "Voice Stutter"</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Problem:</strong> Browser Speech-to-Text floods backends with partial fragments, causing hallucinated loops.
                  <br/><br/>
                  <strong className="text-white">Solution:</strong> An <strong>Intent Accumulation Layer</strong> with Voice Activity Detection (VAD). A strict debounce buffer accumulates speech and only flushes to the NLP parser after a 1.5s silence boundary.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 hover:border-[#ff3366]/50 transition-colors">
                <h3 className="text-xl font-bold text-[#ff3366] mb-3 uppercase tracking-wider">C. LLM Design Math Hallucination</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Problem:</strong> LLMs are terrible at exact X/Y coordinates and consistent hex codes.
                  <br/><br/>
                  <strong className="text-white">Solution:</strong> The LLM is <strong>only</strong> used for intent extraction and color tokenization. All layout math, auto-layout application, and component structuring are handled by a deterministic Execution Engine in TypeScript.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Section 3: System Architecture */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="bg-[#111] border border-[#333] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 tracking-tight border-b border-[#333] pb-4">System Architecture</h2>
            
            <div className="bg-black border border-white/10 rounded-lg p-6 mb-12 font-mono text-sm overflow-x-auto text-blue-400 shadow-inner">
              <pre>
{`┌─────────────────┐       ┌──────────────────────┐       ┌──────────────────┐
│  Voice Remote   │       │  Node.js Backend     │       │   Figma Plugin   │
│  (Web/Mobile)   │       │  (Orchestrator)      │       │   (code.ts)      │
├─────────────────┤       ├──────────────────────┤       ├──────────────────┤
│ - Web Speech API│──────▶│ - Intent Accumulation│──────▶│ - Blueprint      │
│ - STT Engine    │       │ - TypeSafe (jev)     │       │   Renderer       │
│ - Silence VAD   │◀──────│ - Content Engine     │◀──────│ - Context Sync   │
└─────────────────┘  WS   └──────────────────────┘  WS   └──────────────────┘`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. The Two-Pass TypeSafe Pipeline</h3>
                <p className="text-gray-400 leading-relaxed">
                  To ensure strict JSON outputs without hallucination, we utilize a two-pass system:
                  <br/><br/>
                  <strong className="text-white">Pass 1 (Intent):</strong> Extracts the <code>operation</code>, <code>product_type</code>, <code>theme</code>, and device.<br/>
                  <strong className="text-white">Pass 2 (Color):</strong> Resolves semantic moods ("dark navy") into strict palette object mappings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Domain Content Engine</h3>
                <p className="text-gray-400 leading-relaxed">
                  "Lorem Ipsum" ruins the generative illusion. The Content Engine maps the <code>product_type</code> to realistic data schemas.<br/><br/>
                  <em>If gpu_services:</em> [Overview, Instances, API Keys]<br/>
                  <em>If ecommerce:</em> [Orders, Inventory, Customers]
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Section 4 & 5: Data Contract & Execution */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6 tracking-tight">The JSON Blueprint Contract</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                The backend does not execute Figma commands directly. Instead, it acts as a headless UI engine, assembling a <strong>Blueprint JSON Contract</strong>. This payload is sent over WebSockets to the Figma Plugin.
              </p>
              <h3 className="text-xl font-bold text-white mt-12 mb-4">The Native Execution Engine (code.ts)</h3>
              <ul className="space-y-4 text-gray-400 list-disc pl-5 marker:text-[#ff3366]">
                <li><strong className="text-white">Recursive Drawing:</strong> Walks the JSON tree generating native FrameNodes and TextNodes.</li>
                <li><strong className="text-white">Production Auto-Layout:</strong> Applies native layout properties (<code>layoutMode = 'HORIZONTAL'</code>) making the UI perfectly responsive.</li>
                <li><strong className="text-white">Real-Time Mutations:</strong> Geometric updates are applied directly to the synced <code>selection.id</code>.</li>
              </ul>
            </div>
            <div className="bg-[#050505] border border-[#222] p-6 rounded-xl shadow-2xl relative group">
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#ff3366]/20 text-[#ff3366] text-xs font-bold rounded-bl-lg">WS PAYLOAD</div>
              <pre className="font-mono text-sm text-[#a3e635] overflow-x-auto">
                {blueprintJson}
              </pre>
            </div>
          </section>
        </ScrollReveal>

      </main>

      {/* FAQ */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="relative z-10 mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center tracking-tight">Technical FAQ</h2>
          <StaggerContainer>
            <div className="space-y-4">
                {dizzyJsonLd.faq.map((q, idx) => (
                    <StaggerItem key={idx}>
                      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-colors">
                          <h4 className="font-bold text-[#ff3366] mb-3 text-lg">{q.question}</h4>
                          <p className="text-gray-300 leading-relaxed">{q.answer}</p>
                      </div>
                    </StaggerItem>
                ))}
            </div>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      <div className="mt-32 border-t border-white/10 py-6 overflow-hidden bg-[#ff3366] text-white font-black text-xl uppercase relative z-10 w-screen ml-[calc(-50vw+50%)]">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span>VOICE TO NATIVE FIGMA ✦ SEMANTIC BUFFER ✦ AGENTIC WORKFLOW ✦ GENERATIVE UI ✦ NO FLATTENED PNGS ✦ JEV LATEST ✦ CONTINUOUS STATE SYNC ✦ </span>
          <span>VOICE TO NATIVE FIGMA ✦ SEMANTIC BUFFER ✦ AGENTIC WORKFLOW ✦ GENERATIVE UI ✦ NO FLATTENED PNGS ✦ JEV LATEST ✦ CONTINUOUS STATE SYNC ✦ </span>
        </div>
      </div>

    </div>
  );
}
