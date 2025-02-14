import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { handleFormSubmission } from '../api/formHandle';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleFormSubmission(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10 px-5">
      <div className="container mx-auto max-w-lg">
        <h2
          className="text-3xl font-bold text-center text-black mb-10 mt-12"
          data-aos="fade-up"
        >
          Get in Touch
        </h2>
        <p
          className="text-center text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have questions or inquiries? Send us a message and we’ll get back to you soon!
        </p>
        <form
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Name Field */}
          <div data-aos="fade-right" data-aos-delay="500">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"  // Add name attribute
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Email Field */}
          <div data-aos="fade-left" data-aos-delay="600">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"  // Add name attribute
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Message Field */}
          <div data-aos="fade-right" data-aos-delay="700">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"  // Add name attribute
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold text-white transition duration-300 ${
              isSubmitting
                ? 'bg-yellow-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-yellow-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
