import {cn} from "@/libs/utils";
import React from "react";

interface WrapperContentProps {
  children?: React.ReactNode;
  className?: string;
}

const WrapperContent = ({children, className}: WrapperContentProps) => {
  return (
    <div className={cn("container mx-auto xl:w-main px-4 xl:px-0", className)}>
      {children}
    </div>
  );
};

export default WrapperContent;
