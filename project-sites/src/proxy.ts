import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (public images)
     * - favicon.ico, icon.png, public static assets
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|robots.txt|sitemap.xml|8bc4871b3fdaee0bfa4ddde4ea6f76c9ae079ec462410083da915459cd36a43e2d08434f595d815a88afc3e025329a5f7381011c44b9324a971d90bd864008\\.txt).*)',
  ],
};

export default function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Clean hostname (strip port if present)
  const hostWithoutPort = hostname.split(':')[0].toLowerCase();

  // Never rewrite static assets, images, or files with static extensions
  if (
    url.pathname.startsWith('/images') ||
    url.pathname.startsWith('/_next') ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico|pdf|txt|xml|json)$/i.test(url.pathname)
  ) {
    return NextResponse.next();
  }

  // Allow IndexNow key verification file across all subdomains without rewriting
  if (url.pathname.includes('8bc4871b3fdaee0bfa4ddde4ea6f76c9ae079ec462410083da915459cd36a43e2d08434f595d815a88afc3e025329a5f7381011c44b9324a971d90bd864008.txt')) {
    return NextResponse.next();
  }

  // Extract subdomain if on rounakneema.in or localhost
  let subdomain = '';
  if (hostWithoutPort.endsWith('.rounakneema.in')) {
    subdomain = hostWithoutPort.replace('.rounakneema.in', '');
  } else if (hostWithoutPort.endsWith('.localhost')) {
    subdomain = hostWithoutPort.replace('.localhost', '');
  }

  // 301 Permanent Redirect: Consolidate www.<subdomain>.rounakneema.in to <subdomain>.rounakneema.in
  if (hostWithoutPort.startsWith('www.') && hostWithoutPort.endsWith('.rounakneema.in') && hostWithoutPort !== 'www.rounakneema.in') {
    const nonWwwHost = hostWithoutPort.replace(/^www\./, '');
    return NextResponse.redirect(`https://${nonWwwHost}${url.pathname}${url.search}`, 301);
  }

  // Strip 'www.' if someone explicitly typed it on a subdomain (e.g. localhost)
  if (subdomain.startsWith('www.')) {
    subdomain = subdomain.replace('www.', '');
  }

  // If accessed via a specific subdomain (e.g. revealr.rounakneema.in)
  if (subdomain && subdomain !== 'www') {
    // Support axiom-os alias mapped to axiomos
    const targetSubdomain = subdomain === 'axiom-os' ? 'axiomos' : subdomain;
    // Avoid double prefixing
    if (!url.pathname.startsWith(`/${targetSubdomain}`)) {
      url.pathname = `/${targetSubdomain}${url.pathname}`;
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


