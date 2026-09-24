
import { Post } from '@/lib/posts';
import Link from 'next/link';

interface ArchiveListProps {
    posts: Post[];
}

export function ArchiveList({ posts }: ArchiveListProps) {
    // Group posts by year
    const postsByYear = posts.reduce((acc, post) => {
        const year = new Date(post.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(post);
        return acc;
    }, {} as Record<string, Post[]>);

    const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

    return (
        <div className="space-y-12">
            {years.map(year => (
                <div key={year}>
                    <h3 className="text-8xl font-black text-gray-200 mb-8 select-none">{year}</h3>
                    <div className="space-y-6">
                        {postsByYear[year].map(post => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                <div className="flex items-baseline gap-6 border-b border-gray-100 pb-4 group-hover:border-blue-500 transition-colors">
                                    <span className="font-mono text-sm text-gray-400 w-24 shrink-0">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase()}
                                    </span>
                                    <div>
                                        <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h4>
                                        <div className="flex gap-2 mt-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-xs font-mono text-gray-400">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
