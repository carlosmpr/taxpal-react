import React from "react";

interface HeroSectionProps {
  title: string;
  highlightTitle: string;
  subtitle: string;
  primaryButtonText: string;
  videoButtonText: string;
  videoButtonImageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightTitle,
  subtitle,
  primaryButtonText,
  videoButtonText,
  videoButtonImageUrl,
}) => {
  return (
    <>
      <div className="text-gray-900  text-center font-medium text-7xl mt-44 max-w-[770px]">
        <h1>
          {title}
          <span className="text-blue-600">{highlightTitle}</span>
          
        </h1>
      </div>
      <p className="text-gray-600 text-center text-lg leading-8 max-w-[602px] mt-11">
        {subtitle}
      </p>
      <div className="flex gap-5 mt-11">
        <button className="text-white text-sm font-medium bg-gray-900 grow px-4 py-3 rounded-[50px]">
          {primaryButtonText}
        </button>
        <div className="justify-between items-center border border-[color:var(--cool-gray-200,#E5E7EB)] bg-white flex gap-2.5 px-5 py-3 rounded-[50px] border-solid">
          <img
            loading="lazy"
            src={videoButtonImageUrl}
            className="aspect-[0.91] object-contain object-center w-2.5 fill-blue-600 overflow-hidden"
            alt="Video Thumbnail"
          />
          <button className="text-gray-600 text-sm font-medium">
            {videoButtonText}
          </button>
        </div>
      </div>
    </>
  );
};


const HeroRender = () => {
    return (
        <HeroSection
          title="Accounting made "
          highlightTitle="simple for small businesses"
          subtitle="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
          primaryButtonText="Get 6 months free"
          videoButtonText="Watch video"
          videoButtonImageUrl="/arrow.svg"
        />
    )
}

export default HeroRender;
