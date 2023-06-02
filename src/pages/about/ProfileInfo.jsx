import { motion as m } from "framer-motion";
import { aboutMeData } from "../../data/aboutMeData.jsx";
import SocialMedia from "./SocialMedia.jsx";
import { slideInVariant } from "../../utils/variants.js";

const ProfileInfo = () => {
  const { bio } = aboutMeData;

  return (
    <m.div
      variants={slideInVariant("right", "tween", 0.3, 0.7)}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl"
    >
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
          className="mx-10 my-4 max-w-5xl font-Fira text-sm leading-9 text-dark-900 dark:text-dark-100"
        >
          {para}
        </p>
      ))}
      <SocialMedia />
    </m.div>
  );
};

export default ProfileInfo;
