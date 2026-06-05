import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDarkTheme = savedTheme === 'dark';
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] text-gray-200" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-gray-700" />
      )}
    </button>
  );
}
