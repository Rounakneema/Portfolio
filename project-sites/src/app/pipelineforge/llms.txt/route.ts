import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# PipelineForge

> GitOps DevSecOps CI/CD Pipeline Automation. Multi-stage Docker builds, Kubernetes HPA, Trivy scanning, 99.3% container size reduction.

## Overview
PipelineForge is a technical project developed by Rounak Neema.
- Official Domain: https://pipelineforge.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/pipelineforge

## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- Dizzy: https://dizzy.rounakneema.in
- AXIOM OS: https://axiom-os.rounakneema.in
- Klarity: https://devcontext.rounakneema.in
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
