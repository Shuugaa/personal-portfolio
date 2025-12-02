import React from 'react';

const Ecoride: React.FC = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow">
    <h2 className="text-2xl font-bold mb-6">Ecoride</h2>
    <p className="mb-4">
      Ecoride est une application de gestion de trajets éco-responsables développée avec React pour le front-end et Node.js (Express) pour le back-end.
      Elle utilise à la fois une base de données PostgreSQL pour la gestion structurée des utilisateurs et trajets, et MongoDB pour le stockage flexible de données complémentaires.
    </p>
    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
      <li>Front-end en React et TypeScript</li>
      <li>Back-end API REST avec Node.js et Express</li>
      <li>Base de données relationnelle PostgreSQL</li>
      <li>Stockage NoSQL avec MongoDB</li>
      <li>Interface utilisateur moderne et responsive</li>
      <li>Authentification et gestion des utilisateurs</li>
      <li>Intégration d’API externes pour les données de transport (Google Maps API, Nominatim)</li>
    </ul>
  </div>
);

export default Ecoride;
