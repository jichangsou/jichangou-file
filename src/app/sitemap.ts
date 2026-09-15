import { MetadataRoute } from 'next';
import { mockAirports } from '@/data/mock';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jichangsou.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    '',
    '/airports',
    '/ranking',
    '/compare',
    '/guides',
    '/wiki',
    '/blog',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const airportRoutes = mockAirports.map(airport => ({
    url: `${baseUrl}/airport/${airport.slug}`,
    lastModified: airport.last_checked || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...airportRoutes];
}
