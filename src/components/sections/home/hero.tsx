import Shape001 from "@/assets/shape-001";
import Button from "@/components/ui/button";
import WrapperContent from "@/components/ui/wrapper-content";
import {
  ChildMotion,
  FadeMotion,
  WrapperMotion,
} from "@/components/ui/wrapper-motion";
import Image from "next/image";

const hero = () => {
  return (
    <WrapperMotion>
      <section className="relative overflow-hidden">
        <WrapperContent className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center relative z-2">
          <div className="flex flex-col gap-5 items-start">
            <ChildMotion>
              <h2 className="text-[54px] lg:text-[76px] font-bold leading-[115%]">
                We help you grow your{" "}
                <span className="text-orange-300">conversions.</span>
              </h2>
            </ChildMotion>
            <ChildMotion>
              <p className="font-semibold text-[20px] md:text-[24px] leading-[115%]">
                Featured in leading publications around the world
              </p>
            </ChildMotion>
            <Button size="lg">Contact Us</Button>
          </div>
          <ChildMotion>
            <div className="relative aspect-square">
              <Image src={"/image-001.svg"} alt="hero image" fill priority />
            </div>
          </ChildMotion>
        </WrapperContent>
        <FadeMotion>
          <Shape001 className="absolute top-1/2 -translate-y-1/2" />
        </FadeMotion>
      </section>
    </WrapperMotion>
  );
};

export default hero;
