import { useParams, Navigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import ProjectGrid from "./ProjectGrid.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import ButtonGroup from "./ButtonGroup.jsx";
import { SingleProjectProvider } from "../../context/SingleProjectContext.jsx";

const ProjectSingle = () => {
  const { projectName } = useParams();
  const { portfolioProject } = useContext(PortfolioContext);
  
  // Check if project exists
  const projectExists = portfolioProject.some(project => project.name === projectName);
  
  if (!projectExists) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <SingleProjectProvider projectName={projectName}>
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
        <ProjectInfo />
        <ProjectOverview />
        <ProjectGrid />
        <ButtonGroup />
      </m.div>
    </SingleProjectProvider>
  );
};
export default ProjectSingle;
