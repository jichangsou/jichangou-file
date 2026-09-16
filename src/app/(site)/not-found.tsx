import Link from 'next/link';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6 font-sans">
      <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
        <AlertCircle className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest block">404 PAGE NOT FOUND</span>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
        未找到该机场或请求页面
      </h1>

      <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
        您访问的机场 slug 编号在机场搜数据库中暂无记录，或页面已被移动。
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" /> 返回首页
        </Link>
        <Link
          href="/airports"
          className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 shadow-sm transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> 浏览机场大全
        </Link>
      </div>
    </div>
  );
}

