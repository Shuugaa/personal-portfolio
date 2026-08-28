import { Link } from 'react-router-dom';

const features = [
  'Trésorerie : comptes, charges, dettes, soldes à une date',
  'Mouvements, filtres, saisie manuelle',
  'Import CSV / Excel de relevés',
  'Catégorisation par mots-clés, détection des virements internes',
  'Enveloppes par catégorie, prévisions et courbe sur plusieurs mois',
  'PWA installable (ordi et téléphone)',
];

const built = [
  {
    title: 'Coffre E2EE',
    text: 'Les données budget sont chiffrées dans le navigateur (AES-GCM, PBKDF2) avant d’aller sur Supabase. Une clé de secours est montrée une fois à la création du coffre. L’hébergeur ne voit pas les relevés en clair.',
  },
  {
    title: 'Comptes isolés',
    text: 'Auth email, Postgres, Row Level Security. Un utilisateur ne lit pas les lignes d’un autre. Inscription filtrée par code d’accès.',
  },
  {
    title: 'Import de relevés',
    text: 'Parseurs pour les exports CSV / Excel courants (dates FR, débit/crédit). Les fichiers ne sont pas stockés : seulement date, libellé, montant, compte.',
  },
  {
    title: 'Usage réel',
    text: 'PIN optionnel sur l’appareil, thème, onboarding des comptes. Ce n’est pas une démo : l’app tourne sur budget.shuudev.com, accès restreint.',
  },
];

const stack = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind',
  'Supabase',
  'Postgres',
  'Recharts',
  'PWA',
];

const Budgetracker: React.FC = () => (
  <div className="max-w-xl">
    <Link
      to="/projects"
      className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
    >
      ← Projets
    </Link>
    <p className="mt-8 text-xs text-neutral-500">App web · PWA</p>
    <h1 className="mt-1 text-3xl font-semibold tracking-tight">Budgetracker</h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Application de suivi budgétaire : voir où en est la trésorerie, coller un relevé, tenir des
      enveloppes. Outil perso, pas une banque ni un conseil financier.
    </p>
    <a
      href="https://budget.shuudev.com"
      className="mt-6 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-4 py-2.5 hover:opacity-90"
      target="_blank"
      rel="noopener noreferrer"
    >
      budget.shuudev.com
    </a>
    <p className="mt-2 text-xs text-neutral-500">Accès restreint (invitation).</p>

    <h2 className="mt-14 text-lg font-semibold tracking-tight">Ce que ça fait</h2>
    <ul className="mt-6 grid gap-3">
      {features.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-lg px-4 py-3"
        >
          <span className="text-neutral-400 select-none" aria-hidden>
            —
          </span>
          {item}
        </li>
      ))}
    </ul>

    <h2 className="mt-14 text-lg font-semibold tracking-tight">Ce que j’ai fait</h2>
    <ul className="mt-6 grid gap-8">
      {built.map((item) => (
        <li key={item.title}>
          <p className="font-medium">{item.title}</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {item.text}
          </p>
        </li>
      ))}
    </ul>

    <div className="mt-10 flex flex-wrap gap-2">
      {stack.map((item) => (
        <span
          key={item}
          className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs text-neutral-700 dark:text-neutral-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Budgetracker;
