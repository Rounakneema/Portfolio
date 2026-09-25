import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/projects/',
                '/blog/'
            ],
            disallow: '/private/',
        },
        sitemap: [
            'https://rounakneema.in/sitemap.xml',
            'https://rounakneema.in/blog/sitemap.xml'
        ],
    };
}
