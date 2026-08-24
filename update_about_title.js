import fs from 'fs';

// 1. Navbar.tsx
let nav = fs.readFileSync('X:\\src\\components\\Navbar.tsx', 'utf8');
nav = nav.replace(/⚖️ 免责声明/g, '⚖️ 关于我们');
fs.writeFileSync('X:\\src\\components\\Navbar.tsx', nav, 'utf8');
console.log('Updated Navbar.tsx');

// 2. DisclaimerSection.tsx
let discSec = fs.readFileSync('X:\\src\\components\\DisclaimerSection.tsx', 'utf8');
discSec = discSec.replace(/定位声明与合规说明/g, '关于我们');
fs.writeFileSync('X:\\src\\components\\DisclaimerSection.tsx', discSec, 'utf8');
console.log('Updated DisclaimerSection.tsx');

// 3. DisclaimerPage.tsx
let discPage = fs.readFileSync('X:\\src\\pages\\DisclaimerPage.tsx', 'utf8');
discPage = discPage.replace(/免责声明与合规说明/g, '关于我们');
fs.writeFileSync('X:\\src\\pages\\DisclaimerPage.tsx', discPage, 'utf8');
console.log('Updated DisclaimerPage.tsx');

// 4. App.tsx
let app = fs.readFileSync('X:\\src\\App.tsx', 'utf8');
app = app.replace(/>免责声明</g, '>关于我们<');
fs.writeFileSync('X:\\src\\App.tsx', app, 'utf8');
console.log('Updated App.tsx');

// 5. Hero.tsx
let hero = fs.readFileSync('X:\\src\\components\\Hero.tsx', 'utf8');
hero = hero.replace(/免责声明/g, '关于我们');
fs.writeFileSync('X:\\src\\components\\Hero.tsx', hero, 'utf8');
console.log('Updated Hero.tsx');
