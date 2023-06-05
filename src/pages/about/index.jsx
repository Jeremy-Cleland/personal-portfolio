import { motion as m } from "framer-motion";
import { AboutMeProvider } from "../../context/AboutMeContext.jsx";

import ProfileCard from "./ProfileCard.jsx";
import SkillSection from "../../components/reusable/SkillSection.jsx";
import Timeline from "./Timeline.jsx";
import ScrollProgress from "../../components/reusable/ScrollProgress.jsx";

const About = () => (
  <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, delay: 1 }}
    transition={{
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.15,
    }}
    className="container mx-auto"
  >
    <ScrollProgress position="top-0 sticky" />
    <div className="my-5 mt-10 border-b-4 border-violet-400 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "3vh" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-right font-ChillaxBold text-4xl font-bold tracking-wide 
          "
      >
        About Me
      </m.h1>
      <m.h2
        animate={{ y: 0 }}
        initial={{ y: "3vh" }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="pt-3 text-right font-SourceCodePro tracking-wide"
      >
        A Mission to Innovate: From Green Beret to Software Developer
      </m.h2>
    </div>
    <AboutMeProvider>
      <ProfileCard />
      <Timeline />
      <SkillSection />
    </AboutMeProvider>
  </m.div>
);

export default About;
