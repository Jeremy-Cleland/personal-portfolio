import data from "../../data/data.jsx";
import { motion as m } from "framer-motion";

import PortfolioSection from "./PortfolioSection.jsx";
import { PortfolioProvider } from "../../context/PortfolioContext.jsx";
import TypewriterText from "../../components/reusable/TypewriterText.jsx";

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
        <h1 className="text-center font-SourceCodePro text-4xl font-black tracking-wide md:text-right">
          <TypewriterText text="Jeremy Cleland" tag="h1" />
        </h1>
        <h2 className="text-center font-Fira text-2xl tracking-wide md:text-right">
          <TypewriterText text="Software Developer" tag="h2" delay={1000} />
        </h2>
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
