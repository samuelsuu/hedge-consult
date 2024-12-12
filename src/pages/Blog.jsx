import React, { useEffect, useState } from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import AOS from "aos";
import "aos/dist/aos.css";

const apiEndpoint = "https://hedgeconsult.cdn.prismic.io/api/v2";
const client = Prismic.client(apiEndpoint);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blog = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", offset: 100 });
  }, []);

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.query(
          Prismic.Predicates.at("document.type", "blog"),
          { orderings: "[my.blog.date desc]" }
        );
        setPosts(response.results);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-5">
      {selectedPost ? (
        <div
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <button
            onClick={handleBackClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-full m-4 hover:bg-blue-600"
          >
            &larr; Back
          </button>
          <img
            src={selectedPost.data.image.url}
            alt={RichText.asText(selectedPost.data.tittle)}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {RichText.asText(selectedPost.data.tittle)}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {formatDate(selectedPost.data.date)}
            </p>
            <div className="prose lg:prose-xl text-gray-700">
              {RichText.render(selectedPost.data.summary)}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => handlePostClick(post)}
              data-aos="zoom-in"
            >
              <div className="relative h-56">
                <img
                  src={post.data.image.url}
                  alt={RichText.asText(post.data.tittle)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">
                  {formatDate(post.data.date)}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {RichText.asText(post.data.tittle)}
                </h3>
                <div className="text-gray-600 line-clamp-3">
                  {RichText.render(post.data.summary)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
