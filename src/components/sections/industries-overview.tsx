import React from "react";
import {DescriptionOverview, Overview, TitleOverview} from "../ui/overview";
import Button from "../ui/button";

const IndustriesOverview = () => {
  return (
    <Overview>
      <TitleOverview>Get a free digital marketing consultation</TitleOverview>
      <DescriptionOverview>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quae
        autem quod sunt officiis non similique, obcaecati voluptatum ut
        distinctio, repudiandae tenetur molestiae maiores porro aperiam
        dignissimos laborum quasi magnam.
      </DescriptionOverview>
      <Button
        size={"lg"}
        className="bg-black/50 flex items-center justify-center self-center"
      >
        yes, i would like some device
      </Button>
    </Overview>
  );
};

export default IndustriesOverview;
