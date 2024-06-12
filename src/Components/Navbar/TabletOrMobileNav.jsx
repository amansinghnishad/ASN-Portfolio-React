import { Link as ScrollLink } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";

const TabletOrMobileNav = () => {
  const links = [
    { icon: <FaHome />, name: "Home", to: "hero" },
    { icon: <ImProfile />, name: "About", to: "about" },
    { icon: <PiProjectorScreenChart />, name: "Projects", to: "projects" },
    { icon: <IoIosContact />, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="h-20 bottom-0 fixed w-full px-3 pb-2 backdrop-blur z-50">
      <div className="border-2 p-2 rounded-3xl border-[#464545c9] bg-[#0b0b0bc5] text-white h-full w-full flex justify-between items-center text-3xl backdrop-blur">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-center items-center list-none"
          >
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-gray-500"
            >
              <div className="flex flex-col justify-center items-center">
                {link.icon}
                <p className="text-sm">{link.name}</p>
              </div>
            </ScrollLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TabletOrMobileNav;
