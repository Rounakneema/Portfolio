import { getAllPosts } from '@/lib/posts';
import { PostList } from '@/components/PostList';
import { ScrambleText } from '@/components/ScrambleText';

export default function Home() {
  const posts = getAllPosts();

  // Extract unique tags from all posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 relative">
      <header className="mb-24 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-8 bg-gray-100 border border-gray-200">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="font-mono text-xs tracking-[0.1em] text-gray-500 uppercase">Engineering & Research</span>
        </div>

        <ScrambleText
          text="WRITING LOGS"
          className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6"
        />
        <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto leading-relaxed">
          Detailed breakdowns of systems I've built, security research, and engineering challenges.
        </p>
      </header>



      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent hidden xl:block"></div>
        <PostList initialPosts={posts} allTags={allTags} />
      </div>
    </div>
  );
}
