import { Link as ScrollLink } from "react-scroll";
import style from "./DesktopNav.module.css";

const NavItem = ({ to, children, className }) => (
  <ScrollLink to={to} smooth={true} duration={500} className={className}>
    {children}
  </ScrollLink>
);

const DesktopNav = () => {
  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center backdrop-blur px-12 pt-20 navbar h-12 w-full ${style.sticky}`}
    >
      <div
        className={`flex justify-between items-center backdrop-blur-sm navbar bg-[#240046] -mt-12 h-12 w-full rounded-lg shadow-white `}
      >
        <NavItem
          to="hero"
          className="px-12 text-[#E0AAFF] text-left cursor-pointer"
        >
          ASN
        </NavItem>
        <ul className="flex justify-center items-center h-12 text-xl font-semibold">
          {links.map((link) => (
            <li key={link.name} className="px-12  items-center cursor-pointer ">
              <NavItem to={link.to} className={style.navLink}>
                {link.name}
              </NavItem>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
