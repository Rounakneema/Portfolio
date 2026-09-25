'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AxiomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: 'System', href: '/' },
        { name: 'Telemetry', href: '/telemetry' },
        { name: 'Memory', href: '/memory' },
        { name: 'Intelligence', href: '/intelligence' },
        { name: 'Policies', href: '/policies' },
        { name: 'Architecture', href: '/architecture' },
        { name: 'Decisions', href: '/decisions' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b-2 border-[#333] font-mono text-sm">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 py-4">
                    <span className="font-black text-white uppercase tracking-widest">
                        AXIOM <span className="text-red-500">OS</span>
                    </span>
                    <span className="text-[#00d4aa] text-xs">● RUNNING</span>
                </div>
                
                <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar space-x-1 py-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`px-4 py-2 uppercase tracking-wide transition-colors whitespace-nowrap
                                    ${isActive 
                                        ? 'bg-[#111] text-[#00d4aa] border border-[#00d4aa]' 
                                        : 'text-gray-500 hover:text-white hover:border-gray-500 border border-transparent'
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </nav>
    );
}
