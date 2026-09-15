export interface Recommendation {
  id: string;
  name: string;
  rating: number;
  speed: string;
  architecture: string;
  unlocks: string[];
  price: string;
  coupon: string;
  discount: string;
  badge?: string;
  url: string;
  description: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "sample-item-1",
    name: "示例服务卡片 A",
    rating: 9.9,
    speed: "极速体验",
    architecture: "现代云端架构",
    unlocks: ["高性能", "全天候响应", "安全加密"],
    price: "¥19.00 / 月 起",
    coupon: "SPECIAL2026",
    discount: "立享特惠折扣",
    badge: "👑 推荐服务商",
    url: "#",
    description: "这是翻新后的示例推荐卡片，您可以在 src/data/recommendations.ts 中随时修改或添加新的推荐项目。"
  },
  {
    id: "sample-item-2",
    name: "示例服务卡片 B",
    rating: 9.8,
    speed: "稳定高可用",
    architecture: "分布式边缘网络",
    unlocks: ["低延迟", "多节点冗余", "7x24 监控"],
    price: "¥29.00 / 月 起",
    coupon: "PRO2026",
    discount: "专属折扣",
    badge: "⚡ 高性价比",
    url: "#",
    description: "这是翻新后的示例推荐卡片 B，保持了完美的黑金/霓虹玻璃拟态 UI 布局。"
  }
];
