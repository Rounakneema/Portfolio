import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# MetroMind

> Enterprise AI Document Intelligence Platform.

## Overview
MetroMind is a technical project developed by Rounak Neema.
- Official Domain: https://metromind.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/metromind

## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- AXIOM OS: https://axiom-os.rounakneema.in
- Dizzy: https://dizzy.rounakneema.in
- Revealr: https://revealr.rounakneema.in
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
