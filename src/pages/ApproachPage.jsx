import { useEffect } from 'react';
import Approach from '../components/Approach';

export default function ApproachPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-white dark:bg-gray-950">
      <Approach />
    </main>
  );
}
