import WikiPage from '@/views/WikiPage';

export const metadata = {
  title: '网络知识百科',
  description: '普及 IEPL/IPLC 专线原理、VLESS 协议、FullCone UDP 与 DNS 防泄漏原理。',
  alternates: {
    canonical: 'https://jichangsou.com/wiki',
  },
};

export default function WikiRoot() {
  return <WikiPage />;
}
