'use client';
import { useEffect, useState } from 'react';

export function HeroSequence() {
    const [progress, setProgress] = useState({
        architecture: 0,
        security: 0,
        complexity: 0,
        authenticity: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress({
                architecture: 94,
                security: 87,
                complexity: 72,
                authenticity: 91
            });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const renderBar = (value: number) => {
        const totalBlocks = 20;
        const filledBlocks = Math.round((value / 100) * totalBlocks);
        const emptyBlocks = totalBlocks - filledBlocks;
        return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
    };

    return (
        <div className="font-mono text-sm leading-relaxed mb-16 pt-8 max-w-4xl">
            <h1 className="text-white mb-12 text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                Turn Code Into Context.
            </h1>
            
            <div className="bg-[#050505] border border-[#1f6feb]/30 p-6 mb-8">
                <div className="text-[#58a6ff] mb-6 whitespace-pre">
{`src/
├── scanner/
│   ├── network.go          ← ANALYZING...
│   └── fingerprint.go
├── plugins/
└── storage/`}
                </div>
                <div className="space-y-3 text-[#e0e0e0] max-w-lg">
                    <div className="flex items-center">
                        <span className="w-36">Architecture</span>
                        <span className="w-12 text-right mr-4">{progress.architecture}%</span>
                        <span className="text-[#1f6feb]">{renderBar(progress.architecture)}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-36">Security</span>
                        <span className="w-12 text-right mr-4">{progress.security}%</span>
                        <span className="text-[#1f6feb]">{renderBar(progress.security)}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-36">Complexity</span>
                        <span className="w-12 text-right mr-4">{progress.complexity}%</span>
                        <span className="text-[#1f6feb]">{renderBar(progress.complexity)}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-36">Authenticity</span>
                        <span className="w-12 text-right mr-4">{progress.authenticity}%</span>
                        <span className="text-[#1f6feb]">{renderBar(progress.authenticity)}</span>
                    </div>
                </div>
            </div>

            <div className="border border-[#1f6feb] bg-[#0a0a0a] p-6 relative">
                <div className="absolute -top-[10px] left-4 bg-[#0a0a0a] px-2 text-[#58a6ff] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    ┌─ GROUNDING ASSERTION ─┐
                </div>
                <div className="text-white text-lg mb-4 mt-2 font-medium">
                    'The scanner uses bounded concurrency.'
                </div>
                <div className="text-[#888] text-sm mb-4">
                    Evidence: <span className="text-[#e0e0e0]">scanner/network.go</span> Lines 45–89
                </div>
                <div className="text-[#58a6ff] font-bold flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    VERIFIED — 3 direct references found
                </div>
            </div>
        </div>
    );
}
