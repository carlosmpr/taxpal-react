import React from "react";

// Adjusted props interface for CompanyItem component
interface CompanyItemProps {
  src: string;
  alt: string;
}

// CompanyItem component with fixed className
const CompanyItem: React.FC<CompanyItemProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="aspect-[3] object-contain object-center w-[140px] overflow-hidden shrink-0 max-w-full"
  />
);

// Props interface for TrustedBy component remains the same
interface TrustedByProps {
  companies: CompanyItemProps[]; // Array of objects for company logos
}

// TrustedBy component
const TrustedBy: React.FC<TrustedByProps> = ({ companies }) => {
  return (
    <>
      <p className="text-gray-900 font-medium tracking-tight whitespace-nowrap mt-44 max-md:mt-10">
        Trusted by these six companies so far
      </p>
      <div className="flex justify-between gap-5 mt-9">
        {companies.map((company, index) => (
          <CompanyItem key={index} src={company.src} alt={company.alt} />
        ))}
      </div>
    </>
  );
};


const TrustedRender = () => {
    const companyLogos = [
        {
          src: "/company1.svg",
          alt: "Company 1",
        },
        {
            src: "/company2.svg",
            alt: "Company 2",
          },
          {
            src: "/company3.svg",
            alt: "Company 3",
          },
          {
            src: "/company4.svg",
            alt: "Company 4",
          },
          {
            src: "/company5.svg",
            alt: "Company 5",
          },

          {
            src: "/company6.svg",
            alt: "Company 6",
          },
        // Add other company logos here...
      ];
    
      return <TrustedBy companies={companyLogos} />;
}


export default TrustedRender