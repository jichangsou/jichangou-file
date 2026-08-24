import fs from 'fs';

// 1. RecommendationsSection.tsx
let rec = fs.readFileSync('X:\\src\\components\\RecommendationsSection.tsx', 'utf8');
rec = rec.replace(/热门节点推荐榜单/g, '机场推荐');
fs.writeFileSync('X:\\src\\components\\RecommendationsSection.tsx', rec, 'utf8');
console.log('Updated RecommendationsSection.tsx');

// 2. Hero.tsx
let hero = fs.readFileSync('X:\\src\\components\\Hero.tsx', 'utf8');
hero = hero.replace(/🔥 热门推荐/g, '🔥 机场推荐');
hero.replace(/热门推荐/g, '机场推荐');
fs.writeFileSync('X:\\src\\components\\Hero.tsx', hero, 'utf8');
console.log('Updated Hero.tsx');

// 3. PopularPage.tsx
let pop = fs.readFileSync('X:\\src\\pages\\PopularPage.tsx', 'utf8');
pop = pop.replace(/热门节点推荐榜单/g, '机场推荐');
fs.writeFileSync('X:\\src\\pages\\PopularPage.tsx', pop, 'utf8');
console.log('Updated PopularPage.tsx');

// 4. App.tsx
let app = fs.readFileSync('X:\\src\\App.tsx', 'utf8');
app = app.replace(/>热门推荐</g, '>机场推荐<');
fs.writeFileSync('X:\\src\\App.tsx', app, 'utf8');
console.log('Updated App.tsx');

// 5. ArticlesSection.tsx
let artSec = fs.readFileSync('X:\\src\\components\\ArticlesSection.tsx', 'utf8');
artSec = artSec.replace(/返回热门推荐节点榜单/g, '返回机场推荐');
fs.writeFileSync('X:\\src\\components\\ArticlesSection.tsx', artSec, 'utf8');
console.log('Updated ArticlesSection.tsx');

// 6. ArticleDetailPage.tsx
let artDet = fs.readFileSync('X:\\src\\pages\\ArticleDetailPage.tsx', 'utf8');
artDet = artDet.replace(/返回热门推荐节点榜单/g, '返回机场推荐');
fs.writeFileSync('X:\\src\\pages\\ArticleDetailPage.tsx', artDet, 'utf8');
console.log('Updated ArticleDetailPage.tsx');
