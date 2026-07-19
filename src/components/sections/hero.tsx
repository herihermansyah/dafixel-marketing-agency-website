import {
  ActionHero,
  ContentImageHero,
  ContentTextHero,
  PageHero,
  SubTitleHero,
  TitleHero,
} from "@/components/ui/page-hero";

const hero = () => {
  return (
    <PageHero>
      <ContentTextHero>
        <TitleHero>
          We help you grow your
          <span className="text-orange-300">conversions.</span>
        </TitleHero>
        <SubTitleHero>
          Featured in leading publications around the world
        </SubTitleHero>
        <ActionHero link="/contact">Contact Us</ActionHero>
      </ContentTextHero>
      <ContentImageHero src="/image-001.svg" alt="hero image" />
    </PageHero>
  );
};

export default hero;
