import { useContext } from "react";
import { motion as m } from "framer-motion";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="my-2.5"
    >
      <div>
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            delay: 0.2,
            duration: 1,
          }}
          className="my-5 border-b-4 border-violet-400 py-5 text-center font-ChillaxBold text-xl font-bold leading-4 tracking-wide text-dark-900 dark:text-dark-100 md:my-10 md:text-2xl"
        >
          {singleProjectData.title}
        </m.h1>
      </div>
      <div className="flex w-full flex-row text-dark-900 dark:text-dark-100">
        <div className="flex basis-1/2 text-left">
          <span className="font-Fira text-sm tracking-tight lg:text-base">
            {singleProjectData.info.tags.join(", ")}
          </span>
        </div>
        <div className="basis-1/2 text-right">
          <span className="font-Fira text-sm tracking-tight lg:text-base">
            {singleProjectData.info.date}
          </span>
        </div>
      </div>
    </m.section>
  );
};

export default ProjectInfo;
