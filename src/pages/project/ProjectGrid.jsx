import { useContext } from "react";
import { motion as m } from "framer-motion";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const ProjectGrid = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2"
    >
      {singleProjectData.images.map((project) => (
        <div key={project.id}>
          <m.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mx-auto h-auto max-w-full rounded-lg lg:max-w-xl"
            src={project.img}
            alt={project.title}
          />
        </div>
      ))}
    </m.div>
  );
};

export default ProjectGrid;
