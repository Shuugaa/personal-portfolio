import { useEffect, useState } from 'react';

export type Theme = 'system' | 'light' | 'dark';

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const order: Theme[] = ['system', 'light', 'dark'];

export const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'system' || saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const applied = theme === 'system' ? getSystemTheme() : theme;
    document.documentElement.classList.toggle('dark', applied === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, ready]);

  if (!ready) return null;

  return (
    <button
      type="button"
      className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1"
      aria-label={`Thème : ${theme}`}
      title={`Thème : ${theme}`}
      onClick={() => setTheme(order[(order.indexOf(theme) + 1) % order.length])}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        {theme === 'light' ? (
          <circle cx="12" cy="12" r="5" />
        ) : theme === 'dark' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
        )}
      </svg>
    </button>
  );
};
