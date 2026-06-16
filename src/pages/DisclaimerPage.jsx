import { useEffect } from 'react';
import LegalPages from '../components/LegalPages';

export default function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPages currentPage="disclaimer" />
  );
}
