import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";

import ProjectGrid from "./ProjectGrid.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOverview from "./ProjectOverview.jsx";

import { SingleProjectProvider } from "../../context/SingleProjectContext.jsx";

const ProjectSingle = () => {
  let { projectName } = useParams();
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
      <SingleProjectProvider projectName={projectName}>
        <ProjectInfo />
        <ProjectOverview />
        <ProjectGrid />
      </SingleProjectProvider>
    </m.div>
  );
};
export default ProjectSingle;
