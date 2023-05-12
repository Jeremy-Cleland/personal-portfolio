import { RiExternalLinkLine } from "react-icons/ri";
import data from "../../../data/data.jsx";

const ProjectCard = () => {
      <article className="m-24 w-[300px] overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-[500px] lg:w-[600px]">
      <img
        alt={data.projects[0].title}
        src={data.projects[0].image}
        className="object-cover "
      />

      <div className="p-4 bg-white dark:bg-swell-1300 sm:p-6">
        <time datetime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>
        <a href={data.projects[0].repo}>
          <h3 className="mt-0.5 text-lg dark:text-gray-200">
            {data.projects[0].title}
            <RiExternalLinkLine className="inline ml-2 text-sm align-baseline" />
          </h3>
        </a>
        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
          {data.projects[0].repositoryDescription}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
