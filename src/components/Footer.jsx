import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
  // Define the class for normal and active links
  const navLinkClass = "text-sm text-white hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-105";
  const activeNavLinkClass = "text-sm text-black font-semibold hover:text-primary";

  const links = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${activeNavLinkClass}` : `${navLinkClass}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? `${activeNavLinkClass}` : `${navLinkClass}`}
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/companyDetails" 
          className={({ isActive }) => isActive ? `${activeNavLinkClass}` : `${navLinkClass}`}
        >
          Details
        </NavLink>
      </li>
    </>
  );

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-12 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Links Section */}
          <div className="flex space-x-6 text-center md:text-left">
            <ul className="flex space-x-6">{links}</ul>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6 text-3xl mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dream Events Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
