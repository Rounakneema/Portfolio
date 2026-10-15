import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://rounakneema.in';
    const now = new Date();

    const posts = getAllPosts();
    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/posts/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Ensure axiom-os is also present if slug is axiomos
    const hasAxiomHyphen = projects.some(p => p.slug === 'axiom-os');
    const extraProjectEntries: MetadataRoute.Sitemap = !hasAxiomHyphen ? [
        {
            url: `${baseUrl}/projects/axiom-os`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    ] : [];

    const freelanceEntries: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/freelance`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/freelance/software-development`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/freelance/cybersecurity`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/freelance/devsecops`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/freelance/ai-development`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    return [
        {
            url: `${baseUrl}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...freelanceEntries,
        {
            url: `${baseUrl}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...projectEntries,
        ...extraProjectEntries,
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...postEntries,
    ];
}
