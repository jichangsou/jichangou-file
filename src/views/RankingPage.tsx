import React from 'react';
import Link from 'next/link';
import { mockAirports } from '../data/mock';
import { Award, DollarSign, Shield, Bot, ArrowRight } from 'lucide-react';

interface RankingPageProps {
  type?: string;
}

export default function RankingPage({ type = 'best' }: RankingPageProps) {
  const rankingTabs = [
    { key: 'best', label: '综合推荐榜', icon: Award, desc: '按全站收录顺序与状态展示机场列表' },
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
    return 0;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          <span>Ranking Index</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          机场排行榜大盘
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          机场数据与资料排序大盘（按价格、线路架构及支持协议浏览）
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {rankingTabs.map(tab => {
          const Icon = tab.icon;
          const active = tab.key === type;
          return (
            <Link
              key={tab.key}
              href={`/ranking/${tab.key}`}
              className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all ${
                active
                  ? 'bg-amber-50/90 text-amber-900 border-amber-300 shadow-sm font-bold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-amber-700' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Selected Ranking Rule Banner */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-2">
        <span className="font-bold shrink-0">📌 分类说明：</span>
        <span>{currentTab.desc}</span>
      </div>

      {/* Ranking List */}
      <div className="space-y-3">
        {sortedAirports.map((airport, index) => (
          <div
            key={airport.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-amber-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                index === 0 ? 'bg-amber-500 text-slate-950 font-black' : index === 1 ? 'bg-slate-400 text-white font-bold' : index === 2 ? 'bg-amber-700 text-white font-bold' : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  <Link href={`/airport/${airport.slug}`} className="hover:text-amber-700 transition-colors">
                    {airport.name}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-mono">{airport.line_type}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-slate-700 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
              <div>
                <span className="block text-[10px] text-slate-400 font-mono">套餐起步</span>
                <strong className="text-slate-900 font-bold">{airport.price_summary}</strong>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-mono">最近复核</span>
                <strong className="text-slate-700 font-bold">{airport.last_checked || airport.updated_at}</strong>
              </div>
              <Link
                href={`/airport/${airport.slug}`}
                className="px-4 py-2 bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
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

