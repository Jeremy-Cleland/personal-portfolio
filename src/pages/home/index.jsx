import { motion as m } from "framer-motion";

import PortfolioSection from "./PortfolioSection.jsx";
import SkillSection from "../../components/reusable/SkillSection.jsx";
import { PortfolioProvider } from "../../context/PortfolioContext.jsx";
import TypewriterText from "../../components/reusable/TypewriterText.jsx";
import AboutMe from "./AboutMe.jsx";
import { AboutMeProvider } from "../../context/AboutMeContext.jsx";
import ScrollProgress from "../../components/reusable/ScrollProgress.jsx";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 0.5 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0,
      }}
      className="container mx-auto"
    >
      <ScrollProgress position="top-0 sticky" />
      <div className="my-10 sm:my-20 xl:my-36 2xl:my-48">
        <div className="text-md text-left font-ChillaxLight tracking-tight md:text-lg">
          <TypewriterText text="Hi, I am" tag="p" delay={0} speed={60} />
        </div>
        <div className="py-3 text-left font-ChillaxBold text-4xl md:text-5xl">
          <TypewriterText
            text="Jeremy Cleland"
            tag="h1"
            delay={500}
            speed={35}
          />
        </div>
        <div className="text-left font-ChillaxRegular text-lg tracking-tight text-violet-400 md:text-xl">
          <TypewriterText text="> Software Developer" tag="h2" delay={1000} />
        </div>
      </div>
      <AboutMeProvider>
        <AboutMe />
      </AboutMeProvider>

      <PortfolioProvider>
        <PortfolioSection />
      </PortfolioProvider>
      <SkillSection />
    </m.div>
  );
};

export default Home;
