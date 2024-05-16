import style from "./Navbar.module.css";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav
      className={`flex justify-between items-center backdrop-blur px-12 pt-20 navbar h-12 w-full ${style.sticky}`}
    >
      <div
        className={`flex justify-between items-center navbar bg-slate-200 -mt-12 h-12 w-full rounded-lg shadow-white `}
      >
        <a to="/" className="px-12 text-left">
          ASN
        </a>
        <ul className="flex justify-center items-center h-12 text-xl font-semibold">
          {links.map((link) => (
            <li key={link} className="px-12 items-center">
              <a to={`/${link.toLowerCase()}`} className={style.navLink}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
