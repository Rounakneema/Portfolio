'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 h-1 bg-cyan-500 shadow-[0_0_10px_#00F0FF] z-50 transition-all duration-100" style={{ width: `${progress}%` }} />
    );
}
