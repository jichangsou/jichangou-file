export interface Article {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  tags: string[];
  heroImage: string;
  category: 'tutorial' | 'review';
  content: string;
}

export const articles: Article[] = [
  {
    id: "welcome-to-new-blog",
    title: "欢迎来到全新设计的个人技术博客与数据大盘",
    description: "本博客已全面翻新，保留了全套现代极简暗黑冰雪视觉系统、玻璃拟态卡片与响应式 Markdown 引擎，现已开启全新内容创作之旅。",
    category: "tutorial",
    author: "站长",
    pubDate: "2026-09-15",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    tags: ["博客翻新", "UI设计", "极简风", "Jamstack"],
    content: `# 欢迎来到全新设计的个人技术博客与数据大盘

## 🌟 博客翻新与设计风格保留说明

欢迎来到全新翻新后的独立博客！本站点继承了高端极简的暗黑冰雪视觉设计风格，全量整合了现代 Web 开发的最佳实践。

### 🎨 核心 UI 设计亮点

- **雪山动态视频背景**：配合 19% 磨砂遮罩与高透玻璃拟态 (Glassmorphic) 容器。
- **自定义 Markdown 渲染引擎**：原生支持深色代码块、自动标题层级适配、自定义 Callout 提示框与响应式卡片。
- **全平台响应式适配**：完美兼容 PC 桌面端、平板与移动端单列卡片展现。

---

## 💻 代码块排版效果展示

\`\`\`typescript
// 示例 TypeScript 配置代码
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  title: "我的技术博客",
  description: "记录技术思考与优雅代码",
  url: "https://jichangsou.com"
};
\`\`\`

---

## 🛠️ 下一步创作计划

1. **持续输出技术干货**：涵盖前端架构、网络工程与全栈开发。
2. **知识库归档**：建立结构化的技术指南与教程索引。
`
  },
  {
    id: "modern-web-development-2026",
    title: "2026 现代 Web 前端开发与极速部署架构思考",
    description: "探讨从 React 18 / Vite 6 到 Cloudflare 边缘 CDN 的现代网页性能优化实践，全方位提升首屏加载速度与用户体验。",
    category: "tutorial",
    author: "站长",
    pubDate: "2026-09-15",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    tags: ["前端架构", "Vite", "React", "性能优化"],
    content: `# 2026 现代 Web 前端开发与极速部署架构思考

## 🚀 性能优化的核心维度

在构建现代化高颜值 Web 站点时，性能与美学的平衡至关重要：

### 1. 静态资产构建与打包
- **Vite 6 极速摇树优化 (Tree-shaking)**：大幅精简最终 bundle 体积。
- **图片与矢量 SVG 压缩**：采用高保真矢量格式替代大体积位图。

### 2. 边缘网络分发 (Edge CDN)
- **Cloudflare Pages 全球加速**：实现毫秒级边缘响应与静态资产缓存。
- **SEO & GEO 双向索引**：提供规范的 sitemap.xml 与搜索引擎元数据支持。
`
  }
];
