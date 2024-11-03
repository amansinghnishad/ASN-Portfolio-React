import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import style from "./Contact.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const socialLinks = [
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

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className=" w-full h-auto flex justify-center item-center mb-5  "
      >
        <div className=" lg:grid lg:grid-cols-3 m-2 lg:w-9/20 flex flex-col-reverse justify-center items-center border-[#1f0741] hover:drop-shadow-[25px_25px_25px_rgba(31,7,65,0.77)] shadow-[rgba(31,7,65,0.77)] bg-gradient-to-br from-[#240046] to-[#7B2CBF] rounded-xl border-2 h-full overflow-hidden transition-all duration-700 ease-in-out z-40">
          <div className="lg:col-span-2 p-10">
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
              {socialLinks.map((socialLink, index) => (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  key={index}
                  href={socialLink.href}
                  aria-label={socialLink.ariaLabel}
                  target="_blank"
                  className=" hover:bg-[#7c52aacb]  p-2 rounded-md border-2 drop-shadow-[0px_5px_2px_rgba(0,0,0,1)]"
                >
                  {socialLink.icon}
                </motion.a>
              ))}
            </div>
            <div className="w-full h-full flex justify-end items-end overflow-hidden drop-shadow-[0_35px_30px_#000000] ">
              <img
                className={style.scaleAnimate}
                src="avtar.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
