import { Link } from 'react-router-dom';
import { Mail, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A2E] to-[#0A0A0A] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B6B] rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ECDC4] rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.4)]">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Studio Workora</span>
                <span className="text-xs text-white/40">studio.workora.fr</span>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Nous créons des sites vitrines modernes et sur mesure pour les professionnels
              qui souhaitent développer leur présence en ligne avec élégance et efficacité.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/50 text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/50 text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/50 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@studio.workora.fr"
                  className="flex items-center space-x-2 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>contact@studio.workora.fr</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/studioworkora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/workora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/50 text-sm hover:text-white transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Discord</span>
                </a>
              </li>
              <li className="text-white/50 text-sm pt-2">
                📍 Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Studio Workora. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
