import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { BloodTypes } from "@/components/BloodTypes";
import { WhyDonate } from "@/components/WhyDonate";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <HowItWorks />
        <BloodTypes />
        <WhyDonate />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

