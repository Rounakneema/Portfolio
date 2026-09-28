import { NextResponse } from 'next/server';
import { projects } from '@/lib/projects';

export async function GET(request: Request) {
    const host = request.headers.get('host') || '';
    const project = projects.find(p => host.includes(p.slug));
    const currentProject = project || projects[0];
    
    // Simple dynamic llms.txt generation for subdomains
    const llmsTxtContent = `# ${currentProject.title}
> ${currentProject.subtitle}

## Overview
This is a project by Rounak Neema.
URL: https://${currentProject.subdomain}

## Documentation Links
- [Architecture Details](https://${currentProject.subdomain}/architecture)
- [Design Decisions](https://${currentProject.subdomain}/decisions)
- [View Author's Portfolio](https://rounakneema.in)
`;
    
    return new NextResponse(llmsTxtContent, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
