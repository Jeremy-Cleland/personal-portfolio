import ProfilePicture from "./ProfilePicture.jsx";
import ProfileInfo from "./ProfileInfo.jsx";
import { motion as m } from "framer-motion";

const ProfileCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <m.div
      className="mx-auto my-10 max-w-7xl rounded-lg bg-white p-6 shadow-lg dark:bg-dark-900"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <ProfilePicture />
      <ProfileInfo />
    </m.div>
  );
};

export default ProfileCard;
