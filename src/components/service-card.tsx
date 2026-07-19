import React from "react";
import {WrapperMotion} from "./ui/wrapper-motion";
import WrapperContent from "./ui/wrapper-content";
import Button from "./ui/button";
import {GrAnnounce} from "react-icons/gr";
import {cn} from "@/libs/utils";

interface ServiceDataType {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const serviceData: ServiceDataType[] = Array.from({length: 4}).map((_, i) => ({
  id: i + 1,
  title: "facebook marketing",
  icon: <GrAnnounce />,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi cupiditate corrupti sapiente non inventore at obcaecati suscipit officiis repellendus eos dignissimos, quae minima veniam voluptates ab maiores. Animi, facere.",
}));

const ServiceCard = () => {
  const rightColumn = serviceData.filter((item) => item.id % 2 === 0);
  const leftColumn = serviceData.filter((item) => item.id % 2 !== 0);
  return (
    <WrapperMotion>
      <WrapperContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-10">
            {leftColumn.map((item) => (
              <ServiceContent key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-10 lg:mt-25">
            {rightColumn.map((item) => (
              <ServiceContent key={item.id} item={item} />
            ))}
          </div>
        </div>
      </WrapperContent>
    </WrapperMotion>
  );
};

interface ServiceCardProps {
  item: ServiceDataType;
}

const ServiceContent = ({item}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 shadow-drop-down py-20 px-10 rounded-3xl bg-white",
      )}
    >
      <div className="self-start text-[82px] -rotate-35">
        <span>{item.icon}</span>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-[28px] font-bold font-plus-jakarta-sans capitalize">
          {item.title}
        </h3>
        <p className="text-[18px] font-medium">{item.description}</p>
        <Button>Book a free 30 minute meeting</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
