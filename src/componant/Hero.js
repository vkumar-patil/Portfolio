import React from "react";
import mainimg from "../assets/images/Portfolio_logo.png";
function Hero() {
  return (
    <div className="bg-black text-white py-16 text-center">
      <img
        src={mainimg}
        alt=""
        className="mx-auto mb-8 h-48 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          Vijay p
        </span>
        MERN Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 ">
        I specialize in building modern and responsive web applications
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-yellow-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full">
          Contact with me
        </button>

        <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-110 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
