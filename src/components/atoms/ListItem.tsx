import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  bullet?: string;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  bullet = '•',
  className = ''
}) => {
  return (
    <li className={`flex items-start ${className}`}>
      <span className="text-primary-500 mr-2">{bullet}</span>
      <span>{children}</span>
    </li>
  );
};

export default ListItem;