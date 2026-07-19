import React from "react";
import BlogCard from "@/components/blog-card";
import WaveHeader from "@/components/wave-header";

const page = () => {
  return (
    <div>
      <WaveHeader title="DaPixel Blog" subTitle="Digital marketing articles" />
      <BlogCard />
    </div>
  );
};

export default page;
