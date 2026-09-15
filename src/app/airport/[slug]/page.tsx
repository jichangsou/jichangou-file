import AirportDetailPage from '@/views/AirportDetailPage';
import { mockAirports } from '@/data/mock';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const airport = mockAirports.find(a => a.slug === params.slug || a.id === params.slug);

  if (!airport) {
    return {
      title: '机场不存在 | 机场搜',
    };
  }

  return {
    title: `${airport.name}怎么样？2026年价格、节点、协议与使用情况`,
    description: airport.description,
    alternates: {
      canonical: `https://jichangsou.com/airport/${airport.slug}`,
    },
    openGraph: {
      title: `${airport.name}怎么样？2026年价格与使用情况 | 机场搜`,
      description: airport.description,
      url: `https://jichangsou.com/airport/${airport.slug}`,
    },
  };
}

export default function AirportDetail({ params }: Props) {
  const airport = mockAirports.find(a => a.slug === params.slug || a.id === params.slug);
  if (!airport) {
    notFound();
  }

  return <AirportDetailPage slug={params.slug} />;
}
