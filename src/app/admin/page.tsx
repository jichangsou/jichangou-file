import AdminPage from '@/views/AdminPage';

export const metadata = {
  title: '后台管理控制台 | 机场搜',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRoot() {
  return <AdminPage />;
}
