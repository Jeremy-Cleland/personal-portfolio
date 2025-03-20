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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    }
  }
};

const ProjectSingle = () => {
  const { projectName } = useParams();
  const { portfolioProject } = useContext(PortfolioContext);

  useEffect(() => {
    // Check if project exists
    const project = portfolioProject.find(
      (project) => project.name === projectName,
    );

    // Set page title if project exists
    if (project) {
      document.title = `${project.title} | Jeremy Cleland`;
    }

    return () => {
      document.title = "Jeremy Cleland - Portfolio";
    };
  }, [projectName, portfolioProject]);

  // Check if project exists
  const project = portfolioProject.find(
    (project) => project.name === projectName,
  );

  if (!project) {
    return (
      <m.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto mt-10 px-6 py-12"
      >
        <div className="mx-auto max-w-lg rounded-lg border border-orange-400/30 bg-white p-8 text-center shadow-md dark:border-orange-600/30 dark:bg-dark-900">
          <h2 className="mb-4 font-ChillaxBold text-2xl text-dark-900 dark:text-white">Project Not Found</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Could not find project with name: "{projectName}"</p>
          <button
            onClick={() => window.history.back()}
            className="rounded-md bg-orange-400 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600"
          >
            Go Back
          </button>
        </div>
      </m.div>
    );
  }

  return (
    <SingleProjectProvider projectName={projectName} initialData={project}>
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <m.div 
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ProjectInfo />
          <ProjectOverview />
          <ButtonGroup />
        </m.div>
      </m.div>
    </SingleProjectProvider>
  );
};
export default ProjectSingle;
