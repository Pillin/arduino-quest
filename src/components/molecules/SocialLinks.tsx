import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

interface SocialLinksProps {
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  linkedin,
  github,
  instagram,
  twitter,
  className = ''
}) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {linkedin && (
        <a 
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
      {github && (
        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      {instagram && (
        <a 
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
      )}
      {twitter && (
        <a 
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;