import fs from 'fs';
import path from 'path';
import { articles } from './src/data/articles.js';

const postsDir = 'c:/Users/USER/Desktop/6.博客/posts';

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

articles.forEach(art => {
  const fileName = `${art.id}.md`;
  const filePath = path.join(postsDir, fileName);

  const frontmatter = `---
title: "${art.title.replace(/"/g, '\\"')}"
description: "${art.description.replace(/"/g, '\\"')}"
pubDate: "${art.pubDate}"
author: "${art.author}"
category: "${art.category}"
tags: ${JSON.stringify(art.tags)}
heroImage: "${art.heroImage}"
---

`;

  const mdContent = frontmatter + art.content.trim() + '\n';
  fs.writeFileSync(filePath, mdContent, 'utf8');
  console.log(`Exported markdown article -> ${fileName}`);
});

console.log(`All ${articles.length} articles successfully exported into posts/ directory as standalone .md files!`);
