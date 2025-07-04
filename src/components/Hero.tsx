import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Play } from 'lucide-react';
import Button from './atoms/Button';
import Card from './atoms/Card';
import Tag from './atoms/Tag';
import heroData from '../data/hero.json';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden circuit-bg">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Tag
                  text={heroData.badge.text}
                  variant="primary"
                />
                <span className="text-sm text-gray-600">
                  {heroData.badge.sponsor}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {heroData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {heroData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {heroData.buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.type}
                    href={button.href}
                    icon={button.icon === 'ArrowRight' ? ArrowRight : undefined}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-30 blur-lg"></div>
              <Card>
                <div className="relative overflow-hidden rounded-t-xl bg-gray-900">
                  <video 
                    src="https://pub-b35d2d84fa534f64a0c5ac280c705854.r2.dev/Actividades/Arduino%20Quest/corto_5.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover"
                    poster="https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg"
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                  
                  {/* Video context badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                      <Play className="h-4 w-4 text-white mr-2" />
                      <span className="text-white text-sm font-medium">Edición 2021</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-6 w-6 text-primary-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {heroData.card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {heroData.card.description}
                  </p>
                  
                  {/* Video description */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-700">Video:</span> Momentos destacados de Arduino Quest 2021, 
                      mostrando las actividades y el ambiente del programa anterior.
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm text-primary-600 font-medium">
                    <span>{heroData.card.details.dates}</span>
                    <span className="mx-2">•</span>
                    <span>{heroData.card.details.modality}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;