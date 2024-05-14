import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="h-96 w-full bg-red-400 p-5 m-8 rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            <h1>About Me</h1>
          </div>
          <div className="h-48 w-full bg-red-400 p-5 m-8 rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            <div className="flex justify-evenly p-5">
              <div className="h-20 w-20 bg-black"></div>
              <div className="h-20 w-20 bg-black"></div>
              <div className="h-20 w-20 bg-black"></div>
              <div className="h-20 w-20 bg-black"></div>
            </div>
            <div className="flex items-end justify-center ">
              <p className="">
                CHOOSE THE COLOR AND JUST PAINT THE WHOLE ABOUT ME container.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-1/2 ">
          <div className="w-2/5 h-96  rounded-2xl shadow-lg shadow-black">
            <img src="" /> img
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
