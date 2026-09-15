import Link from 'next/link';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto shadow-2xl">
        <AlertCircle className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">404 PAGE NOT FOUND</span>

      <h1 className="text-3xl sm:text-5xl font-bold font-stix text-cream">
        未找到该机场或请求页面
      </h1>

      <p className="text-sm text-tan/70 max-w-md mx-auto leading-relaxed">
        您访问的机场 slug 编号在机场搜全量数据库中暂无记录，或页面已被移动。
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs rounded-xl shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" /> 返回首页
        </Link>
        <Link
          href="/airports"
          className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-cream font-semibold text-xs rounded-xl border border-white/10 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> 查看机场大全
        </Link>
      </div>
    </div>
  );
}
