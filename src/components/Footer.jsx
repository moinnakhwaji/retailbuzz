import React from "react";
import { FaApple, FaYoutube } from "react-icons/fa"; // Importing Apple and YouTube icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-6 sm:mb-0 text-center sm:text-left">
          <p className="text-lg sm:text-xl mb-2">
            Home <span className="mx-2">|</span> Master <span className="mx-2">|</span> Purchase <span className="mx-2">|</span> Inventory <span className="mx-2">|</span> Stock <span className="mx-2">|</span> Transaction <span className="mx-2">|</span> POS <span className="mx-2">|</span> Barcode <span className="mx-2">|</span> Partner <span className="mx-2">|</span> Contact
          </p>
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Retail Buzz. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-gray-400 transition-colors duration-300">
            <FaApple />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-gray-400 transition-colors duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
