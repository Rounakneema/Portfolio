import { getAllPosts, getAllTags } from '@/lib/posts';
import { ArchiveList } from '@/components/ArchiveList';

export const metadata = {
    title: 'Engineering Logs // Rounak',
    description: 'Technical blog by Rounak Neema covering DevOps, Red Teaming, and System Architecture.',
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogHome() {
    const posts = getAllPosts();
    const tags = getAllTags();

    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 flex items-center gap-4">
                        <span className="text-blue-600">#</span>
                        ENGINEERING_LOGS
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Documenting the journey through DevOps, Security Research, and System Architecture.
                    </p>
                </header>

                <ArchiveList posts={posts} />
            </div>
        </div>
    );
}
