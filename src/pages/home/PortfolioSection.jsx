import { motion as m } from "framer-motion";
import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Card from "../../components/reusable/Card.jsx";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import { fadeInVariant } from "../../utils/variants.js";
import PortfolioFilter from "../portfolio/PortfolioFilter.jsx";
import ProjectCard from "./ProjectCard.jsx";

const PortfolioSection = () => {
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
      return selectProjectsByCategory
        .slice(0, 4)
        .map((project) => (
          <ProjectCard
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.img}
            name={project.name}
            key={project.id}
            info={project.info}
          />
        ));
    }
    if (searchPortfolioProject) {
      return searchPortfolioByTitle
        .slice(0, 4)
        .map((project) => (
          <ProjectCard
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.img}
            name={project.name}
            key={project.id}
            info={project.info}
          />
        ));
    }
    return portfolioProject
      .slice(0, 4)
      .map((project) => (
        <ProjectCard
          title={project.title}
          category={project.category}
          description={project.description}
          image={project.img}
          name={project.name}
          key={project.id}
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
        className="my-10"
      >
        <div className="mx-auto my-2 max-w-7xl border-b-[1px] border-orange-200 dark:border-orange-400/30 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200 sm:mt-20 md:my-10">
          <h4 className="text-left font-Fira text-sm tracking-tight md:text-lg ">
            <span className="text-base text-orange-200"> {">"} </span> Explore
            My Projects
          </h4>
        </div>

        <div className="mx-auto my-5 grid max-w-7xl grid-rows-2 justify-between gap-5 sm:my-2.5 md:flex ">
          <div className="group mx-5 flex w-72 rounded-lg border-[1px] bg-dark-100 pl-2  border-orange-200 dark:border-orange-400/30 dark:bg-dark-600">
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

export default PortfolioSection;
