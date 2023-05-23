import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import ProjectInfo from "../components/projects/ProjectInfo.jsx";
import ProjectOverview from "../components/projects/ProjectOverview.jsx";
import { ProjectProvider } from "../context/ProjectContext.jsx";
import { motion as m } from "framer-motion";

const ProjectSingle = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 md:mt-10"
    >
      <ProjectProvider>
        <ProjectInfo />
        <ProjectOverview />
        <ProjectGrid />
      </ProjectProvider>
    </m.div>
  );
};
export default ProjectSingle;
