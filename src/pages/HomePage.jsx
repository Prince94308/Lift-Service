import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CompanyIntro from '../components/home/CompanyIntro';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WorkingProcess from '../components/home/WorkingProcess';
import IndustriesSection from '../components/home/IndustriesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import ContactCTA from '../components/home/ContactCTA';

export default function HomePage() {
  useEffect(() => {
    document.title = "AuraLift Elevators | Premium Elevator Installation, Repair & Modernization";
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CompanyIntro />
      <ServicesOverview />
      <WhyChooseUs />
      <WorkingProcess />
      <IndustriesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
