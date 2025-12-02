import React from 'react';

const Home: React.FC = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow">
    <h2 className="text-2xl font-bold mb-4">Portofolio React</h2>
    <p className="mb-4">Bienvenue sur le détail de mon portfolio.</p>
    <h3 className="text-xl font-semibold mb-2">Technologies utilisées :</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><span className="font-medium">React</span> (librairie d’interface moderne)</li>
      <li><span className="font-medium">TypeScript</span> (JavaScript typé)</li>
      <li><span className="font-medium">Vite</span> (outil de développement rapide)</li>
      <li><span className="font-medium">Tailwind CSS</span> (framework CSS utilitaire)</li>
      <li><span className="font-medium">React Router</span> (navigation multi-pages)</li>
    </ul>
  </div>
);

export default Home;
