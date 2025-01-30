import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import IndustryFacilitiesAndPreview from "./components/IndustryFacilities";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Slider/>
     
      <IndustryFacilitiesAndPreview/>
      <Footer />
    </div>
  );
}

export default App;
