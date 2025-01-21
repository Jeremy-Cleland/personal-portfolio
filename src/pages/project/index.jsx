import { useParams, Navigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useContext } from "react";

// Contexts
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import { SingleProjectProvider } from "../../context/SingleProjectContext.jsx";

// Components
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import ButtonGroup from "./ButtonGroup.jsx";

import { fadeIn } from "../../utils/variants.js";

const ProjectSingle = () => {
  const { projectName } = useParams();
  const { portfolioProject } = useContext(PortfolioContext);

  // Check if project exists
  const project = portfolioProject.find(
    (project) => project.name === projectName,
  );

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <SingleProjectProvider projectName={projectName} initialData={project}>
      <m.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.15,
        }}
        className="container mx-auto mt-5 md:mt-10"
      >
        <ProjectInfo />
        <ProjectOverview />
        <ButtonGroup />
      </m.div>
    </SingleProjectProvider>
  );
};
export default ProjectSingle;
