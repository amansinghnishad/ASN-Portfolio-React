import AboutContent from "./AboutContent";
import ProfileImage from "./ProfileImage";

const About = () => {
  return (
    <>
      <div
        className={`lg:grid lg:grid-cols-3 flex sm:flex-col-reverse md:flex-col-reverse relative w-full h-max justify-center `}
      >
        <AboutContent />
        <ProfileImage />
      </div>
    </>
  );
};

export default About;
