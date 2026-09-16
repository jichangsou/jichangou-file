import React, { Suspense } from 'react';
import AirportsPage from '@/views/AirportsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '机场大全 (全量数据库与高级筛选)',
  description: '整理机场服务资料，包括线路、价格、流量与最近记录时间。按价格、协议、地区高级筛选。',
  alternates: {
    canonical: 'https://jichangsou.com/airports',
  },
  openGraph: {
    title: '机场大全 (全量数据库与高级筛选)',
    description: '整理机场服务资料，包括线路、价格、流量与最近记录时间。按价格、协议、地区高级筛选。',
    url: 'https://jichangsou.com/airports',
  },
};

export default function Airports() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12 text-center text-xs text-slate-400 font-mono">加载数据库筛选...</div>}>
      <AirportsPage />
    </Suspense>
  );
}
