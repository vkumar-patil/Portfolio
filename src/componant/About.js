import React from "react";
import AboutImg from "../assets/images/coder.svg";
function About() {
  return (
    <div
      className=" bg-black text-white py-20 "
      id="about"
      style={{ width: "100%" }}
    >
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
            <div className="text-center">
              <div
                className="bg-gradient-to-r from-violet-600 to-blue-300 items-center h-7 rounded-full mb-3"
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center ">
                  HTML & CSS
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-violet-500 to-blue-300 items-center h-8 rounded-full mb-3 "
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center">
                  javaScript & React.js
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-violet-400 to-blue-300 items-center h-8 rounded-full mb-3 "
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center">
                  Node.js & MongoDB
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-violet-400 to-blue-400 items-center h-8 rounded-full mb-3 "
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center">
                  BootStrap & Tailwind
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-slate-400 to-blue-500 items-center h-8 rounded-full mb-3 "
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center">
                  Github & Postman
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-slate-400 to-blue-600  center h-8 rounded-full mb-3 "
                style={{ width: "60%" }}
              >
                <p className="text-white font-extrabold text-center">
                  JWT & Multer
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                  6+
                </h3>
                <p>month of experiance</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 ">
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
