import { useState } from "react";

const About = () => {
  const Education = () => (
    <>
      <h1 className=" text-4xl p-2">Education : </h1>
      <table className="m-2.5 p-5 border-2 h-64 ">
        <thead>
          <tr>
            <th className="p-5 border-2">Year</th>
            <th className="p-5 border-2">Institution</th>
            <th className="p-5 border-2">Degree</th>
            <th className="p-5 border-2">Percentage</th>
          </tr>
        </thead>
        <tbody className="p-5 border-2">
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2022-26</td>
            <td className="p-5 border-2">
              University of Lucknow (Faculty of Engineering and Technology)
            </td>
            <td className="p-5 border-2">
              Bachelor degree (B-Tech), Computer Science and Engineering
            </td>
            <td className="p-5 border-2">N/A</td>
          </tr>
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2020-21</td>
            <td className="p-5 border-2">
              Army Public School, Chandimandir Cantt. Panchkula
            </td>
            <td className="p-5 border-2">Class -12 (Intermediate)</td>
            <td className="p-5 border-2">83.5%</td>
          </tr>
          <tr className="p-5 border-2">
            <td className="p-5 border-2">2018-19</td>
            <td className="p-5 border-2">
              Army Public School, Chandimandir Cantt. Panchkula
            </td>
            <td className="p-5 border-2">Class -10 (High School)</td>
            <td className="p-5 border-2">89.5%</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  const Experience = () => (
    <>
      <p>Participated in SIH(Smart India Hackathon).</p>
      <p>Participated in Hacknovate 5.0 (ABES Hackathon).</p>
    </>
  );

  const icons = [
    { src: "html5.png" },
    { src: "canva.png" },
    { src: "css.png" },
    { src: "figma.png" },
    { src: "git.png" },
    { src: "github.png" },
    { src: "intellij-idea.png" },
    { src: "java.png" },
    { src: "javascript.png" },
    { src: "react.png" },
    { src: "vscode.png" },
  ];
  const Skills = () =>
    icons.map((icons, index) => (
      <div
        key={index}
        className="w-16 h-16 flex flex-row rounded-md bg-[#6a6868b3] justify-evenly border-2 border-white"
      >
        <img src={icons.src} />
      </div>
    ));

  const AboutContent = [
    {
      section: "Education",
      content: <Education />,
    },
    {
      section: "Experience",
      content: <Experience />,
    },
    {
      section: "Skills",
      content: (
        <div className="h-9/10 w-full flex justify-center item-center">
          <div className="grid grid-cols-3 gap-x-14 gap-y-6  justify-center items-center">
            <Skills />
          </div>
        </div>
      ),
    },
  ];
  const [selectedSection, setSelectedSection] = useState(AboutContent[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div
        className={`lg:grid lg:grid-cols-3 flex sm:flex-col-reverse md:flex-col-reverse relative w-full h-max justify-center `}
      >
        <div
          className={`lg:col-span-2 flex h-full justify-center items-center p-16 sm:flex-col-reverse md:flex-col-reverse w-full `}
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
        <div className="h-full relative w-full overflow-hidden">
          <div className="flex justify-center items-center h-full overflow-hidden">
            <div className="overflow-hidden flex justify-center items-center w-1/2 sm:9/10 md:9/10 lg:h-3/5 z-30 rounded-2xl shadow-lg absolute transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 transition-delay-500">
              <img
                src="profile1.jpg"
                className="object-contain h-full"
                alt="ProfileImg1"
              />
            </div>
            <div className="overflow-hidden flex justify-center z-20 transform rotate-12 origin-bottom-left items-center w-1/2 sm:9/10 md:9/10 lg:h-3/5 rounded-2xl shadow-lg transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 delay-500">
              <img
                src="profile2.jpg"
                className="object-contain h-full"
                alt="Profileimg2"
              />
            </div>
            <div className="overflow-hidden flex justify-center absolute transform -rotate-12 origin-bottom-right items-center w-1/2 sm:9/10 md:9/10 lg:h-3/5 rounded-2xl shadow-lg transition-all  duration-500 ease-in-out hover:z-50 hover:transform hover:-rotate-0 bg-white shadow-gray-400 delay-500 	">
              <img
                src="profile3.jpg"
                className="object-contain h-full"
                alt="Profileimg3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
