import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart, 
  Users, 
  TrendingUp, 
  Award,
  Star
} from 'lucide-react';

const Impact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      value: "50+",
      label: "Participantes anuales",
      description: "Niñas que se benefician del programa cada año"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />,
      value: "85%",
      label: "Tasa de finalización",
      description: "Participantes que completan todo el programa"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary-500" />,
      value: "92%",
      label: "Satisfacción",
      description: "Participantes que recomendarían el programa"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      value: "30+",
      label: "Proyectos creados",
      description: "Prototipos funcionales desarrollados por cohorte"
    }
  ];

  const testimonials = [
    {
      quote: "Arduino Quest cambió mi perspectiva sobre la tecnología. Ahora sé que puedo crear mis propios proyectos electrónicos y resolver problemas reales con la programación.",
      name: "Carolina Martínez",
      role: "Participante 2024",
      rating: 5
    },
    {
      quote: "Lo que más me gustó del programa fue la combinación entre teoría y práctica. Las mentorías personalizadas me ayudaron a superar los obstáculos cuando me sentía estancada.",
      name: "Valentina Gómez",
      role: "Participante 2024",
      rating: 5
    },
    {
      quote: "Como mentora, ver la evolución de las niñas durante el programa es increíblemente gratificante. Pasan de tener dudas sobre sus capacidades a crear proyectos impresionantes en solo 4 semanas.",
      name: "Ana Rodríguez",
      role: "Mentora",
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
            Arduino Quest ha generado un impacto significativo en la participación femenina en áreas STEM. Conoce los resultados y testimonios de nuestras participantes.
          </motion.p>
        </div>

        <div className="mt-12" ref={ref}>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-primary-600 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Evaluation method */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
            transition={{ duration: 0.5, delay: 0.7 }}
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
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 relative"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-6 text-primary-100 text-4xl font-serif">"</div>
                
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning-400 fill-warning-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-primary-600">{testimonial.role}</div>
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