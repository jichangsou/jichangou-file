import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOPIC_CONFIGS } from '@/data/topics';
import TopicDetailPage from '@/views/TopicDetailPage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(TOPIC_CONFIGS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = TOPIC_CONFIGS[slug];
  if (!config) {
    return {
      title: '专题未找到｜机场搜',
    };
  }

  return {
    title: config.seoTitle,
    description: config.seoDescription,
    alternates: {
      canonical: `https://jichangsou.com/topics/${slug}`,
    },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const config = TOPIC_CONFIGS[slug];
  if (!config) {
    notFound();
  }

  return <TopicDetailPage slug={slug} />;
}
