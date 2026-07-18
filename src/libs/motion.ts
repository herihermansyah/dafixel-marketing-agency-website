import {Variants} from "motion/react";

export const wrapperMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
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

export const fadeMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // duration: 0.1,
    },
  },
};


export const bounceMotion: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      visualDuration: 0.4,
      bounce: 0.7,
    },
  },
};