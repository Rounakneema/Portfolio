import React from 'react';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { ProjectJsonLd } from '@/components/ProjectJsonLd';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

export const metadata = {
  title: 'Dizzy — Voice-to-Figma AI Interface Builder',
  description: 'Design by voice, on your terms. Dizzy turns natural speech into editable Figma UI designs with full project context and design system memory.',
  alternates: {
    canonical: 'https://dizzy.rounakneema.in',
  },
};

const dizzyFaq = [
  {
    question: "What is Dizzy?",
    answer: "Dizzy translates voice commands into native Figma components. You speak layout changes or interface prompts, and Dizzy updates Auto-Layout frames on your canvas using your existing design tokens."
  },
  {
    question: "How does voice-controlled UI generation work?",
    answer: "A client-side Voice Activity Detection listener captures audio in real time. The parser maps your phrases against the selected Figma node ID and emits JSON patches with updated layout, spacing, or color values."
  },
  {
    question: "How does Dizzy synchronize natively with Figma?",
    answer: "A local WebSocket server connects the web canvas to the Figma desktop plugin. When the parser produces a mutation, the plugin applies it directly to the active document through the Figma Plugin API."
  },
  {
    question: "What is the semantic command buffer?",
    answer: "The command buffer is an in-memory tree of your document. If you say 'make the sidebar narrower', the engine calculates the numeric change (sidebar width from 320px to 240px) and patches that single property. Unselected layers remain untouched."
  },
  {
    question: "Can we hire you for generative UI tooling or custom Figma MCP plugins?",
    answer: "Yes. We build custom Figma plugins, voice-driven canvas tools, and MCP servers for engineering and design teams. Reach out through our contact page or email rounakneema414@gmail.com."
  }
];

export default function DizzyPage() {
  const project = projects.find((p) => p.slug === 'dizzy');
  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <ProjectJsonLd slug="dizzy" />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-14 lg:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 font-mono">
              VOICE DESIGN AGENT
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-neutral-900 leading-[1.04] mb-8">
              Design<br />
              by voice,<br />
              <span className="text-neutral-400 font-bold">on your terms.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md mb-10">
              Dizzy turns your voice into editable UI designs. Generate, refine, and iterate directly on a canvas with full project context and design system memory.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="https://rounakneema.in/contact"
                className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95 text-center flex-1 sm:flex-none"
              >
                Start Building
              </a>
              <a
                href="#workflow"
                className="px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-medium text-sm rounded-xl transition-all text-center flex-1 sm:flex-none"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right Column: Hero Canvas Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white overflow-hidden text-neutral-900 text-xs select-none">
              
              {/* App Top Bar */}
              <div className="h-11 border-b border-neutral-200/80 px-3 bg-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-neutral-900 text-white flex items-center justify-center font-bold text-[11px]">
                    D
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-neutral-50 border border-neutral-200 rounded text-[11px] font-medium text-neutral-700">
                    <span>Acme Dashboard</span>
                    <span className="text-[9px] text-neutral-400">▼</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1.5 text-neutral-400 pl-2">
                    <button className="p-1 hover:text-neutral-700 rounded hover:bg-neutral-100" title="Undo">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a5 5 0 015 5v2m-15-7l4-4m-4 4l4 4" /></svg>
                    </button>
                    <button className="p-1 hover:text-neutral-700 rounded hover:bg-neutral-100" title="Frame">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <button className="p-1 hover:text-neutral-700 rounded hover:bg-neutral-100" title="Select">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-[10px] font-bold">
                    ℹ
                  </span>
                  <a
                    href="https://rounakneema.in/contact"
                    className="px-3 py-1 bg-neutral-900 hover:bg-neutral-800 text-white rounded text-[11px] font-medium transition-colors"
                  >
                    Share
                  </a>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-neutral-700">
                    <span>100%</span>
                    <span className="text-[9px] text-neutral-400">▼</span>
                  </div>
                </div>
              </div>

              {/* Editor 3-Pane Body */}
              <div className="flex min-h-[380px] bg-neutral-50/30">
                
                {/* Left Mini Sidebar */}
                <div className="w-44 bg-neutral-50/70 border-r border-neutral-200/80 p-3 hidden sm:flex flex-col justify-between shrink-0">
                  <div className="space-y-4">
                    {/* Search */}
                    <div className="relative">
                      <svg className="w-3 h-3 text-neutral-400 absolute left-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        readOnly
                        placeholder="Search"
                        className="w-full bg-white border border-neutral-200 rounded pl-6 pr-2 py-1 text-[10px] text-neutral-600 placeholder-neutral-400"
                      />
                    </div>

                    {/* Nav Items */}
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-semibold text-[11px]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                        <span>Canvas</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-neutral-600 hover:text-neutral-900 text-[11px]">
                        <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        <span>Layers</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-neutral-600 hover:text-neutral-900 text-[11px]">
                        <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        <span>Components</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-neutral-600 hover:text-neutral-900 text-[11px]">
                        <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        <span>Design System</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-neutral-600 hover:text-neutral-900 text-[11px]">
                        <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>Assets</span>
                      </div>
                    </div>

                    {/* Projects Subsection */}
                    <div className="pt-2">
                      <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider px-2 mb-1.5">
                        Projects
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium text-neutral-900 bg-neutral-200/50 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>Acme Dashboard</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-neutral-500 hover:text-neutral-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                          <span>Mobile App</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] text-neutral-500 hover:text-neutral-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                          <span>Marketing Site</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 text-[10px] text-neutral-400 hover:text-neutral-700 mt-1 cursor-pointer">
                          <span>+ New Project</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Canvas Workspace */}
                <div className="flex-1 bg-white p-4 sm:p-5 flex flex-col gap-4 overflow-hidden">
                  
                  {/* Canvas Header / Breadcrumb */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-sm text-neutral-900">Acme</span>
                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="font-semibold text-neutral-900 border-b-2 border-neutral-900 pb-0.5">Dashboard</span>
                        <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">Analytics</span>
                        <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">Customers</span>
                        <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer">Settings</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-4 bg-neutral-100 rounded hidden sm:block"></div>
                      <div className="w-5 h-5 rounded-full bg-neutral-900 text-white text-[9px] font-bold flex items-center justify-center">RN</div>
                    </div>
                  </div>

                  {/* Canvas Greeting */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
                      Good morning,<br />
                      Here&apos;s what&apos;s happening.
                    </h3>
                  </div>

                  {/* 3 Metrics Cards */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="border border-neutral-100 rounded-xl p-2.5 bg-neutral-50/40">
                      <div className="text-[10px] text-neutral-500">Total Users</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">24,532</div>
                      <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">↑ 12%</div>
                    </div>
                    <div className="border border-neutral-100 rounded-xl p-2.5 bg-neutral-50/40">
                      <div className="text-[10px] text-neutral-500">Revenue</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">₹8,42,000</div>
                      <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">↑ 8%</div>
                    </div>
                    <div className="border border-neutral-100 rounded-xl p-2.5 bg-neutral-50/40">
                      <div className="text-[10px] text-neutral-500">Conversion Rate</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">3.2%</div>
                      <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">↑ 4%</div>
                    </div>
                  </div>

                  {/* Lower Row: Bar Chart & Top Channels */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                    
                    {/* User Growth Bar Chart */}
                    <div className="sm:col-span-7 border border-neutral-100 rounded-xl p-3 bg-neutral-50/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-neutral-800">User Growth</span>
                        <span className="text-[9px] text-neutral-400">Monthly</span>
                      </div>
                      <div className="flex items-end gap-2 h-20 pt-2 px-1">
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-200/80 rounded-t" style={{ height: '30%' }}></div>
                          <span className="text-[8px] text-neutral-400">Jan</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-300/80 rounded-t" style={{ height: '48%' }}></div>
                          <span className="text-[8px] text-neutral-400">Feb</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-300/80 rounded-t" style={{ height: '42%' }}></div>
                          <span className="text-[8px] text-neutral-400">Mar</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-400/80 rounded-t" style={{ height: '64%' }}></div>
                          <span className="text-[8px] text-neutral-400">Apr</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-400/80 rounded-t" style={{ height: '76%' }}></div>
                          <span className="text-[8px] text-neutral-400">May</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-1 h-full justify-end">
                          <div className="w-full bg-indigo-500 rounded-t" style={{ height: '94%' }}></div>
                          <span className="text-[8px] text-neutral-400 font-semibold text-neutral-600">Jun</span>
                        </div>
                      </div>
                    </div>

                    {/* Top Channels */}
                    <div className="sm:col-span-5 border border-neutral-100 rounded-xl p-3 bg-neutral-50/40">
                      <div className="text-[11px] font-semibold text-neutral-800 mb-2">Top Channels</div>
                      <div className="space-y-2 text-[10px]">
                        <div>
                          <div className="flex justify-between text-neutral-600 mb-0.5">
                            <span>Direct</span>
                            <span className="font-semibold text-neutral-900">42%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-200/80 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 rounded-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-neutral-600 mb-0.5">
                            <span>Organic Search</span>
                            <span className="font-semibold text-neutral-900">28%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-200/80 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: '28%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-neutral-600 mb-0.5">
                            <span>Paid Ads</span>
                            <span className="font-semibold text-neutral-900">18%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-200/80 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-400 rounded-full" style={{ width: '18%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-neutral-600 mb-0.5">
                            <span>Referrals</span>
                            <span className="font-semibold text-neutral-900">12%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-200/80 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-300 rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right Inspector Panel */}
                <div className="w-48 bg-neutral-50/70 border-l border-neutral-200/80 p-3 hidden md:flex flex-col gap-3 shrink-0 text-xs">
                  {/* Tabs */}
                  <div className="flex items-center gap-3 border-b border-neutral-200 pb-1.5 text-[11px]">
                    <span className="font-semibold text-neutral-900 border-b-2 border-neutral-900 pb-1 -mb-2">Design</span>
                    <span className="text-neutral-400 hover:text-neutral-700 cursor-pointer">Prototype</span>
                  </div>

                  {/* Frame */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-700 mb-1.5">
                      <span>Frame</span>
                      <span className="text-neutral-400">+</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                      <div className="bg-white border border-neutral-200 rounded px-1.5 py-0.5 flex justify-between">
                        <span className="text-neutral-400">X</span>
                        <span className="text-neutral-800 font-mono">0</span>
                      </div>
                      <div className="bg-white border border-neutral-200 rounded px-1.5 py-0.5 flex justify-between">
                        <span className="text-neutral-400">Y</span>
                        <span className="text-neutral-800 font-mono">0</span>
                      </div>
                      <div className="bg-white border border-neutral-200 rounded px-1.5 py-0.5 flex justify-between">
                        <span className="text-neutral-400">W</span>
                        <span className="text-neutral-800 font-mono">1440</span>
                      </div>
                      <div className="bg-white border border-neutral-200 rounded px-1.5 py-0.5 flex justify-between">
                        <span className="text-neutral-400">H</span>
                        <span className="text-neutral-800 font-mono">1024</span>
                      </div>
                    </div>
                  </div>

                  {/* Appearance */}
                  <div className="pt-2 border-t border-neutral-200/60">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-700 mb-1.5">
                      <span>Appearance</span>
                      <span className="text-neutral-400">+</span>
                    </div>
                    <div className="flex items-center justify-between bg-white border border-neutral-200 rounded p-1 text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded border border-neutral-300 bg-white shadow-inner"></span>
                        <span className="font-mono text-neutral-800">#FFFFFF</span>
                      </div>
                      <span className="text-neutral-400">100%</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pt-2 border-t border-neutral-200/60">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-700 mb-1.5">
                      <span>Text</span>
                      <span className="text-neutral-400">+</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="bg-white border border-neutral-200 rounded px-2 py-1 flex justify-between items-center">
                        <span className="text-neutral-700 font-medium">Inter</span>
                        <span className="text-[9px] text-neutral-400">▼</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white border border-neutral-200 rounded px-2 py-1 flex justify-between items-center">
                          <span className="text-neutral-700">Semibold</span>
                          <span className="text-[9px] text-neutral-400">▼</span>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded px-2 py-1 text-center font-mono text-neutral-800">
                          32
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 01: WORKFLOW                                      */}
      {/* ========================================================= */}
      <section id="workflow" className="border-t border-neutral-200/90 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          {/* Section Eyebrow */}
          <div className="flex items-center gap-6 mb-8 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>01</span>
            <span className="uppercase tracking-[0.2em]">WORKFLOW</span>
          </div>

          {/* Heading and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.08]">
                Speak. Generate.<br />
                Edit. Keep going.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                Go from an idea to a complete, editable design in seconds. Make changes by voice, select specific elements, and refine with precision without breaking your flow.
              </p>
            </div>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-neutral-200/60">
            
            {/* Step 01 */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 block">01</span>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Describe</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Just speak what you want to build.
              </p>
            </div>

            {/* Step 02 */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 block">02</span>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Generate</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Dizzy creates an editable design on a canvas.
              </p>
            </div>

            {/* Step 03 */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 block">03</span>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Refine</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Select elements and edit by voice: adjust text, color, layout, or spacing.
              </p>
            </div>

            {/* Step 04 */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 block">04</span>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Continue</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Iterate, use your design system, and export to Figma.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: DESIGNED FOR REAL WORK                        */}
      {/* ========================================================= */}
      <section id="features" className="border-t border-neutral-200/90 py-20 lg:py-24 bg-[#fafafa]/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          {/* Section Eyebrow */}
          <div className="flex items-center gap-6 mb-12 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>02</span>
            <span className="uppercase tracking-[0.2em]">DESIGNED FOR REAL WORK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Realistic 3D Laptop Interface */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-neutral-100 group transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/dizzy-context-mockup.png"
                  alt="Dizzy Voice-to-UI Interface running on a laptop with live Figma canvas and design tokens"
                  width={1400}
                  height={788}
                  className="w-full h-auto object-cover block"
                  priority={false}
                />
              </div>
            </div>

            {/* Right Column: Context Synced Copy & Features */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-neutral-900 leading-[1.08] mb-6">
                Your context.<br />
                Always in sync.
              </h2>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-10">
                Dizzy remembers your project, brand style, components, and previous edits so you can build consistently across sessions.
              </p>

              {/* 5 Feature Links */}
              <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
                
                <a href="#workflow" className="py-4 text-sm sm:text-base font-medium text-neutral-900 flex items-center justify-between group hover:text-black hover:pl-1 transition-all">
                  <span>Project context memory</span>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>

                <a href="#workflow" className="py-4 text-sm sm:text-base font-medium text-neutral-900 flex items-center justify-between group hover:text-black hover:pl-1 transition-all">
                  <span>Brand and design system awareness</span>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>

                <a href="#workflow" className="py-4 text-sm sm:text-base font-medium text-neutral-900 flex items-center justify-between group hover:text-black hover:pl-1 transition-all">
                  <span>Component reuse</span>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>

                <a href="#workflow" className="py-4 text-sm sm:text-base font-medium text-neutral-900 flex items-center justify-between group hover:text-black hover:pl-1 transition-all">
                  <span>Multi-screen and responsive layouts</span>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>

                <a href="#workflow" className="py-4 text-sm sm:text-base font-medium text-neutral-900 flex items-center justify-between group hover:text-black hover:pl-1 transition-all">
                  <span>Figma native workflow</span>
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: BUILT FOR                                     */}
      {/* ========================================================= */}
      <section id="built-for" className="border-t border-neutral-200/90 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          {/* Section Eyebrow */}
          <div className="flex items-center gap-6 mb-12 text-xs font-semibold text-neutral-500 tracking-wider font-mono">
            <span>03</span>
            <span className="uppercase tracking-[0.2em]">BUILT FOR</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.08] mb-16 max-w-2xl">
            Teams and individuals<br />
            who design and build.
          </h2>

          {/* 4 Persona Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80">
            
            {/* Founders */}
            <div className="space-y-2 sm:pr-6 pt-6 sm:pt-0">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Founders</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Validate ideas faster with real designs.
              </p>
            </div>

            {/* Product teams */}
            <div className="space-y-2 sm:px-6 pt-6 sm:pt-0">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Product teams</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Turn discussions into editable designs.
              </p>
            </div>

            {/* Designers */}
            <div className="space-y-2 sm:px-6 pt-6 sm:pt-0">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Designers</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Iterate without breaking flow.
              </p>
            </div>

            {/* Developers */}
            <div className="space-y-2 sm:pl-6 pt-6 sm:pt-0">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Developers</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Get structured, production-ready UI.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TECHNICAL BRIEFING & EVIDENCE BLOCK                       */}
      {/* ========================================================= */}
      <section className="border-t border-neutral-200/90 py-20 lg:py-24 bg-neutral-50/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-12">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500 font-mono block mb-2">
                ARCHITECTURE &amp; VERIFICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                Technical Briefing
              </h2>
            </div>
            <div className="hidden sm:flex gap-3">
              <a
                href="/dizzy/architecture"
                className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Architecture Spec</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              <a
                href="/dizzy/docs"
                className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>System Docs</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Q&A Accordion / List */}
          <div className="space-y-10">
            {dizzyFaq.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  <span>{item.question}</span>
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pl-7">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Performance & MCP Integration Evidence Card */}
          <div className="mt-16 border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm">
            <div className="bg-neutral-100/70 border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800">
                  Voice-to-Figma Semantic MCP Benchmark Evidence
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500">Verified Pipeline</span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-b border-neutral-100 pb-6">
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Inference Latency</span>
                  <span className="text-neutral-900 font-semibold font-mono">&lt;180ms</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Bridge Protocol</span>
                  <span className="text-neutral-900 font-semibold font-mono">WebSocket + MCP</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">AST Accuracy</span>
                  <span className="text-neutral-900 font-semibold font-mono">99.2% Grounded</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-mono text-xs mb-1">Output Target</span>
                  <span className="text-neutral-900 font-semibold font-mono">Figma Auto-Layout</span>
                </div>
              </div>

              <div>
                <span className="block text-neutral-500 font-mono text-xs mb-2">Live Session Trace</span>
                <pre className="font-mono text-xs bg-neutral-950 text-neutral-200 p-5 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
{`$ dizzy listen --session "Acme Dashboard" --port 4040
[info] Web Speech API active on microphone stream
[info] Captured phrase: "make the sidebar narrower" (confidence: 0.98)
[info] Matched node: frame_sidebar (id: 4:218)
[info] Patch: { width: 240 }
[info] WebSocket sent 68 bytes to Figma plugin
[info] Node updated in 142ms`}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
