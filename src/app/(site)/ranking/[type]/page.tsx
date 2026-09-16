import RankingPage from '@/views/RankingPage';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    type: string;
  }>;
}

const titles: Record<string, string> = {
  best: '综合推荐榜',
  cheap: '性价比/低价榜',
  stable: '高稳定性榜',
  ai: 'AI 使用场景榜',
};

export async function generateMetadata({ params }: Props) {
  const { type } = await params;
  const label = titles[type];

  if (!label) {
    return {
      title: '排行榜不存在',
    };
  }

  return {
    title: label,
    description: `机场搜 ${label} 大盘，提供 Demo 排行与测试排序展示。`,
    alternates: {
      canonical: `https://jichangsou.com/ranking/${type}`,
    },
  };
}

export default async function RankingDetail({ params }: Props) {
  const { type } = await params;
  if (!titles[type]) {
    notFound();
  }
  return <RankingPage type={type} />;
}

