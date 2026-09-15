import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AirportsPage from './pages/AirportsPage';
import AirportDetailPage from './pages/AirportDetailPage';
import ComparePage from './pages/ComparePage';
import RankingPage from './pages/RankingPage';
import GuidesPage from './pages/GuidesPage';
import WikiPage from './pages/WikiPage';
import BlogPage from './pages/BlogPage';
import SearchPage from './pages/SearchPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="relative min-h-screen bg-dark text-cream font-suisse selection:bg-cyan-500 selection:text-white">
        {/* 1. Global Fixed Snow Mountain Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40 animate-fade-in"
          src="https://r2.motionsites.dev/motionsites/assets/f34ce20895ab.mp4"
        />

        {/* 2. Global Dark Overlay Tint */}
        <div className="fixed inset-0 bg-[#191C1F]/60 z-0 pointer-events-none" />

        {/* 3. Global Persistent Navbar */}
        <Navbar />

        {/* 4. Main Router View */}
        <div className="relative z-10 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/airports" element={<AirportsPage />} />
            <Route path="/airport/:slug" element={<AirportDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/compare/:slug" element={<ComparePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/ranking/:type" element={<RankingPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/:slug" element={<GuidesPage />} />
            <Route path="/wiki" element={<WikiPage />} />
            <Route path="/wiki/:slug" element={<WikiPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </div>

        {/* 5. Glass Footer */}
        <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 text-xs text-tan/60 font-suisse">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © {currentYear} 机场搜 (jichangsou.com) • 机场数据库与选型搜索引擎. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-tan/80">
              <Link to="/" className="hover:text-cream transition-colors">首页</Link>
              <Link to="/airports" className="hover:text-cream transition-colors">机场大全</Link>
              <Link to="/ranking/best" className="hover:text-cream transition-colors">排行榜</Link>
              <Link to="/compare" className="hover:text-cream transition-colors">机场对比</Link>
              <Link to="/guides" className="hover:text-cream transition-colors">使用教程</Link>
              <Link to="/wiki" className="hover:text-cream transition-colors">网络百科</Link>
              <Link to="/admin" className="hover:text-cream transition-colors opacity-40">后台系统</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
