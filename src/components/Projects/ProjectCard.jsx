import { RiExternalLinkLine } from "react-icons/ri";

const ProjectCard = ({ project: { title, description, tags, link } }) => {
  return (
    <div className="w-full">
      <a href={link} className="group relative mt-12 flex flex-col">
        <img
          alt="Developer"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          className="absolute inset-0 mx-auto h-full w-full object-cover opacity-75 shadow-lg transition-opacity group-hover:opacity-30"
        />
        <div className="relative p-4 sm:p-6 lg:p-8">
          <a href={link}>
            <h1 className="text-white text-xl font-bold dark:text-darkTextPrimary sm:text-2xl">
              {title} <RiExternalLinkLine className="inline align-baseline" />
            </h1>
          </a>
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="mb-8 mt-4 flex flex-wrap items-center justify-center gap-2">
              {tags.map((tag) => (
                <div className="rounded-full border-2 px-4 py-1 dark:text-darkTextPrimary">
                  {tag}
                </div>
              ))}
            </div>
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white text-sm dark:text-darkTextPrimary">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
