import { MetadataRoute } from 'next';
import { mockAirports, mockArticles } from '@/data/mock';
import { articles as blogArticles } from '@/data/articles';
import { TOPIC_CONFIGS } from '@/data/topics';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jichangsou.com';
  const currentDate = '2026-09-16';

  // 1. Static Pages & Topic Index
  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/airports', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/ranking', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/ranking/best', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/cheap', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/stable', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/ranking/ai', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/updates', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/topics', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/guides', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/wiki', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map(item => ({
    url: `${baseUrl}${item.route}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 1b. Topic Detail Routes (8 Topics)
  const topicRoutes = Object.keys(TOPIC_CONFIGS).map(slug => ({
    url: `${baseUrl}/topics/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }));

  // 2. Airport Detail Routes
  const airportRoutes = mockAirports.map(airport => ({
    url: `${baseUrl}/airport/${airport.slug}`,
    lastModified: airport.last_checked || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Guide Detail Routes
  const guideRoutes = mockArticles
    .filter(a => a.type === 'guide')
    .map(guide => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: guide.updated_at || guide.created_at || currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // 4. Wiki Detail Routes
  const wikiRoutes = mockArticles
    .filter(a => a.type === 'wiki')
    .map(wiki => ({
      url: `${baseUrl}/wiki/${wiki.slug}`,
      lastModified: wiki.updated_at || wiki.created_at || currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // 5. Blog Detail Routes
  const blogRoutes = blogArticles.map(blog => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: blog.pubDate || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...topicRoutes,
    ...airportRoutes,
    ...guideRoutes,
    ...wikiRoutes,
    ...blogRoutes,
  ];
}
