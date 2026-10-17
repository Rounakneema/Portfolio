'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, CheckSquare, Github, Layers, GitBranch, Terminal, FileCode, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectSample {
  slug: string;
  name: string;
  repo: string;
  tagline: string;
  client: string;
  api: string;
  database: string;
  auth: string;
  workers: string;
  storage: string;
  questions: string[];
  techStack: string[];
}

const samples: Record<string, ProjectSample> = {
  revealr: {
    slug: 'revealr',
    name: 'Revealr',
    repo: 'https://github.com/rounakneema/Revealr',
    tagline: 'High-speed concurrent Go network scanner and attack surface detector',
    client: 'CLI / Terminal App',
    api: 'Go Engine (Raw Sockets)',
    database: 'SQLite Baseline DB',
    auth: 'Local Host Permissions',
    workers: 'Bounded Worker Pool (Go)',
    storage: 'JSON / Stdout Store',
    questions: [
      'Why did you choose raw sockets over standard net.Dial in Go?',
      'How does the token-bucket rate limiter prevent IDS alerts?',
      'What are the memory trade-offs of storing scan baselines in SQLite?',
      'How would you distribute the scan engine across multiple VPC nodes?',
    ],
    techStack: ['Go 1.22', 'Raw Sockets', 'SQLite', 'Token Bucket', 'Python IPC'],
  },
  metromind: {
    slug: 'metromind',
    name: 'MetroMind',
    repo: 'https://github.com/rounakneema/MetroMind',
    tagline: 'Enterprise municipal transit OCR and grounded vector search engine',
    client: 'Civic Web Portal',
    api: 'Go API Gateway',
    database: 'Postgres (Audit / RBAC)',
    auth: 'JWT & Role Auth',
    workers: 'Python OCR Workers (RabbitMQ)',
    storage: 'Milvus Vector Database',
    questions: [
      'Why did you decouple the Go gateway from the Python OCR workers using RabbitMQ?',
      'How do you enforce RBAC pre-filtering before querying Milvus vectors?',
      'What are the scalability bottlenecks when ingesting 10,000 PDFs in batch?',
      'How do you prevent hallucinations when answering compliance questions?',
    ],
    techStack: ['Go', 'RabbitMQ', 'Python / Tesseract', 'Milvus Vector DB', 'PostgreSQL'],
  },
  sortmail: {
    slug: 'sortmail',
    name: 'SortMail',
    repo: 'https://github.com/rounakneema/SortMail',
    tagline: 'Single-pass semantic inbox intelligence and threat detection',
    client: 'Next.js 15 Client',
    api: 'FastAPI REST Server',
    database: 'PostgreSQL Cache',
    auth: 'OAuth 2.0 PKCE',
    workers: 'Gemini 2.0 Flash Parser',
    storage: 'Redis Pub/Sub (SSE)',
    questions: [
      'Why did you choose Server-Sent Events (SSE) over WebSockets for email sync?',
      'How does the single-pass prompt extract deadlines, sentiment, and threat scores together?',
      'What was the latency trade-off between PostgreSQL caching versus direct Gmail API reads?',
      'How do you handle OAuth token refresh race conditions under concurrent requests?',
    ],
    techStack: ['Python / FastAPI', 'Next.js 15', 'Redis Pub/Sub', 'PostgreSQL', 'SSE'],
  },
};

export function DevContextHero() {
  const [selectedSample, setSelectedSample] = useState<string>('revealr');
  const [inputUrl, setInputUrl] = useState<string>(samples.revealr.repo);
  const [viewMode, setViewMode] = useState<'flatlay' | 'interactive'>('flatlay');
  const [activeTab, setActiveTab] = useState<'architecture' | 'overview' | 'tech'>('architecture');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState<boolean>(false);

  const current = samples[selectedSample] || samples.revealr;

  const handleSelectSample = (key: string) => {
    setSelectedSample(key);
    setInputUrl(samples[key].repo);
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 600);
  };

  return (
    <section className="relative w-full pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-[#f7f5ee]">
      
      {/* Subtle Paper Desk Background Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_85%_65%_at_50%_0%,rgba(219,234,254,0.35),transparent_70%)]" />

      {/* Atmospheric Desk Prop: Green Plant Leaves peeking from top-right corner */}
      <img
        src="/images/devcontext/assets/prop-plant.png"
        alt="Desk houseplant"
        className="absolute -top-3 -right-3 w-32 sm:w-44 lg:w-56 h-auto pointer-events-none select-none z-20 opacity-90 drop-shadow-md"
      />

      {/* Atmospheric Desk Prop: Black Ballpoint Pen resting on the far right edge */}
      <img
        src="/images/devcontext/assets/prop-pen.png"
        alt="Desk ballpoint pen"
        className="hidden xl:block absolute top-1/3 -right-2 w-10 lg:w-12 h-auto pointer-events-none select-none z-20 opacity-85 drop-shadow-sm rotate-6"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, VALUE PROP, CTAS                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-7 pt-4">
            
            {/* Taped Eyebrow Badge with Authentic Washi Tape */}
            <div className="inline-block relative">
              <img
                src="/images/devcontext/assets/tape-periwinkle.png"
                alt="Washi tape"
                className="absolute -top-3.5 left-6 w-14 h-auto -rotate-3 select-none pointer-events-none drop-shadow-2xs z-20 opacity-95"
              />
              <div className="px-4 py-1.5 rounded-sm bg-[#dce6fa] border border-[#bfdbfe] text-[#1e40af] font-mono text-[11px] font-bold uppercase tracking-wider shadow-xs rotate-[-1deg]">
                TURN YOUR GITHUB INTO INTERVIEW CONFIDENCE
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#18181b] leading-[1.08] font-sans">
                  You built the project.
                </h1>
                {/* Hand-drawn 4-pointed doodle star */}
                <span className="text-[#18181b] text-2xl sm:text-3xl select-none -translate-y-2">✦</span>
              </div>
              
              <div className="relative inline-block">
                <span className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#1d4ed8] leading-[1.08] font-sans">
                  Now own the conversation.
                </span>
                {/* Hand-drawn SVG cobalt marker underline */}
                <svg
                  className="w-full h-3.5 text-[#1d4ed8]/80 absolute -bottom-2 left-0"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8.5C65 3.5 175 4 297 8.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#52525b] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              DevContext analyzes your project, explains it in simple terms, generates interview questions and helps you practice, so you can confidently talk about what you built.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#analyze"
                className="px-6 py-3.5 bg-[#18181b] hover:bg-black text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Analyze your project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 bg-[#fbf9f4] hover:bg-white text-[#18181b] font-bold text-sm rounded-xl border border-[#d4cebf] hover:border-[#18181b] transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95"
              >
                <span>See how it works</span>
              </a>
            </div>

            {/* GitHub Trust Badge */}
            <div className="flex items-center gap-2 text-xs text-[#71717a] font-medium pt-1">
              <Github className="w-4 h-4 text-[#18181b]" />
              <span>Works with any public GitHub repository &bull; AST evidence grounded</span>
            </div>

            {/* Preloaded Demo Selector Strip */}
            <div className="pt-2 p-3.5 rounded-xl bg-white/70 border border-[#ded7c8] shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#71717a] font-bold">Try an engineering showcase:</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Ready to Inspect</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(['revealr', 'metromind', 'sortmail'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleSelectSample(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                      selectedSample === key
                        ? 'bg-[#18181b] text-white shadow-xs scale-[1.02]'
                        : 'bg-white hover:bg-[#ede6d8] text-[#18181b] border border-[#d4cebf]'
                    }`}
                  >
                    <span>{samples[key].name}</span>
                    {selectedSample === key && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Hand-Drawn Doodle Curved Pencil Arrow pointing toward the desk flatlay */}
            <div className="hidden lg:flex items-center gap-3 pt-2 text-[#71717a]">
              <svg className="w-28 h-12 text-[#9ca3af] -rotate-6" viewBox="0 0 120 50" fill="none">
                <path d="M10 40 C 45 10, 80 15, 105 32" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M105 32 L 95 24 M 105 32 L 98 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-serif italic text-xs text-[#857f72]">
                Explore the workspace &rarr;
              </span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: AUTHENTIC ORGANIC DESK WORKSPACE            */}
          {/* ========================================================= */}
          <div id="analyze" className="lg:col-span-7 relative space-y-6">
            
            {/* TOP CARD: AUTHENTIC TORN PAPER "PASTE YOUR GITHUB LINK" CARD */}
            <div className="relative group">
              {/* Authentic Blue Washi Tape Pinned at Top Left */}
              <img
                src="/images/devcontext/assets/tape-blue.png"
                alt="Washi tape"
                className="absolute -top-3.5 left-8 w-20 h-auto -rotate-2 select-none pointer-events-none drop-shadow-2xs z-30"
              />

              {/* View Mode Switcher Pill on Top Right */}
              <div className="absolute top-2 right-4 z-30 flex bg-[#f7f5ee]/90 backdrop-blur-xs p-1 rounded-lg border border-[#ded7c8] text-[10px] font-mono shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('flatlay')}
                  className={`px-2.5 py-0.5 rounded transition-all ${
                    viewMode === 'flatlay'
                      ? 'bg-[#18181b] text-white font-bold shadow-2xs'
                      : 'text-[#71717a] hover:text-[#18181b]'
                  }`}
                >
                  Desk Flatlay
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('interactive')}
                  className={`px-2.5 py-0.5 rounded transition-all ${
                    viewMode === 'interactive'
                      ? 'bg-[#18181b] text-white font-bold shadow-2xs'
                      : 'text-[#71717a] hover:text-[#18181b]'
                  }`}
                >
                  Live Tree
                </button>
              </div>

              {/* Step 1 Authentic Card Visual with Interactive Input Controls */}
              <div className="relative rounded-2xl bg-white border border-[#ded7c8] p-5 sm:p-6 shadow-md hover:shadow-lg transition-all space-y-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#dce6fa] border border-[#bfdbfe] text-[#1d4ed8] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#18181b] tracking-tight flex items-center gap-2">
                      <span>Paste your GitHub link</span>
                      <span className="w-10 h-0.5 bg-[#1d4ed8]/70 inline-block rounded-full" />
                    </h3>
                    <p className="text-xs text-[#52525b]">
                      Connect any public repository in seconds.
                    </p>
                  </div>
                </div>

                {/* GitHub Input Bar */}
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
                  <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#faf8f3] border border-[#d6caba] text-[#18181b] shadow-2xs focus-within:border-[#1d4ed8] focus-within:bg-white transition-all">
                    <Github className="w-4 h-4 text-[#18181b] shrink-0" />
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://github.com/username/project"
                      className="w-full bg-transparent text-xs font-mono text-[#18181b] outline-none placeholder-[#a1a1aa]"
                    />
                  </div>

                  <button
                    onClick={() => {
                      setAnalyzing(true);
                      setTimeout(() => setAnalyzing(false), 600);
                      if (inputUrl.includes('Revealr')) setSelectedSample('revealr');
                      else if (inputUrl.includes('MetroMind')) setSelectedSample('metromind');
                      else setSelectedSample('sortmail');
                    }}
                    className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold rounded-xl transition-all shrink-0 flex items-center justify-center gap-2 shadow-sm active:scale-95"
                  >
                    <span>{analyzing ? 'Analyzing...' : 'Analyze'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Live AST Status Indicator */}
                <div className="pt-2 border-t border-[#f0ebe0] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[#18181b] font-semibold">{current.name}</span>
                    <span className="text-[#a1a1aa]">&bull;</span>
                    <span className="text-[#71717a]">{current.tagline}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {current.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-[#f4efe4] text-[#18181b] text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Hand-Drawn Doodle Arrow pointing down from Step 1 to Blueprint */}
              <div className="flex justify-center -my-2 relative z-20 pointer-events-none">
                <svg className="w-8 h-8 text-[#9ca3af]" viewBox="0 0 30 30" fill="none">
                  <path d="M15 2 C 15 15, 15 20, 15 26" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
                  <path d="M10 21 L 15 27 L 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* PRIMARY VIEW: THE AUTHENTIC DESK COLLAGE FLATLAY */}
            {viewMode === 'flatlay' ? (
              <div className="relative group">
                {/* Physical Flatlay Image with Natural Paper Drop Shadow */}
                <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.008]">
                  <img
                    src="/images/devcontext/devcontext-desk-composition.png"
                    alt="DevContext Architecture Blueprint, Interview Questions, and Preparation Desk"
                    className="w-full h-auto drop-shadow-2xl select-none"
                  />
                </div>

                {/* Floating Tactile Note Accent Pinned with Kraft Tape */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#ded7c8] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono relative">
                  <img
                    src="/images/devcontext/assets/tape-kraft.png"
                    alt="Kraft tape"
                    className="absolute -top-3 left-8 w-16 h-auto -rotate-1 select-none pointer-events-none drop-shadow-2xs"
                  />
                  
                  <div className="flex items-center gap-2 pt-1 sm:pt-0">
                    <span className="text-emerald-700 font-bold">[✓] Grounded Evidence:</span>
                    <span className="text-[#18181b]">{current.name}</span>
                    <span className="text-[#a1a1aa]">&bull;</span>
                    <span className="text-[#52525b]">{current.questions.length} Verified Questions</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setViewMode('interactive')}
                      className="px-3 py-1 rounded-md bg-[#f4efe4] hover:bg-[#ede6d8] text-[#18181b] text-[11px] font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Layers className="w-3 h-3 text-[#1d4ed8]" />
                      <span>Explore Interactive AST Tree &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* SECONDARY VIEW: EXPANDED INTERACTIVE AST NODE TOPOLOGY */
              <div className="space-y-5 animate-in fade-in duration-300">
                
                {/* Blueprint Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#ded7c8] shadow-md relative">
                  
                  {/* Header & Tabs */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#e5ded2]">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#1d4ed8]">
                        INTERACTIVE NODE TOPOLOGY
                      </span>
                      <h3 className="text-xl font-bold text-[#18181b] tracking-tight">
                        {current.name}, Synthesized
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1 text-[11px] font-medium font-sans bg-[#f7f5ee] p-1 rounded-lg border border-[#e5ded2]">
                      <button
                        onClick={() => setActiveTab('architecture')}
                        className={`px-3 py-1 rounded-md transition-all ${
                          activeTab === 'architecture'
                            ? 'bg-white text-[#18181b] font-bold shadow-xs'
                            : 'text-[#71717a] hover:text-[#18181b]'
                        }`}
                      >
                        Architecture
                      </button>
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-3 py-1 rounded-md transition-all ${
                          activeTab === 'overview'
                            ? 'bg-white text-[#18181b] font-bold shadow-xs'
                            : 'text-[#71717a] hover:text-[#18181b]'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setActiveTab('tech')}
                        className={`px-3 py-1 rounded-md transition-all ${
                          activeTab === 'tech'
                            ? 'bg-white text-[#18181b] font-bold shadow-xs'
                            : 'text-[#71717a] hover:text-[#18181b]'
                        }`}
                      >
                        Tech Stack
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Architecture Blueprint */}
                  {activeTab === 'architecture' && (
                    <div className="space-y-4">
                      <p className="text-xs text-[#52525b] leading-relaxed">
                        Component topology synthesized directly from repository imports, configuration files, and API route declarations.
                      </p>

                      <div className="p-4 sm:p-6 rounded-xl bg-[#faf8f3] border-2 border-dashed border-[#d6caba] relative">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center font-mono text-xs">
                          <div
                            onMouseEnter={() => setActiveNode('client')}
                            onMouseLeave={() => setActiveNode(null)}
                            className="p-3.5 rounded-lg bg-white border border-[#18181b]/30 shadow-xs hover:border-[#1d4ed8] hover:shadow-md transition-all cursor-pointer group"
                          >
                            <div className="text-[10px] text-[#71717a] uppercase font-sans">Front/Interface</div>
                            <div className="font-bold text-[#18181b] mt-0.5 group-hover:text-[#1d4ed8]">{current.client}</div>
                          </div>

                          <div
                            onMouseEnter={() => setActiveNode('api')}
                            onMouseLeave={() => setActiveNode(null)}
                            className="p-3.5 rounded-lg bg-[#dbeafe] border-2 border-[#1d4ed8] shadow-sm hover:shadow-md transition-all cursor-pointer"
                          >
                            <div className="text-[10px] text-[#1e40af] uppercase font-sans font-semibold">Core Orchestration</div>
                            <div className="font-bold text-[#1e40af] mt-0.5">{current.api}</div>
                          </div>

                          <div
                            onMouseEnter={() => setActiveNode('database')}
                            onMouseLeave={() => setActiveNode(null)}
                            className="p-3.5 rounded-lg bg-white border border-[#18181b]/30 shadow-xs hover:border-[#1d4ed8] hover:shadow-md transition-all cursor-pointer group"
                          >
                            <div className="text-[10px] text-[#71717a] uppercase font-sans">Primary Storage</div>
                            <div className="font-bold text-[#18181b] mt-0.5 group-hover:text-[#1d4ed8]">{current.database}</div>
                          </div>
                        </div>

                        <div className="hidden sm:flex justify-around items-center py-2 text-[#9ca3af]">
                          <span>&darr;</span>
                          <span>&darr;</span>
                          <span>&darr;</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center font-mono text-xs mt-2 sm:mt-0">
                          <div className="p-3 rounded-lg bg-white/80 border border-[#d6caba] text-xs">
                            <span className="text-[10px] text-[#71717a] block">Security</span>
                            <span className="font-semibold text-[#18181b]">{current.auth}</span>
                          </div>

                          <div className="p-3 rounded-lg bg-white/80 border border-[#d6caba] text-xs">
                            <span className="text-[10px] text-[#71717a] block">Async Queue</span>
                            <span className="font-semibold text-[#18181b]">{current.workers}</span>
                          </div>

                          <div className="p-3 rounded-lg bg-white/80 border border-[#d6caba] text-xs">
                            <span className="text-[10px] text-[#71717a] block">Cache / Vectors</span>
                            <span className="font-semibold text-[#18181b]">{current.storage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Overview */}
                  {activeTab === 'overview' && (
                    <div className="p-4 rounded-xl bg-[#faf8f3] border border-[#e4ded2] space-y-3 font-sans text-xs text-[#52525b] leading-relaxed">
                      <p>
                        <strong className="text-[#18181b] font-semibold">Repository Summary:</strong> {current.tagline}.
                      </p>
                      <p>
                        DevContext inspected abstract syntax trees, function signatures, and dependencies to ground every explanation directly in the author code.
                      </p>
                    </div>
                  )}

                  {/* Tab 3: Tech Stack */}
                  {activeTab === 'tech' && (
                    <div className="p-4 rounded-xl bg-[#faf8f3] border border-[#e4ded2] space-y-3">
                      <span className="text-[10px] font-mono text-[#71717a] uppercase font-bold">Detected Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {current.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-white border border-[#d6caba] text-xs font-mono font-semibold text-[#18181b]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Lined Paper Interview Questions Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e4ded2] shadow-xs relative">
                  <div className="flex items-center justify-between mb-3 border-b border-[#e5ded2] pb-2">
                    <span className="font-bold text-sm font-sans text-[#18181b] flex items-center gap-2">
                      <span>Interview Questions for {current.name}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#1d4ed8] bg-blue-50 px-2 py-0.5 rounded font-bold">
                      Grounded
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs font-sans text-[#3f3f46]">
                    {current.questions.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed hover:text-[#18181b] transition-colors">
                        <span className="w-4 h-4 rounded-full bg-[#18181b] text-white flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
