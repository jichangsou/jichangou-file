import fs from 'fs';

const filePath = 'c:/Users/USER/Desktop/6.博客/src/data/articles.ts';
let content = fs.readFileSync(filePath, 'utf8');

const airportList = [
  { id: 'twilight', name: '暮光加速' },
  { id: 'invisibles', name: '隐形人机场' },
  { id: 'laddercloud', name: '梯子云' },
  { id: 'flyv', name: 'FlyV 机场' },
  { id: 'lingmao', name: '灵猫网络' },
  { id: 'wgetcloud', name: 'WgetCloud (闪跃)' },
  { id: 'weifeng', name: '微风网络' },
  { id: 'firefly', name: 'Firefly 机场' },
  { id: 'kuajie', name: '跨界云' },
  { id: 'globalcloud', name: '全球云' },
  { id: 'ssone', name: 'SSONE 机场' },
  { id: 'saiboyun', name: '赛博云' },
  { id: 'langwang', name: '浪网' },
  { id: 'lingdongyun', name: '灵动云' },
  { id: 'wuyou', name: '无忧链接' },
  { id: 'degeyun', name: '大哥云' },
];

airportList.forEach(item => {
  const reviewId = `review-${item.id}`;
  const imgSection = `\n\n## 📊 2026 晚高峰 1000M 节点物理线路测速报告\n\n![2026 ${item.name} 晚高峰 Stair Speedtest 压测大盘](/speedtest/${item.id}_speedtest.jpg "2026 ${item.name} 晚高峰 Stair Speedtest 压测大盘")\n\n`;

  // Locate the article block
  const artStart = content.indexOf(`id: "${reviewId}"`);
  if (artStart !== -1) {
    const nextArtStart = content.indexOf('  {\n    id:', artStart + 10);
    const artEnd = nextArtStart !== -1 ? nextArtStart : content.length;
    let artBlock = content.substring(artStart, artEnd);

    // Remove any previous speedtest image injections to avoid duplication
    artBlock = artBlock.replace(/\n\n!\[2026 [^\]]+\]\(\/speedtest\/[^)]+\)\n\n/g, '\n\n');
    artBlock = artBlock.replace(/## 📊 2026 晚高峰 1000M 节点物理线路测速报告\n\n/g, '');

    // Insert after "一、平台概览与注册入口" or after the summary quote
    if (artBlock.includes('一、平台概览与注册入口')) {
      artBlock = artBlock.replace('一、平台概览与注册入口', `一、平台概览与注册入口${imgSection}`);
    } else if (artBlock.includes('---')) {
      artBlock = artBlock.replace('---', `---${imgSection}`);
    } else {
      artBlock = artBlock + imgSection;
    }

    content = content.substring(0, artStart) + artBlock + content.substring(artEnd);
    console.log(`Successfully injected speedtest section & image into ${item.name} (${reviewId})`);
  } else {
    console.log(`Warning: Could not find article ${reviewId}`);
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('All 16 review articles updated with dedicated Speedtest sections!');
