import { Link } from 'react-router-dom';
import formxScreen from '../assets/formx.png';

const features = [
  'JSON in, PDF Factur-X dans la même requête (application/pdf)',
  'Webhook HTTPS en option si tu as déjà un serveur en face',
  'PDF/A-3 + XML (norme Factur-X / ZUGFeRD)',
  'Clés API, crédits prépayés, file Redis, worker Go',
  'Idempotence : même clé, même job, pas un second Ghostscript',
];

const built = [
  {
    title: 'API et comptes',
    text: 'Backend Node (Fastify) : POST facture, auth, clés. Postgres / Supabase pour les comptes. Redis pour valider la clé à chaque appel sans passer par l’auth.',
  },
  {
    title: 'Worker Go',
    text: 'La génération (Ghostscript) reste dans une file. En sync, l’API attend le job et renvoie le PDF. En async, callback multipart. GET /jobs/:id si le délai est dépassé.',
  },
  {
    title: 'Front',
    text: 'Next.js : accueil, docs, dashboard, auth. Docker Compose pour l’ensemble (API, auth, worker, Redis, front).',
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
  <div>
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
        Micro-SaaS de facturation électronique : une requête JSON, un PDF Factur-X en retour.
      </p>
      <a
        href="https://formx.shuudev.com"
        className="mt-6 inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-4 py-2.5 hover:opacity-90"
        target="_blank"
        rel="noopener noreferrer"
      >
        formx.shuudev.com
      </a>
    </div>

    <figure className="mt-10">
      <img
        src={formxScreen}
        alt="Accueil FormX : génération de factures Factur-X par API"
        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800"
      />
    </figure>

    <div className="max-w-xl">
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
  </div>
);

export default FormX;
