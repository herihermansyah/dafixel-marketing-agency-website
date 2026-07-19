import React from "react";
import {ChildMotion, WrapperMotion} from "./ui/wrapper-motion";
import Image from "next/image";
import Button from "./ui/button";
import WrapperContent from "./ui/wrapper-content";

const teamData = Array.from({length: 6}).map((_, i) => ({
  id: 1 + i,
  name: "heri hermansyah",
  position: "frontend web developer",
  image: "/image-001.svg",
  email: "heryhermansyah563@gmail.com",
  address: "bangkalan, jawa timur, indonesia",
}));

const TeamCard = () => {
  return (
    <WrapperMotion whileInView={"visible"}>
      <WrapperContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((item) => (
            <ChildMotion
              key={item.id}
              className="flex flex-col gap-5 shadow-drop-down p-5 items-center justify-center text-center rounded-3xl"
            >
              <ChildMotion>
                <div className="w-30 h-30 relative overflow-hidden border border-orange-300 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </ChildMotion>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <ChildMotion>
                    <h3 className="font-bold text-[32px] leading-8 capitalize">
                      {item.name}
                    </h3>
                  </ChildMotion>
                  <ChildMotion>
                    <h5 className="text-[20px] font-medium leading-6 capitalize">
                      {item.position}
                    </h5>
                  </ChildMotion>
                </div>
                <div className="flex flex-col gap-1 text-[18px] text-blue-400">
                  <ChildMotion>
                    <p>{item.email}</p>
                  </ChildMotion>
                  <ChildMotion>
                    <p>{item.address}</p>
                  </ChildMotion>
                </div>
              </div>
              <Button size={"lg"}>Book a Free Meeting</Button>
            </ChildMotion>
          ))}
        </div>
      </WrapperContent>
    </WrapperMotion>
  );
};

export default TeamCard;
