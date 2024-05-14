import style from "./Navbar.module.css";

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="flex justify-between items-center navbar bg-orange-500 h-12 w-full">
      <a className="px-12 text-left">ASN</a>
      <ul className="flex justify-center items-center h-12 text-xl font-semibold">
        {links.map((link) => (
          <li key={link} className="px-12 items-center">
            <a href="#" className={style.navLink}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
