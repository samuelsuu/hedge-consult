import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <h2 className="text-xl font-bold text-gold mb-4 md:mb-0">
            Hedge Consult
          </h2>
          <div className="flex space-x-6">
            <a href="https://web.facebook.com/hchedgeway" className="text-white hover:text-gold">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/hchedgeway" className="text-white hover:text-gold">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/hchedgeway" className="text-white hover:text-gold">
              <FaInstagram size={24} />
            </a>
            <a href="" className="text-white hover:text-gold">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-400 hover:text-white">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gold">Contact Us</h3>
            <p className="text-gray-400">123 Real Estate Avenue</p>
            <p className="text-gray-400">Hedgewayconsult@gmail.com</p>
            <p className="text-gray-400">07059854967</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hedge Consult. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
