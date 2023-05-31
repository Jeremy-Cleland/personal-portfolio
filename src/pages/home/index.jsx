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
      <div className="my-10 sm:my-20 xl:my-36 2xl:my-48">
        <h2 className="text-md text-left font-Fira tracking-tight md:text-lg">
          <TypewriterText text="Hi, I am" tag="p" delay={0} speed={60} />
        </h2>
        <h1 className="py-3 text-left font-SourceCodePro text-4xl font-black tracking-wide md:text-5xl">
          <TypewriterText
            text="Jeremy Cleland"
            tag="h1"
            delay={500}
            speed={35}
          />
        </h1>
        <h2 className="text-left font-Fira text-lg tracking-tight text-violet-400 md:text-xl">
          <TypewriterText text="> Software Developer" tag="h2" delay={1000} />
        </h2>
      </div>

      <PortfolioProvider>
        <PortfolioSection />
      </PortfolioProvider>

      <div>
        <div className="my-5 mt-10 max-w-7xl border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10 xl:mt-36 2xl:mt-48">
          <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
            <span className="text-base text-violet-400"> {">"} </span> Languages
            & Tools
          </h4>
        </div>

        <div className="mx-auto flex max-w-5xl flex-row ">
          {data.skillbadge.map((skills, index) => (
            <div
              key={index}
              className="mx-auto grid h-20 w-20 flex-col dark:text-dark-100"
            >
              {skills.icon}
              <p className="text-x text-center">{skills.name}</p>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default Home;
