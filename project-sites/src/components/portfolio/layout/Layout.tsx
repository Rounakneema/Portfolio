import React from 'react';
import { Navbar } from './Navbar';
import { Decorations } from '../ui/Decorations';
import { ScrollProgress } from '../ui/ScrollProgress';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen relative">
            <ScrollProgress />
            <Navbar />
            <Decorations />
            <div className="bg-grid bg-grid-pattern opacity-100"></div>

            <main className="max-w-[1400px] mx-auto px-6 pt-40 pb-24">
                {children}
            </main>
        </div>
    );
}
