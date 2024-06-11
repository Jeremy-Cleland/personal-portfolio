import profilePic from "../../assets/images/profilePic.png";
import { motion as m } from "framer-motion";

const ProfilePicture = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.8 } },
  };

  return (
    <m.img
      src={profilePic}
      alt="Profile"
      className="mx-auto mb-4 h-32 w-32 rounded-full"
      variants={imageVariants}
    />
  );
};

export default ProfilePicture;
