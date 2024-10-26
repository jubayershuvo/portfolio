import React from "react";
import {Link} from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Link to="/" className="mx-4 hover:text-orange-300">Home</Link>
          <Link to="/services" className="mx-4 hover:text-orange-300">Services</Link>
          <Link to="/reviews" className="mx-4 hover:text-orange-300">Reviews</Link>
          <Link to="/contact" className="mx-4 hover:text-orange-300">Contact</Link>
        </div>
        <div className="flex justify-center mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaFacebookF className="text-orange-300 hover:text-orange-400" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaTwitter className="text-orange-300 hover:text-orange-400" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedinIn className="text-orange-300 hover:text-orange-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaInstagram className="text-orange-300 hover:text-orange-400" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} JS coder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
