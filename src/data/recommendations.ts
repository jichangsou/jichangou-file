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
    id: "twilight",
    name: "暮光加速 (Twilight Speed)",
    rating: 9.9,
    speed: "125 MB/s 峰值极速",
    architecture: "VLESS 协议大机房专线 + 全节点 FullCone",
    unlocks: ["ChatGPT 4o", "Claude 3.5", "YouTube 8K", "Netflix 4K", "Disney+"],
    price: "¥20.00 / 120G 月",
    coupon: "TWILIGHT2026",
    discount: "立享 8 折特惠",
    badge: "👑 2026综合测评排名第一",
    url: "https://twilight.net/#/register",
    description: "综合排名第一！由新加坡海外团队运营，VLESS 协议专线，绝大多数节点支持 FullCone UDP，香港主节点高达 20 个，延迟低速度强。"
  },
  {
    id: "invisibles",
    name: "隐形人机场 (Invisibles)",
    rating: 9.8,
    speed: "千兆无限速",
    architecture: "企业级 IEPL 纯专线 (1倍率)",
    unlocks: ["ChatGPT 4o", "Claude", "GitHub Copilot", "Prime Video", "BBC iPlayer"],
    price: "¥24.00 / 144G 月",
    coupon: "INVIS2026",
    discount: "立享 88 折",
    badge: "🥈 排名第二 • 企业级IEPL纯专线",
    url: "https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso",
    description: "综合排名第二！运营约2年，主打全节点 1 倍率扣费与企业级 IEPL 专线，常规套餐不限设备并发，晚高峰速度极其凶悍。"
  },
  {
    id: "laddercloud",
    name: "梯子云 (LadderCloud)",
    rating: 9.7,
    speed: "2 Gbps+ 专线",
    architecture: "VLESS + 企业级 IEPL 专线",
    unlocks: ["ChatGPT", "Claude", "Netflix 4K", "Disney+", "自研客户端"],
    price: "¥25.00 / 125G 月",
    coupon: "LADDER88",
    discount: "一键全自动连接",
    badge: "🥉 排名第三 • 全平台自研客户端",
    url: "https://asfeoasf.ladderttt.sbs/#/?code=rhKeiJTM",
    description: "综合排名第三！提供全平台自研一键登录客户端，免配置零门槛使用，配备企业级 IEPL 专线与 60+ 节点。"
  },
  {
    id: "wgetcloud",
    name: "WgetCloud (原 GaCloud / 闪跃)",
    rating: 9.6,
    speed: "10000 Mbps 级专线",
    architecture: "BGP 入口 + 亚马逊 Global Accelerator 专线",
    unlocks: ["ChatGPT", "Claude 3.5", "Netflix 4K", "Disney+", "8K 油管秒开"],
    price: "¥79.00 / 月 起",
    coupon: "WGET85",
    discount: "新用户 85 折",
    badge: "⭐ 5年老牌高端品牌",
    url: "https://invite.wgetcloud.ltd/auth/register?code=1i8Pgu",
    description: "老牌顶级机场，采用 BGP + 亚马逊跨境内网专线，延迟极低，稳定性 99.99%，全平台 Trojan 协议支持。"
  },
  {
    id: "lingmao",
    name: "灵猫网络 (Spirit Cat)",
    rating: 9.6,
    speed: "IPLC 全专线",
    architecture: "IPLC 专线 (全节点 1倍率)",
    unlocks: ["ChatGPT", "Gemini", "TikTok", "YouTube 4K", "Netflix"],
    price: "¥25.00 / 150G 月",
    coupon: "SPIRIT2026",
    discount: "全节点 1倍率",
    badge: "⚡ 2026海外团队IPLC",
    url: "https://edp01.civetaff.com/#/?code=8n0vbtUD",
    description: "2026年上线，主打全节点 1 倍率 IPLC 专线，不限设备连接数与客户端使用，解锁主流 4K 影音与 AI 工具。"
  },
  {
    id: "weifeng",
    name: "微风网络 (Breeze Net)",
    rating: 9.5,
    speed: "50 MB/s 实测",
    architecture: "IEPL / IPLC 专线 + BGP 中继",
    unlocks: ["Netflix", "Disney+", "ChatGPT", "Shadowsocks", "Vmess"],
    price: "¥27.00 / 200G 月",
    coupon: "weifeng90",
    discount: "限时 9 折",
    badge: "💰 高性价比门槛低",
    url: "https://wep01.breezenetaff.com/#/?code=JHqHSog8",
    description: "提供约 61 个节点，采用 IEPL/IPLC 专线与 BGP 中继，延迟约 42ms，丢包率仅 0.1%，优惠码 weifeng90。"
  },
  {
    id: "firefly",
    name: "Firefly 机场",
    rating: 9.5,
    speed: "IPLC 极速专线",
    architecture: "IPLC 专线 + VLESS 协议",
    unlocks: ["ChatGPT", "Gemini", "Claude", "Grok", "Netflix 4K"],
    price: "¥25.00 / 150G 月",
    coupon: "FIREFLY2026",
    discount: "不限设备数",
    badge: "🔥 2026老牌团队新开",
    url: "https://vip02.fireflyaff.com/#/?code=QvtWcNbI",
    description: "由海外老牌团队运营，IPLC 专线配合 VLESS 协议，提供原生 IP，不限制客户端与设备连接数。"
  },
  {
    id: "kuajie",
    name: "跨界云 (Crossover)",
    rating: 9.4,
    speed: "全专线链路",
    architecture: "全专线升级链路 + Vless 协议",
    unlocks: ["YouTube 4K", "Netflix", "Disney+", "Vless 50节点"],
    price: "¥20.00 / 120G 月",
    coupon: "KUACROSS2026",
    discount: "月付 20 起",
    badge: "🌐 50条Vless全专线",
    url: "https://vip02.kuajieaff.com/#/?code=kTdpCGi9",
    description: "2026年开业，全专线链路升级，提供约 50 条 Vless 节点，覆盖美、日、台、港、新，解锁主流流媒体。"
  },
  {
    id: "globalcloud",
    name: "全球云 (Global Cloud)",
    rating: 9.5,
    speed: "3 Gbps+ 总带宽",
    architecture: "IPLC / IEPL 专线 + 智能负载均衡",
    unlocks: ["ChatGPT", "Claude", "Netflix 4K", "Disney+", "TikTok"],
    price: "¥20.00 / 120G 月",
    coupon: "GLOBAL2026",
    discount: "限时 9 折",
    badge: "⚡ 70+节点超广覆盖",
    url: "https://vnjg4ckga.quanqiugttt1.club/#/?code=NKII9ZkH",
    description: "覆盖全球 70+ 热门及冷门节点，基于新一代 VLESS 协议，三网入口优化，超高性价比。"
  },
  {
    id: "ssone",
    name: "SSONE 机场",
    rating: 9.4,
    speed: "500 Mbps 冗余",
    architecture: "BGP 隧道中转",
    unlocks: ["ChatGPT", "Netflix 4K", "Disney+", "YouTube 8K", "TikTok"],
    price: "¥10.00 / 60G 月",
    coupon: "SSONEVIP",
    discount: "免费试用 1天",
    badge: "🎁 10元入门极佳体验",
    url: "https://m.ssone.io/#/register?code=GeTpX1Qx",
    description: "主打极佳性价比，提供 1天 1G 免费试用，BGP 隧道中转，支持 SS / V2Ray / Trojan 多协议。"
  },
  {
    id: "saiboyun",
    name: "赛博云 (Saiboyun)",
    rating: 9.3,
    speed: "最高 1000 M",
    architecture: "CN2 / CMIN2 / 4837 高端专线",
    unlocks: ["油管8K秒开", "Netflix", "Disney+", "ChatGPT", "冷门节点"],
    price: "¥3.00 / 100G 月",
    coupon: "SAIBO2026",
    discount: "月付 3 元起",
    badge: "💰 超高性价比之王",
    url: "https://saiboyun.pages.dev/",
    description: "月付仅需 3 元！拥有 CN2/CMIN2/4837 高端专线，覆盖南极洲、乌克兰、埃及等冷门地区节点。"
  },
  {
    id: "langwang",
    name: "浪网 (LangWang)",
    rating: 9.3,
    speed: "千兆 BGP 专线",
    architecture: "VLESS 协议 + 专线出口",
    unlocks: ["ChatGPT", "Claude", "Netflix", "Disney+", "独立 IP"],
    price: "¥30.00 / 150G 月",
    coupon: "LANGWANG85",
    discount: "支持独立IP",
    badge: "🌐 VLESS全节点1倍率",
    url: "https://yinxing4.wavenetaff.com/#/?code=XMK38sdf",
    description: "全节点统一 1 倍率扣费，提供自研客户端与独立 IP 定制，非常适合 AI 大模型及高清视频使用。"
  },
  {
    id: "lingdongyun",
    name: "灵动云 (LingDongYun)",
    rating: 9.2,
    speed: "500 M 高峰冗余",
    architecture: "Trojan 协议专线",
    unlocks: ["ChatGPT", "YouTube 4K", "Netflix", "Disney+", "不限时包"],
    price: "¥20.00 / 100G 月",
    coupon: "LINGDONG88",
    discount: "支持不限时买断",
    badge: "📦 灵动买断流量包",
    url: "https://yinxing4.lingdongaff.com/#/?code=mW96wgI4",
    description: "采用 Trojan 协议专线，提供 70G/年及一次性不限时流量包，适合高低频备用需求。"
  },
  {
    id: "wuyou",
    name: "无忧链接 (WUYOU LINK)",
    rating: 9.0,
    speed: "不限制速率",
    architecture: "BGP 多路智能中转",
    unlocks: ["ChatGPT", "Gemini", "Netflix", "Disney+", "HBO / Hulu"],
    price: "¥12.92 / 100G 月",
    coupon: "WORRYFREE",
    discount: "月付 12 元起",
    badge: "✨ 不限客户端不限制",
    url: "https://lsitel.worryfreettt.homes/#/?code=SaSZbwak",
    description: "运营约1年，不限制客户端与设备使用，支持全部主流代理工具，拥有买断制一次性 100G 流量包。"
  },
  {
    id: "degeyun",
    name: "大哥云 (DeGeYun)",
    rating: 9.0,
    speed: "高速 Trojan",
    architecture: "BGP 专线中转",
    unlocks: ["ChatGPT", "Netflix", "Disney+", "台湾/日本原生IP"],
    price: "¥19.00 / 100G 月",
    coupon: "DEGEVIP",
    discount: "支持年付优惠",
    badge: "👍 老牌稳定口碑商",
    url: "https://a03.dgy02.com/#/register?code=X8MBmftq",
    description: "老牌稳定加速服务，Trojan 协议，台湾、日本、新加坡原生 IP 表现极佳，解锁体验稳定。"
  }
];
