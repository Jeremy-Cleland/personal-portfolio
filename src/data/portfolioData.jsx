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

export const portfolioData = [
  {
    id: 1,
    name: "Sepsis-Prediction-Pipeline",
    title: "Sepsis Prediction Pipeline",
    category: "AI/ML Project",
    description: "An advanced machine learning pipeline designed to predict sepsis onset using patient data.",
    img: sepsisImage1,
    info: {
      date: "Oct 15, 2024",
      tags: ["Machine Learning", "Data Science", "AI"],
    },
    images: [
      { id: 1, title: "Pipeline Overview", img: sepsisImage1 },
      { id: 2, title: "Results Dashboard", img: sepsisImage2 }
    ],
    details: {
      overview: "The Sepsis Prediction Pipeline is a comprehensive AI-driven solution designed to predict the onset of sepsis in patients. This pipeline incorporates data preprocessing, feature engineering, class imbalance handling, and advanced machine learning models like Random Forest, XGBoost, and Logistic Regression.",
      technologies: [
        { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
        { id: 2, name: "Scikit-learn", icon: <SiScikitlearn className={iconStyle} /> },
        { id: 3, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
        { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
        { id: 5, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
        { id: 6, name: "Database Management", icon: <TbDatabase className={iconStyle} /> }
      ],
      links: [
        { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" },
        { id: 2, title: "Documentation", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" }
      ]
    }
  }
  // Future AI/ML projects can be added here following the same structure
];
