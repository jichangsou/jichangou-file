"use client";

import React from 'react';
import Link from 'next/link';
import { TOPIC_CONFIGS, getTopicStats } from '@/data/topics';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TopicsIndexPage() {
  const topicList = Object.values(TOPIC_CONFIGS);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 text-slate-900 dark:text-slate-100">
      {/* Header Container */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-2 mb-4">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 dark:text-slate-200 font-medium">机场专题</span>
          </nav>

          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400">
              <Layers className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              机场专题
            </h1>
          </div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            按价格、线路、协议、节点地区和使用场景浏览机场资料。系统基于自动化监测数据动态整合分类。
          </p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topicList.map(topic => {
            const stats = getTopicStats(topic.slug);
            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                      {topic.shortTitle}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                      匹配 {stats.count} 家机场
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2.5 line-clamp-1">
                    {topic.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  <span>浏览专题数据</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Methodology Disclosure Banner */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                评价标准与数据说明
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Data Methodology & Disclaimer
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            机场搜通过自动化评测与用户反馈，定期整理各机场的价格套餐、节点地区、线路类型（IEPL/IPLC/BGP）、支持协议（VLESS/Trojan/Shadowsocks）及 AI/流媒体解锁情况。所有数据仅供技术交流与搜索参考，并不构成任何购买建议。
          </p>
        </div>
      </div>
    </div>
  );
}
