import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { articles } from '../data/articles';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { ArrowLeft, User, Calendar, ExternalLink } from 'lucide-react';

export default function ArticleDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const article = articles.find(a => a.id === id || a.id === `review-${id}` || a.id.includes(id || ''));

  useEffect(() => {
    if (article) {
      document.title = `${article.title} - 机场搜`;
    }
  }, [article]);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 space-y-6 font-sans select-text">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={14} /> 返回博客列表
        </Link>
      </div>

      <article className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-10 text-slate-900 space-y-6">
        {/* Tags & Metadata */}
        <div className="space-y-3 border-b border-slate-100 pb-6">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((t, idx) => (
              <span key={idx} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                #{t}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1"><User size={12} /> 作者：{article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> 发布日期：{article.pubDate}</span>
          </div>
        </div>

        {/* CTA Top Banner */}
        <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-blue-900 font-medium">
            🚀 2026 高速 IPLC 专线节点大盘现已更新，点击查阅最新测评榜单！
          </div>
          <Link
            href="/ranking/best"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs whitespace-nowrap hover:bg-blue-700 transition-colors shadow-sm"
          >
            直达排行榜 →
          </Link>
        </div>

        {/* Main Text Content rendered by MarkdownRenderer */}
        <div className="py-2 text-slate-800 leading-relaxed text-sm">
          <MarkdownRenderer content={article.content} />
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
          <Link href="/airports" className="text-blue-600 font-semibold hover:underline">
            ← 查看机场数据库
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-colors shadow-sm"
          >
            返回博客
          </Link>
        </div>
      </article>
    </div>
  );
}

