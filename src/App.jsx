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
      <div className="app-container">
        <BackgroundAnimation />
        <Navbar />
        <div id="hero">
          <HeroPage />
        </div>
        <div id="about" className="about-section">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
