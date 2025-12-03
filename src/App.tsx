import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Ecoride from './pages/Ecoride';
import Contact from './pages/Contact';
import { ThemeToggler } from './components/ThemeToggler';
import MentionsLegales from './pages/MentionsLegales';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        <nav className="flex flex-col md:flex-row md:items-center md:justify-center py-6 mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg rounded-b-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-center items-center w-full">
            <Link to="/" className="px-4 py-2 rounded-lg font-semibold text-white/90 dark:text-white/80 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">Accueil</Link>
            <Link to="/about" className="px-4 py-2 rounded-lg font-semibold text-white/90 dark:text-white/80 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">À propos</Link>
            <Link to="/projects" className="px-4 py-2 rounded-lg font-semibold text-white/90 dark:text-white/80 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">Projets</Link>
            <Link to="/contact" className="px-4 py-2 rounded-lg font-semibold text-white/90 dark:text-white/80 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm">Contact</Link>
          </div>
        </nav>
        <main className="max-w-2xl mx-auto px-4 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-2xl shadow-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ecoride" element={<Ecoride />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <div className="fixed top-3 right-6 z-50">
          <ThemeToggler />
        </div>
        <footer className="text-center text-xs text-gray-500 mt-8 mb-2">
          <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
        </footer>
      </div>
    </Router>
  );
};

export default App;
