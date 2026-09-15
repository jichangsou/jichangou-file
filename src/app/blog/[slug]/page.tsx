import BlogPage from '@/views/BlogPage';
import { articles } from '@/data/articles';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const article = articles.find(a => a.id === params.slug);

  return {
    title: `${article ? article.title : '博客文章'} | 机场搜`,
    description: article ? article.description : '技术思考与全栈实践。',
  };
}

export default function BlogDetail({ params }: Props) {
  return <BlogPage slug={params.slug} />;
}
