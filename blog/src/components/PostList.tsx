'use client';

import { useState, useMemo } from 'react';
import { PostCard } from '@/components/PostCard';
import type { Post } from '@/lib/posts';
import { useSound } from '@/hooks/useSound';

interface PostListProps {
    initialPosts: Post[];
    allTags: string[];
}

export function PostList({ initialPosts, allTags }: PostListProps) {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const { playHover, playClick } = useSound();

    const filteredPosts = useMemo(() => {
        if (!activeTag) return initialPosts;
        return initialPosts.filter(post => post.tags?.includes(activeTag));
    }, [initialPosts, activeTag]);

    return (
        <div>
            {/* Filter Buttons */}
            {/* Filter Buttons Container */}
            <div className="glass-panel p-2 rounded-xl mb-12 relative group transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="absolute -top-3 left-4 px-2 bg-white text-[10px] text-gray-500 font-mono tracking-widest uppercase border border-gray-200 rounded">
                    FILTERS
                </div>
                <div className="flex overflow-x-auto p-2 gap-4 scrollbar-hide mask-fade-sides">
                    <button
                        onClick={() => { setActiveTag(null); playClick(); }}
                        onMouseEnter={playHover}
                        className={`shrink-0 px-6 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${activeTag === null
                            ? 'bg-black text-white font-bold shadow-lg'
                            : 'text-gray-500 hover:text-black hover:bg-gray-100'
                            }`}
                    >
                        ALL POSTS
                    </button>

                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => { setActiveTag(tag); playClick(); }}
                            onMouseEnter={playHover}
                            className={`shrink-0 px-6 py-2 rounded-lg text-sm font-mono transition-all duration-300 uppercase ${activeTag === tag
                                ? 'bg-black text-white font-bold shadow-lg'
                                : 'text-gray-500 hover:text-black hover:bg-gray-100'
                                }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Post Stream */}
            <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <div key={post.slug}>
                            <PostCard post={post} />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 text-gray-500 font-mono">
            // NO_RECORDS_FOUND
                    </div>
                )}
            </div>
        </div>
    );
}
