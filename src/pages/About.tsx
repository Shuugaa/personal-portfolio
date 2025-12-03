import React from 'react';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Express', 'PostgreSQL', 'MongoDB', 'Vite', 'Git', 'Freelance'
];

const About: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" fill="url(#grad3)" />
        <defs>
          <radialGradient id="grad3" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#f472b6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <span className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4 z-10 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </span>
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 z-10">À propos</h2>
    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 z-10 text-center max-w-xl">
      Développeur web freelance basé en France, passionné par les technos modernes.<br />
      J’aime concevoir des applications performantes, accessibles et élégantes.<br />
      Curieux, autonome et toujours prêt à relever de nouveaux défis !
    </p>
    <div className="flex flex-wrap gap-2 justify-center z-10 mb-4">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-semibold shadow animate-pop">{skill}</span>
      ))}
    </div>
    <div className="text-xs text-gray-500 z-10 text-center">
      Disponible pour missions, collaborations et projets ambitieux.
    </div>
  </section>
);

export default About;
