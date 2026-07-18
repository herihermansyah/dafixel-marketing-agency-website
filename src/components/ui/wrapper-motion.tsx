"use client";
import React, {ComponentProps, forwardRef} from "react";
import {motion} from "motion/react";
import {
  childMotion,
  wrapperMotion,
  fadeMotion,
  bounceMotion,
} from "@/libs/motion";

// type motion div props
type MotionDivProps = ComponentProps<typeof motion.div>;

interface WrapperMotionType extends MotionDivProps {
  children?: React.ReactNode;
  className?: string;
}

// ====================== wrapper    motion ======================

const WrapperMotion = forwardRef<HTMLDivElement, WrapperMotionType>(
  (
    {children, variants, initial, animate, viewport, className, ...props},
    ref,
  ) => {
    // check whether the user is using the "whileInView"
    const hashWhileInView = props.whileInView !== undefined;

    return (
      <motion.div
        //   deafult variants
        variants={variants || wrapperMotion}
        // the first open animation
        initial={initial !== undefined ? initial : "hidden"}
        // logic when user use animate or whileInView
        animate={
          animate != undefined
            ? animate
            : hashWhileInView
              ? undefined
              : "visible"
        }
        // logic when user use whileInView
        viewport={
          viewport !== undefined
            ? viewport
            : hashWhileInView
              ? {once: true, amount: 0.2}
              : undefined
        }
        {...props}
        ref={ref}
        className={className}
      >
        {children}
      </motion.div>
    );
  },
);

WrapperMotion.displayName = "WrapperMotion";

// ====================== child motion ======================

const ChildMotion = forwardRef<HTMLDivElement, WrapperMotionType>(
  ({children, className, ...props}, ref) => {
    return (
      <motion.div
        className={className}
        variants={childMotion}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

// ====================== fade motion ======================

ChildMotion.displayName = "ChildMotion";

const FadeMotion = forwardRef<HTMLDivElement, WrapperMotionType>(
  ({children, className, ...props}, ref) => {
    return (
      <motion.div
        className={className}
        variants={fadeMotion}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

FadeMotion.displayName = "FadeMotion";

// ====================== bounce motion ======================

const BounceMotion = forwardRef<HTMLDivElement, WrapperMotionType>(
  ({children, className, ...props}, ref) => {
    return (
      <motion.div
        className={className}
        variants={bounceMotion}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

BounceMotion.displayName = "BounceMotion";

export {WrapperMotion, ChildMotion, FadeMotion, BounceMotion};
