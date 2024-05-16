import Project from "../Projects/Projects";

const About = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="w-4/5 p-5 border-cyan-200 flex border justify-center items-center">
          <div className="w-3/5 h-full ">
            <div className="h-full w-full flex justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="w-2/5 h-full">
            <div className="flex justify-center items-center h-full ">
              <div className="flex justify-center items-center w-3/5 h-96 rounded-2xl shadow-lg bg-white shadow-gray-400">
                <img src="" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default About;
