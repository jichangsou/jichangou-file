import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { mockAirports, mockArticles } from '../data/mock';
import { Search as SearchIcon, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q') || '';

  const cleanQ = q.trim().toLowerCase();

  // Search Airports by name, aliases, slug, website, description
  const matchedAirports = mockAirports.filter(a =>
    a.name.toLowerCase().includes(cleanQ) ||
    a.aliases.some(alias => alias.toLowerCase().includes(cleanQ)) ||
    a.slug.toLowerCase().includes(cleanQ) ||
    a.website.toLowerCase().includes(cleanQ) ||
    a.description.toLowerCase().includes(cleanQ) ||
    a.line_type.toLowerCase().includes(cleanQ)
  );

  // Search Articles / Guides / Wiki
  const matchedArticles = mockArticles.filter(art =>
    art.title.toLowerCase().includes(cleanQ) ||
    art.summary.toLowerCase().includes(cleanQ) ||
    art.tags.some(t => t.toLowerCase().includes(cleanQ))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-bold font-stix text-cream flex items-center gap-3">
          <SearchIcon className="w-7 h-7 text-cyan-400" />
          搜索结果: “{q}”
        </h1>
        <p className="text-xs text-tan/70 mt-1">
          共为您检索到 <strong className="text-cyan-400">{matchedAirports.length}</strong> 个相关机场，以及 <strong className="text-cyan-400">{matchedArticles.length}</strong> 篇相关教程/百科
        </p>
      </div>

      {/* Matched Airports Section */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-cream flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          匹配机场库数据
        </h2>
        {matchedAirports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedAirports.map(airport => (
              <div
                key={airport.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-cream">
                      <Link to={`/airport/${airport.slug}`} className="hover:text-cyan-400 transition-colors">
                        {airport.name}
                      </Link>
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      评分 {airport.rating}
                    </span>
                  </div>
                  <p className="text-xs text-tan/70 line-clamp-2 mt-2 leading-relaxed">
                    {airport.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-tan/80">
                  <div className="flex justify-between">
                    <span>起步价格：<strong className="text-cream">{airport.price_summary}</strong></span>
                    <span>流量套内：<strong className="text-cream">{airport.traffic_summary}</strong></span>
                  </div>
                  <div className="flex justify-between text-[11px] opacity-80">
                    <span>架构：{airport.line_type}</span>
                    <span>检查日期：{airport.last_checked}</span>
                  </div>
                </div>

                <Link
                  to={`/airport/${airport.slug}`}
                  className="w-full py-2 bg-white/10 hover:bg-cyan-500 hover:text-white text-center text-xs font-semibold rounded-xl text-cream transition-all border border-white/10"
                >
                  查看机场资料
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-xs text-tan/50">
            未检索到匹配名称或别名的机场。
          </div>
        )}
      </div>

      {/* Matched Articles Section */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <h2 className="text-base font-bold text-cream flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          匹配教程与百科
        </h2>
        {matchedArticles.length > 0 ? (
          <div className="space-y-3">
            {matchedArticles.map(art => (
              <Link
                key={art.id}
                to={art.type === 'guide' ? `/guides/${art.slug}` : `/wiki/${art.slug}`}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all block text-xs space-y-1"
              >
                <div className="font-bold text-cream text-sm">{art.title}</div>
                <div className="text-tan/70 line-clamp-2">{art.summary}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-xs text-tan/50">
            未检索到相关的教程与百科。
          </div>
        )}
      </div>
    </div>
  );
}
