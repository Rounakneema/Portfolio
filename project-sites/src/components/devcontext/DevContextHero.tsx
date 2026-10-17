'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Github } from 'lucide-react';

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

  const current = samples[selectedSample] || samples.revealr;

  return (
    <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-[#f7f5ee]">
      
      {/* Subtle Paper Desk Background Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(219,234,254,0.35),transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, VALUE PROP, CTAS                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
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
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#18181b] leading-[1.08] font-sans">
                  You built the project.
                </h1>
                <span className="text-[#18181b] text-2xl sm:text-3xl select-none -translate-y-2">✦</span>
              </div>
              
              <div className="relative inline-block">
                <span className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#1d4ed8] leading-[1.08] font-sans">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#how-it-works"
                className="px-6 py-3.5 bg-[#18181b] hover:bg-black text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Analyze your project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="px-6 py-3.5 bg-[#fbf9f4] hover:bg-white text-[#18181b] font-bold text-sm rounded-xl border border-[#d4cebf] hover:border-[#18181b] transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95"
              >
                <span>See how it works</span>
              </a>
            </div>

            {/* GitHub Trust Badge */}
            <div className="flex items-center gap-2 text-xs text-[#71717a] font-medium">
              <Github className="w-4 h-4 text-[#18181b]" />
              <span>Works with any public GitHub repository &bull; AST evidence grounded</span>
            </div>

            {/* Preloaded Demo Selector Strip */}
            <div className="pt-2 p-3.5 rounded-xl bg-white/80 border border-[#ded7c8] shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#71717a] font-bold">Try an engineering showcase:</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{current.name}</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(['revealr', 'metromind', 'sortmail'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSample(key)}
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
              <div className="text-[11px] font-mono text-[#52525b] pt-1.5 border-t border-[#f0ebe0] flex items-center gap-2">
                <span className="text-[#857f72]">Stack:</span>
                <span className="truncate">{current.techStack.join(' • ')}</span>
              </div>
            </div>

            {/* Hand-Drawn Doodle Curved Pencil Arrow pointing toward the desk flatlay */}
            <div className="hidden lg:flex items-center gap-3 pt-1 text-[#71717a]">
              <svg className="w-28 h-10 text-[#9ca3af] -rotate-6" viewBox="0 0 120 40" fill="none">
                <path d="M10 32 C 45 8, 80 12, 105 25" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                <path d="M105 25 L 95 18 M 105 25 L 98 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-serif italic text-xs text-[#857f72]">
                Your project, explained &rarr;
              </span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: THE HERO DESK FLATLAY VISUAL                */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* The Authentic Physical Flatlay Composition */}
            <div className="relative w-full max-w-[660px] mx-auto group">
              <img
                src="/images/devcontext/devcontext-desk-composition.png"
                alt="DevContext Architecture Blueprint, Interview Questions, and Preparation Desk"
                className="w-full h-auto drop-shadow-2xl select-none transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
