import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles as templateArticles } from '../data/articles';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Rss, Calendar, User, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const { slug } = useParams<{ slug?: string }>();

  if (slug) {
    const article = templateArticles.find(a => a.id === slug) || templateArticles[0];
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-tan/70 hover:text-cream transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回博客列表
        </Link>
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-semibold">博客研讨</span>
            <h1 className="text-2xl sm:text-4xl font-bold font-stix text-cream">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-tan/60 pt-2">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.pubDate}</span>
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
          <Rss className="w-8 h-8 text-blue-400" />
          独立技术博客
        </h1>
        <p className="text-xs text-tan/70 mt-1">探讨 Jamstack 开发、网络工程、全栈架构与前沿技术</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templateArticles.map(post => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-3 block group"
          >
            <h2 className="text-base font-bold text-cream group-hover:text-blue-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-xs text-tan/70 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-[11px] text-tan/50 pt-2 border-t border-white/5">
              <span>{post.pubDate}</span>
              <span className="text-blue-300 font-semibold group-hover:translate-x-1 transition-transform inline-block">阅读全文 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
