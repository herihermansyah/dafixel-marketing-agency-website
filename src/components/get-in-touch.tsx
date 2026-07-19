import React from "react";
import {WrapperMotion} from "./ui/wrapper-motion";
import SubTitle from "./ui/sub-title";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import Button from "./ui/button";
import WrapperContent from "./ui/wrapper-content";

const GetInTouch = () => {
  return (
    <WrapperMotion>
      <WrapperContent>
        <div className="flex flex-col gap-10 rounded-2xl shadow-drop-down p-5 md:p-20">
          <SubTitle>let us discuss your marketing strategy!</SubTitle>
          <form action="" className="flex flex-col gap-4">
            <Input placeholder="Name" className="bg-white" />
            <Input placeholder="Email" className="bg-white" />
            <Input placeholder="Subject" className="bg-white" />
            <Textarea placeholder="Message" className="bg-white" />
            <Button size="lg" type="submit">
              send
            </Button>
          </form>
        </div>
      </WrapperContent>
    </WrapperMotion>
  );
};

export default GetInTouch;
