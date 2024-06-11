import image1 from "../assets/images/portfolio/project-3/expense-tracker1.png";
import image2 from "../assets/images/portfolio/project-3/expense-tracker2.png";
import image3 from "../assets/images/portfolio/project-3/expense-tracker3.png";
import { SiJavascript, SiReact, SiCss3 } from "react-icons/si";

const iconStyle = "text-4xl mx-auto inline-block";

export const ExpenseTrackingApp = {
  name: "ProjectThree",
  id: 1,
  title: "Expense Tracking App",
  category: "Web Application",
  img: image1,
  info: {
    title: "Expense Tracking App",
    date: "Jan 3, 2023",
    tags: "Web Development",
  },
  images: [
    {
      id: 1,
      title: "Expense Tracker App",
      img: image1,
    },
    {
      id: 2,
      title: "Expense Tracker App",
      img: image2,
    },
    {
      id: 3,
      title: "Expense Tracker App",
      img: image3,
    },
  ],
  about: {
    heading: "Overview",
    overview:
      "Web Application that allows users to track their expenses. Users can add, edit, and delete expenses. The app also displays a chart that shows the percentage of expenses for each category.",
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
          id: 4,
          name: "CSS",
          icon: <SiCss3 className={iconStyle} />,
        },
      ],
    },
  },
  url: [
    {
      id: 1,
      title: "Demo",
      url: "https://sparkling-raindrop-860321.netlify.app/",
    },
    {
      id: 2,
      title: "Repository",
      details: "https://github.com/Jeremy-Cleland/expense-tracker",
    },
  ],
};
