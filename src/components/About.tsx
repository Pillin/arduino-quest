import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LightbulbIcon, BrainCircuit, Users, GraduationCap } from 'lucide-react';
import SectionHeading from './atoms/SectionHeading';
import ContentCard from './molecules/ContentCard';
import FeatureList from './molecules/FeatureList';
import FeatureGrid from './organisms/FeatureGrid';
import aboutData from '../data/about.json';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LightbulbIcon':
        return LightbulbIcon;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Users':
        return Users;
      case 'GraduationCap':
        return GraduationCap;
      default:
        return LightbulbIcon;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className="mt-12 grid md:grid-cols-2 gap-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContentCard
              title={aboutData.purposeSection.title}
              content={aboutData.purposeSection.content}
            >
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {aboutData.formatSection.title}
                </h4>
                <FeatureList items={aboutData.formatSection.items} />
              </div>
            </ContentCard>
          </motion.div>

          <FeatureGrid
            features={aboutData.features}
            getIcon={getIcon}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};

export default About;