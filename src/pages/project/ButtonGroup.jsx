import { useContext } from "react";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const ButtonGroup = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mx-auto my-10 space-x-10 text-center ">
      <a href={singleProjectData.url[0].url}>
        <RiExternalLinkLine className="mr-2 inline-block hover:text-violet-400" />
        Demo
      </a>
      <a href={singleProjectData.url[1].details}>
        <RiGithubLine className="mr-2 inline-block hover:text-violet-400" />
        Repository
      </a>
    </div>
  );
};

export default ButtonGroup;
