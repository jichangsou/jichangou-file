import React, { useEffect } from 'react';
import ArticlesSection from '../components/ArticlesSection';
import { Article } from '../data/articles';

interface ReviewsPageProps {
  activeArticle: Article | null;
  setActiveArticle: (article: Article | null) => void;
}

export default function ReviewsPage({ activeArticle, setActiveArticle }: ReviewsPageProps) {
  useEffect(() => {
    document.title = "机场测评文章 - 机场搜";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <main>
        <ArticlesSection
          activeArticle={activeArticle}
          setActiveArticle={setActiveArticle}
          isSubPage={true}
          filterCategory="review"
        />
      </main>
    </div>
  );
}
