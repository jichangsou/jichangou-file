import React, { useEffect } from 'react';
import MonitorSection from '../components/MonitorSection';

interface MonitorPageProps {
  onOpenArticleById: (airportId: string) => void;
}

export default function MonitorPage({ onOpenArticleById }: MonitorPageProps) {
  useEffect(() => {
    document.title = "机场节点大盘 - 机场搜";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <main>
        <MonitorSection onOpenArticle={onOpenArticleById} isSubPage={true} />
      </main>
    </div>
  );
}
