import { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-[#111827] text-white">
      <Contact />
    </main>
  );
}
