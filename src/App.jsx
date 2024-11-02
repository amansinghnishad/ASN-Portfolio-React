import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackgroundAnimation from "../utils/BackgroundAnimation";

function App() {
  return (
    <>
      <div className="bg-[#10002B] sm:pb-20 md:pb-20 lg:pb-2 relative">
        <BackgroundAnimation />
        <Navbar />
        <div id="hero">
          <HeroPage />
        </div>
        <div id="about" className="relative z-10">
          <About />
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
