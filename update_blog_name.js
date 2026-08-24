import fs from 'fs';

// 1. index.html
let html = fs.readFileSync('X:\\index.html', 'utf8');
html = html.replace('<title>Apogee</title>', '<title>机场搜 • 2026 科学上网与机场节点深度测评指南</title>');
fs.writeFileSync('X:\\index.html', html, 'utf8');
console.log('Updated index.html');

// 2. App.tsx
let app = fs.readFileSync('X:\\src\\App.tsx', 'utf8');
app = app.replace('© {currentYear} Apogee •', '© {currentYear} 机场搜 •');
fs.writeFileSync('X:\\src\\App.tsx', app, 'utf8');
console.log('Updated App.tsx');

// 3. Hero.tsx
let hero = fs.readFileSync('X:\\src\\components\\Hero.tsx', 'utf8');
hero = hero.replace('Apogee', '机场搜');
fs.writeFileSync('X:\\src\\components\\Hero.tsx', hero, 'utf8');
console.log('Updated Hero.tsx');

// 4. Dashboard.tsx
let dash = fs.readFileSync('X:\\src\\components\\Dashboard.tsx', 'utf8');
dash = dash.replace('apogee.ai', 'jichangsou.com');
fs.writeFileSync('X:\\src\\components\\Dashboard.tsx', dash, 'utf8');
console.log('Updated Dashboard.tsx');
