import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of properties do you list?",
      answer:
        "We list a wide variety of properties, including residential, commercial, and land properties. All properties are verified to meet our quality and legal standards.",
    },
    {
      question: "How do I know the properties are legitimate?",
      answer:
        "Our team conducts rigorous background checks and validations for every property listed on our platform, ensuring that each one meets legal and quality standards.",
    },
    {
      question: "How can I contact you for assistance?",
      answer:
        "You can contact us through our contact form, email, or by reaching out directly via WhatsApp or phone. Our support team is always ready to assist you.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "Our fees vary depending on the specific services provided. We typically charge a commission based on the property's sale price. However, we can discuss customized fee arrangements to suit your individual needs.",
    },
    {
      question: "What can I expect during the home inspection process?",
      answer:
        "A home inspection is a thorough examination of your property's condition. It helps identify any potential issues and can be a valuable tool for both buyers and sellers. ",
    },
    {
      question: "How can I prepare my property for sale?",
      answer:
        "To maximize your property's value, consider staging your home, making necessary repairs, and hiring professional cleaners. Our agents can provide specific advice tailored to your property.",
    },
    {
      question: "Do you provide mortgage assistance?",
      answer:
        "We can connect you with qualified mortgage brokers who can help you secure financing for your property purchase.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl font-bold text-black mb-8"
          data-aos="zoom-in"
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-gray-600 mb-12"
          data-aos="fade-up"
        >
          Have any questions? We’ve answered some of the most common ones below!
        </p>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
              data-aos="fade-up"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-bold text-black mb-4">{item.question}</h3>
              {activeIndex === index && (
                <p
                  className="text-gray-600"
                  data-aos="slide-down" // Animation for answer
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
