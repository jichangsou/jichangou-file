import React from 'react';
import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  Lock,
  RotateCw,
  Info,
  Share,
  Plus,
  Copy,
  LayoutDashboard,
  Database,
  Globe,
  BarChart3,
  Settings
} from 'lucide-react';

const BAR_DATA = [
  14, 25, 33, 25, 20, 9, 4, 11, 46, 40, 54, 46, 40, 29, 20, 54,
  3, 4, 5, 9, 58, 40, 49, 23, 4, 25, 11, 12, 38, 29, 56, 44,
];

const DOT_GRID = [
  [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
];

const SALES_BARS = [
  { h: 27, active: false },
  { h: 55, active: false },
  { h: 67, active: false },
  { h: 40, active: false },
  { h: 80, active: true },
  { h: 27, active: false },
];

export default function Dashboard() {
  return (
    <div className="relative overflow-hidden aspect-[795/478] w-full p-0 select-none">
      {/* Backdrop 1: Warm glow slab */}
      <div
        className="absolute -left-[14%] top-[58%] w-[127%] h-[133%] bg-[#EED3B3] border border-black/5 pointer-events-none"
      />

      {/* Backdrop 2: Glass panel */}
      <div
        className="absolute inset-0 w-full h-[116%] bg-[rgba(17,16,15,0.35)] rounded-md backdrop-blur-[145px] pointer-events-none"
      />

      {/* 1. Browser Title Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[7%] bg-title-bar rounded-t-md flex items-center px-0 z-20 animate-fade-in"
        style={{ animationDelay: '1000ms' }}
      >
        {/* Traffic lights */}
        <div className="ml-[1.6%] flex items-center gap-[5px]">
          <div
            className="w-[8px] h-[8px] rounded-full bg-[#EE6A5F] border-[0.3px] border-[#CE5347]"
            style={{ boxShadow: 'inset 0 0 3.7px #EC6D62' }}
          />
          <div
            className="w-[8px] h-[8px] rounded-full bg-[#F5BD4F] border-[0.3px] border-[#D6A243]"
            style={{ boxShadow: 'inset 0 0 3.7px #F5C451' }}
          />
          <div
            className="w-[8px] h-[8px] rounded-full bg-[#61C454] border-[0.3px] border-[#58A942]"
            style={{ boxShadow: 'inset 0 0 3.7px #68CC58' }}
          />
        </div>

        {/* Window icons */}
        <div className="ml-[2.5%] flex items-center gap-[8px]">
          <PanelLeft size={12} strokeWidth={1.5} className="text-cream/60" />
          <ChevronLeft size={12} strokeWidth={1.5} className="text-cream/60" />
          <ChevronRight size={12} strokeWidth={1.5} className="text-cream/40" />
        </div>

        {/* Site ring */}
        <div className="absolute left-[26%] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border border-cream/40" />

        {/* URL pill */}
        <div className="absolute left-[30%] top-[18%] w-[34%] h-[64%] bg-[#0C0F12] rounded-md flex items-center justify-center gap-[4px] p-0">
          <Lock size={8} strokeWidth={2} className="text-cream/60" />
          <span className="text-cream text-[8px] font-normal font-suisse">jichangsou.com</span>
        </div>

        {/* Refresh icon */}
        <div className="absolute left-[65%] top-1/2 -translate-y-1/2 text-cream/50 flex items-center">
          <RotateCw size={10} strokeWidth={1.5} />
        </div>

        {/* Right icons */}
        <div className="absolute right-[1.6%] top-1/2 -translate-y-1/2 flex items-center gap-[10px] text-cream/50">
          <Info size={11} strokeWidth={1.5} />
          <Share size={11} strokeWidth={1.5} />
          <Plus size={11} strokeWidth={1.5} />
          <Copy size={11} strokeWidth={1.5} />
        </div>
      </div>

      {/* 2. Dashboard Chrome */}
      {/* Sub-navigation */}
      <div
        className="absolute top-[8.6%] left-[2.4%] flex items-center gap-[20px] animate-fade-in"
        style={{ animationDelay: '1100ms' }}
      >
        <div className="flex items-center gap-[4px] text-cream text-[9px] font-medium font-suisse">
          <LayoutDashboard size={11} />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-[4px] text-tan/50 text-[9px] font-medium font-suisse">
          <Database size={11} />
          <span>Data</span>
        </div>
        <div className="flex items-center gap-[4px] text-tan/50 text-[9px] font-medium font-suisse">
          <Globe size={11} />
          <span>Network</span>
        </div>
        <div className="flex items-center gap-[4px] text-tan/50 text-[9px] font-medium font-suisse">
          <BarChart3 size={11} />
          <span>Analytics</span>
        </div>
        <div className="flex items-center gap-[4px] text-tan/50 text-[9px] font-medium font-suisse">
          <Settings size={11} />
          <span>Setting</span>
        </div>
      </div>

      {/* Dividers */}
      <div
        className="absolute top-[14.2%] left-0 right-0 h-[1px] bg-cream/20 animate-fade-in"
        style={{ animationDelay: '1100ms' }}
      />
      <div
        className="absolute top-[14.2%] left-0 w-[11.3%] h-[1px] bg-cream animate-fade-in"
        style={{ animationDelay: '1100ms' }}
      />

      {/* Avatar Cluster */}
      <div
        className="absolute top-[8.2%] right-[3%] flex items-center gap-[8px] animate-fade-in"
        style={{ animationDelay: '1150ms' }}
      >
        <div className="relative w-[18px] h-[18px]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
            alt="Jane D."
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute -top-[2px] -right-[2px] w-[4px] h-[4px] rounded-full bg-[#A6FB89] border border-[rgba(17,16,15,0.5)]" />
        </div>
        <span className="text-cream text-[9px] font-medium font-suisse">Jane D.</span>
      </div>

      {/* Page Tabs */}
      <div
        className="absolute top-[18%] left-[2.4%] flex items-baseline gap-[32px] animate-fade-in"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="text-cream font-suisse font-medium leading-none text-[clamp(16px,4.4vw,35px)]">
          Global
        </span>
        <span className="text-cream/40 font-suisse font-medium leading-none text-[clamp(16px,4.4vw,35px)]">
          Cluster
        </span>
        <span className="text-cream/40 font-suisse font-medium leading-none text-[clamp(16px,4.4vw,35px)]">
          Insights
        </span>
      </div>

      {/* 3. Card Grid */}
      {/* Card 1: Revenue Growth */}
      <div
        className="absolute top-[28%] left-[2.2%] w-[31.3%] h-[45.6%] bg-[rgba(17,16,15,0.35)] rounded-[20px] p-[2.4%] flex flex-col animate-fade-in"
        style={{ animationDelay: '1300ms' }}
      >
        <div
          className="text-[12px] text-cream font-medium leading-[12px] font-suisse animate-fade-in"
          style={{ animationDelay: '1500ms' }}
        >
          Revenue Growth
        </div>

        {/* Figure */}
        <div
          className="mt-[14px] flex items-baseline animate-count-in"
          style={{ animationDelay: '1650ms' }}
        >
          <span className="text-cream text-[clamp(14px,3vw,24px)] font-medium leading-none font-suisse">
            $14,205,890
          </span>
          <span className="text-white/70 text-[28px] leading-[28px] font-medium font-suisse">
            .00
          </span>
        </div>

        {/* Delta row */}
        <div
          className="mt-[10px] flex items-center gap-[6px] animate-fade-in"
          style={{ animationDelay: '1800ms' }}
        >
          <span className="px-1 py-1 p-[4px] bg-tan/[0.14] rounded text-cream text-[9px] font-medium font-suisse leading-none">
            +32.4%
          </span>
          <span className="text-tan/70 text-[9px] font-suisse">
            vs. previous period ($10.7M)
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-auto flex-1 relative flex items-end">
          <div className="absolute inset-y-0 left-0 right-0 px-1 flex justify-between pointer-events-none">
            <div className="w-px h-full bg-cream/10" />
            <div className="w-px h-full bg-cream/10" />
            <div className="w-px h-full bg-cream/10" />
            <div className="w-px h-full bg-cream/10" />
            <div className="w-px h-full bg-cream/10" />
          </div>
          <div className="relative z-10 w-full h-[75%] flex items-end gap-[2.5px]">
            {BAR_DATA.map((val, i) => (
              <div
                key={i}
                className="flex-1 min-w-[1px] max-w-[2px] bg-cream animate-grow-up"
                style={{
                  height: `${(val / 60) * 100}%`,
                  animationDelay: `${1900 + i * 20}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Time axis */}
        <div
          className="mt-[6px] flex justify-between text-[6px] font-suisse animate-fade-in"
          style={{ animationDelay: '2400ms' }}
        >
          <span className="text-tan">10:00</span>
          <span className="text-tan">12:00</span>
          <span className="text-tan">14:00</span>
          <span className="text-tan/40">16:00</span>
          <span className="text-tan/40">18:00</span>
        </div>
      </div>

      {/* Card 2: Lead Perfomance */}
      <div
        className="absolute top-[28%] left-[34.4%] w-[31.3%] h-[45.6%] bg-[rgba(17,16,15,0.35)] rounded-[20px] p-[2.4%] flex flex-col animate-fade-in"
        style={{ animationDelay: '1450ms' }}
      >
        <div
          className="text-[12px] text-cream font-medium leading-[12px] font-suisse animate-fade-in"
          style={{ animationDelay: '1650ms' }}
        >
          Lead Perfomance
        </div>

        {/* Stats */}
        <div className="mt-[14px] flex gap-[32px]">
          <div className="animate-count-in" style={{ animationDelay: '1750ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Total Generated</div>
            <div className="text-cream text-[9px] font-medium font-suisse mt-[4px]">84,592</div>
          </div>
          <div className="animate-count-in" style={{ animationDelay: '1850ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">AI-Qualified (AQI)</div>
            <div className="text-cream text-[9px] font-medium font-suisse mt-[4px]">94.2%</div>
          </div>
        </div>

        {/* Dot matrix */}
        <div className="mt-[20px] grid grid-cols-12 gap-x-[12px] gap-y-[9px] w-[204px] h-[96px]">
          {DOT_GRID.map((row, rIdx) =>
            row.map((val, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                className={`w-[6px] h-[6px] rounded-full animate-dot-pop ${
                  val === 1 ? 'bg-cream' : 'bg-dot-inactive'
                }`}
                style={{
                  animationDelay: `${1900 + rIdx * 80 + cIdx * 30}ms`
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* Card 3: Sales Trend */}
      <div
        className="absolute top-[28%] left-[66.6%] w-[31.3%] h-[45.6%] bg-[rgba(17,16,15,0.35)] rounded-[20px] p-[2.4%] flex flex-col animate-fade-in"
        style={{ animationDelay: '1600ms' }}
      >
        <div
          className="text-[12px] text-cream font-medium leading-[12px] font-suisse animate-fade-in"
          style={{ animationDelay: '1800ms' }}
        >
          Sales Trend
        </div>

        {/* Stats */}
        <div className="mt-[14px] flex gap-[32px]">
          <div className="animate-count-in" style={{ animationDelay: '1900ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Active Pipeline</div>
            <div className="text-cream text-[9px] font-medium font-suisse mt-[4px]">$4.8M</div>
          </div>
          <div className="animate-count-in" style={{ animationDelay: '2000ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Win Rate Prediction</div>
            <div className="text-cream text-[9px] font-medium font-suisse mt-[4px]">85%</div>
          </div>
        </div>

        {/* Progress rail */}
        <div
          className="mt-[16px] relative w-full h-[1px] bg-cream/10 animate-fade-in"
          style={{ animationDelay: '2100ms' }}
        >
          <div className="absolute left-[23%] w-[23%] h-full bg-cream" />
          <div className="absolute left-[50%] w-[44%] h-full bg-cream" />
        </div>

        {/* Column chart */}
        <div className="mt-auto h-[48%] flex items-end gap-[5px] w-full">
          {SALES_BARS.map((bar, i) => (
            <div
              key={i}
              className={`flex-1 relative animate-grow-up ${
                bar.active ? 'bg-cream' : 'bg-tan/10'
              }`}
              style={{
                height: `${bar.h}%`,
                animationDelay: `${2100 + i * 60}ms`
              }}
            >
              {!bar.active && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cream" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: Real-time inference log */}
      <div
        className="absolute top-[80%] left-[2.3%] w-[47.3%] h-[45.6%] bg-[rgba(17,16,15,0.35)] rounded-[20px] p-[2.4%] flex flex-col animate-fade-in"
        style={{ animationDelay: '1750ms' }}
      >
        <div
          className="text-[12px] text-cream font-medium leading-[12px] font-suisse animate-fade-in"
          style={{ animationDelay: '1950ms' }}
        >
          Real-time inference log
        </div>

        <div className="mt-[16px] space-y-[6px]">
          {/* Row 1 */}
          <div
            className="flex items-center justify-between animate-fade-in"
            style={{ animationDelay: '2100ms' }}
          >
            <div className="flex items-center gap-[7px]">
              <span className="px-[3.5px] py-[4.5px] bg-tan/[0.07] text-tan/50 text-[9px] rounded-none inline-block font-suisse leading-none">
                SYS
              </span>
              <span className="text-tan text-[9px] font-suisse">
                Initiating deep-scan protocol
              </span>
            </div>
            <span className="text-tan text-[9px] font-suisse">DONE</span>
          </div>

          {/* Row 2 */}
          <div
            className="flex items-center justify-between animate-fade-in"
            style={{ animationDelay: '2250ms' }}
          >
            <div className="flex items-center gap-[7px]">
              <span className="px-[3.5px] py-[4.5px] bg-tan/[0.07] text-tan/50 text-[9px] rounded-none inline-block font-suisse leading-none">
                AI
              </span>
              <span className="text-tan text-[9px] font-suisse">
                Model 'Apogee-V4' loaded. Latency: 0.08ms
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="flex items-center justify-between animate-fade-in"
            style={{ animationDelay: '2400ms' }}
          >
            <div className="flex items-center gap-[7px]">
              <span className="px-[3.5px] py-[4.5px] bg-tan/[0.07] text-tan/50 text-[9px] rounded-none inline-block font-suisse leading-none">
                NET
              </span>
              <span className="text-tan text-[9px] font-suisse">
                Re-routing traffic to Global Node Alpha
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5: Predictive Trajectory */}
      <div
        className="absolute top-[80%] left-[50.6%] w-[47.3%] h-[45.6%] bg-[rgba(17,16,15,0.35)] rounded-[20px] p-[2.4%] flex flex-col animate-fade-in"
        style={{ animationDelay: '1900ms' }}
      >
        <div
          className="text-[12px] text-cream font-medium leading-[12px] font-suisse animate-fade-in"
          style={{ animationDelay: '2100ms' }}
        >
          Predictive Trajectory
        </div>

        <div className="mt-[16px] flex gap-[30px]">
          <div className="animate-count-in" style={{ animationDelay: '2200ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Escaping Velocity</div>
            <div className="text-cream text-[12px] font-medium font-suisse mt-[5px]">99.98%</div>
          </div>
          <div className="animate-count-in" style={{ animationDelay: '2350ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Target ARR</div>
            <div className="text-cream text-[12px] font-medium font-suisse mt-[5px]">$50,000,000</div>
          </div>
          <div className="animate-count-in" style={{ animationDelay: '2500ms' }}>
            <div className="text-tan/50 text-[9px] font-suisse">Confidence Score</div>
            <div className="text-cream text-[12px] font-medium font-suisse mt-[5px]">99.98%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
