"use client";
import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import WrapperContent from "@/components/ui/wrapper-content";
import {WrapperMotion} from "@/components/ui/wrapper-motion";
import {cn} from "@/libs/utils";
import {IoMenu} from "react-icons/io5";
import {CgClose} from "react-icons/cg";
import {useState} from "react";
import {Variants, motion} from "motion/react";

// make variable variants for menu open and close
const menuVariants: Variants = {
  close: {
    opacity: 0,
    y: "-100%",
    transition: {
      stiffness: 100,
      damping: 15,
      type: "spring",
    },
  },
  open: {
    opacity: 1,
    y: "60%",
    transition: {
      stiffness: 100,
      damping: 15,
      type: "spring",
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WrapperMotion>
      <div className="py-6 shadow-drop-down bg-white relative">
        <WrapperContent className="flex items-center justify-between">
          <Logo />
          {/* smartphone and tablet style */}
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            variants={menuVariants}
            initial="close"
            animate={typeof window !== undefined && isOpen ? "open" : "close"}
            className={cn(
              "flex flex-col items-center gap-11",
              "absolute left-1/2 -translate-x-1/2",
              "bg-white w-screen py-10",
              "shadow-drop-down",
              "-z-2",
              "lg:hidden",
            )}
          >
            <MenuHeader className="flex-col lg:flex-row" />
            <Button variant={"outline"}>Contact Us</Button>
          </motion.div>
          {/* desktop style */}
          <div className="hidden lg:flex items-center gap-11">
            <MenuHeader className="flex-col lg:flex-row" />
            <Button variant={"outline"}>Contact Us</Button>
          </div>
          {/* toggle button menu hamburger */}
          <Button
            size={"lg"}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg flex lg:hidden"
          >
            {isOpen ? <CgClose size={24} /> : <IoMenu size={24} />}
          </Button>
        </WrapperContent>
      </div>
    </WrapperMotion>
  );
};

export default Header;
