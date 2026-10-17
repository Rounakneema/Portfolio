'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, CheckSquare, Github, Terminal, Play, RotateCcw, Lightbulb } from 'lucide-react';

export function DevContextWorkflow() {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [userRepo, setUserRepo] = useState<string>('https://github.com/rounakneema/Revealr');
  const [userAnswer, setUserAnswer] = useState<string>(
    'We implemented a decoupled worker queue using RabbitMQ and Go raw sockets to minimize packet drop rates under high concurrent burst loads.'
  );
  const [submitted, setSubmitted] = useState<boolean>(true);

  const sampleQuestions = [
    {
      q: 'Why did you choose this architecture?',
      ans: 'Decoupling the ingest tier from heavy compute workers protects the main API from memory spikes during batch document or packet processing, allowing independent horizontal scaling.'
    },
    {
      q: 'How does the system handle failures?',
      ans: 'Transient worker failures trigger exponential backoff retries with dead-letter queue routing, ensuring zero data loss without stalling the ingest pipeline.'
    },
    {
      q: 'What are the trade-offs?',
      ans: 'Eventual consistency across read replicas introduces a 15ms sync lag, which we mitigated with local memory caches for read-after-write operations.'
    },
    {
      q: 'How would you scale this?',
      ans: 'By partitioning the message bus by tenant hash and deploying stateless worker pods in Kubernetes driven by queue depth autoscaling metrics.'
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full py-16 md:py-24 overflow-hidden border-t border-[#e5ded2]">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(219,234,254,0.25),transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Eyebrow Banner with Hand-Drawn Sketch Arrows */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 text-center">
          {/* Left doodle arrows */}
          <svg className="w-8 sm:w-12 h-4 text-[#18181b]/70 hidden sm:block" viewBox="0 0 50 16" fill="none">
            <path d="M48 8 H6 M16 2 L4 8 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 4 L14 8 L26 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          
          <h2 className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-[#18181b] bg-[#ede6d8] px-4 py-1.5 rounded-sm border border-[#ded5c5] shadow-2xs">
            TURN A REPOSITORY INTO A COMPLETE PREPARATION GUIDE
          </h2>

          {/* Right doodle arrows */}
          <svg className="w-8 sm:w-12 h-4 text-[#18181b]/70 hidden sm:block" viewBox="0 0 50 16" fill="none">
            <path d="M2 8 H44 M34 2 L46 8 L34 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 4 L36 8 L24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="text-center text-[#52525b] text-sm sm:text-base max-w-2xl mx-auto mb-14 font-normal">
          Four transparent steps from code ingestion to interview readiness. Grounded in AST syntax trees with zero AI hallucinations.
        </p>

        {/* 4 HORIZONTAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch relative">
          
          {/* ============================================================ */}
          {/* STEP 01: PASTE YOUR GITHUB LINK                              */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#fcfbfa] border border-[#ded7c8] p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative group">
            
            {/* Authentic Washi Tape Pinned at Top Left */}
            <img
              src="/images/devcontext/assets/tape-blue.png"
              alt="Washi tape"
              className="absolute -top-3.5 left-6 w-16 h-auto -rotate-2 select-none pointer-events-none drop-shadow-2xs z-20"
            />

            <div>
              {/* Authentic Physical Step 01 Paper Card */}
              <div className="relative rounded-xl overflow-hidden mb-3 group-hover:scale-[1.01] transition-transform">
                <img
                  src="/images/devcontext/devcontext-step1-card.png"
                  alt="01 Paste your GitHub link - Connect any public repository in seconds"
                  className="w-full h-auto drop-shadow-xs select-none"
                />
              </div>

              {/* Interactive Quick Repository Input */}
              <div className="p-3 rounded-xl bg-white border border-[#e4ded2] shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#71717a]">
                  <span className="font-bold text-[#18181b]">Quick Input Bar</span>
                  <span className="text-emerald-700 font-bold">Public AST</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#faf8f3] border border-[#dcd4c6]">
                    <Github className="w-3.5 h-3.5 text-[#18181b] shrink-0" />
                    <input
                      type="text"
                      value={userRepo}
                      onChange={(e) => setUserRepo(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full bg-transparent text-[11px] font-mono text-[#18181b] outline-none"
                    />
                  </div>
                  <a
                    href="#analyze"
                    className="px-3 py-1.5 bg-[#18181b] hover:bg-black text-white text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 shrink-0 shadow-2xs active:scale-95"
                  >
                    <span>Scan</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
              <span>Public AST Parse</span>
              <span className="text-emerald-700 font-bold">100% Grounded</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 02: GET A COMPLETE BREAKDOWN                            */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#fcfbfa] border border-[#ded7c8] p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative group">
            
            {/* Authentic Grid Washi Tape */}
            <img
              src="/images/devcontext/assets/tape-grid.png"
              alt="Grid Washi tape"
              className="absolute -top-3.5 left-8 w-16 h-auto rotate-1 select-none pointer-events-none drop-shadow-2xs z-20"
            />

            <div>
              {/* Header: Number + Title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                  02
                </span>
                <h3 className="font-bold text-base text-[#18181b] tracking-tight">
                  Get a complete breakdown
                </h3>
              </div>
              <p className="text-xs text-[#52525b] mb-5 leading-relaxed">
                Clean explanation, architecture, tech stack, and design decisions.
              </p>

              {/* Wireframe Diagram Card */}
              <div className="rounded-xl bg-white border border-[#e4ded2] p-3 shadow-xs space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#18181b] pb-1 border-b border-[#f0ebe0]">
                  Project Overview
                </div>

                <div className="grid grid-cols-5 gap-2 text-[10px]">
                  {/* Left mini menu */}
                  <div className="col-span-2 space-y-1 font-mono text-[#71717a] border-r border-[#f0ebe0] pr-1">
                    <div className="px-1.5 py-0.5 rounded bg-[#f4efe4] text-[#18181b] font-bold">Architecture</div>
                    <div className="px-1.5 py-0.5">Tech Stack</div>
                    <div className="px-1.5 py-0.5">Key Features</div>
                    <div className="px-1.5 py-0.5">Decisions</div>
                  </div>

                  {/* Right mini blueprint tree */}
                  <div className="col-span-3 flex flex-col items-center justify-center p-1.5 bg-[#faf8f3] rounded border border-[#ded7c8]">
                    <div className="px-2 py-0.5 rounded bg-white border border-[#18181b]/30 text-[9px] font-mono font-bold">
                      Client
                    </div>
                    <span className="text-[9px] text-[#9ca3af]">&darr;</span>
                    <div className="px-2 py-0.5 rounded bg-[#dbeafe] border border-[#1d4ed8] text-[9px] font-mono font-bold text-[#1e40af]">
                      Gateway
                    </div>
                    <span className="text-[9px] text-[#9ca3af]">&darr;</span>
                    <div className="flex gap-1">
                      <span className="px-1 py-0.5 rounded bg-white border border-[#dcd4c6] text-[8px] font-mono">DB</span>
                      <span className="px-1 py-0.5 rounded bg-white border border-[#dcd4c6] text-[8px] font-mono">Queue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
              <span>Topology Map</span>
              <span className="text-[#1d4ed8] font-bold">Synthesized</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 03: PREPARE FOR REAL QUESTIONS                          */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#fcfbfa] border border-[#ded7c8] p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative group">
            
            {/* Authentic Kraft Washi Tape */}
            <img
              src="/images/devcontext/assets/tape-kraft.png"
              alt="Kraft Washi tape"
              className="absolute -top-3.5 left-8 w-16 h-auto -rotate-1 select-none pointer-events-none drop-shadow-2xs z-20"
            />

            <div>
              {/* Header: Number + Title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                  03
                </span>
                <h3 className="font-bold text-base text-[#18181b] tracking-tight">
                  Prepare for real questions
                </h3>
              </div>
              <p className="text-xs text-[#52525b] mb-5 leading-relaxed">
                Project specific and deep technical questions with model answers.
              </p>

              {/* Lined Paper Card */}
              <div className="rounded-xl bg-white border border-[#e4ded2] p-3 shadow-xs space-y-2 relative">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#18181b] pb-1 border-b border-[#f0ebe0]">
                  Interview Questions
                </div>

                <div className="space-y-1.5 text-[11px]">
                  {sampleQuestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQuestion(idx)}
                      className={`w-full text-left p-1.5 rounded transition-colors flex items-start gap-1.5 ${
                        activeQuestion === idx
                          ? 'bg-[#f4efe4] font-semibold text-[#18181b]'
                          : 'hover:bg-[#faf8f3] text-[#52525b]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[#18181b] text-white flex items-center justify-center text-[9px] font-mono shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="truncate">{item.q}</span>
                    </button>
                  ))}
                </div>

                {/* Model Answer Preview Box */}
                <div className="mt-2 p-2 bg-[#faf8f3] rounded border border-[#e5ded2] text-[10px] text-[#44403c] leading-relaxed">
                  <span className="font-bold block text-[#18181b] mb-0.5">Model Answer {activeQuestion + 1}:</span>
                  <p className="line-clamp-2">{sampleQuestions[activeQuestion].ans}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
              <span>Deep Technical</span>
              <span className="text-amber-700 font-bold">4 Questions</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* STEP 04: PRACTICE WITH MOCK INTERVIEWS                       */}
          {/* ============================================================ */}
          <div className="rounded-2xl bg-[#fcfbfa] border border-[#ded7c8] p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative group">
            
            {/* Authentic Periwinkle Washi Tape */}
            <img
              src="/images/devcontext/assets/tape-periwinkle.png"
              alt="Periwinkle Washi tape"
              className="absolute -top-3.5 left-8 w-16 h-auto rotate-2 select-none pointer-events-none drop-shadow-2xs z-20"
            />

            <div>
              {/* Header: Number + Title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                  04
                </span>
                <h3 className="font-bold text-base text-[#18181b] tracking-tight">
                  Practice with mock interviews
                </h3>
              </div>
              <p className="text-xs text-[#52525b] mb-5 leading-relaxed">
                Simulate real technical interviews and receive instant feedback.
              </p>

              {/* Mock Interview Simulation UI */}
              <div className="rounded-xl bg-white border border-[#e4ded2] p-3 shadow-xs space-y-2.5">
                
                {/* Prompt Header */}
                <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-[#f0ebe0]">
                  <span className="font-bold text-[#18181b]">Mock Interviewer</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[#1d4ed8] font-bold">02:15</span>
                </div>

                <div className="text-[10px] text-[#27272a] bg-[#faf8f3] p-1.5 rounded border border-[#ded7c8]">
                  &ldquo;Can you explain the architecture of this project?&rdquo;
                </div>

                {/* Score Meters */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[9px] font-mono text-[#52525b]">
                    <span>Clarity</span>
                    <span className="font-bold text-[#18181b]">94%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#f0ebe0] overflow-hidden">
                    <div className="h-full bg-[#1d4ed8] rounded-full w-[94%]" />
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-[#52525b] pt-0.5">
                    <span>Technical Depth</span>
                    <span className="font-bold text-[#18181b]">88%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#f0ebe0] overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-[88%]" />
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-[#52525b] pt-0.5">
                    <span>Communication</span>
                    <span className="font-bold text-[#18181b]">96%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#f0ebe0] overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full w-[96%]" />
                  </div>
                </div>

                {/* Sticky Evaluation Tag */}
                <div className="p-1.5 rounded bg-[#fef9c3] border border-[#fef08a] text-[9px] text-[#713f12] leading-tight">
                  <strong className="block font-semibold">Evaluation:</strong>
                  Grounded response. Directly referenced queue decoupling.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
              <span>Interactive Practice</span>
              <span className="text-purple-700 font-bold">Active</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM WASHI TAPE BANNER & SPIRAL NOTEBOOK CORNER          */}
        {/* ============================================================ */}
        <div className="mt-14 pt-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Desk Note */}
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-[#ded7c8] shadow-2xs font-mono text-xs text-[#52525b] rotate-[-1deg]">
            <span className="text-[#a1a1aa]">&gt;</span>
            <span>_Ideas</span>
            <span className="text-[#d4cebf]">&bull;</span>
            <span>_Build</span>
            <span className="text-[#d4cebf]">&bull;</span>
            <span>_Learn</span>
            <span className="text-[#d4cebf]">&bull;</span>
            <span className="text-[#18181b] font-bold">_Grow</span>
          </div>

          {/* Center Yellow Masking Tape Banner */}
          <div className="relative inline-block max-w-xl text-center">
            {/* Hand-drawn accent doodle lines */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[#a1a1aa] font-mono text-lg hidden sm:block">
              //
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[#a1a1aa] font-mono text-lg hidden sm:block">
              //
            </div>

            {/* Tape Body */}
            <div className="px-6 sm:px-8 py-3 rounded-sm bg-[#fef08a]/85 backdrop-blur-xs border-y border-[#fde047] shadow-sm rotate-[-0.5deg]">
              <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-bold text-[#713f12]">
                <Lightbulb className="w-4 h-4 text-[#854d0e] shrink-0" />
                <span>Know your code. Explain your choices. Walk into the interview prepared.</span>
              </div>
            </div>
          </div>

          {/* Right Spiral Notebook Checklist with Authentic Yellow Note Accent */}
          <div className="relative p-4 rounded-xl bg-white border border-[#ded7c8] shadow-sm text-xs font-sans text-[#27272a] space-y-1.5 rotate-[1deg]">
            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#71717a] border-b border-[#f0ebe0] pb-1 flex items-center justify-between">
              <span>OUTCOMES</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-2 text-[#18181b] font-medium text-[11px]">
              <CheckSquare className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Better Projects</span>
            </div>
            <div className="flex items-center gap-2 text-[#18181b] font-medium text-[11px]">
              <CheckSquare className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Clear Explanations</span>
            </div>
            <div className="flex items-center gap-2 text-[#18181b] font-medium text-[11px]">
              <CheckSquare className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Confident Interviews</span>
            </div>
            <div className="flex items-center gap-2 text-[#18181b] font-medium text-[11px]">
              <CheckSquare className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>More Opportunities</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
