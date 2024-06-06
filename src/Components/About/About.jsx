const About = () => {
  return (
    <>
      <div className="relative w-full h-screen grid grid-cols-3 justify-center ">
        <div className=" h-full col-span-2 flex justify-center items-center p-16 ">
          <div className="h-full w-9/10  flex justify-center items-center text-white bg-white/10  rounded-3xl shadow-lg shadow-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-40">
            <img
              src="card-hello-background.png"
              className={`absolute left-1/2 top-1/2 pointer-events-none  -translate-x-1/2 -translate-y-1/2 h-full w-full z-10  `}
            />
            <h1>About Me</h1>
          </div>
        </div>
        <div className=" h-full">
          <div className="flex justify-center items-center h-full ">
            <div className="flex justify-center items-center w-1/2 h-3/5 rounded-2xl shadow-lg bg-white shadow-gray-400">
              <img src="" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
