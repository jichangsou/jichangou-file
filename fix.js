import fs from 'fs';
let c = fs.readFileSync('X:\\src\\data\\articles.ts', 'utf8');
c = c.replace(/author:\s*"极速[^"]*>/g, 'author: "极速测评编辑部",\n    tags: ["机场推荐", "梯子推荐", "IEPL专线", "网络协议", "Clash", "Sing-box", "流媒体解锁", "ChatGPT"],\n    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",\n    content: `>');
fs.writeFileSync('X:\\src\\data\\articles.ts', c, 'utf8');
console.log('DONE FIXING ARTICLES.TS');
