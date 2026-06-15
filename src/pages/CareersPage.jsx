import { useEffect } from 'react';
import Careers from '../components/Careers';

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-white dark:bg-gray-950">
      <Careers />
    </main>
  );
}
