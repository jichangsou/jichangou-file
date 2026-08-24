import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { ArrowLeft, User, Calendar } from 'lucide-react';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id || a.id === `review-${id}` || a.id.includes(id || '')) || articles[0];

  useEffect(() => {
    if (article) {
      document.title = `${article.title} - 机场搜`;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-5 text-center font-suisse">
        <h1 className="text-2xl text-cream font-bold mb-4">未找到相关测评文章</h1>
        <Link to="/" className="text-tan hover:underline">← 返回首页</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-5 sm:px-8 select-text">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-suisse text-tan hover:text-cream transition-colors"
        >
          <ArrowLeft size={14} /> 返回首页
        </Link>
      </div>

      <article className="bg-[#0C0F12] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-10 text-cream space-y-6">
        {/* Tags & Metadata */}
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((t, idx) => (
              <span key={idx} className="font-suisse text-xs px-2.5 py-0.5 rounded-full bg-cream/10 border border-cream/20 text-cream font-medium">
                #{t}
              </span>
            ))}
          </div>

          {/* Single H1 Tag for Article Detail Page */}
          <h1 className="font-stix text-2xl sm:text-4xl font-normal text-cream leading-tight">
            {article.title}
          </h1>

          <div className="font-suisse flex items-center gap-4 text-xs text-tan/60">
            <span className="flex items-center gap-1"><User size={12} /> 作者：{article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> 发布日期：{article.pubDate}</span>
          </div>
        </div>

        {/* CTA Top Banner */}
        <div className="p-4 rounded-xl bg-cream/10 border border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-suisse">
          <div className="text-xs text-cream font-medium">
            🚀 2026 高速 IPLC 专线节点现已全面开放，输入优惠码立享折扣！
          </div>
          <Link
            to="/category/popular"
            className="px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            直达官方通道 →
          </Link>
        </div>

        {/* Main Text Content rendered by MarkdownRenderer */}
        <div className="py-2">
          <MarkdownRenderer content={article.content} />
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-suisse">
          <Link to="/category/popular" className="text-tan font-medium hover:underline">
            ← 返回机场推荐
          </Link>
          <Link
            to="/"
            className="px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold hover:bg-white transition-colors"
          >
            返回首页
          </Link>
        </div>
      </article>
    </div>
  );
}
