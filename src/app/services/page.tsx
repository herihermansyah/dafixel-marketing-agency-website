import React from "react";
import ServiceHero from "@/components/sections/service-hero";
import ServiceCard from "@/components/service-card";
import GetInTouch from "@/components/get-in-touch";
import ServiceOverview from "@/components/sections/service-overview";

const page = () => {
  return (
    <div className="flex flex-col gap-30">
      <ServiceHero />
      <ServiceCard />
      <ServiceOverview />
      <GetInTouch />
    </div>
  );
};

export default page;
