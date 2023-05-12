import { RiExternalLinkLine } from "react-icons/ri";
import data from "../../../data/data.jsx";
const Project = () => {
  return (
    <article className="grid-col-2 m-24 grid w-[300px] overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-[500px] lg:w-[600px]">
      {data.projects.map((project, index) => (
        <div className="">
          <img
            key={index}
            alt={project.title}
            src={project.image}
            className="object-cover "
          />
          <div className="p-4 bg-white dark:bg-swell-1300 sm:p-6">
            {project.topics.map((topic, index) => (
              <div key={index} className="px-4 py-1 border-2 rounded-full">
                {topic}
              </div>
            ))}
            <a href={project.repo}>
              <h3 className="mt-0.5 text-lg dark:text-gray-200">
                {project.title}
                <RiExternalLinkLine className="inline ml-2 text-sm align-baseline" />
              </h3>
            </a>
            <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
              {project.repositoryDescription}
            </p>
            <button>
              <a href={project.demo}>Demo</a>
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};
export default Project;
