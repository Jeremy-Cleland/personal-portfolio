import { motion as m } from "framer-motion";
import { useContext } from "react";
import { AboutMeContext } from "../../context/AboutMeContext.jsx";
import { slideInVariant } from "../../utils/variants.js";
import SocialMedia from "./SocialMedia.jsx";

const ProfileInfo = () => {
  // const { bio } = aboutMeData;
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <m.div
      variants={slideInVariant("right", "tween", 0.3, 0.7)}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl"
    >
      <h2 className="mb-2 font-SourceCodePro text-2xl font-black text-orange-400">
        Jeremy Cleland
      </h2>
      <p className="my-2 font-SourceCodePro font-bold text-dark-900 dark:text-dark-100">
        <span className="text-base text-orange-400"> {">"} </span>
        AI Engineer
      </p>
      {aboutMe.bio.map((para, index) => (
        <p
          key={index}
          className="mx-5 my-6 max-w-5xl font-Fira text-sm leading-9 text-dark-900 dark:text-dark-100 md:mx-10"
        >
          {para}
        </p>
      ))}
      <SocialMedia />
    </m.div>
  );
};

export default ProfileInfo;
