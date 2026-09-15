import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockAirports, mockPlans, mockNodes, mockClients, mockProtocols, mockAISupport, mockStreamingSupport, mockArticles } from '../data/mock';
import { ExternalLink, CheckCircle2, XCircle, AlertCircle, HelpCircle, Shield, ArrowLeft } from 'lucide-react';

export default function AirportDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const airport = mockAirports.find(a => a.slug === slug || a.id === slug) || mockAirports[0];

  const plans = mockPlans.filter(p => p.airport_id === airport.id);
  const nodes = mockNodes.filter(n => n.airport_id === airport.id);
  const clients = mockClients.filter(c => c.airport_id === airport.id);
  const protocols = mockProtocols.filter(p => p.airport_id === airport.id);
  const aiList = mockAISupport.filter(a => a.airport_id === airport.id);
  const streamingList = mockStreamingSupport.filter(s => s.airport_id === airport.id);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal':
        return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 状态：正常</span>;
      case 'unconfirmed':
        return <span className="px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-full text-xs font-semibold flex items-center gap-1.5"><HelpCircle className="w-3.5 h-3.5" /> 状态：待确认</span>;
      case 'abnormal':
        return <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-xs font-semibold flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> 状态：异常</span>;
      default:
        return <span className="px-3 py-1 bg-slate-500/10 text-slate-400 border border-slate-500/20 rounded-full text-xs font-semibold flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5" /> 疑似停止运营</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Back Button */}
      <Link to="/airports" className="inline-flex items-center gap-2 text-xs text-tan/70 hover:text-cream transition-colors">
        <ArrowLeft className="w-4 h-4" /> 返回机场大全
      </Link>

      {/* 1. Header Banner & Title */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-cyan-400 font-mono tracking-wider uppercase">AIRPORT ARCHIVE DATA</span>
            <h1 className="text-2xl sm:text-4xl font-bold font-stix text-cream mt-1">
              {airport.name} 怎么样？2026年价格、节点、协议与使用情况
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {getStatusBadge(airport.status)}
            <span className="px-3 py-1 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-full text-xs font-bold">
              综合评分：{airport.rating} / 10
            </span>
          </div>
        </div>

        <p className="text-sm text-tan/80 leading-relaxed pt-2">
          {airport.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-tan/60">
          <div>最后人工检查核对时间：<strong className="text-cream">{airport.last_checked}</strong></div>
          <a
            href={airport.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all"
          >
            <span>访问官方网站 (明确标记)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 2. 套餐详情表格 */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-cream border-b border-white/10 pb-3">💳 套餐与价格明细</h2>
        {plans.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-tan/90 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-cream font-semibold">
                  <th className="py-2.5 px-3">套餐名称</th>
                  <th className="py-2.5 px-3">价格</th>
                  <th className="py-2.5 px-3">流量容量</th>
                  <th className="py-2.5 px-3">设备并发限制</th>
                  <th className="py-2.5 px-3">说明</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-3 font-bold text-cream">{plan.name}</td>
                    <td className="py-3 px-3 text-cyan-400 font-bold">¥{plan.price} / 月</td>
                    <td className="py-3 px-3">{plan.traffic}</td>
                    <td className="py-3 px-3">{plan.device_limit}</td>
                    <td className="py-3 px-3 opacity-80">{plan.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-xs text-tan/50 italic py-2">暂无可靠套餐明细数据 (待人工核对)</div>
        )}
      </div>

      {/* 3. 节点、协议、客户端 & AI/流媒体矩阵 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 支持节点地区 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-cream border-b border-white/10 pb-2">🌐 节点覆盖地区</h3>
          {nodes.length > 0 ? (
            <div className="flex flex-wrap gap-2 text-xs">
              {nodes.map(n => (
                <span key={n.id} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-cream">
                  {n.region} ({n.node_count} 节点)
                </span>
              ))}
            </div>
          ) : (
            <div className="text-xs text-tan/50 italic">暂无可靠节点覆盖数据</div>
          )}
        </div>

        {/* 支持协议 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-cream border-b border-white/10 pb-2">🔑 支持传输协议</h3>
          {protocols.length > 0 ? (
            <div className="flex flex-wrap gap-2 text-xs">
              {protocols.map(p => (
                <span key={p.id} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-lg font-mono">
                  {p.protocol_name}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-xs text-tan/50 italic">暂无可靠协议数据</div>
          )}
        </div>

        {/* AI 解锁支持 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-cream border-b border-white/10 pb-2">🤖 AI 大模型解封支持</h3>
          {aiList.length > 0 ? (
            <div className="space-y-2 text-xs">
              {aiList.map(a => (
                <div key={a.id} className="flex justify-between items-center text-tan/90">
                  <span>{a.service_name}</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] ${a.status === 'supported' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                    {a.status === 'supported' ? '解封支持 ✓' : '待确认'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-tan/50 italic">暂无可靠数据 (待测试核实)</div>
          )}
        </div>

        {/* 流媒体解锁支持 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-cream border-b border-white/10 pb-2">🎬 4K 流媒体解封支持</h3>
          {streamingList.length > 0 ? (
            <div className="space-y-2 text-xs">
              {streamingList.map(s => (
                <div key={s.id} className="flex justify-between items-center text-tan/90">
                  <span>{s.service_name}</span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-500/20 text-emerald-300">
                    支持 ✓
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-tan/50 italic">暂无可靠数据 (待测试核实)</div>
          )}
        </div>
      </div>

      {/* 4. 优缺点对比 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-emerald-400">👍 主要优点</h3>
          <ul className="space-y-1.5 text-xs text-cream/90 list-disc list-inside">
            {airport.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-rose-400">👎 主要缺点</h3>
          <ul className="space-y-1.5 text-xs text-cream/90 list-disc list-inside">
            {airport.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. 相关教程 */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-bold text-cream">📖 相关使用教程与工具配置指南</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockArticles.slice(0, 2).map(art => (
            <Link
              key={art.id}
              to={`/guides/${art.slug}`}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all block text-xs"
            >
              <div className="font-bold text-cream mb-1">{art.title}</div>
              <div className="text-tan/60 text-[11px] line-clamp-1">{art.summary}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
