import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import RecommendationsSection from '../components/RecommendationsSection';
import MonitorSection from '../components/MonitorSection';
import ArticlesSection from '../components/ArticlesSection';
import DisclaimerSection from '../components/DisclaimerSection';
import { Article } from '../data/articles';

interface HomePageProps {
  onOpenArticleById: (airportId: string) => void;
  activeArticle: Article | null;
  setActiveArticle: (article: Article | null) => void;
}

export default function HomePage({ onOpenArticleById, activeArticle, setActiveArticle }: HomePageProps) {
  useEffect(() => {
    document.title = "机场搜 • 2026 科学上网与机场节点选型全景大盘";
  }, []);

  return (
    <>
      {/* Page Single H1 for SEO semantics */}
      <h1 className="sr-only">
        机场搜 • 2026 科学上网与机场节点选型全景大盘
      </h1>

      {/* Hero & macOS Dashboard */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        <RecommendationsSection onOpenArticle={onOpenArticleById} isSubPage={false} />
        <MonitorSection onOpenArticle={onOpenArticleById} isSubPage={false} />
        <ArticlesSection activeArticle={activeArticle} setActiveArticle={setActiveArticle} isSubPage={false} />
        <DisclaimerSection isSubPage={false} />
      </main>
    </>
  );
}
