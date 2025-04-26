import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";

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
      href: "https://leetcode.com/ASN_aka_aman",
      ariaLabel: "LeetCode",
      icon: <TbBrandLeetcode />,
    },
    {
      href: "mailto:amansinghnishad88@gmail.com",
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
        className="contact-motion-container"
      >
        <div className="contact-container">
          <div className="contact-text">
            <p className="heading-1">Contact Me</p>
            <p className="heading-2">I am currently learning ML.</p>
            <p className="heading-3">
              I am also enhancing my Data Structures and Algorithms (DSA) skills
              through Leetcode. Additionally, I consistently practice web
              development to strengthen my expertise.
            </p>
            <div className="social-links">
              {socialLinks.map((socialLink, index) => (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  key={index}
                  href={socialLink.href}
                  aria-label={socialLink.ariaLabel}
                  target="_blank"
                >
                  {socialLink.icon}
                </motion.a>
              ))}
            </div>
            <span className="contact-vertical-line"></span>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
