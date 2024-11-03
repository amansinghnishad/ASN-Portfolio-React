import { Link as ScrollLink } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";

const NavLink = ({ to, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    spy={true}
    activeClass="text-[#7B2CBF]"
  >
    <div className="flex flex-col justify-center items-center">{children}</div>
  </ScrollLink>
);

const TabletOrMobileNav = () => {
  const links = [
    { icon: <FaHome />, name: "Home", to: "hero" },
    { icon: <ImProfile />, name: "About", to: "about" },
    { icon: <PiProjectorScreenChart />, name: "Projects", to: "projects" },
    { icon: <IoIosContact />, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="h-[5rem] bottom-0 fixed w-full px-3 pb-2 backdrop-blur z-50">
      <div className="border-2 p-6 rounded-3xl border-[#3C096C] bg-[#240046] text-[#E0AAFF] h-full w-full flex justify-between items-center text-2xl backdrop-blur">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-center items-center list-none"
          >
            <NavLink to={link.to}>
              {link.icon}
              <p className="text-sm">{link.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TabletOrMobileNav;
