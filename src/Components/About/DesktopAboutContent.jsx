import { useState } from "react";
import EducationTable from "./subContant/EducationTable";
import Experience from "./subContant/Experience";
import Skills from "./subContant/Skills";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutContent = [
  {
    section: "Education",
    content: <EducationTable />,
  },
  {
    section: "Experience",
    content: <Experience />,
  },
  {
    section: "Skills",
    content: <Skills />,
  },
];

const DesktopAboutContent = () => {
  const [selectedSection, setSelectedSection] = useState(AboutContent[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      className={`grid grid-cols-3  sm:flex-col-reverse  relative w-full h-max justify-center `}
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className={`col-span-2 flex h-full justify-center items-center p-16 w-full `}
      >
        <div
          className={` h-full w-9/10 text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 overflow-hidden`}
        >
          <img
            src="card-hello-background.png"
            alt="background"
            className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
          />
          <div className="h-16 w-full flex justify-evenly items-center text-white bg-white/10  rounded-t-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            {AboutContent.map((content, index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(content)}
                className="cursor-pointer"
              >
                {content.section}
              </div>
            ))}
          </div>
          <div className="h-full w-full p-5">{selectedSection.content}</div>
        </div>
      </motion.div>
      <ProfileImage />
    </div>
  );
};

export default DesktopAboutContent;
