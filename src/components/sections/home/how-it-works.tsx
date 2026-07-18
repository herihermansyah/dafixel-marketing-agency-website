import SubTitle from "@/components/ui/sub-title";
import WrapperContent from "@/components/ui/wrapper-content";
import {ChildMotion, WrapperMotion} from "@/components/ui/wrapper-motion";
import {cn} from "@/libs/utils";
import Image from "next/image";

interface DataHowType {
  id: number;
  tag: string;
  description: string;
  image: string;
}

const dataHowItWorks: DataHowType[] = Array.from({length: 4}).map((_, i) => ({
  id: i + 1,
  tag: "goal",
  description:
    "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti, dolore velit necessitatibus laboriosam officia odio molestias quod perspiciatis vel.",
  image: "/image-001.svg",
}));

const HowItWorks = () => {
  return (
    <section className="py-5 overflow-hidden">
      <WrapperContent className="flex flex-col gap-30">
        {/* title */}
        <SubTitle>How it works</SubTitle>
        {/* box card */}
        <WrapperMotion whileInView={"visible"}>
          <div className="flex flex-col gap-12 lg:gap-2">
            {dataHowItWorks.map((item) => (
              <ChildMotion
                key={item.id}
                className={cn(
                  "shadow-drop-down relative rounded-2xl py-8 px-10 w-fit",
                  item.id % 2 === 0 ? "self-end" : "self-start",
                  "bg-white",
                )}
              >
                {/* index box */}
                <span
                  className={cn(
                    "text-[124px] font-extrabold absolute -top-23 text-orange-100 tracking-[-2px]",
                    item.id % 2 === 0
                      ? "right-0 lg:-right-15"
                      : "left-0 lg:-left-15",
                  )}
                >
                  0{item.id}
                </span>
                {/* content */}
                <div className="flex flex-col lg:flex-row items-center gap-17">
                  <Image
                    src={item.image}
                    alt={item.description}
                    width={250}
                    height={250}
                  />

                  <div className="flex flex-col gap-4">
                    <h3
                      className={cn(
                        "font-bold font-plus-jakarta-sans text-[36px] text-orange-300 capitalize",
                        "underline decoration-orange-300 underline-offset-15",
                        "text-center lg:text-start",
                      )}
                    >
                      {item.tag}
                    </h3>

                    <p className="text-[18px] font-semibold leading-[170%] lg:w-md text-center lg:text-start">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ChildMotion>
            ))}
          </div>
        </WrapperMotion>
      </WrapperContent>
    </section>
  );
};

export default HowItWorks;
