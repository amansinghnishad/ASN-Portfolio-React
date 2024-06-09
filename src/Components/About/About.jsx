import { useState } from "react";
import style from "./About.module.css";

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

  const Skills = () => (
    <div className="border-2 w-16 h-16 border-white">
      <img src="html5.png" />
    </div>
  );

  const AboutContant = [
    {
      section: "Education",
      contant: <Education />,
    },
    {
      section: "Experience",
      contant: <Experience />,
    },
    {
      section: "Skills",
      contant: <Skills />,
    },
  ];
  const [selectedSection, setSelectedSection] = useState(AboutContant[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className="relative w-full h-screen grid grid-cols-3 justify-center ">
        <div
          className={`${style.size} h-full col-span-2 flex justify-center items-center p-16`}
        >
          <div
            className={`${style.size} h-full w-9/10 text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40`}
          >
            <img
              src="card-hello-background.png"
              className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
            />
            <div className="h-16 w-full flex justify-evenly items-center text-white bg-white/10  rounded-t-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
              {AboutContant.map((AboutContant, index) => (
                <div
                  key={index}
                  onClick={() => handleSectionClick(AboutContant)}
                  className="cursor-pointer"
                >
                  {AboutContant.section}
                </div>
              ))}
            </div>
            <div className="h-full w-full p-5">{selectedSection.contant}</div>
          </div>
        </div>
        <div className=" h-full relative">
          <div className="flex justify-center items-center h-full ">
            <div className="flex justify-center items-center w-1/2 h-3/5 z-30 rounded-2xl shadow-lg absolute transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 transition-delay-500">
              <img
                src="profile1.jpg"
                className="object-contain h-full"
                alt="img1"
              />
            </div>
            <div className="flex justify-center z-20 transform rotate-12 origin-bottom-left items-center w-1/2 h-3/5 rounded-2xl shadow-lg transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 delay-500">
              <img src="profile2.jpg" alt="img2" />
            </div>
            <div className="flex justify-center absolute transform -rotate-12 origin-bottom-right items-center w-1/2 h-3/5 rounded-2xl shadow-lg transition-all  duration-500 ease-in-out hover:z-50 hover:transform hover:-rotate-0 bg-white shadow-gray-400 delay-500 	">
              <img src="profile3.jpg" alt="img2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
