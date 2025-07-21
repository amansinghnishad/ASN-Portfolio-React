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
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center backdrop-blur px-12 pt-20 navbar h-16 w-full ${style.sticky}`}
    >
      <div
        className={`flex justify-between items-center backdrop-blur-md navbar bg-black/20 -mt-10 h-20 w-full rounded-2xl border border-white/10`}
      >
        <NavItem
          to="hero"
          className="px-12 text-white text-left cursor-pointer"
        >
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
        </NavItem>
        <ul className="flex justify-center items-center h-12 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name} className="px-8 items-center cursor-pointer">
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
