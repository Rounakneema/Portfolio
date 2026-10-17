import { NextResponse } from 'next/server';
import { projects } from '@/lib/projects';
import { projectFaqs } from '@/lib/projectFaqs';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const projectParam = url.searchParams.get('project');
    const host = request.headers.get('host') || '';
    
    const project = projects.find(p => (projectParam && p.slug === projectParam) || host.includes(p.slug));
    const currentProject = project || projects[0];
    const faqs = projectFaqs[currentProject.slug] || [];

    const faqJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "about": {
            "@type": "SoftwareApplication",
            "name": currentProject.title,
            "description": currentProject.subtitle,
            "author": {
                "@type": "Person",
                "name": "Rounak Neema",
                "url": "https://rounakneema.in"
            }
        },
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "category": f.category,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };
    
    return NextResponse.json(faqJson);
}
