import { useState, useEffect } from "react";
import EducationTable from "./subContant/EducationTable";
import Experience from "./subContant/Experience";
import Skills from "./subContant/Skills";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../../utils/pixelate.css";

const MobileAboutContent = () => {
  const AboutContent = [
    {
      section: "Education",
      content: <EducationTable />,
      image: "profile1.jpg",
    },
    {
      section: "Experience",
      content: <Experience />,
      image: "profile2.jpg",
    },
    {
      section: "Skills",
      content: <Skills />,
      image: "profile3.jpg",
    },
  ];
  const [selectedSection, setSelectedSection] = useState(AboutContent[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      className="border-2 border-[#2f4c88] rounded-2xl p-5 m-5"
      style={{
        background:
          "radial-gradient(ellipse, #7B2CBF 10%, #5A189A 20%, #240046 40%, #240046 50%)",
        borderRadius: "24px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="pb-10">
        <ProfileImage selectedSection={selectedSection} />
      </div>
      <div ref={ref} className="">
        <div className="flex flex-col">
          <div className="flex justify-evenly">
            {AboutContent.map((content, index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(content)}
                className="cursor-pointer border-2 w-32 bg-[#ff9500ee] border-[#fca211aa] hover:border-[#fca2118e] p-2 m-2 rounded-2xl "
              >
                {content.section}
              </div>
            ))}
          </div>
          <div className="h-full w-full p-5 ">{selectedSection.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MobileAboutContent;
