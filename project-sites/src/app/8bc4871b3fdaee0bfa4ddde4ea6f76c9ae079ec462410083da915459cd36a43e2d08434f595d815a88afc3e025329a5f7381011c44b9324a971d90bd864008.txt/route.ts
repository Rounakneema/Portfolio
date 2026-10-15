import { NextResponse } from 'next/server';

const KEY = '8bc4871b3fdaee0bfa4ddde4ea6f76c9ae079ec462410083da915459cd36a43e2d08434f595d815a88afc3e025329a5f7381011c44b9324a971d90bd864008';

export async function GET() {
  return new NextResponse(KEY, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  });
}
