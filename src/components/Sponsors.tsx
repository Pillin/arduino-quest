import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Package, Cpu } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';

const Sponsors: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const collaborators = [
    {
      type: 'Venue',
      name: 'Universidad de Concepción',
      description: 'Proporciona las instalaciones y laboratorios para las sesiones presenciales del programa.',
      logo: 'https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Universidad%20de%20Concepcio%CC%81n/Recurso%20137%404x-8.png',
      website: 'https://www.udec.cl/',
      icon: <MapPin className="h-6 w-6 text-primary-500" />
    },
    {
      type: 'Cajas',
      name: 'KORONELPLAS',
      description: 'Proveedor de las cajas y contenedores para organizar los kits de Arduino.',
      logo: null,
      website: "https://koronelplas.cl/",
      icon: <Package className="h-6 w-6 text-primary-500" />
    },
    {
      type: 'Arduinos',
      name: 'Proveedor por confirmar',
      description: 'Proveedor de los kits de Arduino y componentes electrónicos para el programa.',
      logo: null,
      website: null,
      icon: <Cpu className="h-6 w-6 text-primary-500" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Patrocinadores y Colaboradores"
          description="Conoce a las organizaciones que hacen posible Arduino Quest"
        />
        
        <div ref={ref} className="space-y-16">
          {/* Patrocinador Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Patrocinador Principal</h3>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Synopsys/synopsys-logo-color.svg" 
                    alt="Synopsys" 
                    className="h-16 md:h-20"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-600 mb-4">
                    Synopsys es líder mundial en automatización de diseño electrónico (EDA) y semiconductores IP. 
                    Como socio responsable en innovación, Synopsys está comprometido con el desarrollo del talento 
                    en tecnología y la promoción de la diversidad en STEM.
                  </p>
                  <a 
                    href="https://www.synopsys.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Conoce más sobre Synopsys
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colaboradores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestros Colaboradores</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg mr-3">
                      {collaborator.icon}
                    </div>
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {collaborator.type}
                    </span>
                  </div>
                  
                  {collaborator.logo ? (
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={collaborator.logo}
                        alt={collaborator.name}
                        className="h-12 object-contain"
                      />
                    </div>
                  ) : (
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      {collaborator.name}
                    </h4>
                  )}
                  
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {collaborator.description}
                  </p>
                  
                  {collaborator.website && (
                    <div className="text-center">
                      <a 
                        href={collaborator.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        Visitar sitio web
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Llamada a colaboración */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres ser parte de Arduino Quest?
            </h3>
            <p className="text-gray-600 mb-6">
              Si tu organización está interesada en patrocinar o colaborar con Arduino Quest, 
              nos encantaría conocer cómo podemos trabajar juntos para inspirar a más niñas en STEM.
            </p>
            <a 
              href="mailto:contacto@ninaspro.cl"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Contáctanos
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;