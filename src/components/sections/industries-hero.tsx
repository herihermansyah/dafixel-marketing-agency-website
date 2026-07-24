import React from "react";
import {
  ContentImageHero,
  ContentTextHero,
  PageHero,
  SubTitleHero,
  TitleHero,
} from "../ui/page-hero";

const IndustriesHero = () => {
  return (
    <PageHero>
      <ContentTextHero>
        <TitleHero>Industries & Expertise</TitleHero>
        <SubTitleHero>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          eveniet sit praesentium similique architecto! Perferendis quo a
          distinctio ab neque impedit earum nisi, libero dolorem adipisci rerum
          repellendus veniam magnam.
        </SubTitleHero>
      </ContentTextHero>
      <ContentImageHero src="/image-003.svg" alt="industries hero" />
    </PageHero>
  );
};

export default IndustriesHero;
