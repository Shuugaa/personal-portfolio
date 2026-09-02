import { Link } from 'react-router-dom';

const featured = [
  {
    to: '/projects/formx',
    tag: 'API · Factur-X',
    title: 'FormX',
    text: 'JSON in, PDF Factur-X dans la même requête. Node, Go, Redis.',
  },
  {
    to: '/projects/restock-mail',
    tag: 'WordPress',
    title: 'Shuudev Restock Mail',
    text: 'Liste d’attente rupture de stock, e-mail au restock. Sur WordPress.org.',
  },
  {
    to: '/projects/ecoride',
    tag: 'Formation',
    title: 'Ecoride',
    text: 'Covoiturage de bout en bout : React, API Express, PostgreSQL et MongoDB.',
  },
];

const Home: React.FC = () => (
  <div>
    <p className="text-sm text-neutral-500 mb-3">Shuudev</p>
    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
      Samy Maisse
    </h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
      Auto-entrepreneur. Apps web et plugins WooCommerce.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-4 py-2.5 hover:opacity-90"
      >
        Contact
      </Link>
      <Link
        to="/projects"
        className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium px-4 py-2.5 hover:border-neutral-400"
      >
        Projets
      </Link>
    </div>

    <h2 className="mt-16 text-lg font-semibold tracking-tight">Projets</h2>
    <ul className="mt-6 grid gap-3">
      {featured.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="block border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <p className="text-xs text-neutral-500">{item.tag}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
