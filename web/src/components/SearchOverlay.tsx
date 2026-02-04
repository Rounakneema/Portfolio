'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Post } from '@/lib/posts';

interface SearchOverlayProps {
    posts: Post[];
    isOpen: boolean;
    onClose: () => void;
}

export function SearchOverlay({ posts, isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Search Modal */}
            <div className="relative w-full max-w-2xl glass-panel rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center border-b border-white/10 p-4">
                    <span className="text-cyan-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 font-mono text-lg"
                        placeholder="SEARCH_ARCHIVE..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <button
                        onClick={onClose}
                        className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded"
                    >
                        ESC
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <button
                                key={post.slug}
                                onClick={() => {
                                    router.push(`/posts/${post.slug}`);
                                    onClose();
                                }}
                                className="w-full text-left p-3 rounded-lg hover:bg-white/5 group transition-colors flex items-center justify-between"
                            >
                                <div>
                                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-mono mt-1">
                                        {post.date} // {post.tags?.[0] || 'LOG'}
                                    </p>
                                </div>
                                <span className="text-gray-600 group-hover:text-cyan-400 transition-colors">
                                    &crarr;
                                </span>
                            </button>
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500 font-mono text-sm">
                            NO_MATCHES_FOUND
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
