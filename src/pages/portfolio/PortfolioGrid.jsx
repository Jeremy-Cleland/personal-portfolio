import { motion as m } from "framer-motion";
import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";

import Card from "../../components/reusable/Card.jsx";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import { fadeInVariant } from "../../utils/variants.js";
import PortfolioFilter from "./PortfolioFilter.jsx";
import Project from "./Project.jsx";

const PortfolioGrid = () => {
  const {
    portfolioProject,
    searchPortfolioProject,
    setSearchPortfolioProject,
    searchPortfolioByTitle,
    selectFilterProject,
    setSelectFilterProject,
    selectProjectsByCategory,
  } = useContext(PortfolioContext);

  const renderProjects = () => {
    if (selectFilterProject) {
      return selectProjectsByCategory.map((project) => (
        <Project
          title={project.title}
          category={project.category}
          image={project.img}
          key={project.id}
          id={project.id}
          name={project.name}
          info={project.info}
        />
      ));
    }
    if (searchPortfolioProject) {
      return searchPortfolioByTitle.map((project) => (
        <Project
          title={project.title}
          category={project.category}
          image={project.img}
          key={project.id}
          id={project.id}
          name={project.name}
          info={project.info}
        />
      ));
    }
    return portfolioProject.map((project) => (
      <Project
        title={project.title}
        category={project.category}
        image={project.img}
        key={project.id}
        id={project.id}
        name={project.name}
        info={project.info}
      />
    ));
  };

  return (
    <Card>
      <m.section
        variants={fadeInVariant("up", "tween", 0.6, 0.8)}
        initial="hidden"
        animate="show"
        className="my-10 max-w-7xl"
      >
        <div className="mx-auto my-2 max-w-7xl border-b-[1px] dark:border-orange-400/30 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10">
          <h4 className="text-left font-Fira text-sm tracking-tight md:text-lg ">
            <span className="text-base text-orange-400"> {">"} </span> Explore
            My Projects
          </h4>
        </div>

        <div className="my-2 grid grid-rows-2 justify-between gap-5 sm:my-2.5 md:flex ">
          <div className=" mx-5 flex w-72 rounded-lg border-[1px] border-orange-400/30 bg-dark-100 px-5 pl-2 dark:border-orange-400/30 dark:bg-dark-600">
            <RiSearch2Line className="my-auto mr-2 h-5 w-5" />
            <input
              onChange={(e) => {
                setSearchPortfolioProject(e.target.value);
              }}
              className="appearance-none rounded-lg bg-dark-100 py-2 font-SourceCodePro text-sm text-dark-900 placeholder:text-dark-900 focus:outline-none dark:bg-dark-600 dark:text-gray-100 dark:placeholder:text-dark-100 sm:text-sm "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
          <div>
            <PortfolioFilter setSelectFilterProject={setSelectFilterProject} />
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl auto-cols-max grid-cols-1 gap-10 xl:grid-cols-2">
          {renderProjects()}
        </div>
      </m.section>
    </Card>
  );
};

export default PortfolioGrid;
