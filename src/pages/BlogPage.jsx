import { useEffect } from 'react';
import BlogPages from '../components/BlogPages';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogPages currentPage="blog" />
  );
}
