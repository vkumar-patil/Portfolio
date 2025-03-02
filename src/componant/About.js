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
          <div className="flex-1 mx-auto">
            <p className="text-lg mb-8">
              <strong>
                I am a passionate MERN Stack Developer with a strong foundation
                in frontend and backend development.
              </strong>
              With expertise in MongoDB, Express.js, React.js, and Node.js, I
              specialize in building scalable, dynamic, and user-friendly web
              applications. Currently, I am working as a Web Development Intern
              at Skillfull Technologies, where I am gaining hands-on experience
              in full-stack development and improving my skills in JavaScript,
              RESTful APIs, authentication (JWT), and database management
              (MongoDB, MySQL).
            </p>
            <div className="bg-gradient-to-r from-violet-600 to-blue-300 items-center h-7 rounded-full mb-3">
              <p className="text-white font-extrabold text-center ">
                HTML & CSS
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-blue-300 items-center h-8 rounded-full mb-3 ">
              <p className="text-white font-extrabold text-center">
                javaScript & React.js
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-blue-300 items-center h-8 rounded-full mb-3 ">
              <p className="text-white font-extrabold text-center">
                Node.js & MongoDB
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-400 items-center h-8 rounded-full mb-3 ">
              <p className="text-white font-extrabold text-center">
                BootStrap & Tailwind
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-blue-500 items-center h-8 rounded-full mb-3 ">
              <p className="text-white font-extrabold text-center">
                Github & Postman
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-400 to-blue-600  center h-8 rounded-full mb-3 ">
              <p className="text-white font-extrabold text-center">
                JWT & Multer
              </p>
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
