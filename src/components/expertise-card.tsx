import React from "react";
import {WrapperMotion} from "./ui/wrapper-motion";
import WrapperContent from "./ui/wrapper-content";
import SubTitle from "./ui/sub-title";
import {IoMdCloudOutline} from "react-icons/io";

const expertiseData = Array.from({length: 3}).map((_, i) => ({
  id: 1 + i,
  name: "sass",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatum rem consequuntur dolore, minima recusandae.",
  icon: <IoMdCloudOutline />,
}));

const ExpertiseCard = () => {
  return (
    <WrapperMotion>
      <section>
        <WrapperContent className="flex flex-col gap-10">
          <SubTitle>Our industries & expertise</SubTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center flex-col gap-7 py-20 px-10 shadow-drop-down rounded-3xl text-center"
              >
                <span className="text-[82px] text-orange-300">{item.icon}</span>
                <h5 className="text-[28px] font-bold">{item.name}</h5>
                <p className="text-[18px]">{item.description}</p>
              </div>
            ))}
          </div>
        </WrapperContent>
      </section>
    </WrapperMotion>
  );
};

export default ExpertiseCard;
