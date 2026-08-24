import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { articles, Article } from '../data/articles';
import { X, BookOpen, ArrowRight, User, Calendar } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import { Link } from 'react-router-dom';

interface ArticlesSectionProps {
  activeArticle: Article | null;
  setActiveArticle: (article: Article | null) => void;
  isSubPage?: boolean;
  filterCategory?: 'tutorial' | 'review';
}

export default function ArticlesSection({
  activeArticle,
  setActiveArticle,
  isSubPage = false,
  filterCategory
}: ArticlesSectionProps) {
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  const tutorialArticles = articles.filter(a => a.category === 'tutorial');
  const reviewArticles = articles.filter(a => a.category === 'review');

  const showTutorials = !filterCategory || filterCategory === 'tutorial';
  const showReviews = !filterCategory || filterCategory === 'review';

  const HeadingTag = isSubPage ? 'h1' : 'h2';

  return (
    <div id="tutorials" className="space-y-20 py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none">
      {/* 1. Sub-section A: Client & AI Tutorials */}
      {showTutorials && (
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2">
                CLIENT TUTORIALS & GUIDES
              </div>
              <HeadingTag className="font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight">
                🛠️ 客户端与 AI 配置教程
              </HeadingTag>
            </div>
            <p className="font-suisse text-xs sm:text-sm text-tan/70">
              新手必看：Clash Verge Rev、Sing-box 订阅导入与全平台 AI 客户端优化
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorialArticles.map(art => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {art.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-suisse text-[10px] px-2 py-0.5 rounded-full bg-black/80 text-cream font-medium border border-white/10"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between font-suisse text-[11px] text-tan/60 mb-2">
                      <span className="flex items-center gap-1">
                        <User size={12} /> {art.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {art.pubDate}
                      </span>
                    </div>

                    <h2 className="font-suisse text-base font-bold text-cream group-hover:text-tan transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h2>

                    <p className="font-suisse mt-2 text-xs text-cream/70 line-clamp-3 leading-relaxed">
                      {art.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between font-suisse">
                  <span className="text-xs font-medium text-cream group-hover:text-tan flex items-center gap-1.5">
                    <BookOpen size={14} /> 阅读全文教程
                  </span>
                  <ArrowRight size={14} className="text-cream group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. Sub-section B: Independent Airport Reviews */}
      {showReviews && (
        <section id="reviews" className={showTutorials ? "pt-10 border-t border-white/10" : ""}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2">
                AIRPORT INDEPENDENT REVIEWS
              </div>
              <HeadingTag className="font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight">
                机场测评文章
              </HeadingTag>
            </div>
            <p className="font-suisse text-xs sm:text-sm text-tan/70">
              全量收录 WgetCloud、隐形人、全球云、SSONE、赛博云等完整评测报告
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewArticles.map(art => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {art.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-suisse text-[10px] px-2 py-0.5 rounded-full bg-black/80 text-cream font-medium border border-white/10"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between font-suisse text-[11px] text-tan/60 mb-2">
                      <span className="flex items-center gap-1">
                        <User size={12} /> {art.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {art.pubDate}
                      </span>
                    </div>

                    <h2 className="font-suisse text-base font-bold text-cream group-hover:text-tan transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h2>

                    <p className="font-suisse mt-2 text-xs text-cream/70 line-clamp-3 leading-relaxed">
                      {art.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between font-suisse">
                  <span className="text-xs font-medium text-cream group-hover:text-tan flex items-center gap-1.5">
                    <BookOpen size={14} /> 阅读测评文章
                  </span>
                  <ArrowRight size={14} className="text-cream group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reader Modal (Rendered via React Portal directly onto document.body to 100% cover top screen & header) */}
      {activeArticle &&
        createPortal(
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveArticle(null);
            }}
            className="fixed inset-0 top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in select-text"
          >
            <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0C0F12] border border-white/15 rounded-[24px] shadow-2xl overflow-y-auto p-6 sm:p-10 text-cream space-y-6">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-cream hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              {/* Title & Metadata */}
              <div className="space-y-3 border-b border-white/10 pb-6 pr-10">
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((t, idx) => (
                    <span key={idx} className="font-suisse text-xs px-2.5 py-0.5 rounded-full bg-cream/10 border border-cream/20 text-cream font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <h2 className="font-stix text-2xl sm:text-4xl font-normal text-cream leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="font-suisse flex items-center gap-4 text-xs text-tan/60">
                  <span>作者：{activeArticle.author}</span>
                  <span>•</span>
                  <span>发布日期：{activeArticle.pubDate}</span>
                </div>
              </div>

              {/* CTA Top Banner */}
              <div className="p-4 rounded-xl bg-cream/10 border border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-suisse">
                <div className="text-xs text-cream font-medium">
                  🚀 2026 高速 IPLC 专线节点现已全面开放，输入优惠码立享折扣！
                </div>
                <Link
                  to="/category/popular"
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs whitespace-nowrap hover:opacity-90 transition-opacity"
                >
                  直达官方通道 →
                </Link>
              </div>

              {/* Main Text Content rendered by MarkdownRenderer */}
              <div className="py-2">
                <MarkdownRenderer content={activeArticle.content} />
              </div>

              {/* Bottom Modal Footer */}
              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-suisse">
                <Link to="/category/popular" onClick={() => setActiveArticle(null)} className="text-tan font-medium hover:underline">
                  ← 返回机场推荐
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold hover:bg-white transition-colors"
                >
                  关闭阅读器
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
