import fs from 'fs';

// 1. Clean markdown content from flyv.md
let rawMd = fs.readFileSync('C:\\Users\\USER\\Desktop\\博客制作文章资料\\各个机场的md文档\\flyv.md', 'utf8');
const cleanContent = rawMd.replace(/\[cite:\s*\d+\]/g, '');

// 2. Append to recommendations.ts
let recs = fs.readFileSync('X:\\src\\data\\recommendations.ts', 'utf8');

const newRecItem = `  {
    id: "flyv",
    name: "FlyV 机场",
    architecture: "IEPL 专线（游戏与流媒体双特化）",
    speed: "720-930 Mbps 实测",
    discount: "专属优惠码 fly20",
    coupon: "fly20",
    price: "¥25.00 / 150G 月",
    rating: 9.5,
    badge: "🔥 IEPL游戏与影音双特化专线",
    description: "FlyV 是一家深耕游戏加速与跨境专线的高性能机场。全线采用 IEPL 游戏与流媒体双特化专线，全节点 1x 计费且无限速、不限设备数，完美支持 4K/8K 影音与 ChatGPT 等 AI 工具。",
    unlocks: ["ChatGPT 4o", "Claude 3.5", "Netflix 4K", "Disney+", "Bilibili港澳台", "游戏低延迟"],
    url: "https://rtu23u5.flyvttt.sbs/#/?code=28mmffKv"
  },`;

recs = recs.replace('export const recommendations: RecommendationItem[] = [', 'export const recommendations: RecommendationItem[] = [\n' + newRecItem);
fs.writeFileSync('X:\\src\\data\\recommendations.ts', recs, 'utf8');
console.log('Added FlyV to recommendations.ts');

// 3. Append to articles.ts
let arts = fs.readFileSync('X:\\src\\data\\articles.ts', 'utf8');

const newArtItem = `  {
    id: "review-flyv",
    title: "[2026机场推荐] FlyV 机场深度评测：IEPL游戏与流媒体双特化专线晚高峰实测与配置指南",
    description: "FlyV 是一家深耕游戏加速与跨境专线的高性能机场。全线采用 IEPL 游戏与流媒体双特化专线，全节点 1x 计费且无限速、不限设备数。完美支持 4K/8K 影音与 ChatGPT 等 AI 工具。",
    category: "review",
    author: "资深测评师",
    pubDate: "2026-08-22",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    tags: ["FlyV机场", "IEPL专线", "游戏加速", "流媒体解锁"],
    content: \`${cleanContent.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
  },`;

arts = arts.replace('export const articles: Article[] = [', 'export const articles: Article[] = [\n' + newArtItem);
fs.writeFileSync('X:\\src\\data\\articles.ts', arts, 'utf8');
console.log('Added FlyV review article to articles.ts');
