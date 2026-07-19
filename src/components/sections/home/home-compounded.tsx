import ConsultationCta from "@/components/consultation-cta";
import RecentsBlog from "@/components/recents-blog";
import Hero from "@/components/sections/home/hero";
import HowItWorks from "@/components/sections/home/how-it-works";
import Testimonials from "@/components/testimonials";
import WhyDapixel from "@/components/why-dapixel";

const HomeCompounded = () => {
  return (
    <div className="flex flex-col gap-30">
      <Hero />
      <HowItWorks />
      <ConsultationCta />
      <Testimonials />
      <RecentsBlog />
      <WhyDapixel />
    </div>
  );
};

export default HomeCompounded;
