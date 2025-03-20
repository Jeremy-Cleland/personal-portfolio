import { motion as m } from "framer-motion";
import { useContext } from "react";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: { 
    width: "100%",
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.7,
      delay: 0.5
    }
  }
};

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  
  return (
    <m.section
      initial="hidden"
      animate="visible"
      className="mb-10 text-center"
    >
      <div className="relative">
        <m.h1
          variants={headingVariants}
          className="mb-4 font-ChillaxBold text-3xl font-bold text-dark-900 dark:text-gray-200 md:text-4xl lg:text-5xl"
        >
          {singleProjectData.title}
        </m.h1>
        <m.div 
          variants={underlineVariants}
          className="mx-auto h-1 w-48 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 dark:from-orange-600 dark:via-orange-400 dark:to-orange-600"
        />
      </div>
      
      <m.div 
        variants={fadeInVariants}
        className="mx-auto mt-6 max-w-2xl font-Fira text-base text-dark-900 dark:text-gray-200 md:text-lg"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full bg-orange-50 px-4 py-2 font-Fira text-sm dark:bg-dark-700">
            <span className="text-orange-500">Tags:</span> 
            {singleProjectData.info.tags.join(", ")}
          </span>
          <span className="rounded-full bg-orange-50 px-4 py-2 font-Fira text-sm dark:bg-dark-700">
            <span className="text-orange-500">Date:</span>
            {singleProjectData.info.date}
          </span>
        </div>
      </m.div>
    </m.section>
  );
};

export default ProjectInfo;
