import { createContext, useEffect, useMemo, useState } from "react";
import { portfolioData } from "../data/portfolioData.jsx";

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
  console.log('PortfolioProvider - Initial portfolioData:', portfolioData);

  const [portfolioProject, setPortfolioProject] = useState(portfolioData);
  const [searchPortfolioProject, setSearchPortfolioProject] = useState("");
  const [selectFilterProject, setSelectFilterProject] = useState("");

  useEffect(() => {
    console.log('PortfolioProvider - portfolioProject state:', portfolioProject);
  }, [portfolioProject]);

  const searchPortfolioByTitle = useMemo(() => {
    return portfolioProject.filter((item) => {
      const result = item.title
        .toLowerCase()
        .includes(searchPortfolioProject.toLowerCase());
      return result || searchPortfolioProject === "";
    });
  }, [portfolioProject, searchPortfolioProject]);

  const selectProjectsByCategory = useMemo(() => {
    const category =
      selectFilterProject.charAt(0).toUpperCase() +
      selectFilterProject.slice(1);
    return portfolioProject.filter((item) => item.category.includes(category));
  }, [portfolioProject, selectFilterProject]);

  return (
    <PortfolioContext.Provider
      value={{
        portfolioProject,
        setPortfolioProject,
        searchPortfolioProject,
        setSearchPortfolioProject,
        searchPortfolioByTitle,
        selectFilterProject,
        setSelectFilterProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};
