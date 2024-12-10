import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Listings from "./pages/Listing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; // Import the component
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer />
        <FloatingWhatsApp /> {/* Add the Floating WhatsApp Icon */}
      </div>
    </Router>
  );
}

export default App;
