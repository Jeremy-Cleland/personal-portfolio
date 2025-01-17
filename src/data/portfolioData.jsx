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
    name: "sepsis-prediction-pipeline",
    title: "Sepsis Prediction Pipeline",
    category: "AI/ML Project",
    description: "Advanced machine learning pipeline for early sepsis detection using Random Forest, XGBoost, and Logistic Regression models.",
    img: sepsisImage1,
    info: {
      date: "Oct 15, 2024",
      tags: ["Machine Learning", "Healthcare AI", "Data Science", "Python"],
    },
    images: [
      { id: 1, title: "Pipeline Overview", img: sepsisImage1 },
      { id: 2, title: "Results Dashboard", img: sepsisImage2 }
    ],
    details: {
      overview: `A comprehensive machine learning pipeline designed to predict sepsis onset in patients using advanced ML models. Key features include:
      • Robust data preprocessing with MICE algorithm for missing values
      • Feature engineering and selection techniques
      • Class imbalance handling using SMOTEENN
      • Model ensemble with Random Forest (AUROC: 0.9760), XGBoost (AUROC: 0.9998), and Logistic Regression
      • Automated model card generation and registry management
      • Extensive evaluation metrics and visualization suite`,
      technologies: [
        { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
        { id: 2, name: "Scikit-learn", icon: <SiScikitlearn className={iconStyle} /> },
        { id: 3, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
        { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
        { id: 5, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
        { id: 6, name: "Database Management", icon: <TbDatabase className={iconStyle} /> }
      ],
      features: [
        "Patient-level data splitting to prevent leakage",
        "Hyperparameter optimization with Optuna",
        "Comprehensive evaluation metrics (AUROC, F1, Precision, Recall)",
        "Automated model card generation",
        "Model registry for versioning and deployment",
        "Extensive visualization suite for model interpretation"
      ],
      performance: {
        randomForest: { auroc: 0.9760, f1: 0.5594, precision: 0.5280, recall: 0.5948 },
        xgboost: { auroc: 0.9998, f1: 0.9962, precision: 0.9830, recall: 0.9962 },
        logisticRegression: { auroc: 0.8955, f1: 0.7830, precision: 0.7164, recall: 0.8858 }
      },
      links: [
        { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" },
        { id: 2, title: "Documentation", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" }
      ],
      team: [
        { name: "Jeremy Cleland", role: "Graudate Student" },
        { name: "Anthony Lewis", role: "Graudate Student" },
        { name: "Salif Khan", role: "Graudate Student" }
      ]
    }
  }
  ];

  // Template for adding new AI/ML projects:
  // 1. Add project images to /src/assets/images/portfolio/your-project-name/
  // 2. Import images at the top of this file
  // 3. Add new project object following this structure:
  // {
  //   id: portfolioData.length + 1,
  //   name: "project-name-in-kebab-case", // lowercase with dashes for URLs
  //   title: "Human Readable Project Title",
  //   category: "AI/ML Project", // or "Data Science", "Computer Vision", "Natural Language Processing"
  //   description: "Brief project description for cards",
  //   img: mainImage,
  //   info: {
  //     date: "MMM DD, YYYY",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //   },
  //   images: [
  //     { id: 1, title: "Image Title", img: image1 },
  //     { id: 2, title: "Image Title", img: image2 }
  //   ],
  //   details: {
  //     overview: "Detailed project description",
  //     technologies: [
  //       { id: 1, name: "Tech1", icon: <Icon className={iconStyle} /> }
  //     ],
  //     links: [
  //       { id: 1, title: "Repository", url: "https://github.com/..." },
  //       { id: 2, title: "Documentation", url: "https://..." }
  //     ]
  //   }
  // }


