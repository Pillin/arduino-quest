import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';

const Sponsors: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Nuestros Patrocinadores"
          description="Conoce a las organizaciones que hacen posible Arduino Quest"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <img 
              src="https://www.synopsys.com/content/dam/synopsys/company/about/synopsys-logo-color.png" 
              alt="Synopsys" 
              className="h-12 mb-6"
            />
            <p className="text-gray-600 mb-6">
              Synopsys es líder mundial en automatización de diseño electrónico (EDA) y semiconductores IP. 
              Como socio responsable en innovación, Synopsys está comprometido con el desarrollo del talento 
              en tecnología y la promoción de la diversidad en STEM.
            </p>
            <a 
              href="https://www.synopsys.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Conoce más sobre Synopsys
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;