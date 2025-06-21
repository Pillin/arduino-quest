import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TagProps {
  text: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'warning';
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  text,
  icon: Icon,
  variant = 'primary',
  className = ''
}) => {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    warning: 'bg-warning-100 text-warning-800'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="h-4 w-4 mr-2" />}
      {text}
    </span>
  );
};

export default Tag;