'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, GitPullRequest } from 'lucide-react';

export function DevContextArchitectureBanner() {
  return (
    <section className="w-full py-12 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="relative rounded-2xl bg-white border border-[#ded7c8] p-8 md:p-10 shadow-sm overflow-hidden group hover:shadow-md transition-all">
        
        {/* Top blue washi tape */}
        <img
          src="/images/devcontext/assets/tape-blue.png"
          alt="Washi tape"
          className="absolute -top-3.5 left-12 w-24 h-auto -rotate-1 select-none pointer-events-none drop-shadow-2xs z-20"
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1d4ed8] bg-[#dce6fa] px-3 py-1 rounded-sm border border-[#bfdbfe] inline-block">
              TECHNICAL SPECIFICATION &amp; EVIDENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18181b] tracking-tight font-sans">
              Inspect Serverless Architecture &amp; AST Pipeline
            </h3>
            <p className="text-sm text-[#52525b] leading-relaxed">
              Explore the complete technical architecture: language-agnostic AST parsing, tree-sitter symbol graph resolution, parallel queue processing, and interview rubric scoring models.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/devcontext/architecture"
              className="px-5 py-3 bg-[#18181b] hover:bg-black text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-2 active:scale-95"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/devcontext/decisions"
              className="px-5 py-3 bg-[#f7f5ee] hover:bg-[#ede6d8] text-[#18181b] font-bold text-xs font-mono uppercase tracking-wider rounded-xl border border-[#ded7c8] transition-all flex items-center gap-2 active:scale-95"
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Decisions</span>
            </Link>

            <Link
              href="/devcontext/docs"
              className="px-5 py-3 bg-[#f7f5ee] hover:bg-[#ede6d8] text-[#18181b] font-bold text-xs font-mono uppercase tracking-wider rounded-xl border border-[#ded7c8] transition-all flex items-center gap-2 active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Docs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
