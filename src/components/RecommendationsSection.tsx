import React, { useState } from 'react';
import { recommendations } from '../data/recommendations';
import { ArrowRight, Copy, Check, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecommendationsSectionProps {
  onOpenArticle: (airportId: string) => void;
  isSubPage?: boolean;
}

export default function RecommendationsSection({ onOpenArticle, isSubPage = false }: RecommendationsSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (coupon: string, id: string) => {
    try {
      await navigator.clipboard.writeText(coupon);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const HeadingTag = isSubPage ? 'h1' : 'h2';

  return (
    <section id="popular" className="py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2">
            HOT RECOMMENDATIONS
          </div>
          <HeadingTag className="font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight">
            机场推荐
          </HeadingTag>
        </div>
        <p className="font-suisse text-xs sm:text-sm text-tan/70 max-w-xs">
          包含专属折扣优惠码，点击按钮即可一键复制、查看深度测评或直达官网
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map(item => (
          <div
            key={item.id}
            className="relative bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] p-6 shadow-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            {item.badge && (
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500/90 to-rose-500/90 text-cream text-[10px] font-bold font-suisse px-3 py-1 rounded-full border border-white/20 shadow-lg">
                {item.badge}
              </div>
            )}

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-suisse text-lg font-bold text-cream group-hover:text-tan transition-colors">
                    {item.name}
                  </h2>
                  <p className="font-suisse text-xs text-tan/70 mt-1">
                    {item.architecture} • {item.speed}
                  </p>
                </div>

                {/* Score */}
                <div className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl bg-cream/10 border border-cream/20 text-cream shrink-0">
                  <span className="font-suisse text-[9px] text-tan/70 font-medium uppercase">评分</span>
                  <span className="font-suisse text-base font-bold leading-none mt-0.5">{item.rating}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-suisse text-xs text-cream/80 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Unlocks */}
              <div className="mb-6">
                <span className="font-suisse text-[10px] font-medium text-tan/60 block mb-2 uppercase tracking-wider">
                  解锁与支持服务：
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.unlocks.map((u, idx) => (
                    <span
                      key={idx}
                      className="font-suisse text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cream/90 font-medium"
                    >
                      ✓ {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Coupon Box */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-dashed border-tan/30">
                <div>
                  <span className="font-suisse text-[10px] text-tan/60 block">专属优惠码 ({item.discount})</span>
                  <code className="font-mono font-bold text-sm text-tan">{item.coupon}</code>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(item.coupon, item.id)}
                  className="px-3 py-1.5 text-xs font-medium font-suisse rounded-lg bg-cream text-dark-blue hover:bg-white transition-colors flex items-center gap-1"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={12} /> 已复制
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> 复制
                    </>
                  )}
                </button>
              </div>

              {/* Price & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-suisse text-[10px] text-tan/60">套餐价格</span>
                  <div className="font-suisse text-sm sm:text-base font-bold text-cream">
                    {item.price}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/article/review-${item.id}`}
                    onClick={() => onOpenArticle(item.id)}
                    className="px-3 py-2 rounded-xl bg-cream/10 border border-cream/20 text-cream hover:bg-cream/20 font-medium text-xs flex items-center gap-1.5 transition-all font-suisse shrink-0"
                  >
                    <BookOpen size={13} />
                    查看测评
                  </Link>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs flex items-center gap-1 hover:bg-white transition-all shadow-lg hover:shadow-cream/10 font-suisse whitespace-nowrap shrink-0"
                  >
                    直达官网 <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
