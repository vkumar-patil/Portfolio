import axios from "axios";
import React, { useState } from "react";

function UploadData() {
  const [title, setTitle] = useState("");
  const [sentence, setSentence] = useState("");
  const [about, setAbout] = useState("");
  const [experianse, setExperianse] = useState("");
  const [projects, setProjects] = useState("");
  const [technologis, setTechnologis] = useState("");
  const [file, setFile] = useState(null);
  const [techimages, setTechimages] = useState([]);
  const [resume, setResume] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("sentence", sentence);
    formdata.append("about", about);
    formdata.append("experianse", experianse);
    formdata.append("projects", projects);
    formdata.append("technologis", technologis);
    formdata.append("file", file);
    formdata.append("resume", resume);
    if (techimages) {
      techimages.forEach((image) => formdata.append("techimages[]", image));
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/UploadData/upload",
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response) {
        alert("fom submit done");
      }
    } catch (error) {
      alert("error please try again ");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Submit Form
      </h3>
      <form className="space-y-4" onSubmit={handlesubmit}>
        <div className="p-4 rounded-lg bg-gradient-to-r from-black to-yellow-400">
          <span className="text-white">Technologis Images More Than 1</span>
          <input
            type="file"
            multiple
            className="w-full p-2 rounded-lg border focus:outline-none"
            onChange={(e) => setTechimages([...e.target.files])}
            placeholder="Technologis Images More Than 1"
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-black to-yellow-400">
          <span className="text-white">Resume</span>

          <input
            type="file"
            className="w-full p-2 rounded-lg border focus:outline-none"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Resume"
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-black to-yellow-400">
          <span className="text-white">Main self Image 1</span>
          <input
            type="file"
            className="w-full p-2 rounded-lg border focus:outline-none"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Main self Image 1 "
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-400 to-yellow-400">
          <input
            type="text"
            placeholder="Upload Name & Title"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-black to-yellow-400">
          <input
            type="text"
            placeholder="Upload you in small sentence"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-blue-500">
          <input
            type="text"
            placeholder="Upload About You"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-blue-500">
          <input
            type="text"
            placeholder="Upload Year of Experience"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={experianse}
            onChange={(e) => setExperianse(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-blue-500">
          <input
            type="text"
            placeholder="Upload Completed Projects"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-blue-500">
          <input
            type="text"
            placeholder="Upload Technologies Learned"
            className="w-full p-2 rounded-lg border focus:outline-none"
            value={technologis}
            onChange={(e) => setTechnologis(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadData;
