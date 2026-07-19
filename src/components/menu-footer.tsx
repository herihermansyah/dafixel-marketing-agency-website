import Link from "next/link";
import React from "react";
import {ChildMotion} from "./ui/wrapper-motion";

const menuFooter = [
  {
    id: 1,
    subTrigger: "company",
    subMenu: [
      {id: 1.1, name: "home", link: "/"},
      {id: 1.2, name: "lunar blog", link: "/"},
      {id: 1.3, name: "our specialists", link: "/"},
      {id: 1.4, name: "contact us", link: "/"},
      {id: 1.5, name: "privacy & policy", link: "/"},
    ],
  },
  {
    id: 2,
    subTrigger: "services",
    subMenu: [
      {id: 1.1, name: "digital marketing", link: "/"},
      {id: 1.2, name: "free audit", link: "/"},
      {id: 1.3, name: "google ads", link: "/"},
      {id: 1.4, name: "crypto currency marketing", link: "/"},
      {id: 1.5, name: "SEO", link: "/"},
      {id: 1.6, name: "SAAS marketing", link: "/"},
      {id: 1.7, name: "Website & SEO", link: "/"},
    ],
  },
];

const MenuFooter = () => {
  return (
    <nav>
      <ul className="flex gap-y-10 gap-38 flex-wrap xl:flex-nowrap whitespace-nowrap">
        {menuFooter.map((item) => (
          <div key={item.id} className="flex flex-col gap-5">
            <ChildMotion>
              <h3 className="text-[22px] font-bold leading-7.75 capitalize">
                {item.subTrigger}
              </h3>
            </ChildMotion>
            <ul className="flex flex-col gap-1">
              {item.subMenu.map((item) => (
                <li
                  className="text-[18px] leading-7.75 font-plus-jakarta-sans capitalize"
                  key={item.id}
                >
                  <ChildMotion>
                    <Link href={item.link}>{item.name}</Link>
                  </ChildMotion>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default MenuFooter;
