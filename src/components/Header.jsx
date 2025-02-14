import React, { useState } from 'react';
import img from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black py-4 shadow-md z-50 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={img}
            alt="Hedgeway Global Services Ltd Logo"
            className="w-20 h-15"
          />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gold focus:outline-none relative z-10"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ transition: 'transform 0.3s ease-in-out' }}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black mt-2 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ transition: 'transform 0.3s ease-in-out' }}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black mt-2 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ transition: 'transform 0.3s ease-in-out' }}
            ></div>
          </button>
        </div>

        {/* Navigation Menu (Desktop version) */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gold">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gold">
                About Us
              </a>
            </li>
            <li>
              <a href="/listings" className="hover:text-gold">
                Listings
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gold">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white w-3/4 h-full p-6">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gold focus:outline-none absolute top-4 right-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col space-y-6 mt-10 text-center">
            <li>
              <a href="/" className="hover:text-gold" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gold" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="/listings" className="hover:text-gold" onClick={toggleMenu}>
                Listings
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gold" onClick={toggleMenu}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gold" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
