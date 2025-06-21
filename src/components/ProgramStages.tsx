import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LaptopIcon, 
  GalleryVerticalEnd,
  Package, 
  Presentation 
} from 'lucide-react';

const ProgramStages: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stages = [
    {
      icon: <LaptopIcon className="h-10 w-10 text-white" />,
      title: "Etapa 1: Exploración Digital",
      date: "Agosto 11, 2025",
      duration: "1 semana",
      format: "Online",
      description: "Clases teóricas y ejercicios en Tinkercad sobre electrónica básica, salidas analógicas, salidas/entradas digitales, motores, sensores.",
      requirements: [
        "Completar Kahoot diario",
        "Asistir a clases (% mínimo de asistencia)",
        "Enviar ejercicio en simulador"
      ],
      color: "bg-primary-600"
    },
    {
      icon: <GalleryVerticalEnd className="h-10 w-10 text-white" />,
      title: "Etapa 2: Desafío Creativo",
      date: "Agosto 18, 2025",
      duration: "1 semana",
      format: "Online",
      description: "Selección y desarrollo de un proyecto en Tinkercad.",
      requirements: [
        "Asistencia (% mínimo de asistencia)",
        "Envío del link de su proyecto en Tinkercad y video del proyecto en simulador"
      ],
      color: "bg-secondary-600"
    },
    {
      icon: <Package className="h-10 w-10 text-white" />,
      title: "Etapa 3: Prototipado Físico y Motivación",
      date: "Agosto 25, 2025",
      duration: "1 semana",
      format: "Presencial",
      description: "Revisión del proyecto, entrega presencial del kit Arduino, primeros pasos con componentes físicos y charlas motivacionales.",
      requirements: [
        "Asistencia a sesiones (% mínimo de asistencia)",
        "Avance del proyecto físico"
      ],
      color: "bg-accent-500"
    },
    {
      icon: <Presentation className="h-10 w-10 text-white" />,
      title: "Etapa 4: Finalización y Presentación",
      date: "Septiembre 1, 2025",
      duration: "1 semana",
      format: "Presencial",
      description: "Mentorías para finalizar el proyecto y evento de cierre con presentación de resultados.",
      requirements: [
        "Asistencia a mentorías (% mínimo de asistencia)",
        "Entrega de video del proyecto final"
      ],
      color: "bg-success-600"
    }
  ];

  return (
    <section id="stages" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Etapas del programa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Arduino Quest se desarrolla en 4 etapas progresivas que te llevarán desde los conceptos básicos hasta la creación de tu propio proyecto.
          </motion.p>
        </div>

        <div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          ref={ref}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card bg-white h-full flex flex-col"
            >
              <div className={`${stage.color} p-4 flex items-center justify-between`}>
                <div className="bg-white/20 rounded-lg p-2">
                  {stage.icon}
                </div>
                <div className="bg-white rounded-lg px-3 py-1 text-sm font-medium text-gray-900">
                  {stage.format}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2 text-sm font-medium text-gray-500">
                  {stage.date} • {stage.duration}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {stage.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1">
                  {stage.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Requisitos de avance:
                  </h4>
                  <ul className="space-y-2">
                    {stage.requirements.map((req, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStages;