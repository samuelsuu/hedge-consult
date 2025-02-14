import React, { useEffect } from "react";
import {
  FaRegCheckCircle,
  FaSearchLocation,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset for triggering the animation
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  const services = [
    {
      icon: <FaSearchLocation className="text-gold text-5xl mb-4" />,
      title: "Property Listings",
      description:
        "Explore a wide range of verified properties tailored to meet your budget and preferences.",
      animation: "fade-up", // Animation type
    },
    {
      icon: <FaHandshake className="text-gold text-5xl mb-4" />,
      title: "Real Estate Mediation",
      description:
        "We act as a bridge between buyers and sellers, ensuring transparent and secure transactions.",
      animation: "fade-down", // Animation type
    },
    {
      icon: <FaShieldAlt className="text-gold text-5xl mb-4" />,
      title: "Property Validation",
      description:
        "Our team ensures every property is verified for quality, legality, and authenticity.",
      animation: "fade-left", // Animation type
    },
    {
      icon: <FaRegCheckCircle className="text-gold text-5xl mb-4" />,
      title: "Customized Support",
      description:
        "Get personalized guidance through property surveys, inspections, and documentation.",
      animation: "fade-right", // Animation type
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl font-bold text-black mb-8"
          data-aos="zoom-in" // Animation for title
        >
          Our Services
        </h2>
        <p
          className="text-gray-600 mb-12"
          data-aos="fade-up" // Animation for description text
        >
          At Hedgeway Global Services Ltd we are committed to providing
          top-notch services to make your property search seamless and secure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              data-aos={service.animation} // Animation for each card
            >
              {service.icon}
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
