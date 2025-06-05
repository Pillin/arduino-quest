import React from 'react';
import ListItem from '../atoms/ListItem';

interface FeatureListProps {
  items: Record<string, string>;
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  items,
  className = ''
}) => {
  return (
    <ul className={`space-y-2 text-gray-600 ${className}`}>
      {Object.entries(items).map(([key, value], index) => (
        <ListItem key={index}>
          <strong>{key}:</strong> {value}
        </ListItem>
      ))}
    </ul>
  );
};

export default FeatureList;