import ComparePage from '@/views/ComparePage';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `机场对比分析 (${params.slug}) | 机场搜`,
    description: `查看关于 ${params.slug} 的深度客观对比评估与差异分析。`,
  };
}

export default function CompareDetail({ params }: Props) {
  return <ComparePage slug={params.slug} />;
}
