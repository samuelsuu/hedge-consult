import React from "react";
import img from "../assets/about.jpeg"

const About = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-6">
            About Hedge Consult
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Hedge Consult is a premier property listing and real estate
            intermediary company dedicated to helping individuals secure
            reliable and valuable real estate investments. As a trusted partner
            for buyers interested in land and property acquisitions, Hedge
            Consult bridges the gap between potential property owners and real
            estate companies, ensuring that every transaction provides value
            for money, secure documentation, and peace of mind regarding
            property security.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            At Hedge Consult, we validate multiple properties from real estate
            companies, listing only those that meet our rigorous standards on
            our website. This transparent approach allows potential buyers to
            review thoroughly vetted properties and gain insights through
            reviews before making purchase decisions.
          </p>
          <p className="text-gray-600 text-lg">
            Additionally, our commitment to due diligence ensures each client
            receives not only a secure property but one that stands the test of
            quality and legality. Whether through private surveys, inspections,
            or customized guidance, Hedge Consult is your partner in real
            estate success.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src= {img}
            alt="Hedge Consult"
            className="rounded-lg shadow-lg w-full lg:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
