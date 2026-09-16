import AirportDetailPage from '@/views/AirportDetailPage';
import { mockAirports } from '@/data/mock';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const airport = mockAirports.find(a => a.slug === slug || a.id === slug);

  if (!airport) {
    return {
      title: '机场不存在',
    };
  }

  return {
    title: `${airport.name}怎么样？2026年价格与使用情况`,
    description: airport.description,
    alternates: {
      canonical: `https://jichangsou.com/airport/${airport.slug}`,
    },
    openGraph: {
      title: `${airport.name}怎么样？2026年价格与使用情况`,
      description: airport.description,
      url: `https://jichangsou.com/airport/${airport.slug}`,
    },
  };
}

export default async function AirportDetail({ params }: Props) {
  const { slug } = await params;
  const airport = mockAirports.find(a => a.slug === slug || a.id === slug);
  if (!airport) {
    notFound();
  }

  return <AirportDetailPage slug={slug} />;
}
