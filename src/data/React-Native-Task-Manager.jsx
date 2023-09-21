import image1 from "../assets/images/portfolio/project-2/react-native-todo.png";
import image2 from "../assets/images/portfolio/project-2/react-native-todo-2.png";

import { SiJavascript, SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const iconStyle = "text-4xl mx-auto inline-block";

export const ReactNativeTaskManager = {
  name: "React-Native-Task-Manager ",
  id: 1,
  title: "React Native Task Manager",
  category: "Mobile Application",
  img: image1,
  info: {
    title: "React Native Task Manager",
    date: "Jul 26, 2023",
    tags: "Web Development",
  },
  images: [
    {
      id: 1,
      title: "React Native Task Manager",
      img: image1,
    },
    {
      id: 2,
      title: "React Native Task Manager",
      img: image2,
    },
  ],
  about: {
    heading: "Overview",
    overview:
      "React Native Task Manager is a mobile application that allows users to create, edit, and delete tasks. The application uses React Native, Expo, and React Navigation. The application also uses AsyncStorage to store the tasks locally on the user's device. React Navigation manages screens, navigation between them, and history as a Stack. The application also used Formik and Yup for form validation. ",
    technologies: {
      title: "Technologies",
      techs: [
        {
          id: 1,
          name: "React Native",
          icon: <TbBrandReactNative className={iconStyle} />,
        },
        {
          id: 2,
          name: "JavaScript",
          icon: <SiJavascript className={iconStyle} />,
        },
        {
          id: 3,
          name: "Expo",
          icon: <SiExpo className={iconStyle} />,
        },
      ],
    },
  },
  url: [
    {
      id: 1,
      title: "Demo",
      url: "https://github.com/Jeremy-Cleland/React-Native-Todo-App",
    },
    {
      id: 2,
      title: "Repository",
      details: "https://github.com/Jeremy-Cleland/React-Native-Todo-App",
    },
  ],
};
