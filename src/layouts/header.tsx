import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import WrapperContent from "@/components/ui/wrapper-content";
import {WrapperMotion} from "@/components/ui/wrapper-motion";
import React from "react";

const Header = () => {
  return (
    <WrapperMotion>
      <div className="py-8 shadow-drop-down bg-white">
        <WrapperContent className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-11">
            <MenuHeader />
            <Button variant={"outline"}>Contact Us</Button>
          </div>
        </WrapperContent>
      </div>
    </WrapperMotion>
  );
};

export default Header;
