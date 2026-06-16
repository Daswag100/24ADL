import { useEffect } from 'react';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-brand-white dark:bg-gray-950">
      <FAQ />
    </main>
  );
}
