import Shape001 from "@/assets/shape-001";
import WrapperContent from "@/components/ui/wrapper-content";
import {
  ChildMotion,
  FadeMotion,
  WrapperMotion,
} from "@/components/ui/wrapper-motion";
import React from "react";

const HeroBlog = () => {
  return (
    <WrapperMotion>
      <section className="relative overflow-hidden h-155">
        <WrapperContent>
          <div className="flex flex-col items-start gap-3 relative z-10 top-15">
            <ChildMotion>
              <h2 className="text-[53px] md:text-[76px] font-bold leading-[130%] font-plus-jakarta-sans">
                DaPixel Blog
              </h2>
            </ChildMotion>
            <ChildMotion>
              <p className="text-[24px] text-orange-300 font-medium leading-[110%]">
                Digital marketing articles
              </p>
            </ChildMotion>
          </div>
          <FadeMotion>
            <Shape001 className="absolute bottom-0 left-1/2 -translate-x-1/2" />
          </FadeMotion>
        </WrapperContent>
      </section>
    </WrapperMotion>
  );
};

export default HeroBlog;
