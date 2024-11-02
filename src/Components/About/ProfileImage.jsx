import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfileCard = ({ src, alt, className }) => (
  <div
    className={`overflow-hidden flex justify-center items-center ${className}`}
  >
    <img src={src} className="object-cover h-full w-full" alt={alt} />
  </div>
);
ProfileCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const ProfileImage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const profileImages = [
    {
      src: "profile1.jpg",
      alt: "Profile Image 1",
    },
    {
      src: "profile2.jpg",
      alt: "Profile Image 2",
    },
    {
      src: "profile3.jpg",
      alt: "Profile Image 3",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="h-auto relative w-full"
    >
      <div className="flex justify-center items-center h-full">
        {profileImages.map((image, index) => (
          <ProfileCard
            key={index}
            {...image}
            className="w-3/5 sm:h-9/10 md:h-9/10 lg:h-3/5 z-30 rounded-2xl shadow-lg absolute transition-all duration-500 ease-in-out hover:z-50 hover:transform bg-white shadow-gray-400 transition-delay-500"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileImage;
