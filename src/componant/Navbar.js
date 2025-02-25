// import React from "react";

// function Navbar() {
//   return (
//     <nav className="bg-black text-white px-8 lg:px-24">
//       <div className="container py-2 flex justify-center md:justify-between items-center">
//         <div className="text-2xl font-bold hidden md:inline">vijay</div>
//         <div className="space-x-6">
//           <a href="#home" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#about" className="hover:text-gray-400">
//             About-Me
//           </a>
//           {/* <a href="#services" className="hover:text-gray-400">
//             Services
//           </a> */}
//           <a href="#projects" className="hover:text-gray-400">
//             Projects
//           </a>
//           <a href="#Contact" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//         <a
//           href="https://wa.me/917219066757?text=Hello%20there!%20I%20want%20to%20connect%20with%20you"
//           target="_blank"
//         >
//           <button className="bg-gradient-to-r from-green-400 to-red-400 h-10 rounded-full md:font-bold px-2">
//             WhatsApp
//           </button>
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
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
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="block md:inline hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block md:inline hover:text-gray-400">
            About-Me
          </a>
          <a href="#projects" className="block md:inline hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="block md:inline hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* WhatsApp Button (Always Visible) */}
        <a
          href="https://wa.me/917219066757?text=Hello%20there!%20I%20want%20to%20connect%20with%20you"
          target="_blank"
          className="hidden md:block"
        >
          <button className="bg-gradient-to-r from-green-400 to-red-400 h-10 rounded-full px-4 font-bold">
            WhatsApp
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
