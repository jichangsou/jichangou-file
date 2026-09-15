import RankingPage from '@/views/RankingPage';

export const metadata = {
  title: '机场排行榜大盘 | 机场搜',
  description: '基于客观评分模型计算，结合价格、流量、稳定性与AI解封支持算出的加权排名。',
};

export default function RankingRoot() {
  return <RankingPage type="best" />;
}
