import { motion as m } from "framer-motion";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Contexts
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import { SingleProjectProvider } from "../../context/SingleProjectContext.jsx";

// Components
import ButtonGroup from "./ButtonGroup.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOverview from "./ProjectOverview.jsx";

import { fadeIn } from "../../utils/variants.js";

const ProjectSingle = () => {
  const { projectName } = useParams();
  const { portfolioProject } = useContext(PortfolioContext);

  useEffect(() => {
    console.log('ProjectSingle - URL param:', projectName);
    console.log('ProjectSingle - Available projects:', portfolioProject.map(p => p.name));

    // Check if project exists
    const project = portfolioProject.find(
      (project) => project.name === projectName,
    );

    console.log('ProjectSingle - Found project:', project ? project.title : 'Not found');
  }, [projectName, portfolioProject]);

  // Check if project exists
  const project = portfolioProject.find(
    (project) => project.name === projectName,
  );

  if (!project) {
    console.error('Project not found, showing fallback UI');
    return (
      <div className="container mx-auto mt-10 p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-6">Could not find project with name: "{projectName}"</p>
        <p className="mb-6">Available projects: {portfolioProject.map(p => p.name).join(', ')}</p>
        <button
          onClick={() => window.history.back()}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
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
