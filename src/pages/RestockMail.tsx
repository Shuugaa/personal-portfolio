import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Rupture de stock',
    text: 'Le formulaire s’affiche sur la fiche produit. Le client laisse son e-mail.',
  },
  {
    title: 'Vous restockez',
    text: 'WooCommerce Action Scheduler envoie l’e-mail. Pas de cron à ajouter.',
  },
  {
    title: 'Vous voyez si ça part',
    text: 'WooCommerce → Restock Mail : waiting, queued, sent ou failed.',
  },
];

const RestockMail: React.FC = () => (
  <div>
    <Link
      to="/projects"
      className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
    >
      ← Projets
    </Link>
    <p className="mt-8 text-sm text-neutral-500">WordPress</p>
    <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
      Shuudev Restock Mail for WooCommerce
    </h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
      WooCommerce n’écrit pas aux clients quand un produit revient. Ce plugin le fait, et
      montre si le mail a vraiment quitté le serveur. Les adresses restent sur la boutique.
    </p>
    <p className="mt-3 text-xs text-neutral-500">
      En revue sur WordPress.org — pas encore dans le catalogue.
    </p>

    <ul className="mt-14 grid gap-3">
      {[
        'Formulaire sur produit en rupture, y compris les variations',
        'E-mail de restock + lien de désinscription',
        'Journal : queued, sent, failed',
        'E-mail de test avant d’ouvrir la liste',
      ].map((item) => (
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

    <h2 className="mt-16 text-lg font-semibold tracking-tight">Fonctionnement</h2>
    <ul className="mt-6 grid gap-8 sm:grid-cols-3">
      {steps.map((s) => (
        <li key={s.title}>
          <p className="font-medium">{s.title}</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default RestockMail;
