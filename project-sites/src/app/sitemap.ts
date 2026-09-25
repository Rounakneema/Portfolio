import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { projects } from '@/lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  let subdomain = host.replace('.rounakneema.in', '').replace('.localhost:3000', '');

  if (subdomain.startsWith('www.')) {
    subdomain = subdomain.replace('www.', '');
  }

  const project = projects.find(p => p.slug === subdomain);
  const baseUrl = `https://${host}`;

  if (!project) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ];
  }

  // Define exact valid paths for each project to prevent GSC from indexing 404s
  const projectPaths: Record<string, string[]> = {
    'revealr': ['architecture', 'benchmarks', 'changelog', 'docs', 'security'],
    'metromind': ['architecture'],
    'axiom-os': ['architecture', 'decisions', 'docs'],
    'devcontext': ['architecture', 'decisions', 'docs'],
    'dizzy': ['architecture', 'decisions', 'docs'],
    'osa': ['architecture', 'decisions', 'docs'],
    'pipelineforge': ['architecture', 'decisions', 'docs'],
    'sortmail': ['architecture', 'decisions', 'docs']
  };

  const validPaths = projectPaths[subdomain] || [];

  const map: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ];

  validPaths.forEach(path => {
    map.push({
      url: `${baseUrl}/${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // llms.txt exists for all projects
  map.push({
    url: `${baseUrl}/llms.txt`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  });

  return map;
}
