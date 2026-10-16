'use client';

import React, { useState } from 'react';
import { Search, FileText, CheckCircle2, ChevronRight, Layers, ShieldCheck, FileCheck, ArrowRight, CornerDownRight } from 'lucide-react';

interface QueryPreset {
  id: string;
  label: string;
  query: string;
  answer: string;
  highlight: string;
  sourceDoc: string;
  sourceSection: string;
  sourcePage: string;
  department: string;
}

const PRESETS: QueryPreset[] = [
  {
    id: 'track-inspection',
    label: 'Track Inspection Frequency',
    query: 'What is the track inspection schedule for Q2?',
    answer: 'According to the Q2 2024 maintenance report, the scheduled track inspection frequency has been',
    highlight: 'increased from quarterly to monthly',
    sourceDoc: 'Maintenance report - Section 4.2',
    sourceSection: 'Track Integrity Protocols',
    sourcePage: 'Page 18 - Q2 2024',
    department: 'Operations & Maintenance',
  },
  {
    id: 'braking-safety',
    label: 'Emergency Braking SLA',
    query: 'What is the required response SLA for secondary emergency braking?',
    answer: 'Rolling stock regulatory compliance guidelines mandate that secondary electromagnetic emergency braking must actuate within',
    highlight: 'under 180 milliseconds',
    sourceDoc: 'Rolling Stock Safety Manual - Section 9.1',
    sourceSection: 'Braking Actuation Protocols',
    sourcePage: 'Page 44 - Rev 3.2',
    department: 'Safety & Compliance',
  },
  {
    id: 'contractor-iso',
    label: 'Vendor Compliance Certs',
    query: 'Are signaling contractor ISO certifications verified for station expansion?',
    answer: 'The Q1 contractor audit confirms that signaling infrastructure contractor Siemens-Alstom has renewed both ISO-9001 and',
    highlight: 'CENELEC SIL-4 safety certifications',
    sourceDoc: 'Vendor Compliance Audit - Appendix B',
    sourceSection: 'Signaling Contractor Verification',
    sourcePage: 'Page 102 - 2024 Audit',
    department: 'Project Management',
  },
  {
    id: 'tunnel-ventilation',
    label: 'Tunnel Ventilation Standards',
    query: 'What are the emergency smoke extraction standards for underground tunnels?',
    answer: 'Under NFPA 130 transit ventilation standards, push-pull emergency fan ventilation must purge smoke from station egress paths in',
    highlight: 'less than 4 minutes',
    sourceDoc: 'Operational Guidelines - Standard 14-B',
    sourceSection: 'Emergency Smoke Extraction',
    sourcePage: 'Page 67 - NFPA Standards',
    department: 'Safety & Compliance',
  },
];

export function MetroMindDemo() {
  const [activePreset, setActivePreset] = useState<QueryPreset>(PRESETS[0]);
  const [activeFolder, setActiveFolder] = useState('All Documents');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Window Titlebar */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-mono font-medium text-slate-500">metromind / document-intelligence</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
          <span>Local Milvus Vector Store: 1,480 Docs Indexed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Document Directory */}
        <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-slate-50/40 p-4 space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold px-3 py-2">
            REPOSITORY FOLDERS
          </div>
          {[
            { name: 'All Documents', count: '1,480' },
            { name: 'Reports', count: '342' },
            { name: 'Scanned Files', count: '820' },
            { name: 'Policies', count: '124' },
            { name: 'Notices', count: '98' },
            { name: 'Technical Docs', count: '96' },
          ].map((folder) => {
            const isSelected = activeFolder === folder.name;
            return (
              <button
                key={folder.name}
                onClick={() => setActiveFolder(folder.name)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-2xs font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  <span>{folder.name}</span>
                </div>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                  {folder.count}
                </span>
              </button>
            );
          })}

          <div className="pt-6 mt-6 border-t border-slate-200/80 px-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold block mb-2">
              VERIFIED CITATIONS
            </span>
            <div className="p-3 bg-white rounded-xl border border-slate-200/90 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Zero Hallucinations</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Answers cite exact page, section, and original PDF blob.
              </p>
            </div>
          </div>
        </div>

        {/* Right Search & Answer Panel */}
        <div className="lg:col-span-9 p-6 lg:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Search Input Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-slate-400" />
              </div>
              <input
                type="text"
                readOnly
                value={activePreset.query}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-600/30"
              />
            </div>

            {/* Quick Query Pills */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Sample Questions Across Real Transit Documents:
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                      activePreset.id === preset.id
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Box */}
            <div className="bg-[#fcfbf9] border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                    Q
                  </div>
                  <span className="text-xs font-semibold text-slate-900">
                    MetroMind Grounded Answer
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {activePreset.department}
                </span>
              </div>

              <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                <span>{activePreset.answer} </span>
                <span className="bg-teal-100/80 text-teal-900 font-semibold px-1.5 py-0.5 rounded border border-teal-300">
                  {activePreset.highlight}
                </span>
                <span>.</span>
              </div>

              {/* Source Document Citation Card */}
              <div className="pt-2">
                <div className="bg-white rounded-lg border border-slate-200/90 p-3.5 flex items-center justify-between hover:border-teal-500 transition-colors cursor-pointer group shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {activePreset.sourceDoc}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {activePreset.sourceSection} &middot; {activePreset.sourcePage}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-teal-600 transition-colors text-xs font-medium">
                    <span className="hidden sm:inline">View source</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Engine Specs */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span>Embedding Engine: all-MiniLM-L6-v2 (384-dim)</span>
            </div>
            <div>Retrieval Latency: 38ms (Milvus HNSW)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
