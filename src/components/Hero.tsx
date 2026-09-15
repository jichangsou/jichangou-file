import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';

export default function Hero() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const sampleKeywords = ['暮光加速', 'Clash', '香港节点', '日本节点', 'IEPL专线'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleQuickClick = (keyword: string) => {
    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="relative py-12 sm:py-20 max-w-5xl mx-auto px-4 text-center">
      {/* Small Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-cream/90 text-xs font-medium mb-6 shadow-xl backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>机场数据库 • 选型搜索 • 客观评测</span>
      </div>

      {/* Main Title */}
      <h1 className="font-stix text-4xl sm:text-6xl font-normal tracking-tight text-cream mb-4">
        机场搜
      </h1>

      {/* Subtitle */}
      <p className="font-suisse text-lg sm:text-xl text-tan/80 font-light mb-8 max-w-2xl mx-auto">
        找机场，先搜一下
      </p>

      {/* Primary Live Search Form (Hero First Screen) */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6 relative">
        <div className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden border border-white/20 bg-dark/80 backdrop-blur-2xl focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all">
          <Search className="w-5 h-5 text-tan/60 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索机场名称、域名或关键词..."
            className="w-full bg-transparent pl-12 pr-28 py-4 text-base text-cream placeholder-tan/40 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold rounded-xl transition-all shadow-md active:scale-95"
          >
            搜索
          </button>
        </div>
      </form>

      {/* Quick Keywords Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-tan/70">
        <span className="opacity-60">示例：</span>
        {sampleKeywords.map((kw) => (
          <button
            key={kw}
            onClick={() => handleQuickClick(kw)}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-cream/15 hover:text-cream transition-all"
          >
            {kw}
          </button>
        ))}
      </div>
    </section>
  );
}
