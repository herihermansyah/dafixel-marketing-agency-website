"use client";
import React, {forwardRef} from "react";
import {motion, HTMLMotionProps} from "motion/react";
import {cn} from "@/libs/utils";

type TextareaProps = HTMLMotionProps<"textarea"> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const textareaStyle = {
  base: "outline-none h-40 resize-none",
  size: "rounded-2xl px-6 w-full py-2",
  border: "border border-gray-300",
  text: "text-gray-400",
  disabled: "disabled:cursor-not-allowed",
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, disabled, ...props}, ref) => {
    return (
      <motion.textarea
        initial={{opacity: 0, y: -50, scale: 0.9}}
        animate={{opacity: disabled ? 1 : 0.7, y: 0, scale: 1}}
        transition={{
          type: "spring",
          damping: 4,
          stiffness: 100,
        }}
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(Object.values(textareaStyle), className)}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
