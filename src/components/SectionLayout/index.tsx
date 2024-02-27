import React from 'react';

// Define the props interface, including the children prop
interface SectionLayoutProps {
  children: React.ReactNode;
}

// Modify the function signature to accept the props
const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <section className="flex w-full flex-col justify-center items-center px-16 py-8">
      {children}
    </section>
  );
};

export default SectionLayout;
