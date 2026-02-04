'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const onMouseMove = (e: MouseEvent) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;

            ring.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 400, fill: "forwards" });
        };

        const onMouseEnter = () => document.body.classList.add('hovering');
        const onMouseLeave = () => document.body.classList.remove('hovering');

        window.addEventListener('mousemove', onMouseMove);

        // Attach hover listeners to interactive elements dynamically
        // Note: In React, it's better to use a context or a specific class, 
        // but for this global effect, we'll use delegation or a mutation observer if needed.
        // For simplicity, we'll rely on the 'interactive-element' class being present.

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest('.interactive-element') ||
                (e.target as HTMLElement).tagName === 'A' ||
                (e.target as HTMLElement).tagName === 'BUTTON') {
                document.body.classList.add('hovering');
            } else {
                document.body.classList.remove('hovering');
            }
        };

        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="fixed w-1 h-1 bg-cyan-500 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"></div>
            <div ref={ringRef} className="fixed w-10 h-10 border border-cyan-500/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200 ease-out custom-cursor-ring"></div>
        </>
    );
}
