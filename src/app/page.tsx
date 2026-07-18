import Hero from "@/components/sections/home/hero";
import HowItWorks from "@/components/sections/home/how-it-works";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-30">
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default page;
