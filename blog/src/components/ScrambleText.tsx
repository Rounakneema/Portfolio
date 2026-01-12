'use client';

import { useEffect, useRef } from 'react';

interface ScrambleTextProps {
    text: string;
    className?: string;
}

export function ScrambleText({ text, className = '' }: ScrambleTextProps) {
    const elementRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let iterations = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            clearInterval(interval);
            iterations = 0;

            interval = setInterval(() => {
                element.innerText = text.split("")
                    .map((char, index) => {
                        if (index < iterations) return text[index];
                        return chars[Math.floor(Math.random() * 44)];
                    })
                    .join("");

                if (iterations >= text.length) clearInterval(interval);
                iterations += 1 / 3;
            }, 30);
        };

        // Start on mount
        startScramble();

        // Optional: Restart on hover
        element.addEventListener('mouseenter', startScramble);

        return () => {
            clearInterval(interval);
            element.removeEventListener('mouseenter', startScramble);
        };
    }, [text]);

    return (
        <h1 ref={elementRef} className={className}>
            {text}
        </h1>
    );
}
