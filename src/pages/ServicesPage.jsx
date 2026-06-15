import { useEffect } from 'react';
import Services from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-white dark:bg-gray-950">
      <Services />
    </main>
  );
}
