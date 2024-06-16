import DesktopAboutContent from "./DesktopAboutContent";
import { useMediaQuery } from "react-responsive";
import MobileAboutContent from "./MobileAboutContent";

const About = () => {
  return (
    <>
      {useMediaQuery({ query: "(min-width: 850px)" }) ? (
        <DesktopAboutContent />
      ) : (
        <MobileAboutContent />
      )}
    </>
  );
};

export default About;
