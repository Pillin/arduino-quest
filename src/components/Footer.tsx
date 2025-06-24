import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Logo%20Nin%CC%83as%20Pro/Logo%20Azul.png"
                alt="Niñas Pro"
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold">Arduino Quest</span>
                <span className="text-sm text-gray-400 -mt-1">by Niñas Pro</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Una iniciativa de Niñas Pro para fomentar la participación femenina en STEM mediante una experiencia educativa intensiva y transformadora en electrónica y programación.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ninas_pro/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/ninas-pro/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://linktr.ee/NinasPro" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Patrocinado por:
              </p>
              <a 
                href="https://www.synopsys.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2"
              >
                <img 
                  src="https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Synopsys/synopsys-logo-color.svg" 
                  alt="Synopsys" 
                  className="h-8 filter brightness-0 invert"
                />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Acerca del programa</a>
              </li>
              <li>
                <a href="#stages" className="text-gray-400 hover:text-white transition-colors">Etapas</a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-white transition-colors">Calendario</a>
              </li>
              <li>
                <a href="#criteria" className="text-gray-400 hover:text-white transition-colors">Criterios de participación</a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">Inscripciones</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impacto</a>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">contacto@ninaspro.cl</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://www.ninaspro.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-400 hover:text-primary-300"
              >
                Visitar sitio web de Niñas Pro
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Arduino Quest - Niñas Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;