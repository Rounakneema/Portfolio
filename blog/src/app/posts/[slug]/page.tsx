// ... imports
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/posts';
import { ShareButtons } from '@/components/ShareButtons';
import { ReadingProgress } from '@/components/ReadingProgress';
import { TableOfContents } from '@/components/TableOfContents';
import { CodeBlockEnhancer } from '@/components/CodeBlockEnhancer';
import { RelatedPosts } from '@/components/RelatedPosts';
// import { NewsletterForm } from '@/components/NewsletterForm';
import { ReadingFrame } from '@/components/ReadingFrame';
import BlogPostSchema from '@/components/BlogPostSchema';
import type { Metadata } from 'next';

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const contentHtml = await markdownToHtml(post.content);
    const postUrl = `https://rounakneema.in/blog/posts/${slug}`;

    return (
        <div className="min-h-screen">
            <BlogPostSchema post={post} url={postUrl} />
            <ReadingProgress />
            <CodeBlockEnhancer />

            {/* Top Navigation Bar */}
            <a href="/blog" className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/50 transition-all group border border-gray-200 text-xs font-bold font-mono text-gray-500 hover:text-black">
                ← ARCHIVE
            </a>

            <nav className="glass-header fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center pl-40">
                <div className="font-mono text-xs md:text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-cyan transition-colors">ROOT</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-cyan transition-colors">ARCHIVES</Link>
                    <span>/</span>
                    <span className="text-cyan uppercase">OP-{post.slug.substring(0, 8)}</span>
                </div>
                <div className="font-mono text-[10px] text-green-500 border border-green-500/30 px-2 py-1 rounded bg-green-500/10">
                    CLEARANCE: PUBLIC
                </div>
            </nav>

            <main className="pt-40 pb-32 px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col md:flex-row gap-16 relative">

                {/* Sidebar TOC */}
                <aside className="hidden md:block w-80 sticky top-40 h-fit shrink-0">
                    <TableOfContents />
                </aside>

                {/* Main Content */}
                <article className="flex-1 max-w-5xl prose-custom relative">
                    <ReadingFrame>
                        <header className="mb-16 border-b border-gray-200 pb-12">
                            <div className="flex flex-wrap gap-4 mb-8">
                                {post.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-wider rounded uppercase">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold font-mono text-black mb-8 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-8 font-mono text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-gray-500">AUTHOR:</span>
                                    <a href="https://rounakneema.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                                        ROUNAK
                                    </a>
                                </div>
                                <span>//</span>
                                <span>DATE: {format(new Date(post.date), 'yyyy-MM-dd')}</span>
                                <span>//</span>
                                <span>READ_TIME: {post.readingTime}</span>
                            </div>
                        </header>

                        <div
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />

                        <div id="share" className="mt-16 pt-8 border-t border-gray-200">
                            <ShareButtons title={post.title} slug={post.slug} />
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <div className="font-mono text-xs text-gray-500">
                                END OF TRANSMISSION<span className="blink">_</span>
                            </div>
                            <Link href="/" className="text-cyan font-mono text-xs hover:underline uppercase">
                                [ Return to Archive ]
                            </Link>
                        </div>
                    </ReadingFrame>

                    <RelatedPosts currentSlug={post.slug} currentTags={post.tags} posts={getAllPosts()} />
                    {/* <NewsletterForm /> */}

                </article>
            </main>
        </div>
    );
}
