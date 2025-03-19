import { useContext } from "react";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const ButtonGroup = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mx-auto my-10 space-x-10 text-center">
      {singleProjectData.details.links.map((link) => (
        <a key={link.id} href={link.url} className="inline-block">
          {link.title === "Repository" ? (
            <RiGithubLine className="mr-2 inline-block hover:text-orange-400" />
          ) : (
            <RiExternalLinkLine className="mr-2 inline-block hover:text-orange-400" />
          )}
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default ButtonGroup;
