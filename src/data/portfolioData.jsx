import rfPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/Final_random_forest_(tuned)_precision_recall_curve.png";
import rfROC from "../assets/images/portfolio/SepsisPredictionPipeline/Final_random_forest_(tuned)_roc_curve.png";
import lrPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/Logistic_Regression_(Tuned)_precision_recall_curve.png";
import lrROC from "../assets/images/portfolio/SepsisPredictionPipeline/Logistic_Regression_(Tuned)_roc_curve.png";
import sepsisImage1 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.png";
import sepsisImage2 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsisImage2.png";
import xgboostPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/XGBoost_(Tuned)_precision_recall_curve.png";
import xgboostROC from "../assets/images/portfolio/SepsisPredictionPipeline/XGBoost_(Tuned)_roc_curve.png";

import {
  SiNumpy,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
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
      overview: `The pipeline involves a meticulous process for detecting sepsis using patient-level data:
      - **Data Handling:** Missing values handled via the MICE algorithm, with categorical encoding and robust scaling applied.
      - **Feature Engineering:** Automated column dropping, log transformation, and feature interaction analysis.
      - **Model Training:** Models include Random Forest, XGBoost, and Logistic Regression, optimized using Optuna.
      - **Evaluation:** Metrics such as AUROC, Precision, Recall, and F1 Score logged with custom visualization reports.
      - **Deployment:** Model registry supports versioning and metadata storage, enabling reproducibility.`,
      learnings: [
        "Handling class imbalance with advanced techniques like SMOTEENN.",
        "Optimizing hyperparameters effectively using Optuna.",
        "Understanding the trade-offs between interpretability and performance in models."
      ],
      technologies: [
        { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
        { id: 2, name: "Scikit-learn", icon: <SiScikitlearn className={iconStyle} /> },
        { id: 3, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
        { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
        { id: 5, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
        { id: 6, name: "Database Management", icon: <TbDatabase className={iconStyle} /> }
      ],
      features: [
        "Patient-level data splitting to ensure no data leakage.",
        "Comprehensive data preprocessing pipeline with iterative imputation (MICE), log transformation, and robust scaling.",
        "Automated feature engineering with redundant column removal, categorical encoding, and scaling.",
        "Advanced model evaluation with metrics logging, calibration plots, and feature importance analysis.",
        "Automated model registry with versioning, hyperparameter tracking, and artifact storage.",
        "Dynamic report generation with comprehensive visualizations (e.g., ROC, PR curves)."
      ],
      visualizations: [
        {
          id: 1,
          title: "ROC Curve - XGBoost",
          img: xgboostROC,
          description: "Receiver Operating Characteristic (ROC) curve showing near-perfect separation."
        },
        {
          id: 2,
          title: "Precision-Recall Curve - XGBoost",
          img: xgboostPrecisionRecall,
          description: "Precision-Recall curve for tuned XGBoost model."
        },
        {
          id: 3,
          title: "ROC Curve - Random Forest",
          img: rfROC,
          description: "Receiver Operating Characteristic (ROC) curve for tuned Random Forest model."
        },
        {
          id: 4,
          title: "Precision-Recall Curve - Random Forest",
          img: rfPrecisionRecall,
          description: "Precision-Recall curve for tuned Random Forest model."
        },
        {
          id: 5,
          title: "ROC Curve - Logistic Regression",
          img: lrROC,
          description: "Receiver Operating Characteristic (ROC) curve for tuned Logistic Regression model."
        },
        {
          id: 6,
          title: "Precision-Recall Curve - Logistic Regression",
          img: lrPrecisionRecall,
          description: "Precision-Recall curve for tuned Logistic Regression model."
        }
      ],
      performance: {
        randomForest: { auroc: 0.9760, f1: 0.5594, precision: 0.5280, recall: 0.5948 },
        xgboost: { auroc: 0.9998, f1: 0.2591, precision: 0.2399, recall: 0.8721 },
        logisticRegression: { auroc: 0.8955, f1: 0.7830, precision: 0.7164, recall: 0.8858 }
      },
      links: [
        { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" },
        { id: 2, title: "Documentation", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" }
      ],
      team: [
        { name: "Jeremy Cleland", role: "Graudate Student" },

      ]
    }
  }
];

// Template for adding new AI/ML projects:
// 1. Add project images to /src/assets/images/portfolio/your-project-name/
// 2. Import images at the top of this file
// 3. Use the createProject helper or follow this structure:
//
// OPTION 1: Using the project template helper (recommended)
//
// import { createProject } from "./projectTemplate.js";
// import mainImage from "../assets/images/portfolio/project-name/main.png";
// import { SiPython, SiReact } from "react-icons/si";
//
// const iconStyle = "text-4xl mx-auto inline-block";
//
// const newProject = createProject({
//   title: "My Amazing Project",
//   category: "AI/ML Project",
//   description: "Short description for card view",
//   mainImage: mainImage,
//   date: "Oct 15, 2024",
//   tags: ["Tag1", "Tag2", "Tag3"],
//   overview: `
// # Project Overview
//
// This project uses **markdown** for rich text formatting.
//
// ## Key Points
//
// - You can use **bold** and *italic* text
// - You can create [links](https://example.com)
// - You can add \`inline code\`
//
// ### Implementation Details
//
// \`\`\`python
// def example_function():
//     return "This is a code block"
// \`\`\`
// `,
//   technologies: [
//     { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
//     { id: 2, name: "React", icon: <SiReact className={iconStyle} /> }
//   ],
//   links: [
//     { id: 1, title: "Repository", url: "https://github.com/..." }
//   ]
// });
//
// Then add this to the portfolioData array below.
//
// OPTION 2: Manual creation following template structure


