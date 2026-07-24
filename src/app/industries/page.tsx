import ExpertiseCard from "@/components/expertise-card";
import GetInTouch from "@/components/get-in-touch";
import EditorialGuideDownload from "@/components/sections/editorial-guide-download";
import IndustriesHero from "@/components/sections/industries-hero";
import IndustriesOverview from "@/components/sections/industries-overview";
import Testimonials from "@/components/testimonials";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-30">
      <IndustriesHero />
      <ExpertiseCard />
      <IndustriesOverview />
      <Testimonials />
      <EditorialGuideDownload />
      <GetInTouch />
    </div>
  );
};

export default page;
