import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', dark = true }) => {
  return (
    <section 
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden snap-start snap-always ${dark ? 'bg-aaag-dark' : 'bg-aaag-light'} ${className}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 1000px' }}
    >
      <div className="w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
};
