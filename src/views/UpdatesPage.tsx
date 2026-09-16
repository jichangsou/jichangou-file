'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockAirports } from '@/data/mock';
import { Clock, CheckCircle2, AlertCircle, HelpCircle, XCircle, ArrowRight, Filter, Database, ShieldCheck } from 'lucide-react';

export default function UpdatesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'info' | 'plan' | 'status'>('all');

  // Group airports by updated_at / last_checked date
  const updateRecords = mockAirports.map(ap => ({
    airport: ap,
    date: ap.updated_at || ap.last_checked,
    category: 'info' as const,
    title: '机场资料已核对更新',
    note: `核对价格门槛 ${ap.price_summary}，线路 ${ap.line_type}，运营状态正常。`
  }));

  // Sort records by date descending
  updateRecords.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter records based on category selection
  const filteredRecords = updateRecords.filter(rec => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'info') return rec.category === 'info';
    if (activeCategory === 'plan') return true; // all airports have plans verified
    if (activeCategory === 'status') return rec.airport.status === 'normal';
    return true;
  });

  // Group by date string
  const groupedByDate: { [date: string]: typeof updateRecords } = {};
  filteredRecords.forEach(rec => {
    if (!groupedByDate[rec.date]) {
      groupedByDate[rec.date] = [];
    }
    groupedByDate[rec.date].push(rec);
  });

  const dates = Object.keys(groupedByDate).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal':
        return <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[11px] font-semibold inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> 正常</span>;
      case 'unconfirmed':
        return <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[11px] font-semibold inline-flex items-center gap-1"><HelpCircle className="w-3 h-3 text-amber-600" /> 待核实</span>;
      default:
        return <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-full text-[11px] font-semibold inline-flex items-center gap-1"><XCircle className="w-3 h-3 text-slate-500" /> 离线</span>;
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': '首页', 'item': 'https://jichangsou.com' },
      { '@type': 'ListItem', 'position': 2, 'name': '最近更新', 'item': 'https://jichangsou.com/updates' }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
        <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
        <span>&gt;</span>
        <span className="text-slate-900 font-medium">最近更新</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>UPDATES CENTER</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          机场最近更新
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          查看机场资料、套餐、状态与基础信息的最近记录时间。追踪机场资料的最近整理与核对时间，方便查看哪些页面近期发生过资料更新。
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto text-xs">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          全部更新 ({updateRecords.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('info')}
          className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 cursor-pointer ${
            activeCategory === 'info'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          机场资料
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('plan')}
          className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 cursor-pointer ${
            activeCategory === 'plan'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          套餐明细
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('status')}
          className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 cursor-pointer ${
            activeCategory === 'status'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          运营状态
        </button>
      </div>

      {/* Timeline Grouped by Date */}
      <div className="space-y-8">
        {dates.map(dateStr => (
          <div key={dateStr} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs rounded-lg shadow-sm">
                📅 {dateStr}
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedByDate[dateStr].map((item, idx) => (
                <div
                  key={`${item.airport.id}-${idx}`}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                          <Link href={`/airport/${item.airport.slug}`}>
                            {item.airport.name}
                          </Link>
                        </h2>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded text-[10px] font-semibold">
                          {item.title}
                        </span>
                      </div>
                      {getStatusBadge(item.airport.status)}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.note}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">
                      最后核对: {item.date}
                    </span>
                    <Link
                      href={`/airport/${item.airport.slug}`}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl text-xs transition-colors shadow-sm inline-flex items-center gap-1"
                    >
                      <span>查看机场资料</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {dates.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-xs">
            暂无符合条件的更新记录。
          </div>
        )}
      </div>
    </div>
  );
}
