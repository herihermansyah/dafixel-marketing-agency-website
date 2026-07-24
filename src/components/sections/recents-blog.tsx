import React from "react";
import {ChildMotion} from "../ui/wrapper-motion";
import Button from "../ui/button";
import {Overview, TitleOverview} from "../ui/overview";

const blogData = Array.from({length: 2}).map((_, i) => ({
  id: 1 + i,
  title: "top 5 sass bussiness - august",
  descrtiption:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores labore corporis fuga rerum aliquid incidunt, temporibus possimus eius at.",
}));

const RecentsBlog = () => {
  return (
    <Overview className="grid grid-cols-1 lg:grid-cols-2 gap-13 items-center overflow-hidden">
      <TitleOverview>Digital Marketing articles</TitleOverview>
      <div className="flex items-center gap-2 flex-wrap xl:flex-nowrap justify-center">
        {blogData.map((item) => (
          <ChildMotion
            className="bg-black/10 rounded-3xl flex flex-col gap-5 p-5 w-136"
            key={item.id}
          >
            <ChildMotion>
              <h3 className="font-bold text-[44px] leading-13.75 text-white">
                {item.title}
              </h3>
            </ChildMotion>
            <ChildMotion>
              <p className="text-white text-[14px] leading-7">
                {item.descrtiption}
              </p>
            </ChildMotion>
            <Button className="bg-black/40">Read More</Button>
          </ChildMotion>
        ))}
      </div>
    </Overview>
  );
};

export default RecentsBlog;
