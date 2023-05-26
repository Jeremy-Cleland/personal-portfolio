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
    >
      {/* <Link to="/portfolio/project" aria-label="Indvidual Project">
        <m.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl text-center shadow-lg hover:shadow-xl dark:bg-neutral-800 dark:text-dark-100"
        >
          <div className="text-center ">
            <img
              className="h-auto w-full rounded-t-lg border-b-2 border-b-violet-400/30"
              src={image}
              alt={title}
            />
            <h2 className="font-bold leading-10 tracking-wide">{title}</h2>
            <span className="text-sm leading-10">{category}</span>
          </div>
        </m.div>
      </Link> */}
      <div className="flex">
        <div className="group relative mx-auto mt-10 flex items-center justify-center">
          <div className="absolute -inset-[.05px] animate-tilt rounded-2xl bg-gradient-to-r from-violet-300 to-violet-900 opacity-40 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200 dark:opacity-20 "></div>
          <div className="relative flex rounded-2xl bg-dark-100 pb-5 dark:bg-dark-900">
            <Link to="/portfolio/project" aria-label="Indvidual Project">
              <m.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl text-center dark:text-dark-100"
              >
                <div className="text-center ">
                  <img
                    className="border- group h-auto w-full rounded-t-2xl border-b-2 group-hover:border-b-violet-400/90"
                    src={image}
                    alt={title}
                  />
                  <h2 className="font-bold leading-10 tracking-wide">
                    {title}
                  </h2>
                  <span className="text-sm leading-10">{category}</span>
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
