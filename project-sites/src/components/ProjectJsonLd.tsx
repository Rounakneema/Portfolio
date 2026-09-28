import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectJsonLd({ slug }: { slug: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const jsonLd: any[] = [
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
            'potentialAction': {
                '@type': 'SearchAction',
                'target': `https://${project.subdomain}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
            },
            'publisher': {
                '@type': 'Organization',
                'name': 'Rounak Neema',
                'url': 'https://rounakneema.in',
                'logo': 'https://rounakneema.in/favicon.ico',
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'contactType': 'Customer Service',
                    'email': 'hello@rounakneema.in'
                },
                'sameAs': [
                    'https://github.com/Rounakneema',
                    'https://www.linkedin.com/in/rounakneema',
                    'https://twitter.com/rounakneema'
                ]
            }
        }
    ];

    // Dummy FAQ for AI Crawlers based on project
    jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': `What is ${project.title}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': project.fullDescription || project.subtitle
                }
            },
            {
                '@type': 'Question',
                'name': `How does ${project.title} work?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': project.solution || 'See our architecture page for details.'
                }
            }
        ]
    });

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
