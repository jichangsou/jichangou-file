import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Compass, Award, GitCompare, BookOpen, Layers, Rss, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: '首页', path: '/', icon: Compass },
    { name: '机场大全', path: '/airports', icon: Layers },
    { name: '排行榜', path: '/ranking/best', icon: Award },
    { name: '机场对比', path: '/compare', icon: GitCompare },
    { name: '使用教程', path: '/guides', icon: BookOpen },
    { name: '网络百科', path: '/wiki', icon: ShieldCheck },
    { name: '博客', path: '/blog', icon: Rss },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-dark rounded-[11px] flex items-center justify-center">
                <img src="/logo_hd.svg" alt="机场搜" className="w-6 h-6 object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-stix text-xl font-bold tracking-tight text-cream group-hover:text-cyan-400 transition-colors">
                机场搜
              </span>
              <span className="text-[9px] text-tan/60 -mt-1 tracking-widest uppercase">
                JICHANGSOU.COM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? 'bg-cream/15 text-cream border border-cream/20 shadow-sm'
                      : 'text-tan/80 hover:text-cream hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Navbar Search Box */}
          <div className="hidden md:flex items-center shrink-0">
            <form onSubmit={handleSearchSubmit} className="relative w-48 lg:w-56">
              <input
                type="text"
                placeholder="搜索机场或关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-8 pr-4 py-1.5 text-xs text-cream placeholder-tan/40 focus:outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-tan/50 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cream hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-dark/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="搜索机场名称、域名或关键词..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-sm text-cream placeholder-tan/50 focus:outline-none focus:border-cyan-400"
            />
            <Search className="w-4 h-4 text-tan/60 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium border ${
                    isActive(link.path)
                      ? 'bg-cream/15 text-cream border-cream/30'
                      : 'bg-white/5 text-tan/90 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
