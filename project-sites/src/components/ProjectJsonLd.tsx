import React from 'react';
import { projects } from '@/lib/projects';

export function ProjectJsonLd({ slug, pageType, pageTitle, pageDescription }: { slug: string, pageType?: 'Architecture' | 'Docs' | 'Security' | 'Benchmarks' | 'Changelog' | 'Decisions' | 'Forensics', pageTitle?: string, pageDescription?: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const baseUrl = \https://\\;
    
    // Core Entity (SoftwareApplication)
    const softwareApp = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': \\/#software\,
        'name': project.title,
        'url': baseUrl,
        'description': project.subtitle,
        'applicationCategory': 'SoftwareApplication',
        'author': {
            '@id': 'https://rounakneema.in/#person'
        }
    };

    const jsonLd: any[] = [];

    if (!pageType) {
        // Root Page emits the full WebSite, SoftwareApplication, and FAQ
        jsonLd.push(softwareApp);
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': \\/#website\,
            'name': project.title,
            'url': baseUrl,
            'publisher': {
                '@id': 'https://rounakneema.in/#person'
            }
        });
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
                {
                    '@type': 'Question',
                    'name': \What is \?\,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': project.fullDescription || project.subtitle
                    }
                }
            ]
        });
    } else {
        // Subpage emits a TechArticle or highly scoped WebPage referencing the software
        const currentUrl = \\/\\;
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            '@id': \\/#article\,
            'name': pageTitle || \\ | \\,
            'headline': pageTitle || \\ \\,
            'description': pageDescription || \Technical documentation and \ details for \.\,
            'url': currentUrl,
            'about': {
                '@id': \\/#software\
            },
            'isPartOf': {
                '@id': \\/#website\
            },
            'author': {
                '@id': 'https://rounakneema.in/#person'
            }
        });
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
