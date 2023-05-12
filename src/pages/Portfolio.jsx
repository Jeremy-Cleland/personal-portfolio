import PortfolioGrid from "../components/projects/PortfolioGrid.jsx";
import { PortfolioProvider } from "../context/PortfolioContext.jsx";

const Portfolio = () => {
  return (
    <PortfolioProvider>
      <div className="container mx-auto">
        <PortfolioGrid />
      </div>
    </PortfolioProvider>
  );
};

export default Portfolio;
