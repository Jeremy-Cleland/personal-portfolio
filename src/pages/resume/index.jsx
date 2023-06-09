import { AboutMeProvider } from "../../context/AboutMeContext.jsx";
import { motion as m } from "framer-motion";

import ExperienceSection from "./ExperienceSection.jsx";
import EducationSection from "./EducationSection.jsx";
import SkillsSection from "./SkillSection.jsx";
// import ProjectsSection from "./ProjectsSection.jsx";
import ScrollProgress from "../../components/reusable/ScrollProgress.jsx";
import Header from "../../components/reusable/Header.jsx";

const Resume = () => {
  return (
    <AboutMeProvider>
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

        <Header title="Resume" />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
      </m.div>
    </AboutMeProvider>
  );
};
export default Resume;
