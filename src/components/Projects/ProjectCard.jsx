import { RiExternalLinkLine } from "react-icons/ri";
import { ReactComponent as profileImage } from "../../assets/logos/profile.svg";

const ProjectCard = ({
  project: { title, demo, repositoryDescription, repo, languages, image },
}) => {
  return (
    <div className="w-full">
      <div href={demo} className="group relative mt-12 flex flex-col">
        <img
          alt={title}
          src={profileImage}
          className="absolute inset-0 mx-auto h-full w-full object-cover opacity-75 shadow-lg transition-opacity group-hover:opacity-30"
        />
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
              {languages.map((language) => (
                <div className="rounded-full border-2 px-4 py-1 dark:text-ocean-300">
                  {language}
                </div>
              ))}
            </div>
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white text-sm dark:text-ocean-300">
                {repositoryDescription} <a href={repo}>View on Github</a>
              </p>
              <a href={repo} className="text-white text-sm dark:text-ocean-300">
                {repo}
              </a>
            </div>
          </div>
        </div>
      </div>
      <article className="group">
        <img
          alt="Lava"
          src={image}
          className="dark:shadow-gray-700/25 h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-gray-900 text-lg font-medium dark:text-ocean-300">
              Finding the Journey to Mordor
            </h3>
          </a>

          <p className="text-gray-500 mt-2 line-clamp-3 text-sm/relaxed dark:text-ocean-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
