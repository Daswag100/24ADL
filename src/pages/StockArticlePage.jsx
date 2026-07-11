import { useEffect } from 'react';
import BlogPages from '../components/BlogPages';

export default function StockArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogPages currentPage="blog-stock-detail" />
  );
}
