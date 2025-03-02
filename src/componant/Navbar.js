import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 lg:px-24">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Vijay</div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links (Desktop & Mobile) */}
        <div
          className={`md:flex md:space-x-6 absolute  md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex flex-col  mb-5 items-center z-50" : "hidden"
          }`}
        >
          <a href="#home" className="block md:inline hover:text-gray-400 py-2">
            Home
          </a>
          <a href="#about" className="block md:inline hover:text-gray-400 py-2">
            About-Me
          </a>
          <a
            href="#projects"
            className="block md:inline hover:text-gray-400 py-2"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="block md:inline hover:text-gray-400 py-2"
          >
            Contact
          </a>

          {/* WhatsApp Button (Now works on Mobile Too) */}
          <a
            href="https://wa.me/917219066757?text=Hello%20there!%20I%20want%20to%20connect%20with%20you"
            target="_blank"
            rel="noreferrer"
            className="block md:block mt-4 md:mt-0"
          >
            <button className="bg-gradient-to-r from-green-400 to-red-400 h-10 rounded-full px-4 font-bold">
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
