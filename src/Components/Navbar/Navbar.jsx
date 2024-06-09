import { Link as ScrollLink } from "react-scroll";
import style from "./Navbar.module.css";

const Navbar = () => {
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
        className={`flex justify-between items-center backdrop-blur-sm navbar text-white bg-[#111111c7] -mt-12 h-12 w-full rounded-lg shadow-white `}
      >
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="px-12 text-white text-left cursor-pointer"
        >
          ASN
        </ScrollLink>
        <ul className="flex justify-center  items-center h-12 text-xl font-semibold">
          {links.map((link) => (
            <li key={link.name} className="px-12  items-center cursor-pointer">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className={style.navLink}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
