import ConsultationCta from "@/components/consultation-cta";
import RecentsBlog from "@/components/recents-blog";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

const page = () => {
  return (
    <div className="flex flex-col gap-30">
      <Hero />
      <HowItWorks />
      <ConsultationCta />
      <Testimonials />
      <RecentsBlog />
    </div>
  );
};

export default page;
