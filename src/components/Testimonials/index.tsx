import React from "react";

const TESTIMONIAL_DATA = [
  {
    testimonialText:
      "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
    authorName: "Sheryl Berge",
    authorPosition: "CEO",
    authorCompany: "Lynch LLC",
    authorImageSrc: "person1.png",
  },
  {
    testimonialText:
      "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    authorName: "Leland Kiehn",
    authorPosition: "Founder",
    authorCompany: "Kiehn and Sons",
    authorImageSrc: "person2.png",
  },
  {
    testimonialText:
      "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    authorName: "Amy Hahn",
    authorPosition: "Director",
    authorCompany: "Velocity Industries",
    authorImageSrc: "person3.png",
  },

  {
    testimonialText:
      "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
    authorName: "Sheryl Berge",
    authorPosition: "CEO",
    authorCompany: "Lynch LLC",
    authorImageSrc: "person1.png",
  },
  {
    testimonialText:
      "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    authorName: "Leland Kiehn",
    authorPosition: "Founder",
    authorCompany: "Kiehn and Sons",
    authorImageSrc: "person2.png",
  },
  {
    testimonialText:
      "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    authorName: "Amy Hahn",
    authorPosition: "Director",
    authorCompany: "Velocity Industries",
    authorImageSrc: "person3.png",
  },
];

interface TestimonialItemProps {
  testimonialText: string;
  authorName: string;
  authorPosition: string;
  authorCompany: string;
  authorImageSrc: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  testimonialText,
  authorName,
  authorPosition,
  authorCompany,
  authorImageSrc,
}) => {
  return (
    <div className="shadow-lg bg-white flex w-full  shrink-0 flex-col justify-between  px-6 py-7 rounded-xl md:w-[28%]">
      <h3 className="text-gray-700 text-lg leading-8 tracking-normal">
        {testimonialText}
      </h3>
      <div className="flex items-center justify-between gap-5 mt-6">
        <div>
          <p className="text-gray-900 text-base font-medium tracking-tight">
            {authorName}
          </p>
          <p className="text-gray-400 text-sm leading-6 tracking-normal  ">
            {authorPosition} at {authorCompany}
          </p>
        </div>
        <img
          loading="lazy"
          srcSet={authorImageSrc}
          className="aspect-square object-contain object-center w-14 overflow-hidden  shrink-0 max-w-full"
        />
      </div>
    </div>
  );
};

interface TestimonialsProps {
  title: string;
  description: string;
  testimonialData: TestimonialItemProps[];
}

function Testimonials({
  title,
  description,
  testimonialData,
}: TestimonialsProps) {
  return (
    <div className="flex w-full  flex-col items-center mt-24 mb-11  gap-12">
      <h2 className="text-gray-900  text-4xl leading-[81px] tracking-tight  max-w-[650px] ">
        {title}
      </h2>
      <p className="text-gray-600  text-lg leading-8 tracking-normal text-center max-w-screen-sm ">
        {description}
      </p>

      <div className="flex gap-10 justify-center w-full flex-wrap ">
        {testimonialData.map((item) => (
          <TestimonialItem {...item} />
        ))}
      </div>
    </div>
  );
}

const TestimonialRender = () => {
  return (
    <Testimonials
      title={"Loved by businesses worldwide."}
      description={
        "Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features."
      }
      testimonialData={TESTIMONIAL_DATA}
    />
  );
};

export default TestimonialRender;
