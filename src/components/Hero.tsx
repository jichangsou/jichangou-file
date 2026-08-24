import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden select-none pt-24 pb-16 sm:pb-20">
      {/* Main Hero Copy & Headlines */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full text-center my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream/10 border border-cream/20 text-cream text-[11px] font-medium font-suisse mb-6 animate-slide-down">
          <span>⚡ 2026 最新物理线路压测大盘</span>
        </div>

        <h2 className="font-stix text-cream text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight mb-6 animate-slide-down" style={{ animationDelay: '150ms' }}>
          突破网络边界 • 探索极速稳定节点
        </h2>

        <p className="font-suisse text-tan/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8 animate-slide-down" style={{ animationDelay: '300ms' }}>
          基于 24/7 探针实时压测，为您精选企业级 IPLC 专线与高可用 AI 解锁节点。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down" style={{ animationDelay: '450ms' }}>
          <Link
            to="/category/popular"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cream text-dark-blue font-bold text-sm hover:bg-white transition-all shadow-xl hover:shadow-cream/20 flex items-center justify-center gap-2 font-suisse"
          >
            查阅 2026 精选榜单 <ArrowRight size={16} />
          </Link>
          <Link
            to="/category/monitor"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black/40 border border-cream/30 text-cream font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-suisse backdrop-blur-md"
          >
            查看机场节点大盘
          </Link>
        </div>
      </div>
    </section>
  );
}
