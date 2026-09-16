import UpdatesPage from '@/views/UpdatesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '机场最近更新｜机场资料、套餐与状态核对记录',
  description: '查看机场资料、套餐明细、状态与基础信息的最近核对时间与记录时间。',
  alternates: {
    canonical: 'https://jichangsou.com/updates',
  },
  openGraph: {
    title: '机场最近更新｜机场资料、套餐与状态核对记录',
    description: '查看机场资料、套餐明细、状态与基础信息的最近核对时间与记录时间。',
    url: 'https://jichangsou.com/updates',
  },
};

export default function UpdatesRoute() {
  return <UpdatesPage />;
}
