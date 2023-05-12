import { useContext } from "react";
import ProjectContext from "../../context/ProjectContext.jsx";
import { RiPriceTag3Line, RiCalendar2Line } from "react-icons/ri";

const ProjectHeader = () => {
  const { projectData } = useContext(ProjectContext);

  // const { title, description, topics, repo, demo } = projectData.ProjectHeader;

  return (
    <div>
      <p className="">{projectData.ProjectHeader.title}</p>
      <div className="flex">
        <div className="flex items-center">
          <RiPriceTag3Line className="w-6 h-6" />
          <span>{projectData.ProjectHeader.tags}</span>
        </div>
        <div className="flex items-center">
          <RiCalendar2Line className="w-6 h-6" />
          <span>{projectData.ProjectHeader.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
