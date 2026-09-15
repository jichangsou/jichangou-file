import React from 'react';
import Link from 'next/link';
import { mockArticles } from '../data/mock';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { ShieldCheck, Calendar, User, ArrowLeft } from 'lucide-react';

interface WikiPageProps {
  slug?: string;
}

export default function WikiPage({ slug }: WikiPageProps) {
  const wikis = mockArticles.filter(a => a.type === 'wiki');

  if (slug) {
    const article = wikis.find(w => w.slug === slug || w.id === slug) || wikis[0];
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <Link href="/wiki" className="inline-flex items-center gap-2 text-xs text-tan/70 hover:text-cream transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回网络百科列表
        </Link>
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-semibold">网络知识百科</span>
            <h1 className="text-2xl sm:text-4xl font-bold font-stix text-cream">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-tan/60 pt-2">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.updated_at}</span>
            </div>
          </div>
          <MarkdownRenderer content={article.content} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold font-stix text-cream flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-purple-400" />
          网络知识百科
        </h1>
        <p className="text-xs text-tan/70 mt-1">普及 IEPL/IPLC 专线原理、VLESS 协议、FullCone UDP 与 DNS 防泄漏原理</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wikis.map(wiki => (
          <Link
            key={wiki.id}
            href={`/wiki/${wiki.slug}`}
            className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-3 block group"
          >
            <span className="text-[10px] text-purple-300 font-mono uppercase tracking-wider">{wiki.category}</span>
            <h2 className="text-base font-bold text-cream group-hover:text-purple-300 transition-colors">
              {wiki.title}
            </h2>
            <p className="text-xs text-tan/70 line-clamp-2 leading-relaxed">
              {wiki.summary}
            </p>
            <div className="flex items-center justify-between text-[11px] text-tan/50 pt-2 border-t border-white/5">
              <span>{wiki.updated_at}</span>
              <span className="text-purple-300 font-semibold group-hover:translate-x-1 transition-transform inline-block">查阅百科 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
