'use client';

import { useEffect, useRef } from 'react';

export function CyberBackground() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;

        // Clear existing particles
        container.innerHTML = '';

        // Spawn particles
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'absolute bg-cyan-500 rounded-full opacity-50 animate-float-up';
            p.style.left = `${Math.random() * 100}%`;
            p.style.width = p.style.height = `${Math.random() * 3 + 1}px`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            p.style.animationDuration = `${Math.random() * 10 + 10}s`;
            container.appendChild(p);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[-2] perspective-1000 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#0a192f_0%,#000_60%)]">
            <div className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] transform rotate-x-60 -translate-y-[100px] animate-grid-move mask-fade-bottom"></div>
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
        </div>
    );
}
