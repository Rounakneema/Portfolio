import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host') || 'revealr.rounakneema.in';
  
  const content = `User-agent: *
Allow: /

# AI & LLM Crawlers
User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemaps and AI Documentation
Sitemap: https://${host}/sitemap.xml
Sitemap: https://${host}/llms.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
