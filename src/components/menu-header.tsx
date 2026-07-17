"use client";
import Link from "next/link";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";
import {cn} from "@/libs/utils";
import {usePathname} from "next/navigation";
import {motion} from "motion/react";

const menuData = [
  {name: "services", link: "/services"},
  {name: "industries", link: "/industries"},
  {name: "about us", link: "/about"},
  {name: "team dapixel", link: "/team"},
  {name: "blog", link: "/blog"},
];

interface MenuHeaderProps {
  className?: string;
}

const MenuHeader = ({className}: MenuHeaderProps) => {
  const pathname = usePathname();
  return (
    <nav aria-label="menu header">
      <WrapperMotion>
        <ul className={cn("flex items-center gap-11", className)}>
          {menuData.map((item) => {
            const isActive = pathname === item.link;
            return (
              <ChildMotion key={item.name}>
                <motion.li
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{type: "spring", damping: 15, stiffness: 150}}
                  className={cn(
                    "text-[18px] font-semibold capitalize",
                    isActive ? "text-orange-300" : "text-black",
                    "transition-colors duration-200 ease-in-out",
                  )}
                >
                  <Link href={item.link}>{item.name}</Link>
                </motion.li>
              </ChildMotion>
            );
          })}
        </ul>
      </WrapperMotion>
    </nav>
  );
};

export default MenuHeader;
