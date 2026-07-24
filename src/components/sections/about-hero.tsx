import React from "react";
import {
  ContentImageHero,
  ContentTextHero,
  PageHero,
  SubTitleHero,
  TitleHero,
} from "../ui/page-hero";

const AboutHero = () => {
  return (
    <PageHero>
      <ContentTextHero>
        <TitleHero>consistency - drive - curiousity - passion</TitleHero>
        <SubTitleHero>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          repudiandae possimus tempora vel dolore sapiente illum modi ducimus
          dolorum odio?
        </SubTitleHero>
      </ContentTextHero>
      <ContentImageHero src="/image-004.svg" alt="about hero image" />
    </PageHero>
  );
};

export default AboutHero;
