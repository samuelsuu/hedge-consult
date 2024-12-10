import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.shutterstock.com/shutterstock/videos/3593537755/preview/stock-footage-real-estate-agent-is-gesturing-with-a-pen-while-showing-a-contract-to-a-client-they-are-discussing.webm" // Replace with your video URL
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
        <h1 className="text-5xl font-bold text-gold mb-6">
          Find Your Dream Property
        </h1>
        <p className="text-lg mb-8">
          Secure reliable and valuable real estate investments with Hedge
          Consult.
        </p>
        <div className="flex space-x-4">
          <a
            href="/listings"
            className="bg-gold text-black px-6 py-3 rounded-md font-bold hover:bg-white transition-all"
          >
            View Listings
          </a>
          <a
            href="/about"
            className="border border-gold text-gold px-6 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
