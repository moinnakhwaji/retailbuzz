import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-image.jpg')" }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30"></div>

      <div className="relative text-center text-white px-6 md:px-12">
        {/* Heading with slight text-shadow for readability */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
          The Complete Retail Business Solution
        </h1>
        {/* Subheading with spacing and improved legibility */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Manage your business efficiently with smart features designed to simplify
          operations and maximize growth.
        </p>
        {/* Button with enhanced hover effects */}
        <a
          href="#"
          className="bg-[#6556cd] hover:bg-[#5544c2] text-white font-semibold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
