import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Overlay (Solid Black with subtle gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>

      <div className="relative text-center text-white px-6 md:px-12">
        {/* Heading with glowing text and animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-shadow-lg text-gradient animate__animated animate__fadeIn animate__delay-1s">
          The Complete Retail Business Solution
        </h1>

        {/* Subheading with glowing effect and slight animation */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 animate__animated animate__fadeIn animate__delay-1.5s">
          Manage your business efficiently with smart features designed to simplify
          operations and maximize growth.
        </p>

        {/* Button with black background and animated RGB outline */}
        <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex">
  <div className="flex items-center">
    <span className="ml-1 text-white lg:inline p-1">Get Started</span>
  </div>
  <div className="ml-2 flex items-center gap-1 text-sm md:flex">
    <span className="inline-block tabular-nums tracking-wider font-display font-medium text-black dark:text-white">
    
    </span>
  </div>
</button>

      </div>
    </section>
  );
};

export default HeroSection;
