"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { mockAirports, mockArticles } from '../data/mock';
import { Search as SearchIcon, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <SearchIcon className="w-4 h-4" />
          <span>Search Engine Query</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          搜索结果: “{q}”
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          共为您检索到 <strong className="text-blue-600 font-mono font-bold">{matchedAirports.length}</strong> 个相关机场，以及 <strong className="text-blue-600 font-mono font-bold">{matchedArticles.length}</strong> 篇相关教程/百科
        </p>
      </div>

      {/* Matched Airports Section */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600" />
          匹配机场库数据
        </h2>
        {matchedAirports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedAirports.map(airport => (
              <div
                key={airport.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      <Link href={`/airport/${airport.slug}`}>
                        {airport.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {airport.description}
                  </p>
                </div>

                <div className="space-y-2 bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span>起步价格：<strong className="text-slate-900 font-bold">{airport.price_summary}</strong></span>
                    <span>流量容量：<strong className="text-slate-900 font-bold">{airport.traffic_summary}</strong></span>
                  </div>
                  <div className="flex justify-between text-[11px] pt-1.5 border-t border-slate-200/60 text-slate-500">
                    <span>架构：{airport.line_type}</span>
                    <span className="font-mono">{airport.last_checked}</span>
                  </div>
                </div>

                <Link
                  href={`/airport/${airport.slug}`}
                  className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-center text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 group"
                >
                  <span>查看机场资料</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
            未检索到匹配名称、别名或协议特性的机场。
          </div>
        )}
      </div>

      {/* Matched Articles Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          匹配教程与百科
        </h2>
        {matchedArticles.length > 0 ? (
          <div className="space-y-3">
            {matchedArticles.map(art => (
              <Link
                key={art.id}
                href={art.type === 'guide' ? `/guides/${art.slug}` : `/wiki/${art.slug}`}
                className="p-4 bg-white hover:bg-slate-50/80 border border-slate-200 rounded-xl transition-all block text-xs space-y-1 shadow-sm group"
              >
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm flex items-center justify-between">
                  <span>{art.title}</span>
                  <span className="text-[10px] font-mono text-slate-400 font-normal">{art.type === 'guide' ? '教程' : '百科'}</span>
                </div>
                <div className="text-slate-600 line-clamp-2">{art.summary}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-500">
            未检索到相关的教程与百科。
          </div>
        )}
      </div>
    </div>
  );
}

