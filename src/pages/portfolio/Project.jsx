import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ title, category, image }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="container mx-auto"
    >
      <div className="flex">
        <div className="group relative mx-auto mt-10 flex items-center justify-center">
          <div className="absolute -inset-0.5 animate-tilt rounded-xl bg-gradient-to-t from-neutral-200 to-neutral-500 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-10 dark:group-hover:opacity-20 "></div>
          <div className="relative flex rounded-xl bg-dark-100 pb-5 dark:bg-dark-600">
            <Link to="/portfolio/project" aria-label="Indvidual Project">
              <m.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl text-center dark:text-dark-100"
              >
                <div className="text-center">
                  <img
                    className=" group h-auto w-full rounded-t-xl border-b-2 font-SourceCodePro group-hover:border-b-violet-400/90"
                    src={image}
                    alt={title}
                  />
                  <h2 className="font-SourceCodePro font-bold leading-10 tracking-wide ">
                    {title}
                  </h2>
                  <span className="font-Fira text-sm leading-10 tracking-tight">
                    {category}
                  </span>
                </div>
              </m.div>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Project;
