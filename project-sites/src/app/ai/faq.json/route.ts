import { NextResponse } from 'next/server';
import { projects } from '@/lib/projects';

export async function GET(request: Request) {
    const host = request.headers.get('host') || '';
    const project = projects.find(p => host.includes(p.slug));
    const currentProject = project || projects[0];

    const faqJson = {
        mainEntity: [
            {
                "@type": "Question",
                "name": `What is ${currentProject.title}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": currentProject.subtitle
                }
            },
            {
                "@type": "Question",
                "name": `Who built ${currentProject.title}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It was built and engineered by Rounak Neema."
                }
            }
        ]
    };
    
    return NextResponse.json(faqJson);
}
