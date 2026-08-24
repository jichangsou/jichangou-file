import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuLinks = [
    { label: '首页', href: '/' },
    { label: '🔥 机场推荐', href: '/category/popular' },
    { label: '📊 机场节点大盘', href: '/category/monitor' },
    { label: '🛠️ Clash教程', href: '/category/client-tutorials' },
    { label: '🔍 机场测评文章', href: '/category/independent-reviews' },
    { label: '⚖️ 关于我们', href: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-12 py-3 md:py-3.5">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center gap-[10px] cursor-pointer shrink-0"
        >
          <svg
            className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z"
              fill="white"
            />
          </svg>
          <span className="font-stix text-cream leading-[28.5px] text-[22px] sm:text-[26px] md:text-[30px]">
            机场搜
          </span>
        </Link>

        {/* Center: Glass Navigation Bar Pill (Desktop only) */}
        <div className="hidden md:flex items-center bg-black/40 rounded-[14px] border border-white/10 backdrop-blur-[26.5px] p-[4px] gap-[3px] shadow-2xl">
          {menuLinks.map((item, idx) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={idx}
                to={item.href}
                className={`h-[38px] lg:h-[42px] px-3.5 lg:px-4 rounded-[11px] flex items-center transition-all text-xs font-semibold font-suisse whitespace-nowrap ${
                  isActive
                    ? 'bg-cream/20 text-cream border border-cream/30 shadow-inner font-bold'
                    : 'bg-transparent text-tan/80 hover:text-cream hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile: Hamburger toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center relative z-50 text-cream"
        >
          <span className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[0px]' : 'translate-y-1'
              }`}
            />
          </span>
        </button>

        {/* Mobile Fullscreen Drawer Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0A0707]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between px-6 pt-24 pb-10 animate-fade-in font-suisse">
            <div className="flex flex-col gap-5 text-left">
              {menuLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream text-xl sm:text-2xl font-stix font-normal hover:text-tan transition-colors border-b border-white/10 pb-3 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} className="text-tan/50" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
