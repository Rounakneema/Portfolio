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

  const current = samples[selectedSample] || samples.revealr;

  const handleSelectSample = (key: string) => {
    setSelectedSample(key);
    setInputUrl(samples[key].repo);
  };

  return (
    <section className="relative w-full pt-8 pb-16 md:py-16 overflow-hidden">
      
      {/* Subtle Paper Desk Background Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(219,234,254,0.35),transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, VALUE PROP, CTAS                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-7 pt-4">
            
            {/* Taped Eyebrow Badge */}
            <div className="inline-block relative">
              {/* Top blue washi tape */}
              <div className="absolute -top-2 left-6 w-12 h-3.5 bg-blue-400/60 backdrop-blur-xs rotate-[-3deg] rounded-xs pointer-events-none" />
              <div className="px-4 py-1.5 rounded-sm bg-[#dce6fa] border border-[#bfdbfe] text-[#1e40af] font-mono text-[11px] font-bold uppercase tracking-wider shadow-xs rotate-[-1deg]">
                TURN YOUR GITHUB INTO INTERVIEW CONFIDENCE
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#18181b] leading-[1.08] font-sans">
                You built the project.
              </h1>
              <div className="relative inline-block">
                <span className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#1d4ed8] leading-[1.08] font-sans">
                  Now own the conversation.
                </span>
                {/* Hand-drawn SVG marker underline */}
                <svg
                  className="w-full h-3 text-[#1d4ed8]/75 absolute -bottom-1.5 left-0"
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
              <span>Works with any public GitHub repository</span>
            </div>

            {/* Hand-Drawn Doodle Arrow pointing toward the right desk workspace */}
            <div className="hidden lg:block pt-4">
              <svg className="w-24 h-12 text-[#9ca3af] -rotate-12" viewBox="0 0 100 50" fill="none">
                <path d="M10 35 C 35 15, 65 15, 85 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M85 30 L 75 24 M 85 30 L 78 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: LAYERED CREATIVE DESK CANVAS                */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 relative">
            
            {/* Top Blue Washi Tape holding the canvas */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-blue-500/80 backdrop-blur-xs -rotate-1 rounded-xs shadow-xs z-30 pointer-events-none" />

            {/* MAIN DESK SHEET CONTAINER */}
            <div className="rounded-2xl border border-[#ded7c8] bg-[#fbf9f3] p-5 sm:p-7 shadow-xl relative overflow-hidden">
              
              {/* Step 1 Quick Input Bar inside Desk Canvas */}
              <div className="mb-6 p-4 rounded-xl bg-white border border-[#e4ded2] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#18181b]" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#18181b]">
                      Paste your GitHub link
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* View Mode Toggle */}
                    <div className="flex bg-[#f4efe4] p-0.5 rounded-md text-[10px] font-mono">
                      <button
                        type="button"
                        onClick={() => setViewMode('flatlay')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          viewMode === 'flatlay'
                            ? 'bg-white text-[#18181b] font-bold shadow-2xs'
                            : 'text-[#71717a] hover:text-[#18181b]'
                        }`}
                      >
                        Desk Board
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode('interactive')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          viewMode === 'interactive'
                            ? 'bg-white text-[#18181b] font-bold shadow-2xs'
                            : 'text-[#71717a] hover:text-[#18181b]'
                        }`}
                      >
                        Interactive Tree
                      </button>
                    </div>

                    <span className="text-[10px] font-mono text-[#71717a] bg-[#f4efe4] px-2 py-0.5 rounded hidden sm:inline">
                      Public Repo
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-2">
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://github.com/username/project"
                    className="flex-1 px-3.5 py-2 rounded-lg text-xs font-mono bg-[#faf8f3] border border-[#d6caba] text-[#18181b] outline-none focus:border-[#1d4ed8] transition-colors"
                  />
                  <button
                    onClick={() => {
                      if (inputUrl.includes('Revealr')) setSelectedSample('revealr');
                      else if (inputUrl.includes('MetroMind')) setSelectedSample('metromind');
                      else setSelectedSample('sortmail');
                    }}
                    className="px-4 py-2 bg-[#18181b] hover:bg-black text-white text-xs font-bold rounded-lg transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-xs active:scale-95"
                  >
                    <span>Analyze</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Preloaded Demo Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#a1a1aa]">Try demo:</span>
                    {(['revealr', 'metromind', 'sortmail'] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => handleSelectSample(key)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                          selectedSample === key
                            ? 'bg-[#1d4ed8] text-white shadow-xs'
                            : 'bg-[#f4efe4] hover:bg-[#ede6d8] text-[#52525b]'
                        }`}
                      >
                        {samples[key].name}
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>AST Grounded</span>
                  </span>
                </div>
              </div>

              {/* VIEW 1: THE USER'S EXACT AUTHENTIC DESK FLATLAY ARTWORK */}
              {viewMode === 'flatlay' ? (
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl bg-transparent transition-transform duration-300 group-hover:scale-[1.008]">
                    <img
                      src="/images/devcontext/devcontext-desk-composition.png"
                      alt="DevContext Architecture Blueprint, Interview Questions, and Preparation Desk"
                      className="w-full h-auto drop-shadow-xl select-none"
                    />
                  </div>

                  {/* Floating Context Pill below the image */}
                  <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#e4ded2] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="font-bold text-[#18181b]">Grounding Active: {current.name}</span>
                      <span className="text-[#a1a1aa] hidden sm:inline">&bull;</span>
                      <span className="text-[#52525b] truncate max-w-xs">{current.tagline}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      {current.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-[#f4efe4] text-[#18181b] font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* VIEW 2: INTERACTIVE BLUEPRINT TOPOLOGY TREE */
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Blueprint Card: "Your Project, Explained" */}
                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#e4ded2] shadow-sm relative">
                    
                    {/* Header & Tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#e5ded2]">
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#1d4ed8]">
                          CODEBASE GROUNDING
                        </span>
                        <h3 className="text-xl font-bold text-[#18181b] tracking-tight">
                          {current.name}, Explained
                        </h3>
                      </div>

                      {/* Tabs */}
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

                    {/* Tab 1: Architecture Blueprint (Hand-drawn style) */}
                    {activeTab === 'architecture' && (
                      <div className="space-y-4">
                        <p className="text-xs text-[#52525b] leading-relaxed">
                          Component topology synthesized directly from repository imports, configuration files, and API route declarations.
                        </p>

                        {/* Architecture Node Diagram */}
                        <div className="p-4 sm:p-6 rounded-xl bg-[#faf8f3] border-2 border-dashed border-[#d6caba] relative">
                          
                          {/* Top Row: Client -> API -> Database */}
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

                          {/* Middle Flow Lines */}
                          <div className="hidden sm:flex justify-around items-center py-2 text-[#9ca3af]">
                            <span>&darr;</span>
                            <span>&darr;</span>
                            <span>&darr;</span>
                          </div>

                          {/* Bottom Row: Auth, Workers, Storage */}
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

                  {/* Lined Paper: Interview Questions Card */}
                  <div className="p-5 sm:p-6 rounded-xl bg-[#fefefe] border border-[#e4ded2] shadow-xs relative">
                    <div className="absolute left-3 top-4 w-2.5 h-2.5 rounded-full bg-[#ded6c5] border border-[#c4baa7]" />

                    <div className="pl-4">
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
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
