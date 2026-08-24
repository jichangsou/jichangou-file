import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PopularPage from './pages/PopularPage';
import MonitorPage from './pages/MonitorPage';
import TutorialsPage from './pages/TutorialsPage';
import ReviewsPage from './pages/ReviewsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import DisclaimerPage from './pages/DisclaimerPage';
import { articles, Article } from './data/articles';

export default function App() {
  const currentYear = new Date().getFullYear();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const handleOpenArticleById = (airportId: string) => {
    const article = articles.find(
      a => a.id === `review-${airportId}` || a.id.includes(airportId)
    ) || articles[0];
    setActiveArticle(article);
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-dark text-cream font-suisse selection:bg-cream selection:text-dark">
        {/* 1. Global Fixed Background Video (Snowy Mountain) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none animate-fade-in"
          src="https://r2.motionsites.dev/motionsites/assets/f34ce20895ab.mp4"
        />

        {/* 2. Global Fixed 19% Dark Tint Overlay */}
        <div className="fixed inset-0 bg-[#191C1F]/19 z-0 pointer-events-none" />

        {/* 3. Global Persistent Navbar (Visible across ALL pages) */}
        <Navbar />

        {/* 4. Main Scrollable Content Layer */}
        <div className="relative z-10">
          {/* Dynamic Page Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenArticleById={handleOpenArticleById}
                  activeArticle={activeArticle}
                  setActiveArticle={setActiveArticle}
                />
              }
            />
            <Route
              path="/category/popular"
              element={<PopularPage onOpenArticleById={handleOpenArticleById} />}
            />
            <Route
              path="/category/monitor"
              element={<MonitorPage onOpenArticleById={handleOpenArticleById} />}
            />
            <Route
              path="/category/client-tutorials"
              element={
                <TutorialsPage
                  activeArticle={activeArticle}
                  setActiveArticle={setActiveArticle}
                />
              }
            />
            <Route
              path="/category/independent-reviews"
              element={
                <ReviewsPage
                  activeArticle={activeArticle}
                  setActiveArticle={setActiveArticle}
                />
              }
            />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/about" element={<DisclaimerPage />} />
          </Routes>

          {/* Glass Footer */}
          <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-12 text-center text-xs text-tan/50 font-suisse">
            <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                © {currentYear} 机场搜 • 极速网络节点与加速工具测评网. All rights reserved.
              </div>
              <div className="flex gap-6 text-tan/70">
                <Link to="/" className="hover:text-cream transition-colors">首页</Link>
                <Link to="/category/popular" className="hover:text-cream transition-colors">机场推荐</Link>
                <Link to="/category/monitor" className="hover:text-cream transition-colors">机场节点大盘</Link>
                <Link to="/category/client-tutorials" className="hover:text-cream transition-colors">Clash教程</Link>
                <Link to="/about" className="hover:text-cream transition-colors">关于我们</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}
