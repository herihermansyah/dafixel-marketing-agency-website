import React from "react";
import {DescriptionOverview, Overview, TitleOverview} from "../ui/overview";
import Image from "next/image";
import Button from "../ui/button";

const EditorialGuideDownload = () => {
  return (
    <Overview className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={"/book-001.svg"}
          alt="book guide"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <TitleOverview>
          Get a FREE complete editorial guide for social media growth
        </TitleOverview>
        <DescriptionOverview>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          numquam, voluptas eaque adipisci voluptatum explicabo?
        </DescriptionOverview>
        <Button size={"lg"} className="bg-black/50">
          Download
        </Button>
      </div>
    </Overview>
  );
};

export default EditorialGuideDownload;
