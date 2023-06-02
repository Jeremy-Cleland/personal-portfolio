import { motion as m } from "framer-motion";
import { aboutMeData } from "../../data/aboutMeData.jsx";
import SocialMedia from "./SocialMedia.jsx";

const ProfileInfo = () => {
  const { bio } = aboutMeData;
  const infoVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
  };

  return (
    <m.div variants={infoVariants} className="mx-auto max-w-6xl">
      <h2 className="mb-2 font-SourceCodePro text-2xl font-black text-violet-400">
        Jeremy Cleland
      </h2>
      <p className="my-2 font-SourceCodePro font-bold text-dark-900 dark:text-dark-100">
        <span className="text-base text-violet-400"> {">"} </span>
        Full Stack Developer
      </p>
      {bio.map((para, index) => (
        <p
          key={index}
          className="mx-auto my-4 max-w-5xl font-Fira text-sm leading-9 text-dark-900 dark:text-dark-100"
        >
          {para}
        </p>
      ))}
      <SocialMedia />
    </m.div>
  );
};

export default ProfileInfo;
