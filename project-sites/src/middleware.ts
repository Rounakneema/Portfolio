import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, public static assets
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Clean hostname (strip port if present)
  const hostWithoutPort = hostname.split(':')[0].toLowerCase();

  // Extract subdomain if on rounakneema.in or localhost
  let subdomain = '';
  if (hostWithoutPort.endsWith('.rounakneema.in')) {
    subdomain = hostWithoutPort.replace('.rounakneema.in', '');
  } else if (hostWithoutPort.endsWith('.localhost')) {
    subdomain = hostWithoutPort.replace('.localhost', '');
  }

  // Strip 'www.' if someone explicitly typed it on a subdomain
  if (subdomain.startsWith('www.')) {
    subdomain = subdomain.replace('www.', '');
  }

  // If accessed via a specific subdomain (e.g. revealr.rounakneema.in)
  if (subdomain && subdomain !== 'www') {
    // Avoid double prefixing
    if (!url.pathname.startsWith(`/${subdomain}`)) {
      url.pathname = `/${subdomain}${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  // If accessed directly on root domain or localhost:3000
  // Allow direct paths like /revealr, /osa, etc. for local dev/preview
  if (url.pathname === '/') {
    return NextResponse.redirect('https://rounakneema.in');
  }

  return NextResponse.next();
}
