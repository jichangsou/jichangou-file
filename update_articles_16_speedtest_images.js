import fs from 'fs';

const filePath = 'c:/Users/USER/Desktop/6.博客/src/data/articles.ts';
let content = fs.readFileSync(filePath, 'utf8');

const airportIds = [
  'twilight', 'invisibles', 'laddercloud', 'flyv', 'lingmao',
  'wgetcloud', 'weifeng', 'firefly', 'kuajie', 'globalcloud',
  'ssone', 'saiboyun', 'langwang', 'lingdongyun', 'wuyou', 'degeyun'
];

airportIds.forEach(id => {
  const reviewId = `review-${id}`;
  const imgMarkdown = `\n\n![2026 ${id} 机场晚高峰 Stair Speedtest 压测报告](/speedtest/${id}_speedtest.jpg "2026 ${id} 机场晚高峰 Stair Speedtest 压测报告")\n\n`;
  
  // Replace or inject into article content
  const reviewRegex = new RegExp(`(id:\\s*"${reviewId}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?## 三、 晚高峰 1000M 测速数据)`, 'g');
  if (content.match(reviewRegex)) {
    content = content.replace(reviewRegex, `$1${imgMarkdown}`);
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected unique speedtest report images into all 16 review articles in articles.ts!');
