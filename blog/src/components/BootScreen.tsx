'use client';

import { useState, useEffect } from 'react';

export function BootScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [lines, setLines] = useState<string[]>([]);

    const bootLines = [
        "INITIALIZING SENTINEL KERNEL...",
        "LOADING MODULES: [NET] [SEC] [UI]...",
        "ESTABLISHING SECURE HANDSHAKE...",
        "DECRYPTING ARCHIVE INDEX...",
        "SYSTEM READY."
    ];

    useEffect(() => {
        // Check if already booted in this session
        if (sessionStorage.getItem('booted')) {
            setIsVisible(false);
            return;
        }

        let delay = 0;
        bootLines.forEach((line, index) => {
            setTimeout(() => {
                setLines(prev => [...prev, line]);

                // Finish boot
                if (index === bootLines.length - 1) {
                    setTimeout(() => {
                        setIsVisible(false);
                        sessionStorage.setItem('booted', 'true');
                    }, 800);
                }
            }, delay);
            delay += Math.random() * 300 + 100;
        });
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col justify-end p-8 font-mono text-cyan-400 transition-opacity duration-500">
            <div className="space-y-1 text-sm md:text-base">
                {lines.map((line, i) => (
                    <div key={i} className="animate-type-line">
                        &gt; {line}
                    </div>
                ))}
            </div>
        </div>
    );
}
