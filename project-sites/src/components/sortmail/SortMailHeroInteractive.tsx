'use client';

import React, { useState } from 'react';
import {
  Mail,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  CornerDownRight,
  Sparkles,
  Inbox,
  AlertCircle,
  Paperclip,
  Check,
  ArrowRight,
  Send,
  SlidersHorizontal,
} from 'lucide-react';

interface ThreadItem {
  id: string;
  sender: string;
  email: string;
  subject: string;
  time: string;
  priority: 'P0 High' | 'P1 Medium' | 'P2 Normal';
  priorityColor: string;
  tag: string;
  unread: boolean;
  bluf: string;
  intent: string;
  deadline: string;
  keyPoints: string[];
  actionItems: { text: string; due: string; done: boolean }[];
  attachments: { name: string; size: string; status: string }[];
  draftResponse: string;
}

const mockThreads: ThreadItem[] = [
  {
    id: 'thread-1',
    sender: 'Priya Mehta',
    email: 'priya.mehta@vertexlabs.com',
    subject: 'Q3 Analytics Agreement & Deliverable Schedule',
    time: '10:24 AM',
    priority: 'P0 High',
    priorityColor: 'bg-red-50 text-red-700 border-red-200',
    tag: 'Client SOW',
    unread: true,
    bluf: 'Priya requested legal review and sign-off on revised indemnification terms before Friday 5:00 PM UTC.',
    intent: 'Contract Sign-Off & Scope Approval',
    deadline: 'Friday, Oct 17 · 5:00 PM UTC',
    keyPoints: [
      'Scope expanded to include multi-tenant SSO module (₹1,50,000 budget addition approved).',
      'Indemnification cap in Section 8.2 adjusted to 2x annual contract value.',
      'Signature deadline set for Friday, Oct 17 at 17:00 UTC before sprint kickoff.',
    ],
    actionItems: [
      { text: 'Review updated Section 8 indemnification cap with legal counsel', due: 'Today, 3:00 PM', done: true },
      { text: 'Confirm receipt and approval of ₹1.5L SSO budget addition', due: 'Friday, 12:00 PM', done: false },
      { text: 'Dispatch executed agreement PDF via DocuSign', due: 'Friday, 5:00 PM', done: false },
    ],
    attachments: [
      { name: 'Q3_Analytics_Agreement_v3.pdf', size: '2.4 MB', status: 'Magic bytes verified (PDF 1.7) · Clean' },
      { name: 'Pricing_Annex_SSO.docx', size: '410 KB', status: 'Office XML validated · Clean' },
    ],
    draftResponse:
      'Hi Priya, received the updated Q3 agreement and SSO addendum. I have reviewed Section 8 and forwarded to legal for sign-off. We are on track to return the executed document by Friday EOD.',
  },
  {
    id: 'thread-2',
    sender: 'Rohan Kulkarni',
    email: 'rkulkarni@cloud-infra.net',
    subject: 'Production Database Read Replica Migration & Maintenance Window',
    time: '9:48 AM',
    priority: 'P1 Medium',
    priorityColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tag: 'Infrastructure',
    unread: false,
    bluf: 'Rohan scheduled PostgreSQL maintenance for Sunday 02:00 UTC with expected 30-second read failover.',
    intent: 'Blackout Window Approval',
    deadline: 'Tomorrow · 2:00 PM UTC',
    keyPoints: [
      'Upgrading primary PostgreSQL cluster from 15.4 to 16.2.',
      'Read replica promotion tested in staging with zero packet drop.',
      'Requires confirmation of maintenance blackout window from engineering leads.',
    ],
    actionItems: [
      { text: 'Verify staging health check metrics after replica switch', due: 'Tomorrow, 10:00 AM', done: true },
      { text: 'Acknowledge maintenance window approval to infra team', due: 'Tomorrow, 2:00 PM', done: false },
    ],
    attachments: [
      { name: 'migration_runbook_v2.pdf', size: '1.1 MB', status: 'Magic bytes verified (PDF 1.7) · Clean' },
    ],
    draftResponse:
      'Hi Rohan, the Sunday 02:00 UTC window works for engineering. Staging health metrics look solid. Proceed as planned.',
  },
  {
    id: 'thread-3',
    sender: 'Kavita Rao',
    email: 'kavita.rao@hypergrowth.ai',
    subject: 'Distributed Systems & Architecture Portfolio Inquiry',
    time: 'Yesterday',
    priority: 'P0 High',
    priorityColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tag: 'Inbound',
    unread: false,
    bluf: 'Kavita reached out regarding Rounak Neema\'s event-driven pipeline architecture and proposed a technical discussion.',
    intent: 'Technical Architecture Exploration',
    deadline: 'Tomorrow · 11:00 AM UTC',
    keyPoints: [
      'Reviewed high-throughput document processing pipelines and offline architectures.',
      'Interested in exploring custom engineering solutions for real-time document intelligence.',
      'Proposed a 30-minute technical architecture conversation next Tuesday.',
    ],
    actionItems: [
      { text: 'Share architecture specifications for SortMail and MetroMind', due: 'Today, 6:00 PM', done: true },
      { text: 'Provide scheduling availability for Tuesday architecture discussion', due: 'Tomorrow, 11:00 AM', done: false },
    ],
    attachments: [],
    draftResponse:
      'Hi Kavita, thanks for reaching out. Happy to discuss the architecture behind SortMail and our event-driven processing pipelines. Here are the architecture specs and my availability for next Tuesday.',
  },
];

export function SortMailHeroInteractive() {
  const [activeThreadId, setActiveThreadId] = useState<string>('thread-1');
  const [activeTab, setActiveTab] = useState<'briefing' | 'draft'>('briefing');
  const [actionStates, setActionStates] = useState<{ [key: string]: boolean }>({
    'thread-1-0': true,
    'thread-1-1': false,
    'thread-1-2': false,
    'thread-2-0': true,
    'thread-2-1': false,
    'thread-3-0': true,
    'thread-3-1': false,
  });

  const activeThread = mockThreads.find((t) => t.id === activeThreadId) || mockThreads[0];

  const toggleAction = (key: string) => {
    setActionStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full rounded-2xl lg:rounded-3xl border border-neutral-300/80 bg-white/95 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.16)] overflow-hidden transition-all duration-300">
      
      {/* Top Application Bar (macOS / browser aesthetic) */}
      <div className="h-10 bg-neutral-100/90 border-b border-neutral-200/80 px-4 flex items-center justify-between text-xs">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 inline-block" />
          <span className="ml-2.5 hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            sortmail.local:5432 · db=42ms
          </span>
        </div>

        {/* Central Search Bar */}
        <div className="flex-1 max-w-xs mx-3 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-neutral-200/90 text-neutral-500 text-[11px]">
          <Mail className="w-3 h-3 text-neutral-400" />
          <span className="truncate">Search emails, commitments...</span>
          <kbd className="ml-auto px-1 py-0.2 rounded bg-neutral-100 text-[9px] font-mono border border-neutral-200 text-neutral-400">
            /
          </kbd>
        </div>

        {/* Right Status Indicator */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-600">
          <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200/70">
            Gemini 2.0 Flash
          </span>
          <span className="hidden sm:inline text-neutral-400">·</span>
          <span className="hidden sm:inline text-neutral-500">PostgreSQL</span>
        </div>
      </div>

      {/* Main App Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80 text-xs">
        
        {/* Left Column: Email Thread List (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-neutral-50/60 flex flex-col justify-between">
          
          <div>
            {/* Thread List Header */}
            <div className="px-3.5 py-2.5 border-b border-neutral-200/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Inbox className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider font-mono">
                  Intelligence
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 font-semibold">
                  3 Active
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono">
                Cached
              </span>
            </div>

            {/* Threads List */}
            <div className="divide-y divide-neutral-200/70">
              {mockThreads.map((thread) => {
                const isSelected = thread.id === activeThreadId;
                return (
                  <button
                    key={thread.id}
                    onClick={() => setActiveThreadId(thread.id)}
                    className={`w-full text-left px-3 py-2 transition-all flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-white shadow-xs border-l-4 border-blue-600 pl-2.5'
                        : 'hover:bg-neutral-100/70 border-l-4 border-transparent'
                    }`}
                  >
                    {/* Sender & Time */}
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        {thread.unread && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        )}
                        <span className={`text-xs font-semibold truncate ${isSelected ? 'text-neutral-950' : 'text-neutral-800'}`}>
                          {thread.sender}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-400 font-mono shrink-0">
                        {thread.time}
                      </span>
                    </div>

                    {/* Subject Line */}
                    <div className="text-[11px] font-medium text-neutral-700 truncate">
                      {thread.subject}
                    </div>

                    {/* 1-Sentence BLUF Snippet */}
                    <p className="text-[10px] text-neutral-500 line-clamp-1 leading-snug">
                      {thread.bluf}
                    </p>

                    {/* Tags & Priority */}
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border font-semibold ${thread.priorityColor}`}>
                        {thread.priority}
                      </span>
                      <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                        {thread.tag}
                      </span>
                      {thread.attachments.length > 0 && (
                        <span className="text-[9px] font-mono text-neutral-400 flex items-center gap-0.5 ml-auto">
                          <Paperclip className="w-2.5 h-2.5" />
                          {thread.attachments.length}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Footer */}
          <div className="px-3 py-2 bg-neutral-100/70 border-t border-neutral-200/80 text-[10px] text-neutral-500 font-mono flex items-center justify-between">
            <span>LLM: ~₹0.24/email</span>
            <span className="text-emerald-700 font-semibold">Zero Cloud Retention</span>
          </div>

        </div>

        {/* Right Column: Executive Briefing & Action Extraction (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white p-4 flex flex-col justify-between">
          
          <div className="space-y-3">
            
            {/* Header: Title, Sender, and Tab Toggle */}
            <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-200/80">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    EXECUTIVE BRIEFING
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {activeThread.time}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight leading-snug truncate">
                  {activeThread.subject}
                </h3>
                <p className="text-[10px] text-neutral-500 truncate">
                  From: <span className="text-neutral-700 font-medium">{activeThread.sender}</span> ({activeThread.email})
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex items-center rounded-md bg-neutral-100 p-0.5 border border-neutral-200 shrink-0 text-[11px]">
                <button
                  onClick={() => setActiveTab('briefing')}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    activeTab === 'briefing'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Intelligence
                </button>
                <button
                  onClick={() => setActiveTab('draft')}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    activeTab === 'draft'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Draft
                </button>
              </div>
            </div>

            {/* TAB CONTENT: INTELLIGENCE */}
            {activeTab === 'briefing' && (
              <div className="space-y-2.5">
                
                {/* 1-Sentence BLUF Banner */}
                <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200/80">
                  <div className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-wider text-blue-700 mb-0.5">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span>BLUF Summary</span>
                  </div>
                  <p className="text-[11px] text-neutral-900 font-medium leading-snug">
                    {activeThread.bluf}
                  </p>
                </div>

                {/* Intent & Extracted Deadline */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Intent
                    </span>
                    <span className="font-semibold text-neutral-800 truncate block">
                      {activeThread.intent}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 block flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-amber-600" />
                      Deadline
                    </span>
                    <span className="font-semibold text-neutral-900 font-mono truncate block">
                      {activeThread.deadline}
                    </span>
                  </div>
                </div>

                {/* Extracted Action Items */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                    <span>Action Items ({activeThread.actionItems.length})</span>
                    <span className="text-[9px] text-neutral-400 font-normal">Click to toggle</span>
                  </div>
                  <div className="space-y-1">
                    {activeThread.actionItems.slice(0, 2).map((action, idx) => {
                      const key = `${activeThread.id}-${idx}`;
                      const isDone = actionStates[key] ?? action.done;
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleAction(key)}
                          className={`px-2.5 py-1.5 rounded-lg border text-[11px] flex items-center gap-2 cursor-pointer transition-all ${
                            isDone
                              ? 'bg-emerald-50/50 border-emerald-200/80 text-neutral-500 line-through'
                              : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-800'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 transition-colors ${
                              isDone ? 'bg-emerald-600 text-white' : 'border border-neutral-300 bg-white'
                            }`}
                          >
                            {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <span className="flex-1 truncate">{action.text}</span>
                          <span className={`text-[9px] font-mono shrink-0 ${isDone ? 'text-emerald-700' : 'text-neutral-400'}`}>
                            {action.due}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Attachments Security Inspection */}
                {activeThread.attachments.length > 0 && (
                  <div className="p-1.5 rounded-lg bg-neutral-50 border border-neutral-200/80 flex items-center justify-between gap-2 text-[10px]">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <FileText className="w-3 h-3 text-neutral-500 shrink-0" />
                      <span className="font-mono text-neutral-800 truncate font-medium">
                        {activeThread.attachments[0].name}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-full shrink-0 font-medium">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      Magic bytes verified
                    </span>
                  </div>
                )}

              </div>
            )}

            {/* TAB CONTENT: DRAFT REPLY */}
            {activeTab === 'draft' && (
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-[10px] text-neutral-600">
                  <span className="font-semibold text-neutral-800 block mb-0.5">Human In The Loop</span>
                  SortMail generates high-confidence drafts, but requires manual confirmation before dispatch.
                </div>

                <div className="p-3 rounded-lg border border-neutral-200 bg-white font-mono text-[11px] text-neutral-800 leading-relaxed">
                  {activeThread.draftResponse}
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    onClick={() => setActiveTab('briefing')}
                    className="px-3 py-1.5 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-[10px] font-medium"
                  >
                    Back to Briefing
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-medium flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-2.5 h-2.5" />
                    <span>Approve &amp; Send</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Action Row */}
          <div className="pt-2 mt-2 border-t border-neutral-200/80 flex items-center justify-between gap-2 text-[10px]">
            <span className="text-neutral-500 font-mono">
              Latency: <strong className="text-neutral-800">720ms</strong> · Token reduction: <strong className="text-neutral-800">82%</strong>
            </span>
            <button
              onClick={() => setActiveTab(activeTab === 'briefing' ? 'draft' : 'briefing')}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-[10px]"
            >
              <span>{activeTab === 'briefing' ? 'View Auto-Draft' : 'View Extracted Briefing'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
