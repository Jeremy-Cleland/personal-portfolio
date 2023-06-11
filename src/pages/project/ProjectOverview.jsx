import { useContext } from "react";
import { motion as m } from "framer-motion";
import ProjectContext from "../../context/ProjectContext.jsx";

const ProjectOverview = () => {
  const { projectData } = useContext(ProjectContext);
  const { Overview, Technologies, Heading } = projectData.About;
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.3,
      }}
      className="mb-16 flex flex-col gap-0 md:gap-10 lg:flex-row"
    >
      <div className="mb-7 grow">
        <m.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 0.5,
          }}
          className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100 "
        >
          {Heading}
        </m.h3>
        <p className="mb-2 font-Fira text-sm font-medium leading-6 ">
          {Overview}
        </p>
      </div>
      <div className="mb-7 grow">
        <m.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 0.5,
          }}
          className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100 "
        >
          {Technologies.title}
        </m.h3>
        <div className="flex w-full flex-row gap-5 text-center font-SourceCodePro text-dark-900 dark:text-dark-100 lg:gap-10">
          {Technologies.techs.map((tech) => (
            <m.div
              whileHover={{ scale: 1.05, color: "#A38CF3" }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex flex-col items-center justify-center gap-1 text-xs lg:text-sm"
              key={tech.id}
            >
              {tech.icon}
              {tech.name}
            </m.div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default ProjectOverview;
