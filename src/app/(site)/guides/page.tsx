import GuidesPage from '@/views/GuidesPage';

export const metadata = {
  title: '使用教程大盘',
  description: '涵盖 Clash Verge, Shadowrocket, sing-box 及 TUN 模式的详尽指导。',
  alternates: {
    canonical: 'https://jichangsou.com/guides',
  },
};

export default function GuidesRoot() {
  return <GuidesPage />;
}
