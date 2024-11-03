import { useState, useEffect } from "react";
import EducationTable from "./subContant/EducationTable";
import Experience from "./subContant/Experience";
import Skills from "./subContant/Skills";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../../utils/pixelate.css";

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
  const [animationClass, setAnimationClass] = useState("pixelate-in");

  const handleSectionClick = (section) => {
    setAnimationClass("pixelate-out");
    setTimeout(() => {
      setSelectedSection(section);
      setAnimationClass("pixelate-in");
    }, 500);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("pixelate-in");
    } else {
      setAnimationClass("pixelate-out");
    }
  }, [inView]);

  return (
    <div
      className={`border-2 border-[#2f4c88] m-14 p-6 rounded-2xl z-50 h-full`}
      style={{
        background:
          "radial-gradient(circle, #7B2CBF 10%, #5A189A 20%, #240046 40%, #240046 50%)",
        backdropFilter: "blur(10px)",
        borderRadius: "24px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-cols-3 sm:flex-col-reverse w-full h-max justify-center">
        <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="col-span-2 flex h-full justify-center items-center p-16 w-full"
        >
          <div
            className="h-full w-9/10 text-[#E5E5E5] rounded-3xl shadow-lg shadow-gray-400 overflow-hidden"
            style={{
              background: "rgba(60, 9, 108, 0.4)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="h-16 w-full text-[#14213D] flex justify-evenly m-6">
              {AboutContent.map((content, index) => (
                <div
                  key={index}
                  onClick={() => handleSectionClick(content)}
                  className="cursor-pointer border-2 w-32 bg-[#FCA311] border-[#fca211aa] hover:border-[#fca2118e] p-2 m-2 rounded-2xl flex flex-col justify-evenly text-center"
                >
                  {content.section}
                </div>
              ))}
            </div>
            <div className={`h-full w-full p-5 `}>
              {selectedSection.content}
            </div>
          </div>
        </motion.div>
        <ProfileImage selectedSection={selectedSection} />
      </div>
    </div>
  );
};

export default DesktopAboutContent;
