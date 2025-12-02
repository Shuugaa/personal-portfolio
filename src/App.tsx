import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Ecoride from './pages/Ecoride';
import { ThemeToggler } from './components/ThemeToggler';
import MentionsLegales from './pages/MentionsLegales';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        <nav className="flex flex-col md:flex-row md:items-center md:justify-center py-6 bg-gray-100 dark:bg-gray-800 border-b mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-center items-center w-full">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">Accueil</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">À propos</Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold">Projets</Link>
          </div>
        </nav>
        <main className="max-w-2xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ecoride" element={<Ecoride />} />
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
