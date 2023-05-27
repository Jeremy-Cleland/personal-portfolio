import data from "../data/data.jsx";
import { motion as m } from "framer-motion";

import PortfolioSection from "../components/projects/PortfolioSection.jsx";
import { PortfolioProvider } from "../context/PortfolioContext.jsx";

const Home = () => {
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
      <div className="mt-10 sm:mt-20 xl:mt-36 2xl:mt-48">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-SourceCodePro text-4xl font-black tracking-wide md:text-right"
        >
          Jeremy Cleland
        </m.h1>
        <m.h2
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center font-Fira text-2xl tracking-wide md:text-right"
        >
          Software Developer
        </m.h2>
      </div>
      <PortfolioProvider>
        <PortfolioSection />
      </PortfolioProvider>
      <div>
        <h2 className="text-md my-8 font-semibold dark:text-dark-50">
          Languages & Skills
        </h2>
        <div className="mx-auto flex flex-row ">
          {data.skillbadge.map((skills, index) => (
            <div
              key={index}
              className="mx-auto grid h-20 w-20 flex-col dark:text-gray-200"
            >
              {skills.icon}
              <p className="text-center text-xs text-indigo-400">
                {skills.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default Home;
