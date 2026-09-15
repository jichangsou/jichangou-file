import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/mock';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { BookOpen, Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export default function GuidesPage() {
  const { slug } = useParams<{ slug?: string }>();
  const guides = mockArticles.filter(a => a.type === 'guide');

  if (slug) {
    const article = guides.find(g => g.slug === slug || g.id === slug) || guides[0];
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <Link to="/guides" className="inline-flex items-center gap-2 text-xs text-tan/70 hover:text-cream transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回使用教程列表
        </Link>
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-xs font-semibold">使用教程</span>
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
          <BookOpen className="w-8 h-8 text-cyan-400" />
          使用教程大盘
        </h1>
        <p className="text-xs text-tan/70 mt-1">涵盖 Clash Verge, Shadowrocket, sing-box 及 TUN 模式的详尽指导</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map(guide => (
          <Link
            key={guide.id}
            to={`/guides/${guide.slug}`}
            className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-3 block group"
          >
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider">{guide.category}</span>
            <h2 className="text-base font-bold text-cream group-hover:text-cyan-300 transition-colors">
              {guide.title}
            </h2>
            <p className="text-xs text-tan/70 line-clamp-2 leading-relaxed">
              {guide.summary}
            </p>
            <div className="flex items-center justify-between text-[11px] text-tan/50 pt-2 border-t border-white/5">
              <span>{guide.updated_at}</span>
              <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-block">阅读教程 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
