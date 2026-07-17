"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "motion/react";

const Logo = () => {
  return (
    <motion.div
      initial={{opacity: 0, rotate: 360, y: -100}}
      animate={{rotate: 0, opacity: 1, y: 0}}
      transition={{type: "spring", damping: 10, stiffness: 100}}
    >
      <Link href={"/"} className="flex items-center justify-center">
        <Image
          src={"/logo.svg"}
          alt="logo dapixel"
          width={194}
          height={26}
          priority
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
