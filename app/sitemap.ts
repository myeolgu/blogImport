import type { MetadataRoute } from 'next';
import { tools } from './tools';

const siteUrl = 'https://toolscout.juyeop198.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...tools.map((tool) => ({ url: `${siteUrl}/tools/${tool.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 })),
  ];
}
