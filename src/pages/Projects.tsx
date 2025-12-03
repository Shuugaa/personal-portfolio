import React, { useState } from 'react';
import ecorideImage from '../assets/ecoride.png';
import Portfolio from './Portfolio';
import Ecoride from './Ecoride';

const projects = [
  {
    title: 'Portfolio React',
    description: 'Un site vitrine personnel développé avec React, TypeScript, Vite et Tailwind CSS. Il présente mes compétences, mes projets et propose un theme toggler.',
    features: [
      'Multi-pages avec React Router',
      'Mode sombre/clair personnalisable',
      'Design responsive et moderne',
    ],
    image: '',
    link: '/',
    color: 'blue',
    content: <Portfolio />,
  },
  {
    title: 'Ecoride',
    description: 'Application de gestion de trajets, développée avec React et TypeScript. (Projet Fictif mais développé en intégralité)',
    features: [
      'Système de gestion des trajets',
      'Interface utilisateur moderne et responsive',
      'Intégration d’API externes',
    ],
    image: ecorideImage,
    link: '/ecoride',
    color: 'green',
    content: <Ecoride />,
  },
];

const ProjectOverlay: React.FC<{ project: typeof projects[0], onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
        aria-label="Fermer"
      >
        ×
      </button>
      {project.content ? (
        <div>{project.content}</div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          {project.image && (
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded mb-4" />
          )}
          <p className="mb-4">{project.description}</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl shadow-2xl bg-gradient-to-br from-white via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 flex flex-col h-full border-t-4 border-${project.color}-500 transition-transform duration-300 hover:scale-105 hover:shadow-3xl animate-pop`}
          >
            <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full bg-${project.color}-100 text-${project.color}-700 dark:bg-${project.color}-900 dark:text-${project.color}-200 shadow`}>{project.color === 'blue' ? 'React' : 'Node.js'}</span>
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover rounded-xl mb-4 shadow-lg" />
            )}
            <h3 className="text-2xl font-bold mb-2 text-${project.color}-700 dark:text-${project.color}-300">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button
              onClick={() => setSelected(idx)}
              className={`mt-auto inline-block px-5 py-2 rounded-full font-semibold shadow bg-gradient-to-r
                ${project.color === 'blue'
                  ? 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                  : 'from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white'}
                transition-transform duration-200 group-hover:scale-110 animate-pop`}
            >
              Voir le projet
            </button>
          </div>
        ))}
      </div>
      {selected !== null && (
        <ProjectOverlay project={projects[selected]} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Projects;
