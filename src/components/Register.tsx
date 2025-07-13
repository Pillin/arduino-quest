import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardList, 
  CalendarCheck, 
  Users, 
  Sparkles,
  ArrowRight,
  Heart
} from 'lucide-react';

const Register: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary-500" />,
      title: "Completa el formulario",
      description: "Llena el formulario de inscripción con tus datos personales y educativos. Disponible desde el 23 de junio 2025."
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-primary-500" />,
      title: "Espera la confirmación",
      description: "Los resultados de la selección serán publicados el 22 de julio 2025 en nuestro sitio web y se notificará por correo electrónico."
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: "Asiste a la primera clase",
      description: "El programa inicia el 11 de agosto 2025 con la primera clase online. Recibirás los accesos y materiales previo al inicio."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary-500" />,
      title: "¡Comienza tu aventura!",
      description: "Durante 4 semanas, aprenderás electrónica y programación con Arduino mientras desarrollas tu propio proyecto creativo."
    }
  ];

  return (
    <section id="register" className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Cómo inscribirse?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg opacity-90 max-w-3xl mx-auto"
          >
            El proceso de inscripción para Arduino Quest 2025 es sencillo. Sigue estos pasos para ser parte de esta experiencia transformadora.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center font-bold text-white shadow-lg">
                {index + 1}
              </div>
              
              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-white/60" />
                </div>
              )}
              
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/80 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Las inscripciones estarán abiertas desde el <strong>23 de junio</strong> hasta el <strong>19 de julio del 2025</strong>. El cupo es limitado a 50 participantes, así que te recomendamos inscribirte lo antes posible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://forms.gle/8fDQAJhdyvWv9KnL8"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-xl font-bold shadow-lg hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <ClipboardList className="mr-2 h-5 w-5" />
              Inscríbete como alumna
            </a>
            
            <a 
              href="https://forms.gle/EyGBEeyN6KZD1K7j8"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-xl font-bold shadow-lg hover:bg-accent-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Heart className="mr-2 h-5 w-5" />
              Postula como voluntaria
            </a>
          </div>
          
          <p className="mt-4 text-sm opacity-80">
            Al inscribirte, recibirás toda la información necesaria para participar en el programa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;