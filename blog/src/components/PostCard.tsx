import Link from 'next/link';
import { format } from 'date-fns';
import type { Post } from '@/lib/posts';
import { TiltCard } from '@/components/TiltCard';
import { useSound } from '@/hooks/useSound';

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    const date = new Date(post.date);

    const { playHover, playClick } = useSound();

    return (
        <Link href={`/posts/${post.slug}`} className="block" onClick={playClick} onMouseEnter={playHover}>
            <TiltCard>
                <article className="glass-panel glass-panel-interactive p-10 md:p-12 rounded-3xl group cursor-pointer relative overflow-hidden h-full border border-gray-200 hover:border-blue-500/30 hover:shadow-xl transition-all">
                    {/* Hover Blur Effect */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                    <div className="flex flex-col md:flex-row gap-8 md:items-start relative z-10">
                        {/* Date Block */}
                        <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-gray-50 min-w-[100px]">
                            <span className="font-mono text-3xl font-bold text-black">
                                {format(date, 'dd')}
                            </span>
                            <span className="font-mono text-sm text-gray-500 uppercase">
                                {format(date, 'MMM')}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 rounded text-xs font-mono border border-green-200 text-green-700 bg-green-50">
                                    PUBLIC
                                </span>
                                <span className="text-gray-400 text-sm font-mono">
                                    #{post.slug.substring(0, 4).toUpperCase()}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                <div className="flex gap-2">
                                    {post.tags?.map(tag => (
                                        <span key={tag} className="text-xs text-gray-500 font-mono uppercase bg-gray-100 px-2 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="font-mono text-sm text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                                    READ ARTICLE -&gt;
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </TiltCard>
        </Link>
    );
}
