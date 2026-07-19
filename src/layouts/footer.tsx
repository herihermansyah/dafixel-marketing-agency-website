import CompanyInfo from "@/components/company-info";
import MenuFooter from "@/components/menu-footer";
import WrapperContent from "@/components/ui/wrapper-content";
import {WrapperMotion} from "@/components/ui/wrapper-motion";
import React from "react";

const Footer = () => {
  return (
    <WrapperMotion>
      <div className="bg-orange-300 py-30">
        <WrapperContent className="flex items-start flex-col gap-y-10 gap-30 flex-wrap md:flex-row justify-between">
          <CompanyInfo />
          <MenuFooter />
        </WrapperContent>
      </div>
    </WrapperMotion>
  );
};

export default Footer;
