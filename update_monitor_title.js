import fs from 'fs';

// 1. Navbar.tsx
let nav = fs.readFileSync('X:\\src\\components\\Navbar.tsx', 'utf8');
nav = nav.replace(/📊 5维大盘/g, '📊 机场节点大盘');
fs.writeFileSync('X:\\src\\components\\Navbar.tsx', nav, 'utf8');
console.log('Updated Navbar.tsx');

// 2. MonitorSection.tsx
let monSec = fs.readFileSync('X:\\src\\components\\MonitorSection.tsx', 'utf8');
monSec = monSec.replace(/网络节点 5 维加权打分大盘/g, '机场节点大盘');
fs.writeFileSync('X:\\src\\components\\MonitorSection.tsx', monSec, 'utf8');
console.log('Updated MonitorSection.tsx');

// 3. MonitorPage.tsx
let monPage = fs.readFileSync('X:\\src\\pages\\MonitorPage.tsx', 'utf8');
monPage = monPage.replace(/网络节点 5 维加权打分大盘/g, '机场节点大盘');
fs.writeFileSync('X:\\src\\pages\\MonitorPage.tsx', monPage, 'utf8');
console.log('Updated MonitorPage.tsx');

// 4. Hero.tsx
let hero = fs.readFileSync('X:\\src\\components\\Hero.tsx', 'utf8');
hero = hero.replace(/查看 5 维打分大盘/g, '查看机场节点大盘');
fs.writeFileSync('X:\\src\\components\\Hero.tsx', hero, 'utf8');
console.log('Updated Hero.tsx');

// 5. App.tsx
let app = fs.readFileSync('X:\\src\\App.tsx', 'utf8');
app = app.replace(/5维大盘/g, '机场节点大盘');
fs.writeFileSync('X:\\src\\App.tsx', app, 'utf8');
console.log('Updated App.tsx');
