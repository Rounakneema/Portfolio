import React from 'react';
import { projects } from '@/lib/projects';
import { projectFaqs } from '@/lib/projectFaqs';

export function ProjectJsonLd({ slug, pageType, pageTitle, pageDescription }: { slug: string, pageType?: 'Architecture' | 'Docs' | 'Security' | 'Benchmarks' | 'Changelog' | 'Decisions' | 'Forensics', pageTitle?: string, pageDescription?: string }) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return null;

    const baseUrl = `https://${project.subdomain}`;
    
    // Core Entity (SoftwareApplication)
    const softwareApp = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}/#software`,
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
        // Root Page emits the full WebSite, SoftwareApplication, and complete FAQPage
        jsonLd.push(softwareApp);
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            'name': project.title,
            'url': baseUrl,
            'publisher': {
                '@id': 'https://rounakneema.in/#person'
            }
        });

        const faqs = projectFaqs[slug] || [];
        const faqEntities = faqs.length > 0
            ? faqs.map(f => ({
                '@type': 'Question',
                'name': f.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': f.answer
                }
            }))
            : [
                {
                    '@type': 'Question',
                    'name': `What is ${project.title}?`,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': project.fullDescription || project.subtitle
                    }
                }
            ];

        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqEntities
        });
    } else {
        // Subpage emits a TechArticle or highly scoped WebPage referencing the software
        const currentUrl = `${baseUrl}/${pageType.toLowerCase()}`;
        jsonLd.push({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            '@id': `${currentUrl}/#article`,
            'name': pageTitle || `${project.title} | ${pageType}`,
            'headline': pageTitle || `${project.title} ${pageType}`,
            'description': pageDescription || `Technical documentation and ${pageType.toLowerCase()} details for ${project.title}.`,
            'url': currentUrl,
            'about': {
                '@id': `${baseUrl}/#software`
            },
            'isPartOf': {
                '@id': `${baseUrl}/#website`
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
