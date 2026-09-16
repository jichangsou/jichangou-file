import RankingPage from '@/views/RankingPage';

export const metadata = {
  title: '机场排行榜大盘',
  description: '机场搜排行榜大盘，整理收录机场的价格套餐、线路架构与支持协议排序大盘。',
  alternates: {
    canonical: 'https://jichangsou.com/ranking',
  },
};

export default function RankingRoot() {
  return <RankingPage type="best" />;
}
