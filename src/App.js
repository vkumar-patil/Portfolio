import "./input.css";
import Navbar from "./componant/Navbar";
import Hero from "./componant/Hero";
import About from "./componant/About";
import Project from "./componant/Project";
import Contact from "./componant/Contact";
//import Footer from "./componant/Footer";
import MainSlider from "./componant/MainSlider";
import UploadData from "./componant/Admin/UploadData";
function App() {
  return (
    <div className="container">
      <Navbar />
      <UploadData />
      <Hero />
      <MainSlider />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
