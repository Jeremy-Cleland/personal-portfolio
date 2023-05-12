import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";

const PortfolioGallery = () => {
  const { projectData } = useContext(ProjectContext);
  return (
    <div className="grid grid-cols-1 mt-12 sm:grid-cols-3 sm:gap-10">
      {projectData.ProjectImages.map((project) => (
        <div key={project.id}>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
