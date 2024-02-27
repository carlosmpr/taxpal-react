import React from "react";

interface GetStartedProps {
  backgroundImage: string; // Since you might want to change the background image
  heading: string;
  subtext: string;
  buttonText: string;
}

const GetStartedSection: React.FC<GetStartedProps> = ({
  backgroundImage,
  heading,
  subtext,
  buttonText,
}) => {
  return (
    <div className="flex-col text-white text-center relative flex w-full justify-center items-center px-16 py-12">
      <img
        loading="lazy"
        srcSet={backgroundImage}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex w-[488px] flex-col mt-20 mb-12">
        <h2 className="text-4xl leading-[81px] tracking-tight self-center whitespace-nowrap">
          {heading}
        </h2>
        <p className="text-lg leading-8 tracking-normal mt-7">{subtext}</p>
        <button className="text-gray-900 text-center text-sm font-semibold whitespace-nowrap bg-white self-center mt-11 px-4 py-3 rounded-[50px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CenterTextRender = () => {
  return (
    <GetStartedSection
      backgroundImage="background.png"
      heading="Get started today"
      subtext="It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive."
      buttonText="Get 6 months free"
    />
  );
};

export default CenterTextRender;
