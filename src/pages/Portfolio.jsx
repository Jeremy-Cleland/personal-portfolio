import { motion as m } from "framer-motion";

import PortfolioGrid from "../components/projects/PortfolioGrid.jsx";
import { PortfolioProvider } from "../context/PortfolioContext.jsx";

const Portfolio = () => {
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
      <PortfolioProvider>
        <PortfolioGrid />
      </PortfolioProvider>
    </m.div>
  );
};

export default Portfolio;
