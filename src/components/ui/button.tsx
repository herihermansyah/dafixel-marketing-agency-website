"use client";
import React, {forwardRef} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/libs/utils";
import {motion, HTMLMotionProps} from "motion/react";

const buttonVariants = cva(
  "flex items-center gap-2 font-semibold whitespace-nowrap cursor-pointer disabled:cursor-not-allowed overflow-hidden",
  {
    variants: {
      variant: {
        fill: "text-white bg-orange-300",
        outline: "ring-1 ring-orange-300 text-orange-300 bg-white",
      },
      size: {
        sm: "py-2 px-6 rounded-3xl text-[16px]",
        lg: "py-3 px-8 rounded-xl text-[18px]",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "sm",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.button
        whileHover={disabled ? undefined : {scale: 1.05}}
        whileTap={disabled ? undefined : {scale: 0.9}}
        initial={{scale: 0.3, opacity: 0, y: -150}}
        animate={{
          scale: 1,
          opacity: disabled ? 0.5 : 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 250,
        }}
        ref={ref}
        {...props}
        disabled={disabled}
        className={cn(buttonVariants({variant, size}), className)}
      >
        {iconLeft && <span>{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span>{iconRight}</span>}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
