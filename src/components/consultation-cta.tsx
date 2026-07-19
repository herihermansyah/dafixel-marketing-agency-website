import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";
import WrapperContent from "./ui/wrapper-content";

const ConsultationCta = () => {
  return (
    <WrapperMotion
      whileInView={"visible"}
      className="bg-orange-300 py-30 lg:py-62"
    >
      <WrapperContent className="px-20 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-13">
          <ChildMotion>
            <h3 className="text-[32px] md:text-[44px] text-center lg:text-start font-bold leading-[130%] text-white font-plus-jakarta-sans">
              Book a free digital marketing consultation
            </h3>
          </ChildMotion>
          <form action="" className="flex flex-col gap-3">
            <Input placeholder="Your Email" className="bg-white" />
            <Button
              size="lg"
              type="submit"
              className="w-full flex justify-center bg-black/40"
            >
              Book free my meeting
            </Button>
          </form>
        </div>
      </WrapperContent>
    </WrapperMotion>
  );
};

export default ConsultationCta;
