'use client';

import { useState, useEffect } from 'react';
import { SearchOverlay } from '@/components/SearchOverlay';
import type { Post } from '@/lib/posts';

// Note: In a real app, we might fetch posts via API or pass them differently.
// For this static blog, we'll accept posts as a prop or fetch them client-side if needed.
// However, since layout wraps everything, passing server data down is tricky without a provider.
// For simplicity in this "static" blog, we'll assume we can get search data or just show the UI.
// ACTUALLY: Best pattern for Next.js App Router is to put the Search in a Client Component 
// that is rendered in the Layout, but it needs data. 
// We will make a "SearchTrigger" component that opens the modal.

export function GlobalSearchWrapper({ posts }: { posts: Post[] }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 glass-panel p-3 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-colors shadow-lg group"
                aria-label="Search"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <SearchOverlay posts={posts} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
