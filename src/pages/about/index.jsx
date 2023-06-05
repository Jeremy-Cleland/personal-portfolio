import { motion as m } from "framer-motion";
import { AboutMeProvider } from "../../context/AboutMeContext.jsx";

import ProfileCard from "./ProfileCard.jsx";
import SkillCloud from "../../components/reusable/SkillCloud.jsx";
import Timeline from "./Timeline.jsx";
import ScrollProgress from "../../components/reusable/ScrollProgress.jsx";
import Header from "../../components/reusable/Header.jsx";

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
    <Header
      title="About Me"
      subtitle="A Mission to Innovate: From Green Beret to Software Developer"
    />
    <AboutMeProvider>
      <ProfileCard />
      <Timeline />
      <SkillCloud />
    </AboutMeProvider>
  </m.div>
);

export default About;
