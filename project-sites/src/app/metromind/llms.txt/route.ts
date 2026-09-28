import { NextResponse } from 'next/server';
import { getProjectBySlug } from '@/lib/projects';

export async function GET() {
  const project = getProjectBySlug('metromind');
  
  if (!project) {
    return new NextResponse('Project not found', { status: 404 });
  }

  const content = `# ${project.title}

> ${project.subtitle}

## Overview
${project.fullDescription}

- [Official Domain](https://revealr.rounakneema.in)
- [Author: Rounak Neema](https://rounakneema.in)
- [Source Repository](https://github.com/Rounakneema)

## Architecture & Features
${project.solution}

### Key Capabilities
${project.bullets.map(b => `- **${b.label}**: ${b.text}`).join('\n')}

### Technologies Used
${project.tech.join(', ')}

### System Metrics
${project.metrics.map(m => `- **${m.label}**: ${m.value}`).join('\n')}

## Author & Related Projects
- [Author: Rounak Neema](https://rounakneema.in)
- [GitHub Profile](https://github.com/rounakneema)
- [LinkedIn Profile](https://linkedin.com/in/Rnks23)

### Also By Rounak Neema
- [SortMail - AI Email Layer](https://sortmail.rounakneema.in)
- [PipelineForge - DevSecOps](https://pipelineforge.rounakneema.in)
- [MetroMind - Document AI](https://metromind.rounakneema.in)
- [AXIOM OS - Local AI](https://axiom-os.rounakneema.in)
- [OSA - Security Analytics](https://osa.rounakneema.in)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

