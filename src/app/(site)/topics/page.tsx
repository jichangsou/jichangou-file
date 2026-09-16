import { Metadata } from 'next';
import TopicsIndexPage from '@/views/TopicsIndexPage';

export const metadata: Metadata = {
  title: '机场专题｜按价格、线路、协议与节点分类浏览机场资料',
  description: '按价格套餐、IEPL/IPLC专线、VLESS协议、ChatGPT解锁及香港/日本节点地区分类浏览机场资料。',
  alternates: {
    canonical: 'https://jichangsou.com/topics',
  },
};

export default function TopicsPage() {
  return <TopicsIndexPage />;
}
