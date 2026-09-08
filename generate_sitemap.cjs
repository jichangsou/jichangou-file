const fs = require('fs');
const path = require('path');
const jiti = require('jiti')(__filename);

const { articles } = jiti('./src/data/articles.ts');

const baseUrl = 'https://jichangsou.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define static routes
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/category/popular', priority: '0.9', changefreq: 'daily' },
  { url: '/category/monitor', priority: '0.9', changefreq: 'daily' },
  { url: '/category/client-tutorials', priority: '0.8', changefreq: 'weekly' },
  { url: '/category/independent-reviews', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.5', changefreq: 'monthly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages (standard & hash routes for crawler safety)
staticPages.forEach(page => {
  xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  if (page.url !== '/') {
    xml += `  <url>
    <loc>${baseUrl}/#${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  }
});

// Add all articles dynamically from articles.ts
articles.forEach(art => {
  const pubDate = art.pubDate || currentDate;
  // Standard path route
  xml += `  <url>
    <loc>${baseUrl}/article/${art.id}</loc>
    <lastmod>${pubDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  // Hash route for SPA fallback
  xml += `  <url>
    <loc>${baseUrl}/#/article/${art.id}</loc>
    <lastmod>${pubDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

xml += `</urlset>`;

// Write sitemap.xml to public/ and dist/
const publicSitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(publicSitemapPath, xml, 'utf8');

// Write sitemap-index.xml
let indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>
`;
const publicSitemapIndexPath = path.join(__dirname, 'public', 'sitemap-index.xml');
fs.writeFileSync(publicSitemapIndexPath, indexXml, 'utf8');

console.log('Successfully generated sitemap.xml and sitemap-index.xml in public/!');
