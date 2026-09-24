import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || 'rounakneema.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${host}/sitemap.xml`,
  };
}
