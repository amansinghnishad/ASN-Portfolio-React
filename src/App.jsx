import { useEffect, useState } from "react";
import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import BackgroundAnimation from "../utils/BackgroundAnimation";

function App() {
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  useEffect(() => {
    if (isLoaderActive) {
      document.body.classList.add("no-scroll");

      return () => {
        document.body.classList.remove("no-scroll");
      };
    }

    document.body.classList.remove("no-scroll");

    const fadeTimer = setTimeout(() => {
      setShouldRenderLoader(false);
    }, 500);

    return () => {
      clearTimeout(fadeTimer);
      document.body.classList.remove("no-scroll");
    };
  }, [isLoaderActive]);

  return (
    <>
      {shouldRenderLoader && (
        <LoadingScreen
          isActive={isLoaderActive}
          onComplete={() => setIsLoaderActive(false)}
        />
      )}
      <div className={`app-shell ${isLoaderActive ? "app-shell--masked" : ""}`}>
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
      </div>
    </>
  );
}

export default App;
