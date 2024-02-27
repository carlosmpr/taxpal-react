import React from "react";

const FAQITEMS: FooterItemProps[] = [
  {
    title: "What was that testimonial about tax fraud all about?",
    description:
      "TaxPal is just a software application, ultimately your books are your responsibility.",
  },
  {
    title:
      "TaxPal sounds horrible but why do I still feel compelled to purchase?",
    description:
      "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
  },
  {
    title:
      "I found other companies called TaxPal, are you sure you can use this name?",
    description:
      "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
  },
  {
    title: "Can I pay for my subscription via purchase order?",
    description: "Absolutely, we are happy to take your money in all forms.",
  },
  {
    title: "How do I apply for a job at TaxPal?",
    description:
      "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
  },
  {
    title: "How do you generate reports?",
    description:
      "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
  },
  {
    title: "I lost my password, how do I get into my account?",
    description:
      "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
  },
];

interface FooterItemProps {
  title: string;
  description: string;
}

// Define the FooterItem component
const FooterItem: React.FC<FooterItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col  py-2 w-[28%] max-md:mt-4">
      <div className="text-gray-900 text-lg font-medium tracking-tight  mt-2">
        {title}
      </div>
      <div className="text-gray-700 text-sm leading-6 tracking-normal mt-4">
        {description}
      </div>
    </div>
  );
};

interface FooterProps {
  title: string;
  description: string;
  faqItems: FooterItemProps[];
}
function Footer({ title, description, faqItems }: FooterProps) {
  return (
    <div className="flex-col overflow-hidden relative flex w-full justify-center items-center px-16 py-12 ">
      <img
        loading="lazy"
        srcSet="background2.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative ">
        <h2 className="text-gray-900 text-4xl leading-[81px] tracking-tight ">
          {title}
        </h2>
        <p className="text-gray-600 text-lg leading-8 tracking-normal ">
          {description}
        </p>

        <div className="justify-evenly flex mt-8 flex-wrap">
          {faqItems.map((items) => (
            <FooterItem {...items} />
          ))}
        </div>
      </div>

      <div className=" relative flex flex-col items-center justify-center gap-5 mt-44 items-start max-md:justify-center max-md:mt-10">
        <img
          loading="lazy"
          src="logo.svg"
          className="aspect-[2.7] object-contain object-center w-[108px] overflow-hidden"
        />
        <div className="flex gap-10">
          <p className="text-gray-600 text-center text-sm ">Features</p>
          <p className="text-gray-600 text-center text-sm ">Testimonials</p>
          <p className="text-gray-600 text-center text-sm ">Pricing</p>
        </div>
      </div>

      <div className="relative self-stretch flex justify-between gap-5 mt-10 items-start max-md:max-w-full max-md:flex-wrap">
        <h4 className="text-gray-600 text-sm grow whitespace-nowrap mt-1.5">
          Copyright © {new Date().getFullYear()} TaxPal. All rights reserved.
        </h4>
        <img
          loading="lazy"
          src="social.svg"
          className="aspect-[3.35] object-contain object-center w-[67px] "
        />
      </div>
    </div>
  );
}

const FooterRender = () => {
  return (
    <Footer
      title="Frequently asked questions"
      description=" If you can’t find what you’re looking for, email our support team and
        if you’re lucky someone will get back to you."
      faqItems={FAQITEMS}
    />
  );
};

export default FooterRender;
