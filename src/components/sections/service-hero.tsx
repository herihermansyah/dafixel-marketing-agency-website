import React from "react";
import {
  ActionHero,
  ContentImageHero,
  ContentTextHero,
  PageHero,
  SubTitleHero,
  TitleHero,
} from "../ui/page-hero";

const Serviceero = () => {
  return (
    <PageHero>
      <ContentTextHero>
        <TitleHero>Services</TitleHero>
        <SubTitleHero>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          saepe incidunt ab vero neque adipisci maiores excepturi itaque
          molestias, nam minima officiis pariatur nemo temporibus placeat ex
          dolor dolore ducimus!
        </SubTitleHero>
        <ActionHero link="/contact">Get Started</ActionHero>
      </ContentTextHero>
      <ContentImageHero src="/image-002.svg" alt="service" />
    </PageHero>
  );
};

export default Serviceero;
