import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-10 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <img
            src="//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
            width="130"
            height="20"
            alt="coupang"
            className="mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Your one-stop for all your needs. Shop with us and experience the
            best online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sm:items-center">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline hover:text-blue-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl mb-6">
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTelegram />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
          <form className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-sm"
            />
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md text-white font-semibold text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
