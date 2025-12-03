import React, { useEffect, useState } from 'react';

// Type pour le thème
export type Theme = 'system' | 'light' | 'dark';

function getSystemTheme(): 'light' | 'dark' {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

const icons = {
  system: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.03-3.5a7.03 7.03 0 0 0-.14-1.5l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.03 7.03 0 0 0-1.3-.75l-.38-2.65A.5.5 0 0 0 13 2h-2a.5.5 0 0 0-.5.42l-.38 2.65a7.03 7.03 0 0 0-1.3.75l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65c-.09.49-.14.99-.14 1.5s.05 1.01.14 1.5l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.41.29.85.54 1.3.75l.38 2.65A.5.5 0 0 0 11 22h2a.5.5 0 0 0 .5-.42l.38-2.65c.45-.21.89-.46 1.3-.75l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65c.09-.49.14-.99.14-1.5z" />
    </svg>
  ),
  light: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M18.72 5.28l1.06-1.06" />
    </svg>
  ),
  dark: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  ),
};


export const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(getSystemTheme());
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) setTheme(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    let applied: 'light' | 'dark';
    if (theme === 'system') {
      applied = getSystemTheme();
    } else {
      applied = theme;
    }
    setResolvedTheme(applied);
    const root = window.document.documentElement;
    if (applied === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, ready]);

  useEffect(() => {
    if (!ready || theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setResolvedTheme(getSystemTheme());
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme, ready]);

  if (!ready) return null;

  // Affiche l'icône du thème actif
  const activeIcon = icons[theme === 'system' ? 'system' : resolvedTheme];

  return (
    <div
      className={`flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg transition-all duration-200
        ${open ? 'px-3 py-2' : 'px-2 py-2 w-12 h-12 justify-center'} animate-pop`}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      {open ? (
        (['system', 'light', 'dark'] as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => {
              setTheme(t);
              setOpen(false);
            }}
            className={`p-2 rounded-full transition border-2 ${theme === t ? 'border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border-transparent hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label={`Activer le mode ${t}`}
          >
            {icons[t]}
          </button>
        ))
      ) : (
        <button
          className="p-2 rounded-full border-2 border-transparent focus:outline-none"
          aria-label="Changer le thème"
          tabIndex={0}
          onClick={() => setOpen((v) => !v)}
        >
          {activeIcon}
        </button>
      )}
    </div>
  );
};
