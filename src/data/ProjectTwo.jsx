import image1 from "../assets/images/portfolio/project-1/1.jpg";
import image2 from "../assets/images/portfolio/project-1/2.png";

import { SiJavascript, SiReact, SiCss3, SiAxios, SiSass } from "react-icons/si";

const iconStyle = "text-4xl mx-auto inline-block";

export const ProjectTwo = {
  name: "ProjectTwo",
  id: 1,
  title: "Project2",
  category: "Web Application",
  img: image1,
  info: {
    title: "Project 2",
    date: "Jul 26, 2023",
    tags: "Web Development",
  },
  images: [
    {
      id: 1,
      title: "Project 2",
      img: image1,
    },
    {
      id: 2,
      title: "Project 2",
      img: image2,
    },
  ],
  about: {
    heading: "Overview",
    overview:
      "Web application to fetch data from an API and display it in a user-friendly way by pretty printing the JSON. The application can perform GET, POST, PUT, and DELETE requests to the API. The application also has a history feature that allows the user to view the history of their requests.",
    technologies: {
      title: "Technologies",
      techs: [
        {
          id: 1,
          name: "ReactJS",
          icon: <SiReact className={iconStyle} />,
        },
        {
          id: 2,
          name: "JavaScript",
          icon: <SiJavascript className={iconStyle} />,
        },
        {
          id: 3,
          name: "Sass",
          icon: <SiSass className={iconStyle} />,
        },
        {
          id: 4,
          name: "CSS",
          icon: <SiCss3 className={iconStyle} />,
        },
        {
          id: 5,
          name: "Axios",
          icon: <SiAxios className={iconStyle} />,
        },
      ],
    },
  },
  url: [
    {
      id: 1,
      title: "Demo",
      url: "https://cleland-resty.netlify.app/",
    },
    {
      id: 2,
      title: "Repository",
      details: "https://github.com/jeremy-cleland/resty",
    },
  ],
};
