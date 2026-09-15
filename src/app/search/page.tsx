import React, { Suspense } from 'react';
import SearchPage from '@/views/SearchPage';

export const metadata = {
  title: '搜索结果 | 机场搜',
  description: '机场搜全量数据库实时检索结果。',
};

export default function SearchRoot() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-tan/50 text-xs">加载搜索结果中...</div>}>
      <SearchPage />
    </Suspense>
  );
}
