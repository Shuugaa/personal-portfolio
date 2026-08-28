import { Link } from 'react-router-dom';

const skills = [
  'PHP',
  'WordPress',
  'WooCommerce',
  'React',
  'TypeScript',
  'Node.js',
  'Go',
  'PostgreSQL',
  'Supabase',
  'Git',
];

const About: React.FC = () => (
  <div className="max-w-xl">
    <h1 className="text-3xl font-semibold tracking-tight">À propos</h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Shuudev, c’est Samy Maisse. Auto-entrepreneur en France.
    </p>
    <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Je développe des applications web et des plugins WooCommerce : interfaces, API, données,
      e-mails. Du code qu’on ouvre ensuite, pas seulement une page pour le montrer.
    </p>
    <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      React et TypeScript d’un côté, PHP et WordPress de l’autre. Postgres, Node, un peu de Go.
    </p>
    <div className="mt-8 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs text-neutral-700 dark:text-neutral-300"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="mt-10 flex flex-wrap gap-3">
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
  </div>
);

export default About;
