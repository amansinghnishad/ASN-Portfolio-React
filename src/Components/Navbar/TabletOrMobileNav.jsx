import { Link as ScrollLink } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { MdWork } from "react-icons/md";

const NavLink = ({ to, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    spy={true}
    activeClass="text-white opacity-100"
    className="transition-all duration-300 hover:text-white hover:opacity-100"
  >
    <div className="flex flex-col justify-center items-center opacity-70">
      {children}
    </div>
  </ScrollLink>
);

const TabletOrMobileNav = () => {
  const links = [
    { icon: <FaHome />, name: "Home", to: "hero" },
    { icon: <ImProfile />, name: "About", to: "about" },
    { icon: <MdWork />, name: "Experience", to: "experience" },
    { icon: <PiProjectorScreenChart />, name: "Projects", to: "projects" },
    { icon: <IoIosContact />, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="h-[5rem] bottom-0 fixed w-full px-3 pb-2 backdrop-blur-md z-50">
      <div className="border border-white/10 p-4 rounded-2xl bg-white/5 text-white h-full w-full flex justify-between items-center text-xl backdrop-blur-md">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-center items-center list-none"
          >
            <NavLink to={link.to}>
              {link.icon}
              <p className="text-xs mt-1 font-light">{link.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TabletOrMobileNav;
