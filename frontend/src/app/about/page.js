// app/about/page.jsx
import React from "react";
import Banner from '../components/about/Banner'
import CompanyIntro from '../components/about/Intro'
import ClienteleSection from '../components/about/ClienteleSection'
import PhilosophySection from '../components/about/PhilosophySection'
import CapabilitiesSection from '../components/about/CapabilitiesSection'
import VisionMission from '../components/about/VisionMission'
import ProductCategories from '../components/about/ProductCategories'

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      <Banner />
      
     
      <PhilosophySection />
      <ClienteleSection />
      

      <CapabilitiesSection />
      

      <VisionMission />
      

    </main>
  );
}
