import React, { useEffect } from 'react';
import RecommendationsSection from '../components/RecommendationsSection';

interface PopularPageProps {
  onOpenArticleById: (airportId: string) => void;
}

export default function PopularPage({ onOpenArticleById }: PopularPageProps) {
  useEffect(() => {
    document.title = "机场推荐 - 机场搜";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <main>
        <RecommendationsSection onOpenArticle={onOpenArticleById} isSubPage={true} />
      </main>
    </div>
  );
}
