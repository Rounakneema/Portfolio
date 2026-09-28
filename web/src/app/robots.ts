import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: '/private/',
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'Claude-Web', 'Google-Extended', 'ClaudeBot', 'ChatGPT-User'],
                allow: ['/'],
            }
        ],
        sitemap: [
            'https://rounakneema.in/sitemap.xml',
            'https://rounakneema.in/projects/sitemap.xml',
            'https://rounakneema.in/blog/sitemap.xml'
        ],
    };
}


