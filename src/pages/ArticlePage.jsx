import { useEffect } from 'react';
import BlogPages from '../components/BlogPages';

export default function ArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogPages currentPage="blog-detail" />
  );
}
