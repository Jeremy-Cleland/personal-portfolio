import Image1 from "../assets/images/portfolio/project-1/1.jpg";
import Image2 from "../assets/images/portfolio/project-1/2.png";
import {
  SiJavascript,
  // SiMongodb,
  // SiExpress,
  // SiTailwindcss,
  // SiHtml5,
  SiReact,
  SiCss3,
  // SiNodedotjs,
  // SiOpenai,
  SiAxios,
  // SiSwift,
  // SiRedux,
  // SiSocketdotio,
  SiSass,
  // SiStyledcomponents,
  // SiMui,
  // SiChakraui,
  // SiPostgresql,
  // SiMysql,
  // SiAmazonaws,
  // SiFirebase,
  // SiGit,
  // SiGithub,
  // SiVisualstudiocode,
  // SiPostman,
  // SiInsomnia,
  // SiFigma,
  // SiHeroku,
  // SiNetlify,
  // SiRender,
  // SiApple,
  // SiLinux,
  // SiGooglechrome,
  // SiGoogleanalytics,
  // SiGoogletagmanager,
  // SiGooglesearchconsole,
  // SiGitkraken,
  // SiNextdotjs,
} from "react-icons/si";

const iconStyle = "text-4xl mx-auto inline-block";

export const projectData = {
  Info: {
    title: "RESTy API User Interface",
    date: "Jul 26, 2023",
    tags: "Web Development",
  },
  Images: [
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

  About: {
    Heading: "Overview",
    Overview:
      "Web application to fetch data from an API and display it in a user-friendly way by pretty printing the JSON. The application can perform GET, POST, PUT, and DELETE requests to the API. The application also has a history feature that allows the user to view the history of their requests.",
    Technologies: {
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
  URL: [
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

// SocialShareHeading: "Share",
// SocialSharing: [
//   {
//     id: 1,
//     name: "LinkedIn",
//     icon: <RiLinkedinBoxLine />,
//     url: "https://linkedin.com/jeremy-cleland",
//   },
//   {
//     id: 2,
//     name: "GitHub",
//     icon: <RiGithubLine />,
//     url: "https://github.com/jeremy-cleland",
//   },
// ]
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