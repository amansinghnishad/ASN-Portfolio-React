import DesktopAboutContent from "./DesktopAboutContent";
import { useMediaQuery } from "react-responsive";
import MobileAboutContent from "./MobileAboutContent";

const About = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 850px)",
  });
  return (
    <>{isDesktopOrLaptop ? <DesktopAboutContent /> : <MobileAboutContent />}</>
  );
};

export default About;
