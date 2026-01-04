import React from 'react';

const Home: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" fill="url(#grad)" />
        <defs>
          <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <span className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 z-10 flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </span>
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 z-10">ShuuDev</h1>
    <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2 z-10">Développement web & applications</h2>
    <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-6 z-10 max-w-xl">
      Bienvenue sur le site de ShuuDev ! Passionné par le développement web moderne, ShuuDev conçoit des applications performantes et élégantes avec React, TypeScript, Node.js et Tailwind CSS.
    </p>
    <a
      href="/contact"
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-pink-600 transition-transform duration-200 z-10 animate-pop"
    >
      Me contacter
    </a>
  </section>
);

export default Home;
