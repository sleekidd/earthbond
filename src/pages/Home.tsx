import React from "react";
import Hero from "../components/Hero";
import Video from "../assets/hero-video.svg";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs/WhyUs";
import Mission from "../components/Mission";
import CTA from "../components/CTA";
import TestimonialSlider from "../components/TestimonialSlider";
import Impact from "../components/Impact";

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <section className="container mx-auto py-16">
        <div className="flex justify-center mt-[-8rem] lg:mt-[-20rem] px-[24px]">
          <img src={Video} alt="" />
        </div>
      </section>

      <div className="flex flex-col gap-[32px] lg:gap-[100px]">
        <Mission />

        <WhyUs />

        <Impact />

        <TestimonialSlider />

        <FAQAccordion />
      </div>

      <div className="flex flex-col bg-[#074229] py-[32px] px-[20px] mt-[56px]">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
