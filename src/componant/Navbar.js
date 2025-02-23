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
            About Me
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
        <button className="bg-gradient-to-r from-green-400 to-yellow-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full ">
          Connect Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
