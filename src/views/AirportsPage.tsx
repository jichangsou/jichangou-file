"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { mockAirports } from '../data/mock';
import { Search, Layers } from 'lucide-react';

export default function AirportsPage() {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredAirports = mockAirports.filter(a =>
    a.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    a.line_type.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-stix text-cream flex items-center gap-3">
            <Layers className="w-8 h-8 text-cyan-400" />
            机场大全 (全量数据库)
          </h1>
          <p className="text-xs text-tan/70 mt-1">收录客观透明的机场服务商，支持多维度检索与状态核查</p>
        </div>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="筛选机场..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-cream focus:outline-none focus:border-cyan-400"
          />
          <Search className="w-3.5 h-3.5 text-tan/50 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Airport Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAirports.map((airport) => (
          <div
            key={airport.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-cream flex items-center gap-2">
                  <Link href={`/airport/${airport.slug}`} className="hover:text-cyan-400 transition-colors">
                    {airport.name}
                  </Link>
                </h2>
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
                <span>价格门槛：<strong className="text-cream">{airport.price_summary}</strong></span>
                <span>流量套内：<strong className="text-cream">{airport.traffic_summary}</strong></span>
              </div>
              <div className="flex justify-between text-[11px] opacity-80">
                <span>线路：{airport.line_type}</span>
                <span>检查日期：{airport.last_checked}</span>
              </div>
            </div>

            <Link
              href={`/airport/${airport.slug}`}
              className="w-full py-2 bg-white/10 hover:bg-cyan-500 hover:text-white text-center text-xs font-semibold rounded-xl text-cream transition-all border border-white/10"
            >
              查看详情资料
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
