import { motion as m } from "framer-motion";
import AboutHeader from "../components/about/AboutHeader.jsx";
import AboutBio from "../components/about/AboutBio.jsx";

const About = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 md:mt-10"
    >
      <AboutHeader />
      <AboutBio />
    </m.div>
  );
};

export default About;
