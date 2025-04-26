import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BackgroundGlow from "../../../utils/BackgroundGlow";
import "./HeroPage.css";

const TextElement = ({ tag: Tag, children, className, style }) => (
  <Tag className={`text-center text-white ${className}`} style={style}>
    {children}
  </Tag>
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
          <TextElement tag="h1" className="secondTextElement">
            Hello! I am &nbsp;
            <span className="secondTextElementSpan">Aman Singh Nishad.</span>
          </TextElement>
          <TextElement
            tag="h3"
            className="thirdTextElement tracking-wide fade-in"
          >
            <div className="writtenText">
              <span className="fixedText">I am a</span>&nbsp;
              <span className="dynamicText">{currentTag}</span>
              <span className="animate-blink">|</span>.
            </div>
            <TextElement tag="h4" className="paraElement">
              I’m a programmer who adapts to shifting challenges. I focus on
              solutions, refine relentlessly, and deliver results that hit the
              mark — cleanly and efficiently. I thrive in uncertainty, turning
              obstacles into opportunities with logic and a knack for
              simplicity. No overcomplicating, just outcomes that work.
            </TextElement>
          </TextElement>
          <button
            className="resumeButton"
            onClick={() => {
              window.open("/assets/resume.pdf", "_blank");
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
