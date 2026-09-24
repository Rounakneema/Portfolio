import Link from 'next/link';
import { Post } from '@/lib/posts';
import { format } from 'date-fns';

interface RelatedPostsProps {
    currentSlug: string;
    currentTags?: string[];
    posts: Post[];
}

export function RelatedPosts({ currentSlug, currentTags = [], posts }: RelatedPostsProps) {
    // Filter out current post
    const otherPosts = posts.filter(post => post.slug !== currentSlug);

    // Score posts based on tag matches
    const scoredPosts = otherPosts.map(post => {
        const sharedTags = post.tags?.filter(tag => currentTags.includes(tag)) || [];
        return {
            post,
            score: sharedTags.length
        };
    });

    // Sort by score (descending) and then by date (newest first)
    scoredPosts.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });

    // Take top 3
    const relatedPosts = scoredPosts.slice(0, 3).map(item => item.post);

    if (relatedPosts.length === 0) return null;

    return (
        <div className="mt-24 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-mono font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-cyan-500">//</span> RELATED_INTELLIGENCE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                    <Link href={`/posts/${post.slug}`} key={post.slug} className="group block">
                        <div className="glass-panel p-6 rounded-xl h-full hover:bg-white/5 transition-colors border border-white/5 hover:border-cyan/30">
                            <div className="text-xs font-mono text-cyan-500 mb-3">
                                {post.tags?.[0] || 'Unclassified'}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                                {post.title}
                            </h4>
                            <div className="text-xs font-mono text-gray-500">
                                {format(new Date(post.date), 'MMM d, yyyy')}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
