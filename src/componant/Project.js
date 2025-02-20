import React from "react";
import Data from "./Data";
function Project() {
  return (
    <div className="bg-black text-white py-20 " id="project">
      <div className="container mx-auto md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Project</h2>
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-8">
          {Data.map((e) => {
            console.log(Data);
            return (
              <div key={e.id}>
                <img src={e.image} alt="fst" className="hight-100px w-40" />
                <h3 className="font-bold text-4xl text-transparent text-white ">
                  {e.Name}
                </h3>
                <h4 className="text-transparent font-bold text-white">
                  {e.technologies}
                </h4>
                <button className="gradiant-r from-yellow-300 to-blue-400">
                  {e.gethub}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
