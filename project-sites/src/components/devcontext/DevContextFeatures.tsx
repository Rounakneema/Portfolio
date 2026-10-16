'use client';

import React from 'react';
import Link from 'next/link';
import { FileCode, GitBranch, Layers, ShieldCheck, Terminal, Cpu, ArrowRight, Check } from 'lucide-react';

export function DevContextFeatures() {
  const features = [
    {
      icon: FileCode,
      title: 'AST Repository Parsing',
      eyebrow: 'DEEP CODE SYNTAX',
      description: 'Inspects Abstract Syntax Trees across Go, TypeScript, Python, Rust, and Java to extract real call graphs, interface boundaries, and data flows.',
      bullet: 'Language-agnostic Tree-sitter grammars'
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Grounded Answers',
      eyebrow: 'ZERO HALLUCINATIONS',
      description: 'Every explanation cites verified file paths, import statements, and function signatures. Claims that lack verifiable lines of code are rejected.',
      bullet: 'Line-level traceability to commits'
    },
    {
      icon: Layers,
      title: 'Architecture Topology',
      eyebrow: 'TOPOLOGY SYNTHESIS',
      description: 'Automatically maps decoupled tiers: APIs, databases, queue workers, caches, and storage backends into clear mental models and diagrams.',
      bullet: 'Client to database flow diagrams'
    },
    {
      icon: Terminal,
      title: 'Technical Interview Questions',
      eyebrow: 'HIGH-INTENT PREPARATION',
      description: 'Generates probing questions about your actual design decisions, edge case handling, concurrency locks, and database indexing strategies.',
      bullet: 'Role-specific engineering prompts'
    },
    {
      icon: Cpu,
      title: 'Trade-off & Scaling Analysis',
      eyebrow: 'SYSTEM DESIGN DEPTH',
      description: 'Identifies latency bottlenecks, single points of failure, and horizontal scaling limits so you can defend your trade-offs with confidence.',
      bullet: 'P99 latency & concurrency checks'
    },
    {
      icon: GitBranch,
      title: 'Local & Air-Gapped Ready',
      eyebrow: 'DATA PRIVACY INVARIANT',
      description: 'AST generation runs entirely in your local environment. Metadata can be evaluated via local Ollama models with zero external data retention.',
      bullet: '100% private codebase analysis'
    }
  ];

  return (
    <section id="features" className="relative w-full py-16 md:py-24 border-t border-[#e5ded2] bg-[#fbf9f4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Section Header with Paper Tape Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-block relative mb-3">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-blue-400/50 -rotate-1 rounded-xs pointer-events-none" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1d4ed8] bg-[#dce6fa] px-3.5 py-1 rounded-sm border border-[#bfdbfe]">
              TECHNICAL FOUNDATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight font-sans">
            Engineered for Codebase Clarity
          </h2>
          <p className="mt-3 text-base text-[#52525b] leading-relaxed">
            DevContext replaces vague summaries with structural analysis grounded directly in your repository syntax trees and commits.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#ded7c8] p-6 shadow-xs hover:shadow-md hover:border-[#1d4ed8]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#faf8f3] border border-[#e4ded2] flex items-center justify-center text-[#18181b] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#71717a] bg-[#f7f5ee] px-2 py-0.5 rounded">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#18181b] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0ebe0] flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
