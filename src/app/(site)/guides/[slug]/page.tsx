import GuidesPage from '@/views/GuidesPage';
import { mockArticles } from '@/data/mock';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return mockArticles.filter(a => a.type === 'guide').map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug || a.id === slug);

  if (!article) {
    return {
      title: '教程不存在',
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://jichangsou.com/guides/${article.slug}`,
    },
  };
}

export default async function GuideDetail({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug || a.id === slug);
  if (!article) {
    notFound();
  }
  return <GuidesPage slug={slug} />;
}
