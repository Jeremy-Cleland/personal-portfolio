import { useParams } from "react-router-dom";

import ProjectGrid from "./ProjectGrid.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import { ProjectProvider } from "../../context/ProjectContext.jsx";
import { motion as m } from "framer-motion";

const ProjectSingle = ({ projectData }) => {
  const { id } = useParams();

  // Find the project data that matches the ID
  const project = projectData.find((project) => project.id === parseInt(id));
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
