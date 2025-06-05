import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import timelineData from '../data/timeline.json';

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarDays':
        return <CalendarDays className="h-6 w-6 text-white" />;
      case 'Clock':
        return <Clock className="h-6 w-6 text-white" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6 text-white" />;
      default:
        return <CalendarDays className="h-6 w-6 text-white" />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Calendario del programa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conoce las fechas clave y actividades programadas para Arduino Quest 2025.
          </motion.p>
        </div>

        <div className="mt-12 relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineData.events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Event circle on timeline (only visible on md+) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    event.format === "Presencial" ? 'bg-accent-500' : 'bg-primary-600'
                  }`}>
                    {getIcon(event.icon)}
                  </div>
                </div>
                
                {/* Event content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="card h-full">
                    {/* Event header - mobile only visible circle */}
                    <div className="flex items-center md:hidden mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        event.format === "Presencial" ? 'bg-accent-500' : 'bg-primary-600'
                      }`}>
                        {getIcon(event.icon)}
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          event.format === "Presencial" 
                            ? 'bg-accent-100 text-accent-800' 
                            : 'bg-primary-100 text-primary-800'
                        }`}>
                          {event.format}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Date and format tag - desktop */}
                      <div className="flex flex-wrap items-center justify-between mb-3">
                        <div className="text-sm font-medium text-gray-600">
                          {event.date}
                          {event.time && <span> · {event.time}</span>}
                        </div>
                        <div className="hidden md:block">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            event.format === "Presencial" 
                              ? 'bg-accent-100 text-accent-800' 
                              : 'bg-primary-100 text-primary-800'
                          }`}>
                            {event.format}
                          </span>
                        </div>
                      </div>
                      
                      {/* Activity title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.activity}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternate layout */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;