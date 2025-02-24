import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">vijay</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About-Me
          </a>
          {/* <a href="#services" className="hover:text-gray-400">
            Services
          </a> */}
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <a
          href="https://wa.me/917219066757?text=Hello%20there!%20I%20want%20to%20connect%20with%20you"
          target="_blank"
        >
          <button className="bg-gradient-to-r from-green-400 to-red-400 h-10 rounded-full md:font-bold px-2">
            WhatsApp
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
