import React, { useState } from "react";
import MinusIcon from "../assets/minus-circle.svg";
import PlusIcon from "../assets/plus-circle.svg";

const faqs = [
  {
    question: "What does the financing process entail, and what documentation is required?",
    answer:
      'Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor. Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor.',
  },
  {
    question: "Can I finance a solar solution quote provided by an external solar provider?",
    answer:
      "Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor. Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor.",
  },
  {
    question: "Does Earthbond finance residential solar solutions?",
    answer:
      'Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor. Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor.',
  },
  {
    question: "What range of solar solution sizes does Earthbond finance?",
    answer:
      "Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor. Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor.",
  },
  {
    question: "What is the expected timeline from financing to installation?",
    answer:
      "Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor. Consectetur diam amet scelerisque sed eget vel viverra tortor dolor quam at tempor amet id morbi leo nisi imperdiet eget accumsan neque tortor.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-col w-full max-w-[1280px] mx-auto items-center py-[56px] px-[16px] lg:px-[40px] gap-[64px]">
      <div className="flex flex-col gap-[24px] w-full lg:w-[1000px] text-center">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[32px] lg:text-[40px] leading-[42px] text-left lg:text-center font-bold text-[#074229]">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-[16px] text-left lg:text-center lg:text-[18px]">
          Everything you need to know about our product and services. 
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[1000px]">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-[8px] bg-[#fff]">
              {activeIndex === index ? (
                <div className="bg-[#DFEEDB] px-[24px] py-[32px] lg:px-[24px] lg:py-[32px] rounded-[8px]">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className="text-[18px] lg:text-[18px] text-[#074229] leading-[28px] lg:leading-[32px] font-medium text-start max-w-[780px]">
                      {faq.question}
                    </h3>
                    <div className="text-gray-500">
                      {activeIndex === index ? (
                        <img src={MinusIcon} alt="" />
                      ) : (
                        <img src={PlusIcon} alt="" />
                      )}
                    </div>
                  </div>

                  <div className="mt-2 text-[16px] max-w-[90%] lg:max-w-[780px] leading-[26px] text-start text-[#444]">
                    {faq.answer}
                  </div>
                </div>
              ) : (
                <div
                  className="flex justify-between items-center cursor-pointer p-[20px] lg:p-[32px]"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-[18px] lg:text-[18px] text-[#074229] leading-[28px] lg:leading-[32px] font-bold text-start">
                    {faq.question}
                  </h3>
                  <div className="text-gray-500">
                    {activeIndex === index ? (
                      <img src={MinusIcon} alt="" />
                    ) : (
                      <img src={PlusIcon} alt="" />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
