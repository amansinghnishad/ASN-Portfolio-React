import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackgroundAnimation from "../utils/BackgroundAnimation";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <BackgroundAnimation />
        <div id="hero">
          <HeroPage />
        </div>
        <div id="about" className="about-section">
          <About />
        </div>
        <div id="experience" className="experience-section">
          <Experience />
        </div>
        <div id="projects" className="projects-section">
          <Projects />
        </div>
        <div id="contact" className="contact-section">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
