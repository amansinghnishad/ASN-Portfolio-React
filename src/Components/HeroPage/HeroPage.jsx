import React, { useState, useEffect } from "react";
import About from "../About/About";

const HeroPage = () => {
  const tags = React.useMemo(
    () => [
      "a Developer.",
      "a Designer.",
      "a Programmer.",
      "a Learner.",
      "a Enthusiast.",
    ],
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
      {" "}
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="text-center">
          <h2 className="text-3xl tracking-wide font-serif p-2">
            Hi there !!!
          </h2>
          <h1 className="text-4xl tracking-wide font-serif p-2">
            I am Aman Singh Nishad.
          </h1>
          <h3 className="text-2xl tracking-wide font-serif">
            I am {currentTag}
            <span className="animate-blink">|</span>
          </h3>
        </div>
      </div>
      <About />
    </>
  );
};

export default HeroPage;
