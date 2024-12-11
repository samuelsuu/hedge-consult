import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Listings from "./pages/Listing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; // Import the component
import Blog from "./pages/Blog";
import IntroVideo from "./components/IntroVideo"; // Import the IntroVideo component

function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Handle video end to show Home page
  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
        {!isVideoEnded && <IntroVideo onVideoEnd={handleVideoEnd} />} {/* Show video if not ended */}
        
        {isVideoEnded && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        )}
        <Footer />
        <FloatingWhatsApp /> {/* Add the Floating WhatsApp Icon */}
      </div>
    </Router>
  );
}

export default App;
