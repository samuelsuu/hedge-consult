import React from 'react';
import { FaRegCheckCircle, FaSearchLocation, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaSearchLocation className="text-gold text-5xl mb-4" />,
      title: 'Property Listings',
      description: 'Explore a wide range of verified properties tailored to meet your budget and preferences.',
    },
    {
      icon: <FaHandshake className="text-gold text-5xl mb-4" />,
      title: 'Real Estate Mediation',
      description: 'We act as a bridge between buyers and sellers, ensuring transparent and secure transactions.',
    },
    {
      icon: <FaShieldAlt className="text-gold text-5xl mb-4" />,
      title: 'Property Validation',
      description: 'Our team ensures every property is verified for quality, legality, and authenticity.',
    },
    {
      icon: <FaRegCheckCircle className="text-gold text-5xl mb-4" />,
      title: 'Customized Support',
      description: 'Get personalized guidance through property surveys, inspections, and documentation.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Our Services</h2>
        <p className="text-gray-600 mb-12">
          At Hedge Consult, we are committed to providing top-notch services to make your property search seamless and secure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
