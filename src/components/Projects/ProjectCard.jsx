import { RiExternalLinkLine } from "react-icons/ri";

const ProjectCard = ({
  project: { title, demo, repositoryDescription, repo, languages, image },
}) => {
  return (
    <div className="max-h-fit w-96">
      <div href={demo} className="group relative mt-12 flex flex-col">
        <img className="m-4 " alt={title} src={image} />
        <div className="relative p-4 sm:p-6 lg:p-8">
          <h1
            href={repo}
            className="text-white text-sm font-bold dark:text-ocean-300 sm:text-2xl"
          >
            {title}
            <RiExternalLinkLine className="inline align-baseline text-sm" />
          </h1>
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="mb-8 mt-4 flex flex-wrap items-center justify-center gap-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="rounded-full border-2 px-4 py-1 dark:text-ocean-300"
                >
                  {language}
                </div>
              ))}
            </div>
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white text-sm dark:text-ocean-300">
                {repositoryDescription} <a href={repo}>View on Github</a>
              </p>
              <a href={repo} className="text-white text-sm dark:text-ocean-300">
                {repo} {image}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
