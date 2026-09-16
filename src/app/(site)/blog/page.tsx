import BlogPage from '@/views/BlogPage';

export const metadata = {
  title: '独立技术博客',
  description: '探讨 Jamstack 开发、网络工程、全栈架构与前沿技术。',
  alternates: {
    canonical: 'https://jichangsou.com/blog',
  },
};

export default function BlogRoot() {
  return <BlogPage />;
}
