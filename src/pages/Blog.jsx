import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Choose the Right Property for Investment',
      date: 'December 10, 2024',
      excerpt:
        'Choosing the right property is crucial to securing a profitable investment. In this post, we explore the factors that influence property selection and what to consider before making a purchase.',
      image: '/assets/blog1.jpg', // Replace with actual image paths
      link: '/blog/how-to-choose-right-property',
    },
    {
      title: 'The Benefits of Property Validation Before Buying',
      date: 'December 5, 2024',
      excerpt:
        'Before buying a property, it’s important to ensure its legality and authenticity. This article covers the benefits of property validation and why you should never skip this step.',
      image: '/assets/blog2.jpg', // Replace with actual image paths
      link: '/blog/property-validation-benefits',
    },
    {
      title: 'Market Trends to Watch in Real Estate for 2025',
      date: 'November 28, 2024',
      excerpt:
        'The real estate market is ever-changing. In this post, we take a look at the trends to watch in 2025, from property prices to new regulations affecting the industry.',
      image: '/assets/blog3.jpg', // Replace with actual image paths
      link: '/blog/real-estate-market-trends-2025',
    },
    {
      title: '5 Common Mistakes to Avoid When Buying Real Estate',
      date: 'November 15, 2024',
      excerpt:
        'Investing in real estate can be a rewarding experience, but many people make mistakes. Here are five common mistakes you should avoid when purchasing property.',
      image: '/assets/blog4.jpg', // Replace with actual image paths
      link: '/blog/common-real-estate-mistakes',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              {/* Read More Link */}
              <a
                href={post.link}
                className="bg-gold text-black px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition"
              >
                For More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
