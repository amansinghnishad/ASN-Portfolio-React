import { useState } from "react";
import EducationTable from "./subContant/EducationTable";
import Experience from "./subContant/Experience";
import Skills from "./subContant/Skills";
import ProfileImage from "./ProfileImage";

const DesktopAboutContent = () => {
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
  const [selectedSection, setSelectedSection] = useState(AboutContent[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <div
      className={`grid grid-cols-3  sm:flex-col-reverse  relative w-full h-max justify-center `}
    >
      <div
        className={`col-span-2 flex h-full justify-center items-center p-16 w-full `}
      >
        <div
          className={` h-full w-9/10 text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40 overflow-hidden`}
        >
          <img
            src="card-hello-background.png"
            className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
          />
          <div className="h-16 w-full flex justify-evenly items-center text-white bg-white/10  rounded-t-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            {AboutContent.map((AboutContent, index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(AboutContent)}
                className="cursor-pointer"
              >
                {AboutContent.section}
              </div>
            ))}
          </div>
          <div className="h-full w-full p-5">{selectedSection.content}</div>
        </div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default DesktopAboutContent;
