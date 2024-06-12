import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import TabletOrMobileNav from "./TabletOrMobileNav";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return <>{isDesktopOrLaptop ? <DesktopNav /> : <TabletOrMobileNav />}</>;
};

export default Navbar;
