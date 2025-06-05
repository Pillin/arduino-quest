import React from 'react';
import Card from '../atoms/Card';

interface ContentCardProps {
  title: string;
  content: string;
  children?: React.ReactNode;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  children,
  className = ''
}) => {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {content}
      </p>
      {children}
    </Card>
  );
};

export default ContentCard;