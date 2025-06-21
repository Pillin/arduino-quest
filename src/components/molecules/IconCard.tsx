import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../atoms/Card';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  className = ''
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="mb-4">
          <Icon className="h-8 w-8 text-primary-500" />
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default IconCard;