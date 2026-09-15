"use client";

import React, { useState } from 'react';
import { mockAirports, mockArticles } from '../data/mock';
import { LayoutDashboard, Database, FileText, Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'airports' | 'articles'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const totalAirports = mockAirports.length;
  const normalCount = mockAirports.filter(a => a.status === 'normal').length;
  const unconfirmedCount = mockAirports.filter(a => a.status === 'unconfirmed').length;
  const abnormalCount = mockAirports.filter(a => a.status === 'abnormal').length;
  const totalArticles = mockArticles.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 select-none">
      {/* Admin Top Header */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">ADMINISTRATION CONTROL PANEL</span>
          <h1 className="text-2xl font-bold font-stix text-cream mt-0.5">机场搜 • 后台管理系统</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
              activeTab === 'dashboard' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-white/5 text-tan/70 border-white/10 hover:bg-white/10'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> 概览 DashBoard
          </button>
          <button
            onClick={() => setActiveTab('airports')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
              activeTab === 'airports' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-white/5 text-tan/70 border-white/10 hover:bg-white/10'
            }`}
          >
            <Database className="w-3.5 h-3.5" /> 机场管理
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
              activeTab === 'articles' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-white/5 text-tan/70 border-white/10 hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> 文章管理
          </button>
        </div>
      </div>

      {/* Tab 1: Dashboard View */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <span className="text-tan/60 text-[11px] block">机场总数</span>
              <strong className="text-2xl font-bold text-cream mt-1 block">{totalAirports}</strong>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
              <span className="text-emerald-400 text-[11px] block">正常机场</span>
              <strong className="text-2xl font-bold text-emerald-300 mt-1 block">{normalCount}</strong>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center">
              <span className="text-amber-300 text-[11px] block">待确认机场</span>
              <strong className="text-2xl font-bold text-amber-300 mt-1 block">{unconfirmedCount}</strong>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 text-center">
              <span className="text-rose-400 text-[11px] block">异常/停运</span>
              <strong className="text-2xl font-bold text-rose-300 mt-1 block">{abnormalCount}</strong>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-center">
              <span className="text-blue-400 text-[11px] block">教程/百科文章</span>
              <strong className="text-2xl font-bold text-blue-300 mt-1 block">{totalArticles}</strong>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-cream">🕒 最近修改与核查记录</h2>
            <div className="space-y-2 text-xs">
              {mockAirports.slice(0, 5).map(a => (
                <div key={a.id} className="flex justify-between items-center py-2 border-b border-white/5 text-tan/80">
                  <span>核对机场 <strong className="text-cream">{a.name}</strong> 数据状态</span>
                  <span className="text-tan/50">{a.last_checked}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Airports Management View */}
      {activeTab === 'airports' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center gap-4">
            <input
              type="text"
              placeholder="搜索机场..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-cream focus:outline-none focus:border-cyan-400 w-64"
            />
            <button className="px-4 py-2 bg-cyan-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 hover:bg-cyan-400 transition-all">
              <Plus className="w-4 h-4" /> 新增机场 (New)
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs text-tan/90 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-cream font-semibold bg-white/5">
                  <th className="py-3 px-4">机场名称</th>
                  <th className="py-3 px-4">Slug</th>
                  <th className="py-3 px-4">评分</th>
                  <th className="py-3 px-4">状态</th>
                  <th className="py-3 px-4">最近核对时间</th>
                  <th className="py-3 px-4 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockAirports.filter(a => a.name.includes(searchTerm)).map(a => (
                  <tr key={a.id} className="hover:bg-white/5">
                    <td className="py-3 px-4 font-bold text-cream">{a.name}</td>
                    <td className="py-3 px-4 font-mono text-cyan-400">{a.slug}</td>
                    <td className="py-3 px-4 text-amber-300 font-bold">{a.rating}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[11px] ${a.status === 'normal' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-tan/60">{a.last_checked}</td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button className="p-1.5 bg-white/10 hover:bg-cyan-500 hover:text-white rounded-lg transition-colors">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white rounded-lg transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Articles Management View */}
      {activeTab === 'articles' && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-xs text-tan/70 text-center">
          后台文章管理模块（已预留路由，后续迭代添加可视化 WYSIWYG 编辑器）
        </div>
      )}
    </div>
  );
}
