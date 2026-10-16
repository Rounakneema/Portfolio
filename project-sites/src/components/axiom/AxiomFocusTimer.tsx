'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Mode = 'focus' | 'study' | 'build' | 'custom';

export function AxiomFocusTimer() {
    const [mode, setMode] = useState<Mode>('focus');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [totalDuration, setTotalDuration] = useState(25 * 60);

    const modeDurations: Record<Mode, number> = {
        focus: 25 * 60,
        study: 45 * 60,
        build: 60 * 60,
        custom: 15 * 60,
    };

    const handleModeChange = (newMode: Mode) => {
        setMode(newMode);
        setIsRunning(false);
        const dur = modeDurations[newMode];
        setTotalDuration(dur);
        setSecondsLeft(dur);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, secondsLeft]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const progress = totalDuration > 0 ? (totalDuration - secondsLeft) / totalDuration : 0;
    const strokeDashoffset = 100 - progress * 100;

    return (
        <div className="w-full">
            {/* Mode Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 mb-8">
                <button
                    onClick={() => handleModeChange('focus')}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        mode === 'focus'
                            ? 'bg-[#1c1917] text-white shadow-sm'
                            : 'bg-[#f4eee3] hover:bg-[#eae2d4] text-[#57534e]'
                    }`}
                >
                    🖲 Focus Mode
                </button>
                <button
                    onClick={() => handleModeChange('study')}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        mode === 'study'
                            ? 'bg-[#1c1917] text-white shadow-sm'
                            : 'bg-[#f4eee3] hover:bg-[#eae2d4] text-[#57534e]'
                    }`}
                >
                    ☕ Study Mode
                </button>
                <button
                    onClick={() => handleModeChange('build')}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        mode === 'build'
                            ? 'bg-[#1c1917] text-white shadow-sm'
                            : 'bg-[#f4eee3] hover:bg-[#eae2d4] text-[#57534e]'
                    }`}
                >
                    ⚡ Build Mode
                </button>
                <button
                    onClick={() => handleModeChange('custom')}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        mode === 'custom'
                            ? 'bg-[#1c1917] text-white shadow-sm'
                            : 'bg-[#f4eee3] hover:bg-[#eae2d4] text-[#57534e]'
                    }`}
                >
                    ⚙ Custom
                </button>
            </div>

            {/* Timer Window & Info Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Interactive Retro OS Window with Timer */}
                <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-[#ded5c7] bg-[#fcfbf7] shadow-md overflow-hidden">
                        {/* Window Header */}
                        <div className="bg-[#1c1917] text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#2d5a3f]" />
                                <span>AXIOM OS</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#4ade80] text-[11px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                                <span>LOCAL MODE · OFFLINE</span>
                            </div>
                        </div>

                        {/* Window Body: Circular Timer */}
                        <div className="p-8 sm:p-10 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#faf6ed] to-[#f5efe4]">
                            {/* SVG Circular Ring */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    {/* Background track */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#e2d8c9"
                                        strokeWidth="5"
                                    />
                                    {/* Progress track */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#2d5a3f"
                                        strokeWidth="5"
                                        strokeDasharray="251.2"
                                        strokeDashoffset={(strokeDashoffset / 100) * 251.2}
                                        strokeLinecap="round"
                                        className="transition-all duration-500 ease-linear"
                                    />
                                </svg>

                                {/* Center Time & Label */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#1c1917] tracking-tight">
                                        {formatTime(secondsLeft)}
                                    </span>
                                    <span className="text-xs text-[#57534e] font-serif capitalize mt-1">
                                        {mode} session
                                    </span>
                                </div>
                            </div>

                            {/* Play/Pause & Reset Controls */}
                            <div className="flex items-center gap-4 mt-6">
                                <button
                                    onClick={() => setIsRunning(!isRunning)}
                                    className="w-11 h-11 rounded-full bg-[#2d5a3f] hover:bg-[#234731] text-white flex items-center justify-center shadow transition-all"
                                    aria-label={isRunning ? 'Pause' : 'Start'}
                                >
                                    {isRunning ? (
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    )}
                                </button>
                                <button
                                    onClick={() => handleModeChange(mode)}
                                    className="w-9 h-9 rounded-full bg-[#e8dfd3] hover:bg-[#ded3c5] text-[#57534e] flex items-center justify-center transition-all"
                                    aria-label="Reset timer"
                                >
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Cute Sprout Mascot in bottom left corner */}
                            <div className="absolute bottom-2 left-3 w-14 h-14">
                                <Image
                                    src="/images/axiom/axiom-step-03-gen-trans.png"
                                    alt="Sprout mascot encouraging you"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Copy & Feature Bullet Points */}
                <div className="lg:col-span-6 space-y-6 text-left">
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1c1917] tracking-tight leading-tight">
                        Focus without distractions.
                    </h3>
                    <p className="text-base text-[#57534e] leading-relaxed">
                        Start a focused session and let AXIOM OS keep track, block distractions optionally, and help you stay in the zone.
                    </p>

                    <div className="space-y-3.5 pt-2">
                        <div className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                ✓
                            </span>
                            <span className="text-sm font-medium text-[#1c1917]">
                                Pomodoro and custom timers
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                ✓
                            </span>
                            <span className="text-sm font-medium text-[#1c1917]">
                                Distraction nudges
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center text-xs font-bold shrink-0">
                                ✓
                            </span>
                            <span className="text-sm font-medium text-[#1c1917]">
                                Tracks your focus sessions locally
                            </span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => setIsRunning(true)}
                            className="px-6 py-3 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs sm:text-sm font-medium transition-all shadow-sm flex items-center gap-2 group"
                        >
                            <span>Try Focus Mode</span>
                            <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
