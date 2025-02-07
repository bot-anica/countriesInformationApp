import React from 'react';
import { getGradient } from '../../theme/utils';

interface ContainerProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, fullHeight = false }) => {
  return (
    <div className={`${fullHeight ? 'min-h-screen' : ''} ${getGradient()}`}>
      <div className="max-w-container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {children}
      </div>
    </div>
  );
};

export default Container; 