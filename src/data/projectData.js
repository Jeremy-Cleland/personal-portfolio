// import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

import Image1 from "../assets/images/portfolio/project-1/1.jpg";
import Image2 from "../assets/images/portfolio/project-1/2.png";
import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
export const projectData = {
  ProjectHeader: {
    title: "Project Management UI",
    date: "Jul 26, 2023",
    tags: "Web Development",
  },
  ProjectImage: [
    {
      id: 1,
      title: "RESTy UI",
      img: Image1,
    },
    {
      id: 2,
      title: "RESTy UI",
      img: Image2,
    },
  ],

  ProjectOverview: {
    Heading: "Overview",
    Overview:
      "Web application to fetch data from an API and display it in a user-friendly way by pretty printing the JSON. The application can perform GET, POST, PUT, and DELETE requests to the API. The application also has a history feature that allows the user to view the history of their requests.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["ReactJS", "JavaScript", "Sass", "CSS", "Axios"],
      },
    ],
    Features: [
      {
        title: "Features",
        features: [
          "Fetch data from an API",
          "Pretty print JSON",
          "Perform GET, POST, PUT, and DELETE requests",
          "View history of requests",
        ],
      },
    ],
    urls: [
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
  },

  SocialShareHeading: "Share",
  SocialSharing: [
    {
      id: 1,
      name: "Twitter",
      icon: <RiTwitterLine />,
      url: "https://twitter.com/JermCleland",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <RiLinkedinBoxLine />,
      url: "https://linkedin.com/jeremy-cleland",
    },
    {
      id: 3,
      name: "GitHub",
      icon: <RiGithubLine />,
      url: "https://github.com/jeremy-cleland",
    },
  ],
};
// RelatedProject: {
//   title: "Related Projects",
//   Projects: [
//     {
//       id: 1,
//       title: "Mobile UI",
//       img: Image4,
//     },
//     {
//       id: 2,
//       title: "Web Application",
//       // img: Image5,
//     },
//     {
//       id: 3,
//       title: "UI Design",
//       // img: Image6,
//     },
//     {
//       id: 4,
//       title: "Kabul Mobile App UI",
//       // img: Image3,
//     },
//   ],
// },
