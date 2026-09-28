import { NextResponse } from 'next/server';
import { projects } from '@/lib/projects';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const host = request.headers.get('host') || '';
    
    // Determine which project is being accessed based on the host
    const project = projects.find(p => host.includes(p.slug));
    
    // Default to the first project if not found or accessed locally
    const currentProject = project || projects[0];

    const summaryJson = {
        name: currentProject.title,
        description: currentProject.subtitle,
        url: `https://${currentProject.subdomain}`,
        author: "Rounak Neema",
        type: "SoftwareApplication",
        capabilities: currentProject.features || []
    };
    
    return NextResponse.json(summaryJson);
}
