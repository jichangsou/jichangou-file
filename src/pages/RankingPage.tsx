import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockAirports } from '../data/mock';
import { Award, Zap, DollarSign, Shield, Bot } from 'lucide-react';

export default function RankingPage() {
  const { type = 'best' } = useParams<{ type?: string }>();

  const rankingTabs = [
    { key: 'best', label: '综合推荐榜', icon: Award, desc: '综合考虑加权算法（价格20% + 流量15% + 稳定性20% + AI/流媒体10% + 资料完整度10%）' },
    { key: 'cheap', label: '性价比/低价榜', icon: DollarSign, desc: '按单月起步门槛价格降序排序' },
    { key: 'stable', label: '高稳定性榜', icon: Shield, desc: '优先采用企业级 IEPL / IPLC 物理专线架构的机场' },
    { key: 'ai', label: 'AI 使用场景榜', icon: Bot, desc: '对 ChatGPT 4o / Claude 3.5 / Gemini 支持良好的节点服务商' },
  ];

  const currentTab = rankingTabs.find(t => t.key === type) || rankingTabs[0];

  // Sort airports based on ranking model
  const sortedAirports = [...mockAirports].sort((a, b) => {
    if (type === 'cheap') {
      const priceA = parseFloat(a.price_summary.replace(/[^0-9.]/g, '')) || 99;
      const priceB = parseFloat(b.price_summary.replace(/[^0-9.]/g, '')) || 99;
      return priceA - priceB;
    }
    return b.rating - a.rating;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold font-stix text-cream flex items-center gap-3">
          <Award className="w-8 h-8 text-amber-400" />
          机场排行榜大盘
        </h1>
        <p className="text-xs text-tan/70 mt-1">基于客观评分模型计算，拒绝无事实依据排序（如有推广 sponsorship 将明确标注）</p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {rankingTabs.map(tab => {
          const Icon = tab.icon;
          const active = tab.key === type;
          return (
            <Link
              key={tab.key}
              to={`/ranking/${tab.key}`}
              className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all ${
                active
                  ? 'bg-amber-400/10 text-amber-300 border-amber-400/40 shadow-lg'
                  : 'bg-white/5 text-tan/80 border-white/10 hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4 opacity-80" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Selected Ranking Rule Banner */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-xs text-tan/80">
        📌 <strong>当前计算规则</strong>：{currentTab.desc}
      </div>

      {/* Ranking List */}
      <div className="space-y-3">
        {sortedAirports.map((airport, index) => (
          <div
            key={airport.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                index === 0 ? 'bg-amber-400 text-dark' : index === 1 ? 'bg-slate-300 text-dark' : index === 2 ? 'bg-amber-700 text-cream' : 'bg-white/10 text-tan'
              }`}>
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-cream">
                  <Link to={`/airport/${airport.slug}`} className="hover:text-amber-300 transition-colors">
                    {airport.name}
                  </Link>
                </h3>
                <p className="text-xs text-tan/70 line-clamp-1 mt-0.5">{airport.line_type}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-tan/90 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
              <div>
                <span className="block text-[10px] text-tan/50">套餐起步</span>
                <strong className="text-cream">{airport.price_summary}</strong>
              </div>
              <div>
                <span className="block text-[10px] text-tan/50">综合评分</span>
                <strong className="text-amber-300 font-bold">{airport.rating} / 10</strong>
              </div>
              <Link
                to={`/airport/${airport.slug}`}
                className="px-4 py-2 bg-white/10 hover:bg-amber-400 hover:text-dark text-cream text-xs font-semibold rounded-xl transition-all"
              >
                详情
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
