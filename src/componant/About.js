import React from "react";
import AboutImg from "../assets/images/coder.svg";
function About() {
  return (
    <div className=" bg-black text-white py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              jjjdjhhdfdnsdsdbhd jdhujd hdeudheuhde udhuehfduehd
              uqwehduehduehudh quhuqhuehuehfuhru ufhuewhfuwehufhuwe uwhefuhweuhf
              uwfhuwehufhu wufhuwehfuheru wufhuwerhfu
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bh-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-yellow-400 text-white  transform transition-transform duration-300 hover:scale-110 w-10/12 rounded-full h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlcss" className="w-2/12">
                  BootStrap & Tailwind
                </label>
                <div className="grow bh-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-yellow-400 text-white  transform transition-transform duration-300 hover:scale-110 w-10/12 rounded-full h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlcss" className="w-2/12">
                  React & JavaScript
                </label>
                <div className="grow bh-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-yellow-400 text-white  transform transition-transform duration-300 hover:scale-110 w-9/12 rounded-full h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlcss" className="w-2/12">
                  MongoDB & MySQL
                </label>
                <div className="grow bh-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-yellow-400 text-white  transform transition-transform duration-300 hover:scale-110 w-8/12 rounded-full h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                  1+
                </h3>
                <p>years of experiance</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  5+
                </h3>
                <p>Projects complited</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                  9+
                </h3>
                <p>Technologis learnd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
