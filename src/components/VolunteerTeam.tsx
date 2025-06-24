import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Star, Wrench, Heart, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';
import Button from './atoms/Button';
import volunteerData from '../data/volunteers.json';

interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
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
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.pexels.com/photos/${3756679 + index}/pexels-photo-${3756679 + index}.jpeg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-white/90 ${getTagColor(volunteer.tag)}`}>
                    {getTagIcon(volunteer.tag)}
                    <span className="ml-2 capitalize">{volunteer.tag}</span>
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{volunteer.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{volunteer.role}</p>
                
                <div className="flex space-x-3">
                  {volunteer.social.linkedin && (
                    <a 
                      href={volunteer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {volunteer.social.github && (
                    <a 
                      href={volunteer.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-200"
                      title="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {volunteer.social.instagram && (
                    <a 
                      href={volunteer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200"
                      title="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {volunteer.social.twitter && (
                    <a 
                      href={volunteer.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-200"
                      title="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
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
            <div className="p-4 bg-accent-100 rounded-full">
              <Heart className="h-12 w-12 text-accent-500" />
            </div>
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_n2pgXjFby945FB5pQjGeyadOPrjrc4s6b_V7ZEk-fa_bvQ/viewform?usp=sharing&ouid=110699306797365833011"
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