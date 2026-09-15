import WikiPage from '@/views/WikiPage';

export const metadata = {
  title: '网络知识百科 | 机场搜',
  description: '普及 IEPL/IPLC 专线原理、VLESS 协议、FullCone UDP 与 DNS 防泄漏原理。',
};

export default function WikiRoot() {
  return <WikiPage />;
}
