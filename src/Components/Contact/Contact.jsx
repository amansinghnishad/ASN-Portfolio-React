import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import style from "./Contact.module.css";

const Contact = () => {
  const links = [
    {
      href: "https://github.com/amansinghnishad",
      ariaLabel: "Github",
      icon: <FaGithub />,
    },
    {
      href: "https://linkedin.com/in/amansinghnishad",
      ariaLabel: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://leetcode.com/amansinghnishad",
      ariaLabel: "LeetCode",
      icon: <TbBrandLeetcode />,
    },
    {
      href: "mailto:amansinghnishad0808@gmail.com",
      ariaLabel: "Email",
      icon: <MdEmail />,
    },
  ];
  return (
    <>
      <div className="  w-full h-96 flex justify-center item-center mb-5  ">
        <div className=" grid grid-cols-3 m-2 w-9/20  justify-center items-center border-[#1f0741] hover:drop-shadow-[25px_25px_25px_rgba(31,7,65,0.77)] shadow-[rgba(31,7,65,0.77)] bg-gradient-to-br from-[#a073d1cb] to-[#0b0217d5] rounded-xl border-2 h-full overflow-hidden transition-all duration-700 ease-in-out">
          <div className="col-span-2 p-10">
            <p className="p-1 text-lg text-gray-300">
              I constantly try to improve myself
            </p>
            <p className="p-2 text-4xl text-white">
              Currently, I am learning Redux.
            </p>
            <p className="p-3 mr-3 text-lg text-gray-500">
              I am also Enhancing DSA via Leetcode and my Repo(ODOT). Other than
              that, I also constantly practice web dev.
            </p>
            <div></div>
          </div>
          <div className="h-full w-full flex flex-col">
            <div className="text-white col-span-1 flex flex-row gap-5 text-2xl items-start justify-end h-1/5 w-full p-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  className="hover:text-3xl hover:bg-[#7c52aacb]  p-2 rounded-md border-2 transition-all duration-500 ease-in-out"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="w-full h-full flex justify-end items-end overflow-hidden ">
              <img className={style.scaleAnimate} src="avtar.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
