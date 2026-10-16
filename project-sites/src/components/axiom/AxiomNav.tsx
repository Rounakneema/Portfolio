'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AxiomNav() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Features', href: '/#features' },
        { name: 'How it works', href: '/#how-it-works' },
        { name: 'Screenshots', href: '/#companion' },
        { name: 'Privacy', href: '/#privacy' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Architecture', href: '/architecture' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#faf7ee]/90 backdrop-blur-md border-b border-[#e7dfd2] font-sans text-sm transition-colors">
            <div className="max-w-[1340px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-[#2d5a3f] flex items-center justify-center text-lg">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                        </svg>
                    </span>
                    <span className="font-bold tracking-tight text-[#1c1917] text-base">
                        AXIOM OS
                    </span>
                </Link>

                {/* Nav Links Desktop */}
                <nav className="hidden md:flex items-center gap-7">
                    {navItems.map((item) => {
                        const isArch = item.href === '/architecture';
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`text-xs sm:text-sm transition-colors ${
                                    isActive || (isArch && pathname.includes('architecture'))
                                        ? 'text-[#2d5a3f] font-semibold' 
                                        : 'text-[#57534e] hover:text-[#1c1917]'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right CTA */}
                <div className="flex items-center gap-3">
                    <a
                        href="/#download"
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1c1917] hover:bg-[#2d5a3f] text-white text-xs font-medium transition-all shadow-sm hover:shadow"
                    >
                        <span>Download AXIOM OS</span>
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                    
                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-[#57534e] hover:text-[#1c1917] hover:bg-[#f2eee5]"
                        aria-label="Toggle navigation menu"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-[#e7dfd2] bg-[#faf7ee] px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-[#57534e] hover:text-[#1c1917] font-medium py-1"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <a
                            href="/#download"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1c1917] text-white text-xs font-medium w-full justify-center"
                        >
                            <span>Download AXIOM OS &rarr;</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
