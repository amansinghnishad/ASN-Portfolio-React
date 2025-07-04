import React, { useState, useEffect, useRef } from "react";
import BackgroundGlow from "../../../utils/BackgroundGlow";
import "./HeroPage.css";

const TextElement = ({ tag: Tag, children, className, style }) => (
  <Tag className={`text-center text-white ${className}`} style={style}>
    {children}
  </Tag>
);

const FloatingParticle = ({ delay = 0, size = 4, duration = 3 }) => (
  <div
    className="floating-particle"
    style={{
      "--delay": `${delay}s`,
      "--size": `${size}px`,
      "--duration": `${duration}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const HeroPage = () => {
  const tags = React.useMemo(
    () => ["Developer", "Programmer", "Learner", "Enthusiast"],
    []
  );
  const [currentTag, setCurrentTag] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const tag = tags[tagIndex];
    if (charIndex < tag.length) {
      setTimeout(() => {
        setCurrentTag((prev) => prev + tag[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % tags.length);
        setCharIndex(0);
        setCurrentTag("");
      }, 2000);
    }
  }, [tags, tagIndex, charIndex]);

  return (
    <div style={{ position: "relative" }}>
      <BackgroundGlow />

      <div className="heroContainer">
        <div className="heroBackgroundContainer">
          <img src="../../../heroImage.jpg" className="heroBackground"></img>
        </div>
        <div className="heroBackgroundContainer2">
          {" "}
          <TextElement tag="h1" className="secondTextElement">
            <span className="greeting-text">Hello! I am</span>&nbsp;
            <span className="secondTextElementSpan">Aman Singh Nishad.</span>
          </TextElement>
          <TextElement
            tag="h3"
            className="thirdTextElement tracking-wide fade-in"
          >
            {" "}
            <div className="writtenText">
              <span className="fixedText">I am a</span>&nbsp;
              <span className="dynamic-text-container">
                <span className="dynamicText">{currentTag}</span>
                <span className="animate-blink">|</span>
              </span>
              .
            </div>
          </TextElement>
          <TextElement tag="h4" className="paraElement">
            I'm a programmer who adapts to shifting challenges. I focus on
            solutions, refine relentlessly, and deliver results that hit the
            mark — cleanly and efficiently. I thrive in uncertainty, turning
            obstacles into opportunities with logic and a knack for simplicity.
            No overcomplicating, just outcomes that work.
          </TextElement>
          <button
            className="resumeButton"
            onClick={() => {
              window.open("./RESUME.pdf", "_blank");
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
