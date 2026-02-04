'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
    title: string;
    id: string;
}

export function TableOfContents() {
    const [toc, setToc] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // 1. Generate TOC from DOM
        const headings = Array.from(document.querySelectorAll('.prose-custom h2'));
        const items = headings.map((heading, index) => {
            const title = heading.textContent?.replace('// ', '') || `Section ${index + 1}`;

            // Ensure ID exists
            if (!heading.id) {
                heading.id = title
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '') || `section-${index}`;
            }

            return {
                title,
                id: heading.id
            };
        });
        setToc(items);

        // 2. Setup Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -35% 0px' }
        );

        headings.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    if (toc.length === 0) return null;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-40">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                Table of Contents
            </div>
            <div className="space-y-4">
                {toc.map((item, index) => (
                    <a
                        key={item.id || index}
                        href={`#${item.id}`}
                        className={`block text-sm font-medium transition-colors duration-200 ${activeId === item.id
                            ? 'text-blue-600 translate-x-1'
                            : 'text-gray-500 hover:text-black'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(item.id);
                        }}
                    >
                        <span className="font-mono text-xs opacity-50 mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
