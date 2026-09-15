import React from 'react';
import Link from 'next/link';
import { mockCompareItems, mockAirports } from '../data/mock';
import { GitCompare } from 'lucide-react';

interface ComparePageProps {
  slug?: string;
}

export default function ComparePage({ slug }: ComparePageProps) {
  const activeCompare = mockCompareItems.find(c => c.slug === slug) || mockCompareItems[0];

  const airport1 = mockAirports.find(a => a.id === activeCompare.airport1_id) || mockAirports[0];
  const airport2 = mockAirports.find(a => a.id === activeCompare.airport2_id) || mockAirports[1];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold font-stix text-cream flex items-center gap-3">
          <GitCompare className="w-8 h-8 text-cyan-400" />
          机场对比与客观评测
        </h1>
        <p className="text-xs text-tan/70 mt-1">对比两家机场在价格、流量、专线线路架构与稳定性上的客观差异</p>
      </div>

      {/* Compare Items Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {mockCompareItems.map(item => (
          <Link
            key={item.id}
            href={`/compare/${item.slug}`}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              item.slug === activeCompare.slug
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-lg'
                : 'bg-white/5 text-tan/80 border-white/10 hover:bg-white/10'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-cream font-stix">{activeCompare.title}</h2>
        <p className="text-xs text-tan/90 leading-relaxed border-l-2 border-cyan-400 pl-3">
          {activeCompare.summary}
        </p>

        {/* Side-by-side comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-cream">
                <th className="py-3 px-4">对比维度</th>
                <th className="py-3 px-4 font-bold text-cyan-300">{airport1.name}</th>
                <th className="py-3 px-4 font-bold text-blue-300">{airport2.name}</th>
              </tr>
            </thead>
            <tbody className="text-tan/90 divide-y divide-white/5">
              <tr>
                <td className="py-3 px-4 font-semibold text-cream">综合评分</td>
                <td className="py-3 px-4 text-amber-300 font-bold">{airport1.rating} / 10</td>
                <td className="py-3 px-4 text-amber-300 font-bold">{airport2.rating} / 10</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-cream">起步价格</td>
                <td className="py-3 px-4">{airport1.price_summary}</td>
                <td className="py-3 px-4">{airport2.price_summary}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-cream">核心线路架构</td>
                <td className="py-3 px-4">{airport1.line_type}</td>
                <td className="py-3 px-4">{airport2.line_type}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-cream">流量配置</td>
                <td className="py-3 px-4">{airport1.traffic_summary}</td>
                <td className="py-3 px-4">{airport2.traffic_summary}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-cream">数据最后检查时间</td>
                <td className="py-3 px-4 opacity-70">{airport1.last_checked}</td>
                <td className="py-3 px-4 opacity-70">{airport2.last_checked}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Automated Objective Conclusion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-tan/60 text-[11px]">适合价格与起步门槛敏感用户：</span>
            <div className="font-bold text-cyan-300 text-sm">{activeCompare.recommendation.price_sensitive}</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-tan/60 text-[11px]">适合高吞吐流量需求用户：</span>
            <div className="font-bold text-blue-300 text-sm">{activeCompare.recommendation.traffic_demanding}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
