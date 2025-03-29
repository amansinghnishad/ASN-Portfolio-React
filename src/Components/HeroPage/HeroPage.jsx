import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BackgroundGlow from "../../../utils/BackgroundGlow";
import styles from "./HeroPage.module.css";

const TextElement = ({ tag: Tag, children, className, style }) => (
  <Tag className={`text-center text-white ${className}`} style={style}>
    {children}
  </Tag>
);

TextElement.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

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
      }, 100); // Adjusted typing speed
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

      <div className={styles.heroContainer}>
        <div className={styles.heroBackgroundContainer}>
          <div className={styles.heroBackgroundContainer2}>
            <div className={styles.heroBackground}></div>
          </div>
        </div>
        <img src="\Arrow.png" alt="Arrow" className={styles.arrow} />
        <TextElement tag="h1" className={`${styles.secondTextElement}`}>
          Hello! I am &nbsp;
          <span className={styles.secondTextElementSpan}>
            Aman Singh Nishad.
          </span>
        </TextElement>
        <TextElement
          tag="h3"
          className={`${styles.thirdTextElement} tracking-wide fade-in `}
        >
          I am a {currentTag}
          <span className="animate-blink">|</span>.
          <TextElement tag="h4" className={`${styles.paraElement}`}>
            I’m a programmer who adapts to shifting challenges. I focus on
            solutions, refine relentlessly, and deliver results that hit the
            mark — cleanly and efficiently. I thrive in uncertainty, turning
            obstacles into opportunities with logic and a knack for simplicity.
            No overcomplicating, just outcomes that work.
          </TextElement>
        </TextElement>
      </div>
    </div>
  );
};

export default HeroPage;
