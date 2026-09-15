import RankingPage from '@/views/RankingPage';

interface Props {
  params: {
    type: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const titles: Record<string, string> = {
    best: '综合推荐榜',
    cheap: '性价比/低价榜',
    stable: '高稳定性榜',
    ai: 'AI 使用场景榜',
  };

  const label = titles[params.type] || '机场排行榜';

  return {
    title: `${label} | 机场搜`,
    description: `机场搜 ${label} 大盘，客观呈现 2026 最新节点服务商评测。`,
  };
}

export default function RankingDetail({ params }: Props) {
  return <RankingPage type={params.type} />;
}
