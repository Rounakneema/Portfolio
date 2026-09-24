import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname (e.g. 'revealr.rounakneema.in', 'localhost:3000')
  const hostname = req.headers.get('host') || '';

  // Extract the subdomain (e.g. 'revealr')
  // We assume the root domain is rounakneema.in
  let currentHost = hostname
    .replace('.rounakneema.in', '')
    .replace('.localhost:3000', '');

  // If there's no subdomain (i.e. they hit the raw Vercel URL or the project site domain directly without a prefix),
  // we could redirect them back to the main portfolio or show a generic project sites index.
  if (currentHost === 'rounakneema.in' || currentHost === 'localhost:3000') {
      // In production, rounakneema.in is hosted on a different Vercel project anyway,
      // but just in case:
      return NextResponse.redirect('https://rounakneema.in');
  }

  // Map the subdomain to the /[project] dynamic route
  // e.g. revealr.rounakneema.in/docs -> /revealr/docs
  url.pathname = `/${currentHost}${url.pathname}`;
  
  return NextResponse.rewrite(url);
}
