import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { PortfolioContext } from "../../context/PortfolioContext.jsx";
import PortfolioFilter from "./PortfolioFilter.jsx";
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
            image={project.cardimg}
            key={project.id}
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
            image={project.cardimg}
            key={project.id}
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
          image={project.cardimg}
          key={project.id}
        />
      ));
  };

  return (
    <section className="mb-24 mt-10">
      <div className="mb-24 mt-10">
        <div className="my-5 border-b-4 border-violet-400 py-5 text-center text-dark-900 dark:text-gray-200 md:my-10 ">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            Building the Future, One Line of Code at a Time
          </h2>
          <p className="pt-3 font-SourceCodePro tracking-tight">
            Showcasing my growth as a developer and the versatility of my
            problem-solving skills
          </p>
        </div>
      </div>

      <div className="my-2 flex flex-wrap justify-between gap-5 sm:my-2.5 md:my-10 md:gap-20 ">
        <div className="group flex grow rounded-2xl border-2 border-gray-200 bg-dark-100 pl-2 dark:border-violet-400 dark:bg-dark-600">
          <RiSearch2Line className="my-auto mr-2 h-5 w-5" />
          <input
            onChange={(e) => {
              setSearchPortfolioProject(e.target.value);
            }}
            className="sm:text-md grow appearance-none rounded-2xl bg-dark-100 py-2 font-SourceCodePro text-sm font-bold  text-dark-900 placeholder:text-dark-900 focus:outline-none dark:bg-dark-600 dark:text-gray-100 dark:placeholder:text-dark-100 "
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <PortfolioFilter setSelectFilterProject={setSelectFilterProject} />
      </div>
      <div className="grid auto-cols-max grid-cols-1 gap-10 xl:grid-cols-2">
        {renderProjects()}
      </div>
    </section>
  );
};

export default PortfolioSection;
