import { useEffect } from 'react';
// Import Swiper and the necessary CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Default Swiper styles
import 'swiper/css/navigation'; // Styles for navigation buttons
import 'swiper/css/pagination'; // Styles for pagination
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import img from "../assets/test.jpeg"
import img1 from "../assets/test1.jpeg"

const testimonials = [
  {
    name: 'Barijima Tomsong',
    role: 'Real Estate Investor',
    message:
      "Hedgeway Global Services Ltd has made my property investment journey seamless and hassle-free. The listings are well-vetted, and the team is incredibly professional.",
    image: img,
  },
  {
    name: 'Nnamdi Chigozie',
    role: 'First-time Buyer',
    message:
      "I never thought buying my first property would be so easy. Thanks to Hedgeway Global Services Ltd, I found exactly what I was looking for, and the process was smooth.",
    image: img1,
  },
  // {
  //   name: 'Samuel Johnson',
  //   role: 'Experienced Investor',
  //   message:
  //     "Hedgeway Global Services Ltd's attention to detail and focus on due diligence made my investment experience stress-free. I highly recommend their services.",
  //   image: img,
  // },
  // {
  //   name: 'Alice Williams',
  //   role: 'Property Buyer',
  //   message:
  //     "The customer service at Hedgeway Global Services Ltd is exceptional. They guided me through every step of the process, and I ended up with a great investment property.",
  //   image: img1,
  // },
];

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl font-bold text-black mb-8"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
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
              <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
                data-aos="zoom-in" // Add animation for each slide
              >
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
