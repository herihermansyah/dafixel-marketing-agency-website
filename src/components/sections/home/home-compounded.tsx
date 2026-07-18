import ConsultationCta from "@/components/consultation-cta";
import Hero from "@/components/sections/home/hero";
import HowItWorks from "@/components/sections/home/how-it-works";
import WrapperContent from "@/components/ui/wrapper-content";
import {WrapperMotion} from "@/components/ui/wrapper-motion";
import React from "react";

const HomeCompounded = () => {
  return (
    <div className="flex flex-col gap-30">
      <Hero />
      <HowItWorks />
      <WrapperMotion
        whileInView={"visible"}
        className="bg-orange-300 py-30 lg:py-62"
      >
        <WrapperContent className="px-20 xl:px-20">
          <ConsultationCta />
        </WrapperContent>
      </WrapperMotion>
    </div>
  );
};

export default HomeCompounded;
