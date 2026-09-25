import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Klarity

> AI Repository Intelligence for Technical Recruiting. Evaluates candidates using evidence-grounded AI analysis, Amazon Bedrock, Claude, and repository tokenization.

## Overview
Klarity is a technical project developed by Rounak Neema.
- Official Domain: https://devcontext.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/devcontext

## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- PipelineForge: https://pipelineforge.rounakneema.in
- Dizzy: https://dizzy.rounakneema.in
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
