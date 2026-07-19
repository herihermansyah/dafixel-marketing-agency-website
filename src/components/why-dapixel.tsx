import React from "react";
import WrapperContent from "./ui/wrapper-content";
import Button from "./ui/button";
import Image from "next/image";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";

const WhyDapixel = () => {
  return (
    <WrapperMotion whileInView={"visible"}>
      <WrapperContent className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
        <ChildMotion>
          <div className="flex flex-col items-start gap-5">
            <ChildMotion>
              <h3 className="text-[52px] font-bold leading-[130%] font-plus-jakarta-sans">
                Why DaPixel
              </h3>
            </ChildMotion>
            <ChildMotion>
              <p className="text-[22px] leading-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cum eveniet, accusamus necessitatibus iusto aperiam.
              </p>
            </ChildMotion>
            <Button size={"lg"}>Book Free Meeting</Button>
          </div>
        </ChildMotion>
        <ChildMotion>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={"/image-001.svg"}
              alt="image why dapixel"
              fill
              className="object-contain"
            />
          </div>
        </ChildMotion>
      </WrapperContent>
    </WrapperMotion>
  );
};

export default WhyDapixel;
