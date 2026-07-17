import Link from "next/link";
import React from "react";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";

const menuData = [
  {name: "services", link: "/services"},
  {name: "industries", link: "/industries"},
  {name: "about us", link: "/about us "},
  {name: "team dapixel", link: "/team"},
  {name: "blog", link: "/blog"},
];

const MenuHeader = () => {
  return (
    <nav aria-label="menu header">
      <WrapperMotion>
        <ul className="flex items-center gap-11">
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
