import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Press from "@/components/Press";
import ApplyForm from "@/components/ApplyForm";

import ThisIsYou from "@/components/ThisIsYou";
import MemberProfiles from "@/components/MemberProfiles";
import ModernDating from "@/components/ModernDating";
import ThreeSteps from "@/components/ThreeSteps";
import WhyLunchActually from "@/components/WhyLunchActually";
import SuccessStories from "@/components/SuccessStories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Press />
      <ApplyForm />
      
      <ThisIsYou />
      <MemberProfiles />
      <ModernDating />
      <ThreeSteps />
      <WhyLunchActually />
      <SuccessStories />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
