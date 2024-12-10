import React from 'react';
import img from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={img}
            alt="Hedge Consult Logo"
            className="w-20 h-15"
          />
        </div>

        {/* Navigation Menu */}
        <nav>
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
    </header>
  );
};

export default Header;
