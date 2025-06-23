import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const Impact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      quote: "Fue una experiencia muy enriquecedora; aprendí a utilizar Arduino Uno y diversas plataformas digitales, lo que me permitió desarrollar el pensamiento crítico y fortalecer mis habilidades tecnológicas.",
      name: "Tiare Pérez Vergara",
      role: "Arduino Quest 2021",
      rating: 5
    },
    {
      quote: "Las cosas que aprendí de Arduino me ayudaron con ramos que he tenido en la u donde tuve que ocupar componentes electrónicos, además de que aún tenía todos los componentes que venían en la caja y aún me sirven.",
      name: "Katherina Hoffmann Ponce",
      role: "Arduino Quest 2023",
      rating: 5
    },
    {
      quote: "Realizar el curso de arduino me permitió contar con mi primer Kit, puesto que no contaba con los recursos ni conocimientos para obtener uno por mis medios. Así, obtuve mis primeras experiencias prácticas más allá de seguir un tutorial, donde pude \"jugar\" con los componentes, gracias al cual incluso tras el curso pude seguir aprendiendo.",
      name: "Diana Alcota Varas",
      role: "Arduino Quest 2023",
      rating: 5
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Impacto del programa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Arduino Quest ha generado un impacto significativo en la participación femenina en áreas STEM. Conoce los testimonios de nuestras participantes.
          </motion.p>
        </div>

        <div className="mt-12" ref={ref}>
          {/* Evaluation method */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra estrategia de evaluación de impacto</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Instrumentos de evaluación</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Encuestas pre y post curso para evaluar la evolución en conocimientos, confianza y motivación hacia STEM.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Formularios de satisfacción del curso y mentorías para recoger percepciones sobre la experiencia.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Registro de participación y desempeño, incluyendo asistencia y cumplimiento de hitos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Evaluación cualitativa de proyectos finales analizando creatividad, funcionalidad y documentación.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Difusión de resultados</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Publicación de un informe visual con estadísticas y aprendizajes destacados.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Galería online con proyectos desarrollados por las participantes (previo consentimiento).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Clips breves con testimonios de participantes, mentoras y equipo organizador.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-600">Compartir los resultados con instituciones educativas y organizaciones STEM.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Testimonios de participantes
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 relative border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-6 text-primary-100 text-4xl font-serif">"</div>
                
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning-400 fill-warning-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;