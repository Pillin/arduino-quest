import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Star, Wrench, Heart, Linkedin, Github, Instagram } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';
import Button from './atoms/Button';
import volunteerData from '../data/volunteers.json';

interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
}

interface Volunteer {
  name: string;
  role: string;
  tag: 'líder' | 'gestión' | 'mentora';
  image: string;
  social: SocialLinks;
}

const VolunteerTeam: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'líder':
        return <Star className="h-4 w-4" />;
      case 'gestión':
        return <Wrench className="h-4 w-4" />;
      case 'mentora':
        return <Heart className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'líder':
        return 'bg-warning-100 text-warning-800';
      case 'gestión':
        return 'bg-secondary-100 text-secondary-800';
      case 'mentora':
        return 'bg-accent-100 text-accent-800';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Nuestro Equipo"
          description="Conoce a las personas extraordinarias que hacen posible Arduino Quest"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={ref}>
          {volunteerData.volunteers.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{volunteer.name}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTagColor(volunteer.tag)}`}>
                    {getTagIcon(volunteer.tag)}
                    <span className="ml-2">{volunteer.tag}</span>
                  </span>
                </div>
                <p className="text-primary-600 font-medium mb-4">{volunteer.role}</p>
                
                <div className="flex space-x-4">
                  {volunteer.social.linkedin && (
                    <a 
                      href={volunteer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {volunteer.social.github && (
                    <a 
                      href={volunteer.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {volunteer.social.instagram && (
                    <a 
                      href={volunteer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-accent-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Únete como voluntaria
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Arduino Quest es posible gracias al compromiso y dedicación de nuestras voluntarias y mentoras. 
            Buscamos personas apasionadas por la tecnología y la educación que quieran inspirar a la próxima 
            generación de mujeres en STEM.
          </p>
          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Como voluntaria podrás:</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Mentorar y guiar a las participantes en su aprendizaje</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Compartir tu experiencia en tecnología</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>Ser parte de una comunidad comprometida con la educación STEM</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Button
              href="#register"
              variant="accent"
              icon={Heart}
            >
              Postula como voluntaria
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerTeam;