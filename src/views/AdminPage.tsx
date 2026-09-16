"use client";

import React, { useState } from 'react';
import { mockAirports, mockArticles } from '../data/mock';
import { LayoutDashboard, Database, FileText, Plus, Edit, Trash2, ShieldCheck, CheckCircle2, AlertCircle, HelpCircle, Clock, Search } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'airports' | 'articles'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const totalAirports = mockAirports.length;
  const normalCount = mockAirports.filter(a => a.status === 'normal').length;
  const unconfirmedCount = mockAirports.filter(a => a.status === 'unconfirmed').length;
  const abnormalCount = mockAirports.filter(a => a.status === 'abnormal').length;
  const totalArticles = mockArticles.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Admin Top Header */}
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>ADMINISTRATION CONTROL PANEL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">机场搜 • 后台管理系统</h1>
          <p className="text-xs text-slate-500 mt-1">控制台中心，查看全站 32 个机场与 12 篇教程百科的数据状态。</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> 概览 DashBoard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('airports')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeTab === 'airports'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            <Database className="w-4 h-4" /> 机场管理 ({totalAirports})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            <FileText className="w-4 h-4" /> 文章管理 ({totalArticles})
          </button>
        </div>
      </div>

      {/* Tab 1: Dashboard View */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm space-y-1">
              <span className="text-slate-500 text-xs font-medium block">机场总数</span>
              <strong className="text-2xl sm:text-3xl font-bold text-slate-900 block font-mono">{totalAirports}</strong>
            </div>
            <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-center shadow-sm space-y-1">
              <span className="text-emerald-700 text-xs font-semibold block">正常运营</span>
              <strong className="text-2xl sm:text-3xl font-bold text-emerald-900 block font-mono">{normalCount}</strong>
            </div>
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 text-center shadow-sm space-y-1">
              <span className="text-amber-800 text-xs font-semibold block">待确认机场</span>
              <strong className="text-2xl sm:text-3xl font-bold text-amber-950 block font-mono">{unconfirmedCount}</strong>
            </div>
            <div className="bg-rose-50/80 border border-rose-200/90 rounded-2xl p-4 text-center shadow-sm space-y-1">
              <span className="text-rose-700 text-xs font-semibold block">异常 / 停运</span>
              <strong className="text-2xl sm:text-3xl font-bold text-rose-950 block font-mono">{abnormalCount}</strong>
            </div>
            <div className="bg-blue-50/80 border border-blue-200/90 rounded-2xl p-4 text-center shadow-sm space-y-1">
              <span className="text-blue-700 text-xs font-semibold block">教程 / 百科文章</span>
              <strong className="text-2xl sm:text-3xl font-bold text-blue-950 block font-mono">{totalArticles}</strong>
            </div>
          </div>

          {/* Recent Modified & Check Logs */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>最近修改与核查日志记录</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">共计 32 条校验日志</span>
            </div>

            <div className="space-y-2 text-xs">
              {mockAirports.slice(0, 8).map(a => (
                <div key={a.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/70 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="text-slate-400">核对机场</span>
                    <strong className="text-slate-900 font-bold">{a.name}</strong>
                    <span className="text-slate-500">[{a.line_type}]</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      数据正常
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] shrink-0">
                    核对时间: {a.last_checked}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Airports Management View */}
      {activeTab === 'airports' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="搜索机场名称、slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> 新增机场 (New Record)
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-800 border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-700 font-bold bg-slate-50">
                    <th className="py-3 px-4">机场名称</th>
                    <th className="py-3 px-4">Slug</th>
                    <th className="py-3 px-4">最低起步价</th>
                    <th className="py-3 px-4">运营状态</th>
                    <th className="py-3 px-4">最近核对时间</th>
                    <th className="py-3 px-4 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockAirports.filter(a => a.name.includes(searchTerm) || a.slug.includes(searchTerm)).map(a => (
                    <tr key={a.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{a.name}</td>
                      <td className="py-3.5 px-4 font-mono text-blue-600 font-medium">{a.slug}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{a.price_summary}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                          a.status === 'normal'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {a.status === 'normal' ? '正常运营' : '待确认'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-500">{a.last_checked}</td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          type="button"
                          className="p-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg text-slate-700 transition-colors cursor-pointer"
                          title="编辑资料"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1.5 bg-rose-50 hover:bg-rose-600 hover:text-white rounded-lg text-rose-600 transition-colors cursor-pointer"
                          title="删除记录"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Articles Management View */}
      {activeTab === 'articles' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-xs text-slate-600 text-center space-y-2 shadow-sm">
          <FileText className="w-8 h-8 text-blue-600 mx-auto opacity-80" />
          <p className="font-bold text-slate-900 text-sm">后台文章与指南管理控制台</p>
          <p className="text-slate-500 max-w-md mx-auto">
            当前包含 12 篇合规排版的客户端教程与网络原理百科，路由已被正确整合接入。
          </p>
        </div>
      )}
    </div>
  );
}
