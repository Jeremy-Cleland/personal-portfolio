import { useContext } from "react";
import { motion as m } from "framer-motion";
import Button from "../../components/reusable/Button.jsx";
import Card from "../../components/reusable/Card.jsx";
import profilePic from "../../assets/images/profilePic.png";
import { AboutMeContext } from "../../context/AboutMeContext.jsx";
import { slideInVariant } from "../../utils/variants.js";

const AboutMe = () => {
  const { aboutMe } = useContext(AboutMeContext);
  return (
    <Card>
      <m.div
        variants={slideInVariant("right", "tween", 0.3, 0.7)}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl"
      >
        <div className="my-5 border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
          <h4 className="text-left font-Fira text-sm tracking-tight md:text-lg">
            <span className="text-base text-violet-400"> {">"} </span> About Me
          </h4>
        </div>
        <img
          src={profilePic}
          alt="Profile"
          className="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        {aboutMe.bio.slice(0, 1).map((para, index) => (
          <p
            key={index}
            className="mx-5 my-4 max-w-5xl font-Fira text-sm leading-9 text-dark-900 dark:text-dark-100 md:mx-10"
          >
            {para}
          </p>
        ))}
        <div className="mt-5 text-center">
          <Button href="/about">View More</Button>
        </div>
      </m.div>
    </Card>
  );
};
export default AboutMe;
