'use client';

import { useEffect, useRef } from 'react';
import { LayoutGrid } from 'lucide-react';

export function K8sGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Clear existing
        grid.innerHTML = '';

        // Create Hexagons
        const hexCount = 48;
        for (let i = 0; i < hexCount; i++) {
            const hex = document.createElement('div');
            hex.className = 'w-full aspect-square bg-cyan-500/10 transition-all duration-500 clip-hex';
            hex.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            grid.appendChild(hex);
        }

        // Animation Loop
        const interval = setInterval(() => {
            const hexes = grid.children;
            if (hexes.length === 0) return;

            const randomHex = hexes[Math.floor(Math.random() * hexes.length)] as HTMLElement;
            const status = Math.random();

            // Reset classes
            randomHex.className = 'w-full aspect-square bg-cyan-500/10 transition-all duration-500 clip-hex';
            randomHex.style.boxShadow = 'none';

            if (status > 0.9) {
                randomHex.classList.add('bg-red-500'); // Crash
            } else if (status > 0.7) {
                randomHex.classList.add('bg-yellow-500'); // Pending
            } else if (status > 0.3) {
                randomHex.classList.add('bg-cyan-500'); // Running
                randomHex.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.5)';
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-4 flex flex-col h-full group hover:border-cyan-500/30 transition-colors">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white tracking-widest">K8S_CLUSTER_TOPOLOGY</span>
                </div>
                <span className="text-[10px] text-green-500 font-mono">HEALTHY</span>
            </div>

            <div ref={gridRef} className="grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] gap-1 content-start flex-1">
                {/* Hexagons injected via JS */}
            </div>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500 font-mono">
                <span>NODES: 3</span>
                <span>PODS: 24/30</span>
                <span>NS: PROD</span>
            </div>
        </div>
    );
}
