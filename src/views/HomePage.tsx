import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import DisclaimerSection from '../components/DisclaimerSection';
import { mockAirports, mockArticles } from '../data/mock';
import { Star, Clock, BookOpen, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const topAirports = mockAirports.slice(0, 4);
  const recentAirports = [...mockAirports].sort((a, b) => b.last_checked.localeCompare(a.last_checked)).slice(0, 4);
  const guides = mockArticles.filter(a => a.type === 'guide').slice(0, 3);
  const wikis = mockArticles.filter(a => a.type === 'wiki').slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Hero 第一屏强搜索区域 */}
      <Hero />

      <div className="max-w-6xl mx-auto px-4 space-y-12 sm:space-y-16">
        
        {/* 2. 热门机场 */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl font-bold font-stix text-cream flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              热门机场推荐
            </h2>
            <Link href="/airports" className="text-xs text-cyan-400 hover:underline flex items-center gap-1">
              查看机场大全 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topAirports.map((airport) => (
              <div
                key={airport.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-cream">
                    <Link href={`/airport/${airport.slug}`} className="hover:text-cyan-400 transition-colors">
                      {airport.name}
                    </Link>
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    评分 {airport.rating}
                  </span>
                </div>

                <p className="text-xs text-tan/70 line-clamp-2 leading-relaxed">
                  {airport.description}
                </p>

                <div className="flex items-center justify-between text-xs text-tan/80 pt-2 border-t border-white/5">
                  <span>{airport.price_summary}</span>
                  <span>{airport.traffic_summary}</span>
                  <Link href={`/airport/${airport.slug}`} className="text-cyan-400 font-semibold hover:underline">
                    详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 最新更新 */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl font-bold font-stix text-cream flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              最新更新与核对
            </h2>
            <Link href="/airports" className="text-xs text-cyan-400 hover:underline">
              完整列表 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentAirports.map(airport => (
              <Link
                key={airport.id}
                href={`/airport/${airport.slug}`}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all block space-y-2"
              >
                <div className="font-bold text-cream text-sm">{airport.name}</div>
                <div className="text-[11px] text-tan/60">{airport.line_type}</div>
                <div className="text-[10px] text-cyan-400 font-mono pt-1">核对时间: {airport.last_checked}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. 排行榜大盘卡片 */}
        <section className="bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold">加权打分模型</span>
            <h2 className="text-2xl font-bold font-stix text-cream">2026 机场排行榜大盘</h2>
            <p className="text-xs text-tan/80 max-w-xl">
              结合价格 (20%) + 流量 (15%) + 线路稳定性 (20%) + AI/流媒体支持 (10%) + 资料完整度 (10%) 算出的可解释客观得分。
            </p>
          </div>
          <Link
            href="/ranking/best"
            className="px-6 py-3 bg-amber-400 text-dark font-bold text-xs rounded-xl hover:bg-amber-300 transition-all shrink-0 shadow-lg"
          >
            查看榜单详情 →
          </Link>
        </section>

        {/* 5. 使用教程 & 网络百科 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 使用教程 */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold font-stix text-cream flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                最新使用教程
              </h2>
              <Link href="/guides" className="text-xs text-cyan-400 hover:underline">更多 →</Link>
            </div>
            <div className="space-y-3">
              {guides.map(g => (
                <Link key={g.id} href={`/guides/${g.slug}`} className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl block text-xs space-y-1">
                  <div className="font-bold text-cream">{g.title}</div>
                  <div className="text-tan/60 line-clamp-1">{g.summary}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* 网络百科 */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold font-stix text-cream flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                网络知识百科
              </h2>
              <Link href="/wiki" className="text-xs text-purple-400 hover:underline">更多 →</Link>
            </div>
            <div className="space-y-3">
              {wikis.map(w => (
                <Link key={w.id} href={`/wiki/${w.slug}`} className="p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl block text-xs space-y-1">
                  <div className="font-bold text-cream">{w.title}</div>
                  <div className="text-tan/60 line-clamp-1">{w.summary}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* 6. 网站说明 */}
        <DisclaimerSection />
      </div>
    </div>
  );
}
