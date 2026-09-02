import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import FormX from './pages/FormX';
import RestockMail from './pages/RestockMail';
import Ecoride from './pages/Ecoride';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import { ThemeToggler } from './components/ThemeToggler';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm ${isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'}`;

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col bg-[#f6f5f2] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="border-b border-neutral-200/80 dark:border-neutral-800 bg-[#f6f5f2]/90 dark:bg-neutral-950/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-3xl px-5 min-h-14 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link to="/" className="font-semibold tracking-tight text-[15px] shrink-0">
            Shuudev
          </Link>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            <NavLink to="/" end className={linkClass}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              À propos
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projets
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <ThemeToggler />
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-3xl px-5 py-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/formx" element={<FormX />} />
          <Route path="/projects/restock-mail" element={<RestockMail />} />
          <Route path="/projects/ecoride" element={<Ecoride />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
        <div className="mx-auto max-w-3xl px-5 py-8 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-1">
            <span>Shuudev — auto-entrepreneur</span>
          </div>
          <div className="flex flex-col gap-1 sm:items-end mt-4 sm:mt-0">
            <a href="mailto:contact@shuudev.com" className="hover:text-neutral-800 dark:hover:text-neutral-300">
              contact@shuudev.com
            </a>
            <Link to="/mentions-legales" className="hover:text-neutral-800 dark:hover:text-neutral-300">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
