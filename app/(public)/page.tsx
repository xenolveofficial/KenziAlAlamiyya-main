import Hero from "@/components/home/Hero";
import Layout from "./layout";
import ServicesSection from "@/components/home/Services";
import AboutSection from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  )
}