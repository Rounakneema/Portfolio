'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function WebTerminal() {
    const [text, setText] = useState('');
    const fullText: string = '> Loading Profile...\n> Role: DevOps_&_Security_Engineer\n> Stack: Cloud • Go • K8s • CI/CD\n> Status: OPEN_TO_WORK\n> welcome_recruiter.';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-mono text-xs md:text-sm text-zinc-500 mb-6 flex items-center justify-center gap-2 opacity-80">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="whitespace-pre-wrap">{text}</span>
            <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500 align-middle"></span>
        </div>
    );
}
