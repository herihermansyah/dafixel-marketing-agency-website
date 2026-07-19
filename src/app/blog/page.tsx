import React from "react";
import BlogCard from "@/components/blog-card";
import HeroBlog from "@/components/sections/blog/hero-blog";

const page = () => {
  return (
    <div>
      <HeroBlog />
      <BlogCard />
    </div>
  );
};

export default page;
