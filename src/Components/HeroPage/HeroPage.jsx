import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import style from "./HeroPage.module.css";

const HeroPage = () => {
  const tags = React.useMemo(
    () => ["Developer.", "Programmer.", "Learner.", "Enthusiast."],
    []
  );
  const [currentTag, setCurrentTag] = useState(tags[0]);
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const tag = tags[tagIndex];
    if (charIndex < tag.length) {
      setTimeout(() => {
        setCurrentTag((prev) => prev + tag[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
    } else {
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % tags.length);
        setCharIndex(0);
        setCurrentTag("");
      }, 2000);
    }
  }, [tags, tagIndex, charIndex]);

  const imgRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientY } = e;
      const centerY = window.innerWidth / 2;

      const posX = (clientY - centerY) / centerY;

      imgRef2.current.style.transform = `translate(-50%, -50%) rotate(${
        posX * 5
      }deg)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen w-full ">
        <img
          src="card-skills-background.png"
          className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-10"
        />
        <img
          ref={imgRef2}
          src="file.png"
          className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 blur-sm"
        />
        <div className="text-center text-white">
          <h2 className="text-3xl tracking-wide font-serif p-2">
            Hi there !!!
          </h2>
          <h1 className="text-4xl tracking-wide font-serif p-2">
            I am Aman Singh Nishad.
          </h1>
          <h3 className="text-2xl tracking-wide font-serif">
            I am a {currentTag}
            <span className="animate-blink">|</span>
          </h3>
        </div>
        <div className="absolute bottom-0 h-4 w-full">
          <div className={style.circle}></div>
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
};

export default HeroPage;
