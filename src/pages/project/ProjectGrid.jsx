import { useContext } from "react";
import { motion as m } from "framer-motion";
import ProjectContext from "../../context/ProjectContext.jsx";

const ProjectGrid = () => {
  const { projectData } = useContext(ProjectContext);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      }}
      className="grid grid-cols-2 gap-10"
    >
      {projectData.Images.map((project) => (
        <div key={project.id}>
          <m.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-auto max-w-full rounded-2xl"
            src={project.img}
            alt={project.title}
          />
        </div>
      ))}
    </m.div>
  );
};

export default ProjectGrid;
