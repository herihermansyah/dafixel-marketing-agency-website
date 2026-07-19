import React from "react";
import Logo from "./logo";
import Link from "next/link";
import {ChildMotion} from "./ui/wrapper-motion";

const CompanyInfo = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <Logo />
      <div className="flex flex-col">
        <ChildMotion>
          <p>REBORN STUDIO AB</p>
        </ChildMotion>
        <ChildMotion>
          <p>Bangkalan, jawa timur, Indonesia</p>
        </ChildMotion>
        <ChildMotion>
          <p>Heri Hermansyah</p>
        </ChildMotion>
        <div className="flex gap-5 text-white text-xl font-bold">
          <ChildMotion>
            <Link href="https://github.com/herihermansyah">Github</Link>
          </ChildMotion>
          <ChildMotion>
            <Link href="www.linkedin.com/in/heri-hermansyah">Linkedin</Link>
          </ChildMotion>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
