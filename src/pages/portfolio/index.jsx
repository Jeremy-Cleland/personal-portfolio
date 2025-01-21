import { motion as m } from "framer-motion";
import ScrollProgress from "../../components/reusable/ScrollProgress.jsx";
import PortfolioGrid from "./PortfolioGrid.jsx";
import Header from "../../components/reusable/Header.jsx";

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
      <ScrollProgress position="top-0 sticky" />
      <Header
        title="Portfolio"
        subtitle=" Showcasing my growth as a AI Specalist and the Impact of Military
          Precision in the Tech Industry"
      />
      <PortfolioGrid />
    </m.div>
  );
};

export default Portfolio;
