import React from "react";
import {ChildMotion, WrapperMotion} from "../ui/wrapper-motion";
import WrapperContent from "../ui/wrapper-content";

const ContentOverivew = () => {
  return (
    <WrapperMotion>
      <section className="bg-orange-300 py-30">
        <WrapperContent className="flex flex-col gap-11 text-center">
          <ChildMotion>
            <h3 className="text-[36px] leading-[120%] text-white font-bold font-plus-jakarta-sans capitalize">
              What happens when i hire lunar strategry?
            </h3>
          </ChildMotion>
          <ChildMotion>
            <p className="text-[22px] leading-8 text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              consequuntur accusamus nesciunt beatae officia asperiores
              perferendis odio expedita accusantium? Cumque, aliquam repellat
              autem qui eaque impedit hic iure rerum ratione minus consequuntur
              facilis nobis molestiae temporibus tempore? Perspiciatis, neque
              quia?
            </p>
          </ChildMotion>
        </WrapperContent>
      </section>
    </WrapperMotion>
  );
};

export default ContentOverivew;
