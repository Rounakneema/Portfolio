'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function PortfolioLink() {
    const pathname = usePathname();

    // Hide on blog post pages to prevent overlap
    if (pathname.startsWith('/posts/')) {
        return null;
    }

    // Safety: Never show on portfolio pages to avoid overlap
    if (pathname?.startsWith('/portfolio')) {
        return null;
    }

    return (
        <a
            href="https://rounakneema.in"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel hover:bg-white/10 transition-all group border border-cyan/20 hover:border-cyan/50"
        >
            <div className="relative">
                <span className="absolute inset-0 rounded-full bg-cyan-400 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <img
                    src="https://github.com/rounakneema.png"
                    alt="Rounak"
                    className="w-8 h-8 rounded-full border border-cyan/50 relative z-10"
                />
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-mono text-[10px] text-gray-400 group-hover:text-cyan-400 transition-colors">OPERATOR</span>
                <span className="font-bold font-mono text-sm text-white tracking-wider">ROUNAK</span>
            </div>
        </a>
    );
}
