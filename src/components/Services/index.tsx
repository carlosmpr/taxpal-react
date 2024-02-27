import React from "react";

interface ServiceItemProps {
  iconSrc: string;
  title: string;
  description: string;
  detail: string;
}

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  miniImage: string;
  servicesData: ServiceItemProps[];
}

const serviceItems = [
  {
    iconSrc: "icon1.svg",
    title: "Reporting",
    description:
      "Stay on top of things with always up-to-date reporting features.",
    detail:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
  },
  {
    iconSrc: "icon2.svg",
    title: "Inventory",
    description:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    detail:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
  },
  {
    iconSrc: "icon3.svg",
    title: "Contacts",
    description:
      "Organize all of your contacts, service providers, and invoices in one place.",
    detail:
      "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
  },
];

const ServiceItem: React.FC<ServiceItemProps> = ({
  iconSrc,
  title,
  description,
  detail,
}) => {
  return (
    <div className="flex grow w-[33%] flex-col items-center text-center gap-4">
      <div className="items-center bg-blue-600 flex w-[37px] h-[37px] px-2 rounded-lg">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="aspect-[1.33] object-contain object-center"
        />
      </div>
      <h3 className="text-blue-600 text-sm leading-8 ">{title}</h3>
      <p className="text-gray-900 text-xl leading-8 tracking-tight ">
        {description}
      </p>
      <p className="text-gray-700 text-sm leading-6 tracking-normal self-stretch ">
        {detail}
      </p>
    </div>
  );
};

function Services({
  title,
  description,
  image,
  miniImage,
  servicesData,
}: ServiceProps) {
  return (
    <div className="flex  flex-col w-full items-center gap-12 mt-10  ">
      <h2 className="text-gray-900 text-4xl ">{title}</h2>
      <p className="text-gray-600  text-lg leading-8   text-center max-w-[606px]  ">
        {description}
      </p>

      <div className="  flex items-center  w-full p-5 gap-5">
        {servicesData.map((item) => (
          <ServiceItem {...item} />
        ))}
      </div>

      <div className="border flex bg-slate-200  mt-16 pl-14  py-12 rounded-[30px] border-solid border-gray-300 gap-5">
        <div className=" w-[78%] ">
          <img
            loading="lazy"
            srcSet={image}
            className="aspect-[1.97] object-contain object-center w-full  "
          />
        </div>
        <div className=" w-[22%]">
          <img
            loading="lazy"
            srcSet={miniImage}
            className="aspect-[0.57] object-contain object-center "
          />
        </div>
      </div>
    </div>
  );
}

const ServiceRender = () => {
  return (
    <Services
      title={" Simplify everyday business tasks."}
      description={
        " Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead."
      }
      image={"/data1.png"}
      miniImage={"/data2.png"}
      servicesData={serviceItems}
    />
  );
};

export default ServiceRender;
