import React from 'react';

const Loader: React.FC = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-[9999]">
    <svg className="animate-spin h-12 w-12 mb-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
    <h1 className="text-2xl font-bold mb-2">Chargement…</h1>
    <p className="text-gray-300">Merci de patienter pendant le chargement du portfolio.</p>
  </div>
);

export default Loader;
