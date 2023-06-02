import { motion as m } from "framer-motion";

import PortfolioSection from "./PortfolioSection.jsx";
import SkillSection from "../about/SkillSection.jsx";
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
        <div className="text-md text-left font-Fira tracking-tight md:text-lg">
          <TypewriterText text="Hi, I am" tag="p" delay={0} speed={60} />
        </div>
        <div className="py-3 text-left font-SourceCodePro text-4xl font-black tracking-wide md:text-5xl">
          <TypewriterText
            text="Jeremy Cleland"
            tag="h1"
            delay={500}
            speed={35}
          />
        </div>
        <div className="text-left font-Fira text-lg tracking-tight text-violet-400 md:text-xl">
          <TypewriterText text="> Software Developer" tag="h2" delay={1000} />
        </div>
      </div>

      <PortfolioProvider>
        <PortfolioSection />
      </PortfolioProvider>
      <SkillSection />
    </m.div>
  );
};

export default Home;
