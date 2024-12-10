import React from 'react';
// Import Swiper and the necessary CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Default Swiper styles
import 'swiper/css/navigation'; // Styles for navigation buttons
import 'swiper/css/pagination'; // Styles for pagination

import img from '../assets/test.jpg'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Real Estate Investor',
    message:
      "Hedge Consult has made my property investment journey seamless and hassle-free. The listings are well-vetted, and the team is incredibly professional.",
    image: {img}, // Replace with the actual path to the image
  },
  {
    name: 'Jane Smith',
    role: 'First-time Buyer',
    message:
      "I never thought buying my first property would be so easy. Thanks to Hedge Consult, I found exactly what I was looking for, and the process was smooth.",
    image: '/assets/testimonial2.jpg', // Replace with the actual path to the image
  },
  {
    name: 'Samuel Johnson',
    role: 'Experienced Investor',
    message:
      "Hedge Consult's attention to detail and focus on due diligence made my investment experience stress-free. I highly recommend their services.",
    image: '/assets/testimonial3.jpg', // Replace with the actual path to the image
  },
  {
    name: 'Alice Williams',
    role: 'Property Buyer',
    message:
      "The customer service at Hedge Consult is exceptional. They guided me through every step of the process, and I ended up with a great investment property.",
    image: '/assets/testimonial4.jpg', // Replace with the actual path to the image
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">What Our Clients Say</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s image`}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-gray-600 mb-4">{testimonial.message}</p>
                <h3 className="font-semibold text-xl text-black">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
