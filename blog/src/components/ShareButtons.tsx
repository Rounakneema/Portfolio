'use client';

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const url = `https://rounakneema.vercel.app/blog/posts/${slug}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    };

    return (
        <div className="glass-panel p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                SHARE
            </h3>

            <div className="flex gap-3">
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-xs font-mono text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-black transition-colors"
                >
                    TWITTER
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-xs font-mono text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-black transition-colors"
                >
                    LINKEDIN
                </a>
                <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 rounded text-xs font-mono text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-black transition-colors"
                >
                    COPY LINK
                </button>
            </div>
        </div>
    );
}
