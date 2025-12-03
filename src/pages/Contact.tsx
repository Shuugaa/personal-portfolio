import React from 'react';

const Contact: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" fill="url(#grad2)" />
        <defs>
          <radialGradient id="grad2" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 z-10">Contact</h2>
    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 z-10 text-center max-w-lg">
      Tu veux discuter d’un projet, d’une mission ou simplement dire bonjour ?<br />
      Je réponds rapidement par mail !
    </p>
    <a
      href={"mailto:" + "cmp2cfw8n" + "&#64;" + "mozmail.com"}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-pink-600 transition-transform duration-200 z-10 animate-pop"
    >
      Envoyer un mail
    </a>
    <div className="mt-8 text-xs text-gray-500 z-10 text-center flex items-center justify-center gap-2">
      Ou retrouve-moi sur
      <a href="https://github.com/Shuugaa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline hover:text-blue-600">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
          <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
        </svg>
        GitHub
      </a>
    </div>
  </section>
);

export default Contact;
