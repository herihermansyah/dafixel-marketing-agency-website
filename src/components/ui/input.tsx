"use client";
import {cn} from "@/libs/utils";
import React, {forwardRef} from "react";
import {motion, HTMLMotionProps} from "motion/react";

type InputProps = HTMLMotionProps<"input"> &
  React.InputHTMLAttributes<HTMLInputElement> & {};

const inputStyle = {
  base: "outline-none h-15",
  size: "rounded-2xl px-6 w-full",
  border: "border border-gray-300",
  text: "text-gray-500",
  disabled: "disabled:cursor-not-allowed",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({className, disabled, ...props}, ref) => {
    return (
      <motion.input
        initial={{opacity: 0, y: -50, scale: 0.9}}
        animate={{opacity: disabled ? 1 : 0.7, y: 0, scale: 1}}
        transition={{
          type: "spring",
          damping: 4,
          stiffness: 100,
        }}
        ref={ref}
        {...props}
        type="text"
        disabled={disabled}
        className={cn(Object.values(inputStyle), className)}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
