import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import {Overview, TitleOverview} from "../ui/overview";

const ConsultationCta = () => {
  return (
    <Overview className="grid grid-cols-1 lg:grid-cols-2 gap-13">
      <TitleOverview>Book a free digital marketing consultation</TitleOverview>
      <form action="" className="flex flex-col gap-3">
        <Input placeholder="Your Email" className="bg-white" />
        <Button
          size="lg"
          type="submit"
          className="w-full flex justify-center bg-black/40"
        >
          Book free my meeting
        </Button>
      </form>
    </Overview>
  );
};

export default ConsultationCta;
