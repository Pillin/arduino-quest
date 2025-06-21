import React from 'react';
import { motion } from 'framer-motion';
import IconCard from '../molecules/IconCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  getIcon: (iconName: string) => LucideIcon;
  inView: boolean;
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  getIcon,
  inView,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${className}`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          <IconCard
            icon={getIcon(feature.icon)}
            title={feature.title}
            description={feature.description}
            className="bg-gray-50 border border-gray-100"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;