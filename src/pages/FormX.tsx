import { Link } from 'react-router-dom';

const features = [
  'API : une facture en JSON, un PDF Factur-X en retour (callback HTTPS)',
  'PDF/A-3 + XML (norme Factur-X / ZUGFeRD)',
  'Clés API, comptes, file d’attente Redis',
  'Idempotence sur les appels',
  'Interface : docs, dashboard, auth',
];

const built = [
  {
    title: 'API et comptes',
    text: 'Backend Node (Fastify) : webhook facture, auth, clés. Postgres / Supabase pour les comptes. Redis comme source de vérité pour « cette clé est-elle valide ? », pour ne pas interroger l’auth à chaque appel.',
  },
  {
    title: 'Worker Go',
    text: 'Un worker consomme la file, produit le PDF/A-3 (Ghostscript) et poste le fichier sur l’URL de callback. La génération n’est pas dans le process HTTP.',
  },
  {
    title: 'Front et local',
    text: 'Interface Next.js (inscription, dashboard, docs). Le tout se lève avec Docker Compose (API, auth, worker, Redis, front).',
  },
];

const stack = [
  'Next.js',
  'Node',
  'Fastify',
  'Go',
  'Redis',
  'Supabase',
  'Postgres',
  'Docker',
];

const FormX: React.FC = () => (
  <div className="max-w-xl">
    <Link
      to="/projects"
      className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
    >
      ← Projets
    </Link>
    <p className="mt-8 text-xs text-neutral-500">API · Factur-X</p>
    <h1 className="mt-1 text-3xl font-semibold tracking-tight">FormX</h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Micro-SaaS de facturation électronique : tu envoies une facture à l’API, tu reçois un PDF
      Factur-X.
    </p>
    <a
      href="https://formx.shuudev.com"
      className="mt-6 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-4 py-2.5 hover:opacity-90"
      target="_blank"
      rel="noopener noreferrer"
    >
      formx.shuudev.com
    </a>

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

export default FormX;
