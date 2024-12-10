import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What types of properties do you list?',
      answer:
        'We list a wide variety of properties, including residential, commercial, and land properties. All properties are verified to meet our quality and legal standards.',
    },
    {
      question: 'How do I know the properties are legitimate?',
      answer:
        'Our team conducts rigorous background checks and validations for every property listed on our platform, ensuring that each one meets legal and quality standards.',
    },
    {
      question: 'How can I contact you for assistance?',
      answer:
        'You can contact us through our contact form, email, or by reaching out directly via WhatsApp or phone. Our support team is always ready to assist you.',
    },
    {
      question: 'Do you charge a commission?',
      answer:
        'We do not charge any upfront fees for browsing properties. However, a commission may be applicable when a sale is completed, which will be clearly outlined in the agreement.',
    },
    {
      question: 'Can I schedule a property inspection?',
      answer:
        'Yes, we offer personalized support through our field agents, who can schedule property inspections and surveys to ensure the property meets your requirements.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12">
          Have any questions? We’ve answered some of the most common ones below!
        </p>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-bold text-black mb-4">{item.question}</h3>
              {activeIndex === index && (
                <p className="text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
