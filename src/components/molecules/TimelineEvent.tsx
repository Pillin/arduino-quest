import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Card from '../atoms/Card';
import Tag from '../atoms/Tag';

interface TimelineEventProps {
  date: string;
  time?: string;
  format: string;
  activity: string;
  description: string;
  icon: string;
  isEven: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  time,
  format,
  activity,
  description,
  icon,
  isEven
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarDays':
        return CalendarDays;
      case 'Clock':
        return Clock;
      case 'MapPin':
        return MapPin;
      default:
        return CalendarDays;
    }
  };

  const Icon = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <Card>
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-600">
                {date}
                {time && <span> · {time}</span>}
              </div>
              <Tag
                text={format}
                variant={format === "Presencial" ? "accent" : "primary"}
                icon={Icon}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </Card>
      </div>
      <div className="md:w-1/2" />
    </motion.div>
  );
};

export default TimelineEvent;