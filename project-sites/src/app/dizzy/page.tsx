import React from 'react';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { EntityHeader } from '@/components/EntityHeader';
import { ProjectFacts, RelatedProjects } from '@/components/ProjectFacts';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { TypeWriter } from '@/components/shared/TypeWriter';
import { StaggerContainer, StaggerItem, ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata = {
  title: 'Dizzy - Voice-to-Figma AI Interface Builder',
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
    <div className="w-full min-h-screen bg-black text-white selection:bg-[#ff3366] selection:text-white font-sans">
      <ProjectJsonLd slug="dizzy" />
      
      {/* 
        HERO: Asymmetric, Brutalist Typography 
        Dials: VARIANCE 9, MOTION 7, DENSITY 4
      */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 lg:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Massive Type */}
          <div className="lg:col-span-8 relative z-10" id="voice-design">
            <h1 className="text-[clamp(3.5rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-zinc-100">
              Speak Your <br/>
              <span className="text-[#ff3366]">Interface</span> <br/>
              Into Existence.
            </h1>
            <p className="mt-12 text-xl lg:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed tracking-tight">
              A context-aware, generative AI co-pilot that lives natively inside Figma. We translate natural language into fully editable, auto-layout perfect UI components in real-time.
            </p>
          </div>

          {/* Right Column: Interaction Window */}
          <div className="lg:col-span-4 relative z-20 w-full" id="semantic-state">
            <div className="bg-[#090909] border border-zinc-800 rounded-lg p-6 shadow-2xl relative group transform hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="absolute -top-3 -right-3 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-[#ff3366] border-2 border-black"></span>
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                Listening Pipeline Active
              </div>
              <p className="text-lg md:text-xl font-medium text-zinc-100 italic">
                "<TypeWriter text="Create a dark SaaS dashboard with sidebar, analytics cards and a live revenue graph." delay={40} cursor={true} />"
              </p>
              
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="text-[10px] text-[#ff3366] uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse"></span>
                    Executing Intent
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 opacity-60">
                  <div className="h-1 bg-zinc-700 w-full"></div>
                  <div className="h-1 bg-zinc-700 w-full"></div>
                  <div className="h-1 bg-[#ff3366] w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <EntityHeader 
          title={project.title}
          subtitle={project.subtitle}
          category={project.category}
          status={project.status}
          language={project.language}
          github={project.github}
          className="!px-0 !py-12 border-b border-zinc-900"
        />
      </div>

      {/* 
        DATA-DENSE TECHNICAL SPECIFICATION
      */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Core Technical Challenges Grid - NO SAAS CARDS, RAW BORDERS */}
        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">01 // Architectural Friction</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="group">
              <h3 className="text-4xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">The "This" Problem.</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                <strong className="text-zinc-200 font-medium">Problem:</strong> Saying "make this button larger" means nothing to a cloud LLM. It lacks the spatial and object context of your canvas.
                <br/><br/>
                <strong className="text-zinc-200 font-medium">Solution:</strong> The Figma plugin intercepts the live selection state. It streams the selected Node ID, dimensions, and styling data up to the orchestrator along with the audio. The LLM resolves "this" against the geometric context.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-4xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">VAD Stuttering.</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                <strong className="text-zinc-200 font-medium">Problem:</strong> Designers pause while thinking. Standard Voice Activity Detection (VAD) chops these pauses into multiple broken commands.
                <br/><br/>
                <strong className="text-zinc-200 font-medium">Solution:</strong> We implemented an Intent Accumulator queue. Even if VAD cuts the audio, the backend waits for a complete semantic intent ("add a shadow...") before dispatching to the NLP pass, ignoring mid-sentence hesitation.
              </p>
            </div>

            <div className="group">
              <h3 className="text-4xl font-black text-zinc-100 mb-6 tracking-tighter group-hover:text-[#ff3366] transition-colors">Hallucinated Geometry.</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                <strong className="text-zinc-200 font-medium">Problem:</strong> LLMs are terrible at exact X/Y coordinates and consistent hex codes.
                <br/><br/>
                <strong className="text-zinc-200 font-medium">Solution:</strong> The LLM is strictly confined to intent extraction. All layout math, auto-layout application, and component structuring are handled by a deterministic Execution Engine in TypeScript.
              </p>
            </div>
          </div>
        </section>

        {/* System Architecture Flow */}
        <section className="mb-32">
          <div className="border-b border-zinc-800 pb-6 mb-12 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">02 // Systems Flow</h2>
            <h3 className="text-2xl font-black text-zinc-100 tracking-tighter">THE TWO-PASS TYPESAFE PIPELINE</h3>
          </div>
          
          <div className="bg-[#050505] border border-zinc-900 p-8 md:p-16 overflow-x-auto">
            <pre className="font-mono text-[10px] md:text-sm text-zinc-500 leading-relaxed">
{`    [ USER CONTEXT ]
           │
           ▼
    VOICE GATEWAY (JEV)
    ├─► VAD (Voice Activity Detection)
    ├─► Streaming STT (Speech-to-Text)
    └─► Context Injection (Current Figma Canvas State)
           │
           ▼
    AGENTIC ORCHESTRATOR
    ├─► Router: Maps intent to specific sub-agents
    │   ├─► Layout Agent (Flexbox/Grids)
    │   ├─► Typography Agent (Fonts, Weights)
    │   └─► Styling Agent (Colors, Shadows, Borders)
    ├─► State Manager: Tracks semantic changes
    └─► TypeSafe Output Validator
           │
           ▼
    SEMANTIC BUFFER TO FIGMA MCP
    ├─► Diff Engine: Calculates minimal updates
    ├─► Figma Plugin Bridge (WebSocket/REST)
    └─► Native Object Generator (Frames, Text, Vectors)
           │
           ▼
    [ FIGMA NATIVE APPLICATION ]`}
            </pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-4 tracking-tight">Pass 1: Intent & Semantic Resolution</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                To ensure strict JSON outputs without hallucination, we utilize a two-pass system. Pass 1 extracts the <code>operation</code>, <code>product_type</code>, <code>theme</code>, and device.
                Pass 2 resolves semantic moods (e.g. "dark navy") into strict palette object mappings.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-100 mb-4 tracking-tight">Domain Content Engine</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                "Lorem Ipsum" ruins the generative illusion. The Content Engine maps the <code>product_type</code> to realistic data schemas. If the request is for <code>gpu_services</code>, it populates nodes with [Overview, Instances, API Keys].
              </p>
            </div>
          </div>
        </section>

        {/* Data Contract / Blueprint */}
        <ScrollReveal direction="up" delay={0.1}>
          <section className="mb-32">
            <div className="border-t border-zinc-800 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">03 // Execution</h2>
                <h3 className="text-4xl font-black text-zinc-100 tracking-tighter mb-8">THE JSON BLUEPRINT CONTRACT</h3>
                <p className="text-lg font-light text-zinc-400 leading-relaxed mb-8">
                  The backend does not execute Figma commands directly. Instead, it acts as a headless UI engine, assembling a Blueprint JSON Contract. This payload is sent over WebSockets to the Figma Plugin.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-1">Recursive Drawing</h4>
                    <p className="text-zinc-500 text-sm">Walks the JSON tree generating native FrameNodes and TextNodes.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Production Auto-Layout</h4>
                    <p className="text-zinc-500 text-sm">Applies native layout properties (<code>layoutMode = 'HORIZONTAL'</code>) making the UI perfectly responsive.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Real-Time Mutations</h4>
                    <p className="text-zinc-500 text-sm">Geometric updates are applied directly to the synced <code>selection.id</code>.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-[#050505] border border-zinc-800 p-8 md:p-12 h-full">
                  <div className="text-[#ff3366] text-[10px] font-bold uppercase tracking-widest mb-8 flex items-center justify-between">
                    <span>WS Payload</span>
                    <span className="w-2 h-2 bg-[#ff3366] rounded-full animate-pulse"></span>
                  </div>
                  <pre className="font-mono text-xs md:text-sm text-zinc-400 overflow-x-auto leading-loose">
                    {blueprintJson}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

      </main>

      {/* FAQ */}
      <section className="border-t border-zinc-900 bg-[#020202]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">04 // Knowledge Base</h2>
            <h3 className="text-4xl font-black text-zinc-100 tracking-tighter">TECHNICAL FAQ</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {dizzyJsonLd.faq.map((q, idx) => (
                  <div key={idx} className="border-b border-zinc-800 pb-8 hover:border-zinc-500 transition-colors">
                      <h4 className="font-medium text-white mb-4 text-xl tracking-tight">{q.question}</h4>
                      <p className="text-zinc-400 font-light leading-relaxed">{q.answer}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* Marquee Footer */}
      <div className="border-y border-[#ff3366] py-6 overflow-hidden bg-[#ff3366] text-white font-black text-2xl uppercase tracking-tighter relative z-10 w-full">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span>VOICE TO NATIVE FIGMA ✦ SEMANTIC BUFFER ✦ AGENTIC WORKFLOW ✦ GENERATIVE UI ✦ NO FLATTENED PNGS ✦ JEV LATEST ✦ CONTINUOUS STATE SYNC ✦ </span>
          <span>VOICE TO NATIVE FIGMA ✦ SEMANTIC BUFFER ✦ AGENTIC WORKFLOW ✦ GENERATIVE UI ✦ NO FLATTENED PNGS ✦ JEV LATEST ✦ CONTINUOUS STATE SYNC ✦ </span>
        </div>
      </div>

    </div>
  );
}
