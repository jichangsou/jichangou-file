import WikiPage from '@/views/WikiPage';
import { mockArticles } from '@/data/mock';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug || a.id === slug);

  if (!article) {
    return {
      title: '百科不存在',
    };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://jichangsou.com/wiki/${article.slug}`,
    },
  };
}

export default async function WikiDetail({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find(a => a.slug === slug || a.id === slug);
  if (!article) {
    notFound();
  }
  return <WikiPage slug={slug} />;
}

