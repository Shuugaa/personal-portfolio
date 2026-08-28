import { Link } from 'react-router-dom';

const items = [
  {
    to: '/projects/formx',
    tag: 'API · Factur-X',
    title: 'FormX',
    text: 'Micro-SaaS de facturation électronique : JSON in, PDF Factur-X dans la même requête. Worker Go, file Redis.',
    points: ['Sync par défaut, webhook en option', 'Node / Fastify + Go', 'formx.shuudev.com'],
  },
  {
    to: '/projects/budgetracker',
    tag: 'App web',
    title: 'Budgetracker',
    text: 'Trésorerie, import de relevés, enveloppes. PWA, auth Supabase, chiffrement côté client.',
    points: ['E2EE (AES-GCM)', 'Parseurs CSV / Excel FR', 'budget.shuudev.com'],
  },
  {
    to: '/projects/restock-mail',
    tag: 'WordPress',
    title: 'Shuudev Restock Mail for WooCommerce',
    text: 'Liste d’attente sur produit en rupture, e-mail au restock, journal queued / sent / failed.',
    points: ['Formulaire fiche produit + variations', 'Action Scheduler', 'Désinscription dans l’e-mail'],
  },
  {
    to: '/projects/ecoride',
    tag: 'Formation',
    title: 'Ecoride',
    text: 'Application de covoiturage développée de bout en bout.',
    points: ['React / TypeScript', 'API Express', 'PostgreSQL et MongoDB'],
  },
];

const Projects: React.FC = () => (
  <div>
    <h1 className="text-3xl font-semibold tracking-tight mb-8">Projets</h1>
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="block border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <p className="text-xs text-neutral-500">{item.tag}</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.text}
            </p>
            <ul className="mt-3 text-sm text-neutral-500 list-disc list-inside">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
