'use client';

import { useEffect, useRef, useState } from 'react';
import { K8sGrid } from './ops/K8sGrid';
import { LiveTerminal } from './ops/LiveTerminal';
import { TerraformLog } from './ops/TerraformLog'; // Using TerraformLog instead of CicdMonitor for IaC
import { useOps } from '@/context/OpsContext';

export function OpsOverlay() {
    const { activeWidget, sourceRect } = useOps();
    const [linePath, setLinePath] = useState<string>('');

    // Refs for widgets to get their positions
    const k8sRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<HTMLDivElement>(null);
    const iacRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!activeWidget || !sourceRect) {
            setLinePath('');
            return;
        }

        let targetRef: React.RefObject<HTMLDivElement | null> | null = null;
        if (activeWidget === 'widget-k8s') targetRef = k8sRef;
        if (activeWidget === 'widget-term') targetRef = termRef;
        if (activeWidget === 'widget-iac') targetRef = iacRef;

        if (targetRef && targetRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();

            // Calculate Path
            const startX = sourceRect.right; // Start from right side of post card
            const startY = sourceRect.top + (sourceRect.height / 2);

            const endX = targetRect.left;
            const endY = targetRect.top + (targetRect.height / 2);

            // Bezier Curve Control Points
            const cp1X = startX + 100;
            const cp1Y = startY;
            const cp2X = endX - 100;
            const cp2Y = endY;

            const path = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
            setLinePath(path);
        }
    }, [activeWidget, sourceRect]);

    return (
        <>
            {/* Connection Layer (SVG) */}
            <div className="fixed inset-0 pointer-events-none z-50">
                <svg className="w-full h-full">
                    <defs>
                        <linearGradient id="fuse-gradient" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#00F0FF" />
                            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {linePath && (
                        <path
                            d={linePath}
                            fill="none"
                            stroke="url(#fuse-gradient)"
                            strokeWidth="2"
                            filter="url(#glow)"
                            className="animate-draw-fuse"
                        />
                    )}
                </svg>
            </div>

            {/* Side Rack (Right) */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 w-72 pointer-events-none z-40 hidden xl:flex">

                {/* Widget: K8s */}
                <div
                    ref={k8sRef}
                    className={`transform transition-all duration-500 ${activeWidget === 'widget-k8s' ? 'translate-x-0 opacity-100 scale-105' : 'translate-x-12 opacity-30 scale-95 grayscale'}`}
                >
                    <div className="relative group pointer-events-auto">
                        <div className={`absolute -top-3 left-4 px-2 bg-black text-[10px] font-mono border rounded z-20 transition-colors ${activeWidget === 'widget-k8s' ? 'text-cyan-500 border-cyan-900/50' : 'text-gray-600 border-gray-800'}`}>
                            K8S_CLUSTER
                        </div>
                        <K8sGrid />
                    </div>
                </div>

                {/* Widget: Terminal */}
                <div
                    ref={termRef}
                    className={`transform transition-all duration-500 ${activeWidget === 'widget-term' ? 'translate-x-0 opacity-100 scale-105' : 'translate-x-12 opacity-30 scale-95 grayscale'}`}
                >
                    <div className="relative group pointer-events-auto">
                        <div className={`absolute -top-3 left-4 px-2 bg-black text-[10px] font-mono border rounded z-20 transition-colors ${activeWidget === 'widget-term' ? 'text-green-500 border-green-900/50' : 'text-gray-600 border-gray-800'}`}>
                            LIVE_SHELL
                        </div>
                        <LiveTerminal />
                    </div>
                </div>

                {/* Widget: IaC */}
                <div
                    ref={iacRef}
                    className={`transform transition-all duration-500 ${activeWidget === 'widget-iac' ? 'translate-x-0 opacity-100 scale-105' : 'translate-x-12 opacity-30 scale-95 grayscale'}`}
                >
                    <div className="relative group pointer-events-auto">
                        <div className={`absolute -top-3 left-4 px-2 bg-black text-[10px] font-mono border rounded z-20 transition-colors ${activeWidget === 'widget-iac' ? 'text-yellow-500 border-yellow-900/50' : 'text-gray-600 border-gray-800'}`}>
                            IaC_MONITOR
                        </div>
                        <TerraformLog />
                    </div>
                </div>

            </div>
        </>
    );
}
