import React from "react";
import ServiceHero from "@/components/sections/service-hero";
import ServiceCard from "@/components/service-card";
import ContentOverivew from "@/components/sections/content-overivew";
import GetInTouch from "@/components/get-in-touch";

const page = () => {
  return (
    <div className="flex flex-col gap-30">
      <ServiceHero />
      <ServiceCard />
      <ContentOverivew />
      <GetInTouch />
    </div>
  );
};

export default page;
