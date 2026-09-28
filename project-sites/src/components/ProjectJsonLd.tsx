import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectJsonLd({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': project.title,
            'url': `https://${project.subdomain}`,
            'description': project.subtitle,
            'applicationCategory': 'SoftwareApplication',
            'author': {
                '@type': 'Person',
                'name': 'Rounak Neema',
                '@id': 'https://rounakneema.in/#person',
                'url': 'https://rounakneema.in'
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': project.title,
            'url': `https://${project.subdomain}`,
            'publisher': {
                '@type': 'Organization',
                'name': 'Rounak Neema',
                'url': 'https://rounakneema.in',
                'logo': 'https://rounakneema.in/favicon.ico',
                'sameAs': [
                    'https://github.com/Rounakneema'
                ]
            }
        }
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

