// Import images
import image1 from "../assets/images/portfolio/Resty/1.jpg";
import image2 from "../assets/images/portfolio/ReactNativeTaskManager/react-native-todo.png";
import image3 from "../assets/images/portfolio/ExpenseTrackingApp/expense-tracker1.png";
import sepsisImage from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.png"; // Placeholder or project-related image

export const portfolioData = [
  {
    id: 1,
    name: "Sepsis-Prediction-Pipeline",
    title: "Sepsis Prediction Pipeline",
    category: "AI/ML Project",
    description:
      "An advanced machine learning pipeline designed to predict sepsis onset using patient data. The pipeline includes data preprocessing, feature engineering, model training with hyperparameter optimization using Optuna, and a comprehensive evaluation framework. Integrated with a model registry for versioning and reproducibility.",
    img: sepsisImage,
  },
  {
    id: 2,
    name: "Resty",
    title: "RESTy",
    category: "Web Application",
    description:
      "Web application to fetch data from an API and display it in a user-friendly way by pretty printing the JSON. The application can perform GET, POST, PUT, and DELETE requests to the API. The application also has a history feature that allows the user to view the history of their requests.",
    img: image1,
  },
  {
    id: 3,
    name: "React Native Task Manager",
    title: "React Native Task Manager",
    category: "Mobile Application",
    description:
      "A mobile application for task management, built using React Native, Expo, and React Navigation. Implements local storage using AsyncStorage, with Formik and Yup for form validation. Features include task creation, editing, and deletion, with navigation and history management.",
    img: image2,
  },
  {
    id: 4,
    name: "Expense Tracking App",
    title: "Expense Tracking App",
    category: "Web Application",
    description:
      "A web application enabling users to track expenses, visualize spending patterns via charts, and manage categories efficiently. Users can add, edit, and delete expense records.",
    img: image3,
  },
];
