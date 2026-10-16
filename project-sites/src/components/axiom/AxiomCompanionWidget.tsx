'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function AxiomCompanionWidget() {
    const [status, setStatus] = useState<'idle' | 'focus' | 'rest'>('idle');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            setIsTimerRunning(false);
            setStatus('idle');
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, secondsLeft]);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleStartFocus = () => {
        setStatus('focus');
        setSecondsLeft(25 * 60);
        setIsTimerRunning(true);
    };

    const handleRest = () => {
        setStatus('rest');
        setIsTimerRunning(false);
    };

    const handleReset = () => {
        setStatus('idle');
        setIsTimerRunning(false);
        setSecondsLeft(25 * 60);
    };

    return (
        <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-[#f5efe6] border border-[#e5dcd0] p-4 sm:p-6 shadow-[0_20px_50px_rgba(45,90,63,0.06)] overflow-hidden">
            {/* Background subtle grain and warm glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#2d5a3f]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#d7c3a3]/30 rounded-full blur-2xl pointer-events-none" />

            {/* Pixel Scene Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#dfd6c8] bg-[#fbf8f1] shadow-inner mb-4">
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src="/images/axiom/axiom-hero-scene-generated.jpg"
                        alt="AXIOM OS cozy desk companion scene"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Soft gradient edge fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fbf8f1]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating interactive dialogue prompt on top of or below illustration */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 max-w-[210px] sm:max-w-[240px]">
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.div
                                key="idle-dialog"
                                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-[#fcfbf7]/95 backdrop-blur-sm rounded-xl p-3 border border-[#dfd6c8] shadow-lg text-left font-sans"
                            >
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#2d5a3f] animate-pulse" />
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2d5a3f] font-semibold">
                                        AXIOM Companion
                                    </span>
                                </div>
                                <p className="text-xs font-serif text-[#1c1917] leading-snug mb-2.5">
                                    Ready for your afternoon deep work sprint?
                                </p>
                                <div className="flex items-center gap-1.5">
                                    <button
                                        onClick={handleStartFocus}
                                        className="px-2.5 py-1 rounded-md bg-[#2d5a3f] hover:bg-[#234731] text-white text-[11px] font-medium transition-colors shadow-sm"
                                    >
                                        Let&apos;s do it
                                    </button>
                                    <button
                                        onClick={handleRest}
                                        className="px-2 py-1 rounded-md bg-stone-200/70 hover:bg-stone-300/70 text-[#57534e] text-[11px] font-medium transition-colors"
                                    >
                                        Later
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {status === 'focus' && (
                            <motion.div
                                key="focus-dialog"
                                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-[#fcfbf7]/95 backdrop-blur-sm rounded-xl p-3 border border-[#2d5a3f]/40 shadow-lg text-left font-sans ring-1 ring-[#2d5a3f]/20"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2d5a3f] font-bold flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#2d5a3f] animate-ping" />
                                        In Flow
                                    </span>
                                    <span className="text-xs font-mono font-bold text-[#2d5a3f]">
                                        {formatTime(secondsLeft)}
                                    </span>
                                </div>
                                <p className="text-[11px] text-[#44403c] leading-snug mb-2">
                                    Monitoring active code windows locally. Zero telemetry broadcast.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="px-2 py-0.5 rounded bg-stone-200/80 hover:bg-stone-300 text-[#57534e] text-[10px] font-mono transition-colors"
                                >
                                    End Session
                                </button>
                            </motion.div>
                        )}

                        {status === 'rest' && (
                            <motion.div
                                key="rest-dialog"
                                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-[#fcfbf7]/95 backdrop-blur-sm rounded-xl p-3 border border-[#dfd6c8] shadow-lg text-left font-sans"
                            >
                                <p className="text-xs font-serif text-[#1c1917] leading-snug mb-2">
                                    Understood. Resting companion mode. I will watch quietly until you open your editor.
                                </p>
                                <button
                                    onClick={handleStartFocus}
                                    className="px-2.5 py-1 rounded-md bg-[#2d5a3f] text-white text-[11px] font-medium transition-colors"
                                >
                                    Start Now
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom telemetry status bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 text-xs font-mono text-[#57534e]">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f]" />
                    <span className="font-semibold text-[#1c1917]">Specter Daemon:</span>
                    <span>Local WAL SQLite (0.1% CPU)</span>
                </div>
                <div className="flex items-center gap-3">
                    <span>Ollama: 3B Local</span>
                    <span className="text-[#2d5a3f] font-semibold">Privacy: 100% Offline</span>
                </div>
            </div>
        </div>
    );
}
