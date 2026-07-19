import TeamCard from "@/components/team-card";
import WaveHeader from "@/components/wave-header";
import React from "react";

const page = () => {
  return (
    <div>
      <WaveHeader
        title="DaPixel Specialists"
        subTitle="Meet the awesome team behind lunar strategy."
      />
      <TeamCard />
    </div>
  );
};

export default page;
