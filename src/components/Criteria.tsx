import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Clock, CheckCircle, XCircle } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';
import Card from './atoms/Card';
import IconCard from './molecules/IconCard';
import criteriaData from '../data/criteria.json';

const Criteria: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Code':
        return Code;
      case 'Clock':
        return Clock;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="criteria" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Criterios de participación"
          description="Conoce los requisitos para participar en Arduino Quest y los criterios para avanzar en cada etapa del programa."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-12" ref={ref}>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Requisitos para participar
            </motion.h3>
            
            <div className="space-y-6">
              {criteriaData.requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 p-3 bg-primary-50 rounded-lg">
                    {React.createElement(getIcon(req.icon), { className: "h-6 w-6 text-primary-500" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{req.title}</h4>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
                    Perfil ideal de la participante
                  </h4>
                  <ul className="space-y-2">
                    {criteriaData.idealProfile.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-success-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Criterios de avance por etapa
            </motion.h3>
            
            <div className="space-y-6">
              {criteriaData.advancementCriteria.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{stage.stage}</h4>
                      <ul className="space-y-2">
                        {stage.criteria.map((criterion, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-gray-600">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Card>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <XCircle className="h-5 w-5 text-error-500 mr-2" />
                    Consideraciones importantes
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {criteriaData.importantConsiderations.map((consideration, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-error-500 mr-2">•</span>
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;