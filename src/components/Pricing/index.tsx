import React from "react";

const pricingData: PricingItemComponentProps[] = [
  {
    price: "$9",
    planName: "Starter",
    description:
      "Good for anyone who is self-employed and just getting started.",

    features: [
      { text: "Send 10 quotes and invoices" },
      { text: "Connect up to 2 bank accounts" },
      { text: "Track up to 15 expenses per month" },
      { text: "Manual payroll support" },
      { text: "Export up to 3 reports" },
    ],
  },
  {
    price: "$49",
    planName: "Professional",
    description: "Ideal for small businesses looking to grow.",

    features: [
      { text: "Unlimited quotes and invoices" },
      { text: "Connect unlimited bank accounts" },
      { text: "Unlimited expense tracking" },
      { text: "Auto payroll support" },
      { text: "Export unlimited reports" },
      { text: "Unlimited expense tracking" },
      { text: "Auto payroll support" },
      { text: "Export unlimited reports" },
      
    ],
  },
  {
    price: "$29",
    planName: "Enterprise",
    description: "Perfect for larger businesses needing advanced features.",

    features: [
      { text: "Custom quotes and invoices" },
      { text: "Priority bank account connection" },
      { text: "Advanced expense tracking" },
      { text: "Full payroll integration" },
      { text: "Custom report exports" },
      { text: "Dedicated account manager" },
    ],
  },
];

interface FeatureItem {
  text: string;
}

// Define an interface for the component props
interface PricingItemComponentProps {
  price: string;
  planName: string;
  description: string;
  features: FeatureItem[];
}

const PricingItemComponent: React.FC<PricingItemComponentProps> = ({
  price,
  planName,
  description,
  features,
}) => {
  return (
    <div className="text-white flex  flex-col px-8 py-11  w-[33%] rounded-3xl  hover:bg-blue-600 group">
      <h3 className=" text-5xl tracking-tight ">{price}</h3>
      <p className=" text-lg font-medium tracking-tight mt-9">{planName}</p>
      <p className="text-base leading-7 tracking-wide mt-6">{description}</p>
      <button className="text-sm font-semibold border mt-9 px-16 py-3 rounded-[50px] border-solid border-white border-opacity-20 mb-10 group-hover:bg-white group-hover:text-gray-900  group-hover:border-transparent transition-colors duration-150 ease-in-out">
        Get started
      </button>
      {features.map((feature, index) => (
        <ul
          key={index}
          className="flex items-stretch justify-between gap-3.5 mt-3"
        >
          <img
            loading="lazy"
            src={"chevron.svg"} // Assuming each feature includes an icon source.
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <li className=" text-sm leading-8 tracking-normal  grow  ">
            {feature.text}
          </li>
        </ul>
      ))}
    </div>
  );
};

interface PricingProps {
  title: string;
  description: string;
  pricingItems: PricingItemComponentProps[];
}
function Pricing({ title, description, pricingItems }: PricingProps) {
  return (
    <div className="bg-slate-900 text-white flex w-full flex-col justify-center gap-11 items-center px-16 py-12 ">
      <h2 className="  text-4xl leading-[81px] tracking-tighter mt-10">
        {title}
      </h2>
      <p className=" text-center text-lg leading-8 tracking-normal ">
        {description}
      </p>

      <div className="gap-5 flex  ">
        {pricingItems.map((items) => (
          <PricingItemComponent {...items} />
        ))}
      </div>
    </div>
  );
}

const PricingRender = () => {
  return (
    <Pricing
      title={"Simple pricing, for everyone."}
      description={
        "It doesn’t matter what size your business is, our software work well for you."
      }
      pricingItems={pricingData}
    />
  );
};

export default PricingRender;
