const fs = require('fs');
const path = require('path');
const jiti = require('jiti')(__filename);

const { recommendations } = jiti('./src/data/recommendations.ts');

const repoDir = path.join(__dirname, 'jichangtuijian_repo');

if (!fs.existsSync(repoDir)) {
  fs.mkdirSync(repoDir, { recursive: true });
}

let md = `# 🚀 2026 优质机场推荐与网络节点测评大盘 (机场搜 • 选型指南)

> **[机场搜 (jichangsou.com)](https://jichangsou.com)** 是一家专注于网络加速技术研究与网络节点实时测评的独立技术团队。我们利用自动化探针与 24 小时监控体系，持续追踪各类网络加速服务商（IEPL/IPLC/VLESS/Trojan 专线）的丢包率、延迟、晚高峰实际带宽及 ChatGPT 4o / Claude 3.5 / Netflix 4K 解锁表现。

---

## 🏆 2026 机场综合测评排行榜 TOP 15 汇总大盘

| 排名 | 机场名称 | 综合评分 | 核心线路架构 | 晚高峰实测速度 | 基础套餐价格 | 专属优惠码 | 直达注册入口 |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: | :---: |
`;

recommendations.forEach((rec, index) => {
  const rankBadge = index === 0 ? '👑 TOP 1' : index === 1 ? '🥈 TOP 2' : index === 2 ? '🥉 TOP 3' : `TOP ${index + 1}`;
  md += `| **${rankBadge}** | **[${rec.name}](#${rec.id})** | **${rec.rating}** | ${rec.architecture} | ${rec.speed} | \`${rec.price}\` | \`${rec.coupon}\` | [👉 直达注册](${rec.url}) |\n`;
});

md += `\n---\n\n## 📊 15 家优质机场深度评测与详细说明\n\n`;

recommendations.forEach((rec, index) => {
  md += `### ${index + 1}. <a id="${rec.id}"></a>${rec.name}\n\n`;
  md += `- **综合评分**：\`${rec.rating} / 10\` (${rec.badge || '推荐服务商'})\n`;
  md += `- **线路架构**：${rec.architecture}\n`;
  md += `- **晚高峰带宽**：${rec.speed}\n`;
  md += `- **解锁支持**：${rec.unlocks.map(u => `\`${u}\``).join(', ')}\n`;
  md += `- **套餐门槛**：${rec.price}\n`;
  md += `- **专属优惠码**：\`${rec.coupon}\` (${rec.discount})\n`;
  md += `- **直达注册链接**：[点击进入 ${rec.name} 官网注册入口](${rec.url})\n\n`;
  md += `> **详细评测**：${rec.description}\n\n`;
  md += `---\n\n`;
});

md += `## 🛠️ 常见选型问题解答 (FAQ)

### Q1: 什么是 IEPL / IPLC 专线？为什么推荐专线机场？
- **IPLC/IEPL** 是点对点跨国企业级物理专线，不经过公网 GFW 审查节点，具有**零丢包、超低延迟、晚高峰绝不拥堵**的天然优势，特别适合高清 4K/8K 视频播放与在线游戏特化。

### Q2: 选购机场时如何防范跑路风险？
- 建议优先选择运营时间长（2年以上）、节点倍率真实透明（主推 1倍率）、支持月付的优质品牌。避免一次性购买多年长周期套餐。

---

## ⚖️ 免责与合规声明

「机场搜」仅做客观网络线路测评与工程选型学术探讨。请使用者严格遵守当地法律法规，切勿利用网络技术从事任何违法违规活动。

`;

fs.writeFileSync(path.join(repoDir, 'README.md'), md, 'utf8');
console.log('Successfully generated jichangtuijian_repo/README.md!');
