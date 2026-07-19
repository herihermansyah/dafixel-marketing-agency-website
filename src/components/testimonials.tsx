"use client";
import React from "react";
import WrapperContent from "./ui/wrapper-content";
import SubTitle from "./ui/sub-title";
import {FaQuoteLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";
import Button from "./ui/button";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Mousewheel} from "swiper/modules";
import "swiper/css";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";

const testiData = Array.from({length: 10}).map((_, i) => ({
  id: 1 + i,
  comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus distinctio laborum magnam quasi ipsum",
  name: "Heri Hermansyah",
  position: "Frontend Web Developer",
}));

const Testimonials = () => {
  return (
    <WrapperContent className="flex flex-col gap-30">
      {/* subtitle */}
      <SubTitle>Our Testimonials</SubTitle>
      {/* box card */}
      <WrapperMotion whileInView={"visible"}>
        <div className="shadow-drop-down px-5 sm:px-25 py-15">
          <div className="flex flex-col items-center gap-10 lg:flex-row  lg">
            {/* box and quote icon */}
            <ChildMotion>
              <div className="shrink-0 h-60 w-50 bg-orange-300 rounded-md relative">
                <span className="absolute left-5 -bottom-5">
                  <FaQuoteLeft size={50} />
                </span>
              </div>
            </ChildMotion>

            <Swiper
              slidesPerView={1}
              className="w-full"
              loop={true}
              navigation={{
                prevEl: ".button-prev",
                nextEl: ".button-next",
              }}
              mousewheel={{forceToAxis: true}}
              modules={[Navigation, Mousewheel]}
            >
              {testiData.map((item) => (
                <SwiperSlide key={item.id}>
                  <ChildMotion>
                    <div className="flex flex-col gap-10">
                      {/* description */}
                      <p className="font-semibold text-[24px] lg:text-[32px] leading-[115%] text-center lg:text-start">
                        {item.comment}
                      </p>
                      {/* name and position */}
                      <div className="flex items-center flex-col gap-2 justify-between">
                        <h5 className="text-orange-300 font-semibold text-[22px]">
                          -- {item.name},-{item.position}
                        </h5>
                      </div>
                    </div>
                  </ChildMotion>
                </SwiperSlide>
              ))}
              {/* navigation */}
              <div className="flex items-center justify-center mt-8 gap-5">
                <Button className="button-prev">
                  <FaArrowLeft />
                </Button>
                <Button className="button-next">
                  <FaArrowRight />
                </Button>
              </div>
            </Swiper>
          </div>
        </div>
      </WrapperMotion>
    </WrapperContent>
  );
};

export default Testimonials;
