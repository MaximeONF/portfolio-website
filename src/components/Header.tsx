import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0F0F0F]/80 border-b border-white/10">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(255,107,107,0.4)]">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-white">Studio Workora</span>
              <span className="text-xs text-white/50">studio.workora.fr</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all relative group ${
                  isActive(link.path) ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] transition-all ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white text-sm font-semibold rounded-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,107,107,0.3)] hover:shadow-[0_0_40px_rgba(255,107,107,0.5)]"
            >
              Démarrer un projet
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-white/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-2.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white text-sm font-semibold rounded-lg text-center transition-all"
            >
              Démarrer un projet
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
