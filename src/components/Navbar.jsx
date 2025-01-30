import React, { useState } from "react";
import logo from "../assets/task1logo.png";
import { Menu, X } from "lucide-react"; // Importing icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1f1e24] to-[#23232a] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="Retail Buzz Logo" className="h-12 w-12 object-contain" />
          <span className="text-white text-2xl font-semibold tracking-widest">Retail Buzz</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1f1e24] border-t border-gray-700 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map(({ href, label }) => (
              <NavItem key={href} href={href} label={label} isMobile />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ href, label, isMobile }) => (
  <a
    href={href}
    className={`block text-gray-300 hover:text-[#6556cd] transition-all duration-300 text-lg font-medium ${
      isMobile ? "py-3 border-b border-gray-700" : "py-2"
    }`}
  >
    {label}
  </a>
);

// Navigation Links Array
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/master", label: "Master" },
  { href: "/purchase", label: "Purchase" },
  { href: "/inventory", label: "Inventory" },
  { href: "/stock", label: "Stock" },
  { href: "/transaction", label: "Transaction" },
  { href: "/pos", label: "POS" },
  { href: "/barcode", label: "Barcode" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default Navbar;
