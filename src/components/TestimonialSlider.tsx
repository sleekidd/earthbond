import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import videoThumbnail1 from "../assets/Lagos.svg";
import videoThumbnail2 from "../assets/ghana.svg";
import videoThumbnail3 from "../assets/kenya.svg";
import SecondaryButton from "./SecondaryButton";

const testimonials = [
  {
    video: videoThumbnail1,
    content: "Sustainable Energy Solutions for Urban Development",
    name: "Lagos, Nigeria",
    description: "November 2023",
  },
  {
    video: videoThumbnail3,
    content: "Empowering Rural Communities with Solar Energy",
    name: "Kajiado County, Kenya",
    description: "March 2023",
  },
  {
    video: videoThumbnail2,
    content: "Transforming Local Businesses through Renewable Power",
    name: "Accra, Ghana",
    description: "August 2022",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-[1280px] mx-auto p-4 rounded z-0">
      <div className="flex flex-col gap-[24px] lg:flex-row items-start justify-between lg:px-0 mb-4 lg:mb-8">
        <div className="flex flex-col gap-[10px] max-w-[604px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[32px] max-w-[360px] leading-[42px] lg:text-[40px] text-[#074229] lg:max-w-[650px] lg:leading-[50px] font-semibold lg:font-semibold text-start">
              See the Impact We’ve Made
            </p>
            <p className="text-[#444]">
              Explore the transformative effects of our solar energy projects,
              showcasing how Earthbond is making a difference in communities and
              the environment. Discover our achievements and join us in creating
              a sustainable future.
            </p>
          </div>
        </div>
        <div>
          <SecondaryButton text="Read Full Case Study" />
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 p-2 rounded-full bg-white shadow-md z-[100]"
        >
          <FaChevronLeft />
        </button>
        <div className="flex w-full gap-4 bg-[#074229] rounded-[24px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex lg:flex-row flex-col justify-between items-center w-full transition-transform transform ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ display: index === currentSlide ? "flex" : "none" }}
            >
              <div className="flex flex-col gap-[24px] text-start max-w-[672px] p-[24px] lg:p-[64px] justify-center">
                <p className="text-[24px] lg:text-[32px] text-[#fff] leading-[34px] lg:leading-[40px] font-semibold">
                  {testimonial.content}
                </p>
                <div>
                  <p className="mt-2 text-[18px] leading-[28px] text-[#fff] font-semibold">
                    - {testimonial.name}
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#fff]">
                    {testimonial.description}
                  </p>
                </div>
                <div className="flex justify-start mt-4">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                        index === currentSlide ? "bg-[#004DB5]" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <img
                src={testimonial.video}
                alt={testimonial.name}
                className="rounded-b-[24px] lg:rounded-r-[24px]"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="absolute right-0 p-2 rounded-full bg-white shadow-md z-[100]"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
