import WikiPage from '@/views/WikiPage';
import { mockArticles } from '@/data/mock';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const article = mockArticles.find(a => a.slug === params.slug || a.id === params.slug);

  return {
    title: `${article ? article.title : '网络百科'} | 机场搜`,
    description: article ? article.summary : '网络工程与节点传输协议百科科普。',
  };
}

export default function WikiDetail({ params }: Props) {
  return <WikiPage slug={params.slug} />;
}
