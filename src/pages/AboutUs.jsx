import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/about.jpeg";
import CEODetails from "../components/CEODetails";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div data-aos="fade-right">
          {" "}
          {/* AOS animation */}
          <h2 className="text-4xl font-bold text-black mb-6">
            About Hedgeway Global Services Ltd
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Hedgeway Global Services Ltd is a premium property listing and real
            estate intermediary company dedicated to helping individuals secure
            reliable and valuable real estate investments. As a trusted partner
            for buyers interested in land and property acquisitions, Hedgeway
            Global Services Ltd bridges the gap between potential property
            owners and real estate companies, ensuring that every transaction
            provides value for money, secure documentation, and peace of mind
            regarding property security.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            At Hedgeway Global Services Ltd, we validate multiple properties
            from real estate companies, listing only those that meet our
            rigorous standards on our website. This transparent approach allows
            potential buyers to review thoroughly vetted properties and gain
            insights through reviews before making purchase decisions.
          </p>
          <p className="text-gray-600 text-lg">
            Additionally, our commitment to due diligence ensures each client
            receives not only a secure property but one that stands the test of
            quality and legality. Whether through private surveys, inspections,
            or customized guidance, Hedgeway Global Services Ltd is your partner
            in real estate success.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center" data-aos="fade-left">
          {" "}
          {/* AOS animation */}
          <img
            src={img}
            alt="Hedgeway Global Services Ltd"
            className="rounded-lg shadow-lg w-full lg:w-4/5"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
          <CEODetails />
        </div>
    </section>
  );
};

export default About;
