import GuidesPage from '@/views/GuidesPage';
import { mockArticles } from '@/data/mock';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug || a.id === params.slug);

  return {
    title: `${article ? article.title : '使用教程'} | 机场搜`,
    description: article ? article.summary : '机场选型与客户端配置指南。',
  };
}

export default function GuideDetail({ params }: Props) {
  return <GuidesPage slug={params.slug} />;
}
