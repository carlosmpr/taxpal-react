import React from "react";
const cardData = [
    {
      title: "Payroll",
      description:
        "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    },
    {
      title: "Claim expenses",
      description:
        "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    },
    {
      title: "VAT handling",
      description:
        "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    },
    {
      title: "Reporting",
      description:
        "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    },
  ];


interface TransparentCardProps {
  title: string;
  description: string;
}

interface FeaturesProps {
    background: string;
    title: string;
    description: string;
    cardItems: TransparentCardProps[];
    image: string;
  }

// TransparentCard component with transition effect
const TransparentCard: React.FC<TransparentCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="hover:border hover:bg-white hover:bg-opacity-10 flex flex-col px-6 py-8 rounded-xl hover:border-solid hover:border-white  hover:border-opacity-10 transition duration-300 ease-in-out">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm leading-6 mt-5">{description}</p>
    </div>
  );
};


function Features({
  background,
  title,
  description,
  cardItems,
  image,
}: FeaturesProps) {
  return (
    <>
      <div className="flex-col text-white relative flex w-full items-center pl-20 py-12 ">
        <img
          loading="lazy"
          srcSet={background}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative ">
          <h2 className="   text-5xl font-medium  mt-20 ">{title}</h2>
          <p className="   text-lg  mt-8 ">{description}</p>
        </div>

        <div className=" relative w-full  mt-16 mb-11 flex gap-5">
          <div className="flex flex-col w-[37%]  gap-5">
            {cardItems.map((item) => (
              <TransparentCard {...item} />
            ))}
          </div>

          <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet={image}
              className="aspect-[1.13] object-contain object-center w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
}

const FeaturesRender = () => {
  return (
    <Features
      background="/background.png"
      image="/hero1.png"
      title="Everything you need to run your books."
      description="Well everything you need if you aren’t that picky about minor details
    like tax compliance."
      cardItems={cardData}
    />
  );
};

export default FeaturesRender;
