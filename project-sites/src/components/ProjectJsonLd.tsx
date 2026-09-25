import React from 'react';

export function ProjectJsonLd({ project }: { project: any }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': project.schemaCategory || 'SoftwareApplication',
        'name': project.name,
        'url': project.url,
        'description': project.description,
        'applicationCategory': project.schemaCategory || 'SoftwareApplication',
        'author': {
            '@type': 'Person',
            'name': 'Rounak Neema',
            '@id': 'https://rounakneema.in/#person',
            'url': 'https://rounakneema.in'
        },
        ...(project.github && { 'codeRepository': project.github }),
        ...(project.operatingSystem && { 'operatingSystem': project.operatingSystem }),
        ...(project.programmingLanguage && { 'programmingLanguage': project.programmingLanguage })
    };

    // If there's an FAQ, append it
    let finalJsonLd: any = jsonLd;
    
    if (project.faq && project.faq.length > 0) {
        finalJsonLd = [
            jsonLd,
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': project.faq.map((q: any) => ({
                    '@type': 'Question',
                    'name': q.question,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': q.answer
                    }
                }))
            }
        ];
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(finalJsonLd) }}
        />
    );
}
