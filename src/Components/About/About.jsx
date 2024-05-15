import Navbar from "../Navbar/Navbar";
import Project from "../Projects/Projects";

const ColorBlock = ({ color }) => (
  <div
    className={`h-20 w-20 bg-${color}-500`}
    style={{
      cursor: "url('/paint-brush.cur'), auto",
    }}
  />
);

const About = () => {
  const colors = ["blue", "green", "yellow", "purple"];

  return (
    <>
      <Navbar />

      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="h-96 w-full bg-red-400 p-5 m-8 rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            <h1>About Me</h1>
          </div>
          <div className="h-48 w-full bg-red-400 p-5 m-8 rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            <div className="flex justify-evenly p-5">
              {colors.map((color, index) => (
                <ColorBlock key={index} color={color} />
              ))}
            </div>
            <div className="flex items-end justify-center">
              <p>
                CHOOSE THE COLOR AND JUST PAINT THE WHOLE ABOUT ME container.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="w-2/5 h-96 rounded-2xl shadow-lg shadow-black">
            <img src="" alt="About me" />
          </div>
        </div>
      </div>

      <Project />
    </>
  );
};

export default About;
