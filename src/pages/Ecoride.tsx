const Ecoride: React.FC = () => (
  <div className="max-w-xl">
    <h1 className="text-3xl font-semibold tracking-tight">Ecoride</h1>
    <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Application de covoiturage développée de bout en bout (projet de formation). Front React /
      TypeScript, API Node.js (Express), PostgreSQL pour les comptes et trajets, MongoDB à côté.
    </p>
    <ul className="mt-6 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside space-y-1">
      <li>Front-end React et TypeScript</li>
      <li>API REST Express</li>
      <li>PostgreSQL et MongoDB</li>
      <li>Authentification</li>
      <li>Nominatim / Google Maps</li>
    </ul>
  </div>
);

export default Ecoride;
