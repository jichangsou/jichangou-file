import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/design-lab/'],
    },
    sitemap: 'https://jichangsou.com/sitemap.xml',
  };
}
