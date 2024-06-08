import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="p-5 grid grid-cols-2 w-full h-96 justify-center items-center ">
        <div className="m-2 border-yellow-500 rounded-xl border-2 h-full">
          0
        </div>
        <div className="m-2 flex items-center justify-center h-full w-full">
          <div className="text-white flex flex-col text-3xl ">
            <a
              href="https://github.com/amansinghnishad"
              aria-label="Github"
              target="_blank"
              className="hover:text-4xl "
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/amansinghnishad"
              className="hover:text-4xl"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/amansinghnishad"
              className="hover:text-4xl"
              aria-label="LeetCode"
              target="_blank"
            >
              <TbBrandLeetcode />
            </a>

            <a
              href="tel:7340981852"
              aria-label="Phone"
              className="hover:text-4xl"
            >
              <FaPhone />
            </a>
            <a
              href="mailto:amansinghnishad0808@gmail.com"
              className="hover:text-4xl"
              aria-label="Email"
              target="_blank"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
