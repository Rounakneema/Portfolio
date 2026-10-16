'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Tab = 'home' | 'goals' | 'focus' | 'insights' | 'chat' | 'settings';

export function AxiomDashboardWindow() {
    const [activeTab, setActiveTab] = useState<Tab>('home');

    return (
        <div className="relative rounded-2xl border border-[#ded5c7] bg-[#fcfbf7] shadow-xl overflow-hidden max-w-2xl mx-auto">
            {/* Window Title Bar */}
            <div className="bg-[#1c1917] text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2d5a3f]" />
                    <span className="font-semibold tracking-wider">AXIOM OS</span>
                </div>
                <div className="flex items-center gap-2 text-[#4ade80] text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    <span>LOCAL MODE · OFFLINE</span>
                </div>
            </div>

            {/* Window Content Layout */}
            <div className="grid grid-cols-12 min-h-[340px] bg-[#fbf9f4]">
                {/* Left Mini Sidebar */}
                <div className="col-span-3 border-r border-[#e8dfd3] bg-[#f6f1e7] p-3 space-y-1 text-xs font-medium">
                    <button
                        onClick={() => setActiveTab('home')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'home'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>🏠</span>
                        <span>Home</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('goals')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'goals'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>🎯</span>
                        <span>Goals</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('focus')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'focus'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>⏱️</span>
                        <span>Focus</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('insights')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'insights'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>📊</span>
                        <span>Insights</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'chat'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>💬</span>
                        <span>Chat</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                            activeTab === 'settings'
                                ? 'bg-[#2d5a3f]/15 text-[#2d5a3f] font-semibold'
                                : 'text-[#78716c] hover:text-[#1c1917] hover:bg-stone-200/50'
                        }`}
                    >
                        <span>⚙️</span>
                        <span>Settings</span>
                    </button>
                </div>

                {/* Right Main Dashboard Pane */}
                <div className="col-span-9 p-5 flex flex-col justify-between">
                    <div>
                        {/* Greeting Header */}
                        <div className="mb-4">
                            <h4 className="font-serif text-base sm:text-lg font-bold text-[#1c1917] flex items-center gap-1.5">
                                <span>Good evening, Rounak</span>
                                <span>☕</span>
                            </h4>
                            <p className="text-xs text-[#57534e]">
                                Here&apos;s how your day is going.
                            </p>
                        </div>

                        {/* Metric Cards Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {/* Card 1 */}
                            <div className="p-3 rounded-xl bg-white/90 border border-[#e5dfd5] shadow-xs">
                                <div className="text-[11px] text-[#78716c] flex items-center gap-1 mb-1 font-mono">
                                    <span>⏱️</span>
                                    <span>Focus Time</span>
                                </div>
                                <div className="font-mono text-base font-bold text-[#1c1917]">
                                    3h 24m
                                </div>
                                <div className="text-[10px] text-[#2d5a3f] font-medium mt-0.5">
                                    ↑ 22% from yesterday
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-3 rounded-xl bg-white/90 border border-[#e5dfd5] shadow-xs">
                                <div className="text-[11px] text-[#78716c] flex items-center gap-1 mb-1 font-mono">
                                    <span>✅</span>
                                    <span>Tasks Completed</span>
                                </div>
                                <div className="font-mono text-base font-bold text-[#1c1917]">
                                    5 / 8
                                </div>
                                <div className="text-[10px] text-[#2d5a3f] font-medium mt-0.5">
                                    Keep going!
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-3 rounded-xl bg-white/90 border border-[#e5dfd5] shadow-xs">
                                <div className="text-[11px] text-[#78716c] flex items-center gap-1 mb-1 font-mono">
                                    <span>💻</span>
                                    <span>Current Focus</span>
                                </div>
                                <div className="font-mono text-xs font-bold text-[#1c1917] truncate">
                                    AXIOM Development
                                </div>
                                <div className="text-[10px] text-[#57534e] font-medium mt-0.5">
                                    42 min active
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="p-3 rounded-xl bg-white/90 border border-[#e5dfd5] shadow-xs">
                                <div className="text-[11px] text-[#78716c] flex items-center gap-1 mb-1 font-mono">
                                    <span>🎯</span>
                                    <span>Next Goal</span>
                                </div>
                                <div className="font-mono text-xs font-bold text-[#1c1917] truncate">
                                    Prepare for SC-900
                                </div>
                                <div className="text-[10px] text-[#57534e] font-medium mt-0.5">
                                    in 2 hours
                                </div>
                            </div>
                        </div>

                        {/* Encouraging Recommendation Banner */}
                        <div className="p-3 rounded-xl bg-[#f2ecdf] border border-[#e2d8c9] text-xs text-[#44403c] flex items-center gap-2.5">
                            <span className="text-base shrink-0">🌿</span>
                            <span className="leading-snug">
                                You&apos;ve had a productive block. Take a short break to keep the momentum.
                            </span>
                        </div>
                    </div>

                    {/* Cute Sprout Mascot in Corner */}
                    <div className="flex justify-end pt-2">
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/images/axiom/axiom-step-03-gen-trans.png"
                                alt="Sprout mascot cheerful"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
