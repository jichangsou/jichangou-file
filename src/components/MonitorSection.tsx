import React from 'react';
import { recommendations } from '../data/recommendations';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MonitorSectionProps {
  onOpenArticle: (airportId: string) => void;
  isSubPage?: boolean;
}

export default function MonitorSection({ onOpenArticle, isSubPage = false }: MonitorSectionProps) {
  const HeadingTag = isSubPage ? 'h1' : 'h2';

  return (
    <section id="monitor" className="py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium">
          24/7 AUTOMATED MONITORING & STAIR SPEEDTEST REPORT
        </div>
        <HeadingTag className="font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight">
          机场节点大盘
        </HeadingTag>
        <p className="font-suisse text-xs sm:text-sm text-tan/70">
          依据线路架构 (25%)、晚高峰丢包 (25%)、AI/流媒体解锁 (20%)、性价比 (15%)、在线率 (15%) 综合评测。
        </p>
      </div>

      {/* SEO Optimised Speedtest Report Showcase */}
      <div className="bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[24px] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="border-b border-white/10 pb-4">
          <h3 className="font-suisse text-lg font-bold text-cream">
            📊 2026 最新 MiaoKo / Stair Speedtest 全节点测速报告
          </h3>
          <p className="font-suisse text-xs text-tan/70 mt-1">
            包含各大机场物理线路的 TLS RTT 延迟、HTTPS 响应时间、平均/最高吞吐吞吐量及 UDP 类型测试
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/15 shadow-xl">
              <img
                src="/speedtest/top_airports_speedtest.jpg"
                alt="2026 TOP顶级机场物理专线Stair Speedtest压测报告大图（包含暮光加速、隐形人机场、梯子云等全节点延迟与吞吐数据）"
                title="TOP 顶级机场测速大盘 - 暮光加速 / 隐形人 / 梯子云"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="font-suisse text-xs text-cream/80 text-center">
              图 1：TOP 顶级专线机场测速报告（暮光加速、隐形人、梯子云）
            </figcaption>
          </div>

          <div className="space-y-3">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/15 shadow-xl">
              <img
                src="/speedtest/mid_airports_speedtest.jpg"
                alt="2026 IPLC/IEPL高性价比机场Stair Speedtest压测报告大图（包含FlyV机场、灵猫网络、WgetCloud闪跃、微风网络等全节点实测）"
                title="高性价比 IPLC/IEPL 机场测速大盘 - FlyV / 灵猫网络 / WgetCloud / 微风网络"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="font-suisse text-xs text-cream/80 text-center">
              图 2：高性价比 IPLC/IEPL 机场测速报告（FlyV、灵猫网络、WgetCloud、微风网络）
            </figcaption>
          </div>
        </div>
      </div>

      {/* Table for Desktop */}
      <div className="hidden md:block overflow-x-auto bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[20px] shadow-2xl">
        <table className="w-full text-left border-collapse text-xs font-suisse">
          <thead>
            <tr className="bg-title-bar text-cream font-medium border-b border-white/10">
              <th className="p-4">节点名称</th>
              <th className="p-4">线路架构</th>
              <th className="p-4">带宽与延迟</th>
              <th className="p-4">AI / 流媒体解锁</th>
              <th className="p-4">优惠码 / 价格</th>
              <th className="p-4 text-right">操作通道</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {recommendations.map(item => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-cream">
                  {item.name}
                  {item.badge && (
                    <span className="block text-[10px] text-amber-400 font-normal mt-0.5">{item.badge}</span>
                  )}
                </td>
                <td className="p-4 text-cream/80 font-medium">
                  {item.architecture}
                </td>
                <td className="p-4 text-cream/80">
                  {item.speed}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {item.unlocks.slice(0, 3).map((u, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cream/90 text-[10px]">
                        {u}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <code className="text-tan font-mono font-bold block">{item.coupon}</code>
                  <span className="text-[10px] text-tan/60">{item.price}</span>
                </td>
                <td className="p-4 text-right whitespace-nowrap">
                  <div className="inline-flex items-center gap-2 justify-end">
                    <Link
                      to={`/article/review-${item.id}`}
                      onClick={() => onOpenArticle(item.id)}
                      className="px-3 py-1.5 rounded-xl bg-cream/10 border border-cream/20 text-cream hover:bg-cream/20 text-xs font-medium transition-colors flex items-center gap-1 font-suisse"
                    >
                      <BookOpen size={12} />
                      测评
                    </Link>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-cream text-dark-blue hover:opacity-90 font-bold text-xs inline-block transition-opacity font-suisse"
                    >
                      直达通道
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards List for Mobile */}
      <div className="md:hidden space-y-4">
        {recommendations.map(item => (
          <div
            key={item.id}
            className="p-5 rounded-[20px] bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 space-y-3 font-suisse"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-cream text-base">{item.name}</h2>
            </div>
            <div className="text-xs text-tan/70 space-y-1">
              <p><strong>线路架构：</strong>{item.architecture}</p>
              <p><strong>带宽速度：</strong>{item.speed}</p>
              <p><strong>优惠码：</strong><code className="text-tan font-mono font-bold">{item.coupon}</code> ({item.discount})</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 gap-2 font-suisse">
              <span className="text-xs text-cream font-bold">{item.price}</span>
              <div className="flex items-center gap-2">
                <Link
                  to={`/article/review-${item.id}`}
                  onClick={() => onOpenArticle(item.id)}
                  className="px-3 py-2 rounded-xl bg-cream/10 border border-cream/20 text-cream text-xs font-medium flex items-center gap-1"
                >
                  <BookOpen size={12} /> 查看测评
                </Link>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs"
                >
                  直达官网 →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
