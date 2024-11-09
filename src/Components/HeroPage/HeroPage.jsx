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
    () => ["a Developer.", "a Programmer.", "a Learner.", "an Enthusiast."],
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

  return (
    <div style={{ position: "relative" }}>
      <BackgroundGlow />
      <div
        className={`${styles.heroContainer} h-screen -mb-20 w-full  drop-shadow-[20px_10px_0_#3C096C]`}
      >
        <div className={styles.heroBackground}></div>
        <TextElement
          tag="h2"
          className={`${styles.firstTextElement} text-2xl tracking-wide  p-1 `}
        >
          Hi there !!!
        </TextElement>
        <TextElement
          tag="h1"
          className={`${styles.secondTextElement} text-3xl tracking-wide  p-1`}
        >
          I'm&nbsp;
          <span className={styles.secondTextElementSpan}>
            Aman Singh Nishad.
          </span>
        </TextElement>
        <TextElement
          tag="h3"
          className={`${styles.thirdTextElement}  tracking-wide`}
        >
          I am {currentTag}
          <span className="animate-blink">|</span>
        </TextElement>
      </div>
    </div>
  );
};

export default HeroPage;
