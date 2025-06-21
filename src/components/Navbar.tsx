import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src="https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Logo%20Nin%CC%83as%20Pro/Logo%20Azul.png"
            alt="Niñas Pro"
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold text-gray-900">
              Arduino Quest
            </span>
            <span className="text-xs text-gray-600 -mt-1">
              by Niñas Pro
            </span>
          </div>
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
            Acerca del programa
          </a>
          <a href="#stages" className="text-gray-700 hover:text-primary-600 transition-colors">
            Etapas
          </a>
          <a href="#timeline" className="text-gray-700 hover:text-primary-600 transition-colors">
            Calendario
          </a>
          <a href="#criteria" className="text-gray-700 hover:text-primary-600 transition-colors">
            Participación
          </a>
          <a 
            href="#register" 
            className="btn-primary"
          >
            Inscríbete
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca del programa
            </a>
            <a 
              href="#stages" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Etapas
            </a>
            <a 
              href="#timeline" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendario
            </a>
            <a 
              href="#criteria" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Participación
            </a>
            <a 
              href="#register" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscríbete
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;