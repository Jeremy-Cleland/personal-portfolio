import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="align-center flex justify-center space-x-4 pt-4">
      <a
        href="https://wwww.github.com/jeremy-cleland"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex cursor-default rounded-lg p-2 font-bold tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-dark-100  hover:dark:bg-dark-800 hover:dark:text-violet-400"
      >
        <div className="flex items-center justify-center p-2">
          <RiGithubLine className="h-5 w-5" />
        </div>
      </a>
      <a
        href="https://wwww.linkedin.com/jeremy-cleland"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex cursor-default rounded-lg p-2 font-bold tracking-widest text-dark-900 transition-all duration-100 hover:bg-dark-50 hover:shadow-lg active:shadow-lg dark:text-dark-100  hover:dark:bg-dark-800 hover:dark:text-violet-400"
      >
        <div className="flex items-center justify-center p-2">
          <RiLinkedinBoxLine className="h-5 w-5" />
        </div>
      </a>
    </div>
  );
};
export default SocialMedia;
