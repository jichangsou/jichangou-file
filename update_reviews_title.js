import fs from 'fs';

// 1. Navbar.tsx
let nav = fs.readFileSync('X:\\src\\components\\Navbar.tsx', 'utf8');
nav = nav.replace(/🔍 深度测评/g, '🔍 机场测评文章');
fs.writeFileSync('X:\\src\\components\\Navbar.tsx', nav, 'utf8');
console.log('Updated Navbar.tsx');

// 2. ArticlesSection.tsx
let artSec = fs.readFileSync('X:\\src\\components\\ArticlesSection.tsx', 'utf8');
artSec = artSec.replace(/🔍 机场独立深度测评/g, '机场测评文章');
artSec = artSec.replace(/阅读全文测评/g, '阅读测评文章');
fs.writeFileSync('X:\\src\\components\\ArticlesSection.tsx', artSec, 'utf8');
console.log('Updated ArticlesSection.tsx');

// 3. ReviewsPage.tsx
let revPage = fs.readFileSync('X:\\src\\pages\\ReviewsPage.tsx', 'utf8');
revPage = revPage.replace(/🔍 机场独立深度测评/g, '机场测评文章');
fs.writeFileSync('X:\\src\\pages\\ReviewsPage.tsx', revPage, 'utf8');
console.log('Updated ReviewsPage.tsx');

// 4. Hero.tsx (if any link remaining)
let hero = fs.readFileSync('X:\\src\\components\\Hero.tsx', 'utf8');
hero = hero.replace(/深度测评/g, '机场测评文章');
fs.writeFileSync('X:\\src\\components\\Hero.tsx', hero, 'utf8');
console.log('Updated Hero.tsx');
