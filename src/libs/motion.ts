import {Variants} from "motion/react";

export const wrapperMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

export const childMotion: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};
