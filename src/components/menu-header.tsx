import Link from "next/link";
import React from "react";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";
import {cn} from "@/libs/utils";

const menuData = [
  {name: "services", link: "/services"},
  {name: "industries", link: "/industries"},
  {name: "about us", link: "/about us "},
  {name: "team dapixel", link: "/team"},
  {name: "blog", link: "/blog"},
];

interface MenuHeaderProps {
  className?: string;
}

const MenuHeader = ({className}: MenuHeaderProps) => {
  return (
    <nav aria-label="menu header">
      <WrapperMotion>
        <ul className={cn("flex items-center gap-11", className)}>
          {menuData.map((item) => (
            <ChildMotion key={item.name}>
              <li className="text-[18px] font-semibold text-black capitalize">
                <Link href={item.link}>{item.name}</Link>
              </li>
            </ChildMotion>
          ))}
        </ul>
      </WrapperMotion>
    </nav>
  );
};

export default MenuHeader;
