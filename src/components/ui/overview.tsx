import React from "react";
import {ChildMotion, WrapperMotion} from "./wrapper-motion";
import WrapperContent from "./wrapper-content";
import {cn} from "@/libs/utils";

interface OverviewProps {
  className?: string;
  children?: React.ReactNode;
}

const Overview = ({className, children}: OverviewProps) => {
  return (
    <WrapperMotion whileInView={"visible"}>
      <section className="bg-orange-300 py-30">
        <WrapperContent
          className={cn("flex flex-col gap-11 text-center", className)}
        >
          {children}
        </WrapperContent>
      </section>
    </WrapperMotion>
  );
};

const TitleOverview = ({className, children}: OverviewProps) => {
  return (
    <ChildMotion>
      <h3
        className={cn(
          "text-[36px] leading-[120%] text-white font-bold font-plus-jakarta-sans capitalize",
          className,
        )}
      >
        {children}
      </h3>
    </ChildMotion>
  );
};

const DescriptionOverview = ({className, children}: OverviewProps) => {
  return (
    <ChildMotion>
      <p
        className={cn(
          "text-[22px] leading-8 text-white font-medium",
          className,
        )}
      >
        {children}
      </p>
    </ChildMotion>
  );
};

export {Overview, TitleOverview, DescriptionOverview};
