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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className={`rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 p-5 flex flex-col h-full border-t-4 border-${project.color}-500`}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-2">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
            )}
            <button
              onClick={() => setSelected(idx)}
              className={`mt-auto inline-block px-4 py-2 rounded transition
                ${project.color === 'blue'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'}
              `}
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
