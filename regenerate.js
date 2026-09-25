const fs = require('fs');
const path = require('path');

const projects = [
    { name: 'revealr', title: 'Revealr', url: 'https://revealr.rounakneema.in', desc: 'High-Speed Go Network Scanner & Vulnerability Mapping Tool.' },
    { name: 'osa', title: 'OSA', url: 'https://osa.rounakneema.in', desc: 'Offline Security Auditor for Air-Gapped Environments. Zero-dependency Go binary. Real-time log ingestion, historical forensic analysis, Z-score anomaly detection, Markov-chain behavioral analysis.' },
    { name: 'metromind', title: 'MetroMind', url: 'https://metromind.rounakneema.in', desc: 'Enterprise AI Document Intelligence Platform.' },
    { name: 'pipelineforge', title: 'PipelineForge', url: 'https://pipelineforge.rounakneema.in', desc: 'GitOps DevSecOps CI/CD Pipeline Automation. Multi-stage Docker builds, Kubernetes HPA, Trivy scanning, 99.3% container size reduction.' },
    { name: 'sortmail', title: 'SortMail', url: 'https://sortmail.rounakneema.in', desc: 'AI Operating Layer for Professional Email. Executive email briefings, summarization, deadline extraction, smart replies, no third-party data persistence.' },
    { name: 'devcontext', title: 'Klarity', url: 'https://devcontext.rounakneema.in', desc: 'AI Repository Intelligence for Technical Recruiting. Evaluates candidates using evidence-grounded AI analysis, Amazon Bedrock, Claude, and repository tokenization.' },
    { name: 'axiom-os', title: 'AXIOM OS', url: 'https://axiom-os.rounakneema.in', desc: 'Local-First Personal AI Operating System. Local memory, Ollama inference, goal alignment, policy-driven interventions, zero-cloud architecture.' },
    { name: 'dizzy', title: 'Dizzy', url: 'https://dizzy.rounakneema.in', desc: 'Voice-to-Figma AI Interface Builder. Semantic design state, voice-driven UI generation, Figma MCP agent integration.' }
];

for (const p of projects) {
    const dir = path.join('project-sites/src/app', p.name, 'llms.txt');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const others = projects.filter(o => o.name !== p.name).sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let relatedStr = others.map(o => `- ${o.title}: ${o.url}`).join('\n');
    
    let content = `import { NextResponse } from 'next/server';

export async function GET() {
  const content = \`# ${p.title}

> ${p.desc}

## Overview
${p.title} is a technical project developed by Rounak Neema.
- Official Domain: ${p.url}
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/${p.name}

## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
${relatedStr}
\`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
`;
    
    fs.writeFileSync(path.join(dir, 'route.ts'), content, 'utf8');
}
