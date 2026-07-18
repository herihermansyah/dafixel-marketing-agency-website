import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import {ChildMotion} from "./ui/wrapper-motion";

const ConsultationCta = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-13">
      <ChildMotion>
        <h3 className="text-[44px] text-center lg:text-start font-bold leading-[130%] text-white font-plus-jakarta-sans">
          Book a free digital marketing consultation
        </h3>
      </ChildMotion>
      <form action="" className="flex flex-col gap-3">
        <Input placeholder="Your Email" />
        <Button
          size="lg"
          type="submit"
          className="w-full flex justify-center bg-black/40"
        >
          Book free my meeting
        </Button>
      </form>
    </div>
  );
};

export default ConsultationCta;
