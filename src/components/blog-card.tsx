import React from "react";
import {ChildMotion} from "./ui/wrapper-motion";
import Button from "./ui/button";

const blogData = Array.from({length: 20}).map((_, i) => ({
  id: 1 + i,
  title: "top 5 sass bussiness - august",
  descrtiption:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores labore corporis fuga rerum aliquid incidunt, temporibus possimus eius at.",
}));

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogData.map((item) => (
        <ChildMotion
          className="bg-white rounded-3xl flex flex-col gap-5 p-5 shadow-drop-down"
          key={item.id}
        >
          <ChildMotion>
            <h3 className="font-bold text-[44px] leading-13.75">
              {item.title}
            </h3>
          </ChildMotion>
          <ChildMotion>
            <p className="text-[14px] leading-7">{item.descrtiption}</p>
          </ChildMotion>
          <Button>Read More</Button>
        </ChildMotion>
      ))}
    </div>
  );
};

export default BlogCard;
