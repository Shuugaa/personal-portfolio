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
      Shuudev, c’est Samy Maisse, auto-entrepreneur en France. Apps web (React, TypeScript)
      et plugins WooCommerce.
    </p>
    <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Budgetracker : trésorerie, import de relevés, chiffrement côté client. Aussi Restock Mail
      (WooCommerce) et Ecoride (covoiturage, formation). Ce site en fait partie.
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
  </div>
);

export default About;
