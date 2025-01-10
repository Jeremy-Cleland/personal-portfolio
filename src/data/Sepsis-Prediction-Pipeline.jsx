import sepsisImage1 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.png";
import sepsisImage2 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsisImage2.png";

import {
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const iconStyle = "text-4xl mx-auto inline-block";

export const SepsisPredictionPipeline = {
  name: "Sepsis-Prediction-Pipeline",
  id: 1,
  title: "Sepsis Prediction Pipeline",
  category: "AI/ML Project",
  img: sepsisImage1,
  info: {
    title: "Sepsis Prediction Pipeline",
    date: "Oct 15, 2024",
    tags: "Machine Learning, Data Science, AI",
  },
  images: [
    {
      id: 1,
      title: "Sepsis Prediction Pipeline",
      img: sepsisImage1,
    },
    {
      id: 2,
      title: "Sepsis Prediction Pipeline",
      img: sepsisImage2,
    },
  ],
  about: {
    heading: "Overview",
    overview:
      "The Sepsis Prediction Pipeline is a comprehensive AI-driven solution designed to predict the onset of sepsis in patients. This pipeline incorporates data preprocessing, feature engineering, class imbalance handling, and advanced machine learning models like Random Forest, XGBoost, and Logistic Regression. The project emphasizes reproducibility with a model registry, hyperparameter optimization using Optuna, and detailed evaluation metrics to ensure high performance and reliability.",
    technologies: {
      title: "Technologies",
      techs: [
        {
          id: 1,
          name: "Python",
          icon: <SiPython className={iconStyle} />,
        },
        {
          id: 2,
          name: "Scikit-learn",
          icon: <SiScikitlearn className={iconStyle} />,
        },
        {
          id: 3,
          name: "TensorFlow",
          icon: <SiTensorflow className={iconStyle} />,
        },
        {
          id: 4,
          name: "Pandas",
          icon: <SiPandas className={iconStyle} />,
        },
        {
          id: 5,
          name: "NumPy",
          icon: <SiNumpy className={iconStyle} />,
        },
        {
          id: 6,
          name: "Database Management",
          icon: <TbDatabase className={iconStyle} />,
        },
      ],
    },
  },
  url: [
    {
      id: 1,
      title: "Repository",
      url: "https://github.com/Jeremy-Cleland/sepsis-prediction",
    },
    {
      id: 2,
      title: "Documentation",
      details: "https://github.com/Jeremy-Cleland/sepsis-prediction#readme",
    },
  ],
};
