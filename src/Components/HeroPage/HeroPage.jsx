import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BackgroundGlow from "../../../utils/BackgroundGlow";
import BackgroundAnimation from "../../../utils/BackgroudAnimation";
import style from "./HeroPage.module.css";

const TextElement = ({ tag, children, className }) => (
  <tag className={`text-center text-white ${className}`}>{children}</tag>
);
TextElement.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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
    <>
      <div>
        <BackgroundGlow />
        <BackgroundAnimation />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full ">
        <TextElement tag="h2" className="text-3xl tracking-wide font-serif p-2">
          Hi there !!!
        </TextElement>
        <TextElement tag="h1" className="text-4xl tracking-wide font-serif p-2">
          I am Aman Singh Nishad.
        </TextElement>
        <TextElement tag="h3" className="text-2xl tracking-wide font-serif">
          I am {currentTag}
          <span className="animate-blink">|</span>
        </TextElement>
        <div className="absolute bottom-0 h-4 w-full">
          <div className={style.circle}></div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
