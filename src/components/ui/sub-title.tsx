import {cn} from "@/libs/utils";
import React, {forwardRef} from "react";
import {BounceMotion, WrapperMotion} from "./wrapper-motion";

interface SubTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const SubTitle = forwardRef<HTMLHeadingElement, SubTitleProps>(
  ({className, children, ...props}, ref) => {
    return (
      <WrapperMotion>
        <div className="flex items-center justify-center flex-col gap-3">
          <BounceMotion>
            <h2
              ref={ref}
              {...props}
              className={cn(
                "text-[52px] font-bold leading-[137%] font-plus-jakarta-sans text-center",
                className,
              )}
            >
              {children}
            </h2>
          </BounceMotion>
          <BounceMotion>
            <div className="w-20 h-1.5 bg-orange-300 rounded-full" />
          </BounceMotion>
        </div>
      </WrapperMotion>
    );
  },
);

SubTitle.displayName = "SubTitle";

export default SubTitle;
