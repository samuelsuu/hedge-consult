import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-10 px-5 py-24">
      <div className="container mx-auto max-w-lg">
        <h2
          className="text-3xl font-bold text-center text-black mb-6"
          data-aos="fade-up" // Heading animation
        >
          Get in Touch
        </h2>
        <p
          className="text-center text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="200" // Delayed animation for the subheading
        >
          Have questions or inquiries? Send us a message and we’ll get back to you soon!
        </p>
        <form
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          data-aos="fade-up"
          data-aos-delay="400" // Form animation
        >
          <div data-aos="fade-right" data-aos-delay="500">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="600">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="700">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gold text-black px-6 py-3 w-full rounded-md font-bold hover:bg-black hover:text-white transition-all"
            data-aos="zoom-in"
            data-aos-delay="800" // Button animation
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
