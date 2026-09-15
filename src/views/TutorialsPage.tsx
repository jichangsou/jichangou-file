import React, { useEffect } from 'react';
import ArticlesSection from '../components/ArticlesSection';
import { Article } from '../data/articles';

interface TutorialsPageProps {
  activeArticle: Article | null;
  setActiveArticle: (article: Article | null) => void;
}

export default function TutorialsPage({ activeArticle, setActiveArticle }: TutorialsPageProps) {
  useEffect(() => {
    document.title = "🛠️ 客户端与 AI 配置教程 - 机场搜";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <main>
        <ArticlesSection
          activeArticle={activeArticle}
          setActiveArticle={setActiveArticle}
          isSubPage={true}
          filterCategory="tutorial"
        />
      </main>
    </div>
  );
}
