import { Link } from 'react-router-dom';

const Projects: React.FC = () => (
  <div>
    <h1 className="text-3xl font-semibold tracking-tight mb-8">Projets</h1>
    <Link
      to="/"
      className="block border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600"
    >
      <p className="text-xs text-neutral-500">WordPress</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">Shuudev Restock Mail for WooCommerce</h2>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Liste d’attente sur produit en rupture, e-mail au restock, journal queued / sent / failed.
        En revue sur WordPress.org, pas encore listé.
      </p>
      <ul className="mt-3 text-sm text-neutral-500 list-disc list-inside">
        <li>Formulaire fiche produit + variations</li>
        <li>Action Scheduler</li>
        <li>Désinscription dans l’e-mail</li>
      </ul>
    </Link>
  </div>
);

export default Projects;
