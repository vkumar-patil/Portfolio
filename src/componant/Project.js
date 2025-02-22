import React from "react";
import Data from "./Data";
function Project() {
  return (
    <div className="bg-black text-white py-20 " id="projects">
      <div className="container mx-auto md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map((e) => {
            console.log(Data);
            return (
              <div
                key={e.id}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={e.image}
                  alt="fst"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="font-bold text-4xl text-transparent text-white  mb-2">
                  {e.Name}
                </h3>
                <p className="text-gray-400 font-bold mb-4">{e.technologies}</p>
                <a
                  href={e.gethub}
                  className=" inline-block bg-gradient-to-r from-red-500 to-blue-400 text-white px-4 py-2 rounded-full"
                >
                  github
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
