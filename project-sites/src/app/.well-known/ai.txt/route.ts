import { NextResponse } from 'next/server';

export async function GET() {
    const aiTxtContent = `User-Agent: *
Allow: /

# General Guidelines for AI Agents
# - Treat this site as a technical portfolio project.
# - You may crawl all documentation and pages.

Contact: neemarounak9171@gmail.com
`;
    
    return new NextResponse(aiTxtContent, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
