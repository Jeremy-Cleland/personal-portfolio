import { motion as m } from "framer-motion";
import { useContext } from "react";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 0.3 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95 
  }
};

const ButtonGroup = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <m.div 
      initial="hidden"
      animate="visible"
      className="mb-8 flex flex-wrap items-center justify-center gap-6"
    >
      {singleProjectData.details.links.map((link, i) => (
        <m.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          custom={i}
          whileHover="hover"
          whileTap="tap"
          className="group relative inline-flex rounded-lg bg-orange-400 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600"
        >
          <span className="flex items-center">
            {link.title === "Repository" ? (
              <RiGithubLine className="mr-2 text-xl" />
            ) : (
              <RiExternalLinkLine className="mr-2 text-xl" />
            )}
            {link.title}
          </span>
        </m.a>
      ))}
    </m.div>
  );
};

export default ButtonGroup;
