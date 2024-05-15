import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="flex justify-between items-center navbar bg-orange-500 h-12 w-full">
      <Link to="/" className="px-12 text-left">
        ASN
      </Link>
      <ul className="flex justify-center items-center h-12 text-xl font-semibold">
        {links.map((link) => (
          <li key={link} className="px-12 items-center">
            <Link to={`/${link.toLowerCase()}`} className={style.navLink}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
