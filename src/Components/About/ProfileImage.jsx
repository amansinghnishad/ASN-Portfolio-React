const ProfileImage = () => {
  return (
    <div className="h-auto relative w-full  ">
      <div className="flex justify-center items-center h-full">
        <div className="overflow-hidden flex justify-center items-center w-3/5 sm:h-9/10 md:h-9/10 lg:h-3/5 z-30 rounded-2xl shadow-lg absolute transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 transition-delay-500">
          <img
            src="profile1.jpg"
            className="object-cover h-full w-full"
            alt="ProfileImg1"
          />
        </div>
        <div className="overflow-hidden flex justify-center z-20 transform rotate-12 origin-bottom-left items-center w-3/5  sm:h-9/10 md:h-9/10 lg:h-3/5 rounded-2xl shadow-lg transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 delay-500">
          <img
            src="profile2.jpg"
            className="object-cover h-full w-full"
            alt="Profileimg2"
          />
        </div>
        <div
          className="overflow-hidden flex justify-center items-center w-3/5 sm:h-9/10 md:h-9/10 lg:h-3/5 z-20
        -rotate-12 origin-bottom-right  rounded-2xl shadow-lg absolute transition-all duration-500 ease-in-out hover:z-50 hover:transform hover:rotate-0 bg-white shadow-gray-400 transition-delay-500 "
        >
          <img
            src="profile3.jpg"
            className="object-cover h-full w-full"
            alt="Profileimg3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
