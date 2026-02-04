import { getAllPosts } from '@/lib/posts';
import { PostList } from '@/components/PostList';
import { ScrambleText } from '@/components/ScrambleText';

export const metadata = {
    title: 'Engineering Logs // Rounak',
    description: 'Detailed breakdowns of systems I\'ve built, security research, and engineering challenges.',
};

export default function BlogPage() {
    const posts = getAllPosts();
    // Extract unique tags from all posts
    const allTags = Array.from(new Set(posts.flatMap(post => post.tags || []))).sort();

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <header className="mb-24 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6">
                    <ScrambleText text="WRITING LOGS" />
                </h1>
                <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto leading-relaxed">
                    Detailed breakdowns of systems I've built, security research, and engineering challenges.
                </p>
            </header>

            <PostList initialPosts={posts} allTags={allTags} />
        </div>
    );
}
