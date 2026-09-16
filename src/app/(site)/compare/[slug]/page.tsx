import { notFound } from 'next/navigation';
import { mockCompareItems } from '@/data/mock';

export async function generateStaticParams() {
  return mockCompareItems.map(item => ({ slug: item.slug }));
}

export default function CompareSlugPage() {
  notFound();
}
