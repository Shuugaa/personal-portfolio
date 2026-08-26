const MentionsLegales: React.FC = () => (
  <div className="max-w-xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
    <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">Mentions légales</h1>

    <h2 className="font-medium text-neutral-900 dark:text-white mt-8 mb-2">Éditeur</h2>
    <p>
      Shuudev (Samy Maisse)
      <br />
      Auto-entrepreneur
      <br />
      SIRET : 902 278 472 00029
      <br />
      35 rue Georges Clemenceau, 77210 Avon, France
      <br />
      <a href="mailto:contact@shuudev.com" className="underline underline-offset-2">
        contact@shuudev.com
      </a>
    </p>

    <h2 className="font-medium text-neutral-900 dark:text-white mt-8 mb-2">Hébergeur</h2>
    <p>
      Vercel Inc.
      <br />
      440 N Barrington Ave #4133, Covina, CA 91723, USA
    </p>

    <h2 className="font-medium text-neutral-900 dark:text-white mt-8 mb-2">Propriété intellectuelle</h2>
    <p>
      Les contenus de ce site sont la propriété de l’éditeur, sauf mention contraire. Toute
      reproduction sans accord préalable est interdite.
    </p>

    <h2 className="font-medium text-neutral-900 dark:text-white mt-8 mb-2">Données personnelles</h2>
    <p>Ce site ne collecte pas de données personnelles (pas de formulaire, pas de cookies de suivi).</p>
  </div>
);

export default MentionsLegales;
