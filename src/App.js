import "./input.css";
import Navbar from "./componant/Navbar";
import Hero from "./componant/Hero";
import About from "./componant/About";
import Project from "./componant/Project";
import Contact from "./componant/Contact";
import Footer from "./componant/Footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
