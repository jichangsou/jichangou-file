import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jichangsou.com'),
  title: {
    default: '机场搜 - 中文机场搜索与数据平台',
    template: '%s | 机场搜'
  },
  description: '搜索机场资料、价格、节点、协议、客户端、AI与流媒体支持情况。',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://jichangsou.com',
    siteName: '机场搜',
    title: '机场搜 - 中文机场搜索与数据平台',
    description: '找机场，先搜一下。专注机场搜索、机场数据库、机场对比与选型。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="zh-CN">
      <body className="relative min-h-screen bg-dark text-cream font-suisse selection:bg-cyan-500 selection:text-white antialiased">
        {/* 1. Global Fixed Snow Mountain Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40 animate-fade-in"
          src="https://r2.motionsites.dev/motionsites/assets/f34ce20895ab.mp4"
        />

        {/* 2. Global Dark Overlay Tint */}
        <div className="fixed inset-0 bg-[#191C1F]/60 z-0 pointer-events-none" />

        {/* 3. Global Persistent Navbar */}
        <Navbar />

        {/* 4. Main Page View */}
        <main className="relative z-10 pb-16">
          {children}
        </main>

        {/* 5. Glass Footer */}
        <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 text-xs text-tan/60 font-suisse">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {currentYear} 机场搜 (jichangsou.com) • 机场数据库与选型搜索引擎. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-tan/80">
              <Link href="/" className="hover:text-cream transition-colors">首页</Link>
              <Link href="/airports" className="hover:text-cream transition-colors">机场大全</Link>
              <Link href="/ranking/best" className="hover:text-cream transition-colors">排行榜</Link>
              <Link href="/compare" className="hover:text-cream transition-colors">机场对比</Link>
              <Link href="/guides" className="hover:text-cream transition-colors">使用教程</Link>
              <Link href="/wiki" className="hover:text-cream transition-colors">网络百科</Link>
              <Link href="/admin" className="hover:text-cream transition-colors opacity-40">后台系统</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
