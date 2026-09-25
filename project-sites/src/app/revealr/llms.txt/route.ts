import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Revealr

> High-Speed Go Network Scanner & Vulnerability Mapping Tool.

## Overview
Revealr is a technical project developed by Rounak Neema.
- Official Domain: https://revealr.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/revealr

## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- SortMail: https://sortmail.rounakneema.in
- PipelineForge: https://pipelineforge.rounakneema.in
- MetroMind: https://metromind.rounakneema.in
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
