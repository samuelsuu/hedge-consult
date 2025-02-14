import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired options
  }, []);

  return (
    <section className="relative w-full h-screen mt-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/4258906/4258906-sd_640_360_25fps.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
        <h1
          className="text-5xl font-bold text-gold mb-6"
          data-aos="fade-up" // AOS animation
        >
          Find Your Dream Property
        </h1>
        <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
          Secure reliable and valuable real estate investments with Hedgeway Global Services Ltd
        </p>
        <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
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
