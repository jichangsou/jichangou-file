import type { Metadata } from 'next';
import React from 'react';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jichangsou.com'),
  title: {
    default: '2026机场推荐与机场搜索｜便宜稳定机场、IEPL/IPLC、VLESS、Clash、ChatGPT机场',
    template: '%s | 机场搜'
  },
  description: '机场搜提供中文机场搜索、机场推荐与机场评测，整理价格套餐、节点地区、IEPL/IPLC/BGP线路、VLESS/Trojan/Shadowsocks协议、Clash/Shadowrocket客户端，以及ChatGPT等AI与流媒体使用信息。',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://jichangsou.com',
    siteName: '机场搜',
    title: '2026机场推荐与机场搜索｜便宜稳定机场、IEPL/IPLC、VLESS、Clash、ChatGPT机场',
    description: '机场搜提供中文机场搜索、机场推荐与机场评测，整理价格套餐、节点地区、IEPL/IPLC/BGP线路、VLESS/Trojan/Shadowsocks协议、Clash/Shadowrocket客户端，以及ChatGPT等AI与流媒体使用信息。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
